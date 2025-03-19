import Head from "next/head";
import "../../pages/library/library.css"; // ✅ Import the new CSS file

const API_BASE_URL = process.env.NEXT_PUBLIC_STRAPI_URL || "http://localhost:1337";

// 🔹 Get all book slugs at build time
export async function getStaticPaths() {
  const res = await fetch(`${API_BASE_URL}/api/library-items?fields=slug`);
  const data = await res.json();

  if (!data.data || !Array.isArray(data.data)) {
    console.error("❌ API response is invalid");
    return { paths: [], fallback: false };
  }

  const paths = data.data
    .filter((book) => book.attributes && book.attributes.slug)
    .map((book) => ({
      params: { slug: book.attributes.slug },
    }));

  console.log("✅ Extracted Paths:", paths);

  return { paths, fallback: false };
}

// 🔹 Fetch book details & related books at build time
export async function getStaticProps({ params }) {
  console.log("🔎 Fetching from API:", `${API_BASE_URL}/api/library-items?filters[slug]=${params.slug}&populate=*`);

  const res = await fetch(`${API_BASE_URL}/api/library-items?filters[slug]=${params.slug}&populate=*`);
  const data = await res.json();

  if (!data.data || data.data.length === 0) {
    console.error("❌ Book not found for slug:", params.slug);
    return { notFound: true };
  }

  // ✅ Extract the current book
  const book = data.data[0];

  // 🔹 Fetch related books from the same episode (order number)
  const relatedRes = await fetch(`${API_BASE_URL}/api/library-items?filters[order]=${book.order}&populate=*`);
  const relatedData = await relatedRes.json();

  // ✅ Exclude the current book from the related list
  const relatedBooks = relatedData.data.filter((b) => b.slug !== book.slug);

  return {
    props: { book, relatedBooks }, // ✅ Pass related books correctly
  };
}

// 🔹 React Component for Book Page
export default function BookPage({ book, relatedBooks = [] }) {
  if (!book) {
    return (
      <div className="container">
        <h1 className="error-text">❌ Book Not Found</h1>
        <p className="description-text">This book does not exist or the data is missing.</p>
        <a href="/library" className="back-link">← Back to Library</a>
      </div>
    );
  }

  return (
    <>
      <Head>
        <title>{book.title ? `${book.title} - Library` : "Book Not Found"}</title>
        <meta name="description" content={book.description || "No description available"} />
      </Head>

      <div className="book-container">
        {/* ✅ Back to Library Link (Aligned Right) */}
        <div className="back-container">
          <a href="/library" className="back-link">← Back to Library</a>
        </div>

        <div className="book-content">
          {/* ✅ Left Side - Book Thumbnail & Amazon Button */}
          <div className="book-left">
            {book.cover_image && (
              <img
                src={book.cover_image}
                alt={book.title || "No title"}
                className="book-image"
              />
            )}

            {/* ✅ Amazon Button Below the Cover */}
            {book.amazon_link && (
              <div className="amazon-button-container">
              <a href={book.amazon_link} target="_blank" rel="noopener noreferrer">
                <img src="/images/amazonbuy.png" alt="Buy on Amazon" className="amazon-button" />
              </a>
            </div>
            )}
          </div>

          {/* ✅ Right Side - Book Details */}
          <div className="book-details">
            <h1 className="book-title">{book.title || "Unknown Title"}</h1>

            {book.author && <p className="book-author">by {book.author}</p>}

            {/* ✅ Book Metadata Section */}
            <div className="book-meta">
              <p><strong>Published:</strong> {book.publication_year || "N/A"}</p>
              {book.runtime_minutes && (
                <p><strong>{book.type === "Book" ? "Pages" : "Runtime"}:</strong> {book.runtime_minutes} {book.type === "Book" ? "pages" : "minutes"}</p>
              )}
              {book.theme && <p><strong>Theme:</strong> {book.theme}</p>}
            </div>

            {/* ✅ Description */}
            <p className="book-description">{book.description || "No description available."}</p>

            {/* ✅ Author Bio (Only Shows If It Exists) */}
            {book.author_bio && (
              <div className="author-bio">
                <h3>Author Bio</h3>
                <p>{book.author_bio}</p>
              </div>
            )}
          </div>
        </div>

        {/* ✅ Related Books Section (Now Full-Width Below Content) */}
        {relatedBooks.length > 0 && (
          <div className="related-books">
            <h3>Related Books</h3>
            <div className="related-books-grid">
              {relatedBooks.map((related) => (
                <div key={related.slug} className="related-book-card">
                  <a href={`/library/${related.slug}`}>
                    <img src={related.cover_image} alt={related.title} className="related-book-image" />
                  </a>
                </div>
              ))}
            </div>
          </div>
        )}

      </div>
    </>
  );
}
