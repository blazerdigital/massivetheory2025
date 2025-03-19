import Link from "next/link";
import "../styles/library.css"; // ✅ Ensure correct path

const API_BASE_URL = process.env.NEXT_PUBLIC_STRAPI_URL || "http://localhost:1337";
const LIBRARY_API_URL = `${API_BASE_URL}/api/library-items?populate=*&pagination[limit]=100`;
const EPISODES_API_URL = `${API_BASE_URL}/api/episodes?fields=order,Title,thumb`;

const EPISODES_PER_PAGE = 2; // ✅ Show 2 episodes per page

export async function getStaticProps() {
  try {
    console.log("📥 Fetching books & episodes at build time...");
    
    const [libraryRes, episodesRes] = await Promise.all([
      fetch(LIBRARY_API_URL),
      fetch(EPISODES_API_URL),
    ]);

    const libraryData = await libraryRes.json();
    const episodesData = await episodesRes.json();

    if (!libraryData.data || !episodesData.data) {
      console.error("❌ Failed to fetch data.");
      return { props: { books: [], episodes: [] } };
    }

    return { props: { books: libraryData.data, episodes: episodesData.data } };
  } catch (error) {
    console.error("🚨 Build Error:", error);
    return { props: { books: [], episodes: [] } };
  }
}

export default function Library({ books, episodes }) {
  if (!books.length) {
    return (
      <div className="library-container">
        <h1 className="title">Library</h1>
        <p className="error-message">⚠️ No books available.</p>
      </div>
    );
  }

  // **📌 Group books by episode**
  const groupedBooks = books.reduce((acc, item) => {
    const book = item.attributes || item;
    const episodeNumber = book.order !== undefined ? book.order : "Unknown";

    const episodeData = episodes?.find((ep) => Number(ep?.order) === Number(episodeNumber));
    const episodeKey = `EP${episodeNumber}`;
    const episodeTitle = episodeData?.Title || `Episode ${episodeNumber}`;
    const episodeThumb = episodeData?.thumb || "/images/fallback-thumbnail.jpg";

    if (!acc[episodeKey]) {
      acc[episodeKey] = { books: [], episodeTitle, episodeThumb };
    }

    acc[episodeKey].books.push(book);
    return acc;
  }, {});

  // **📌 Convert to array & sort by episode order descending**
  const groupedEpisodesArray = Object.entries(groupedBooks)
    .sort(([keyA], [keyB]) => Number(keyB.replace("EP", "")) - Number(keyA.replace("EP", "")));

  const totalPages = Math.ceil(groupedEpisodesArray.length / EPISODES_PER_PAGE);
  const paginatedEpisodes = groupedEpisodesArray.slice(0, EPISODES_PER_PAGE);

  return (
    <div className="library-container">
      <h1 className="title">Library</h1>
      <p className="library-description">
        📚 Explore books and media from our episodes. Click on a book for details.
      </p>

      {paginatedEpisodes.map(([episodeKey, episodeData]) => (
        <div key={episodeKey} className="episode-section">
          {/* 🔥 Episode Header */}
          <div className="episode-header">
            <img src={episodeData.episodeThumb} alt={episodeData.episodeTitle} className="episode-thumbnail" />
            <h2 className="episode-title">{episodeData.episodeTitle}</h2>
          </div>

          {/* 🔥 Display Books for Episode */}
          <div className="booksGrid">
            {episodeData.books.map((book) => (
              <div key={book.id} className="bookCard">
                <Link href={`/library/${book.slug}`} passHref>
                  <img src={book.cover_image} alt={"Book Cover"} className="book-image" />
                </Link>
                {/* ✅ Amazon Buy Link */}
                {book.amazon_link && (
                  <a href={book.amazon_link} target="_blank" rel="noopener noreferrer" className="buy-button">
                    <img src="/images/amazonbuy.png" alt="Buy on Amazon" className="amazon-buy-img" />
                  </a>
                )}
              </div>
            ))}
          </div>
        </div>
      ))}

      {/* ✅ Pagination (Disabled for now since we only pre-build limited books) */}
    </div>
  );
}