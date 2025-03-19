import { useEffect, useState } from "react";
import Link from "next/link";
import axios from "axios";
import "../styles/library.css"; // ✅ Ensure correct path

const LIBRARY_API_URL = "http://10.0.1.48:1337/api/library-items?populate=*&pagination[limit]=100";
const EPISODES_API_URL = "http://10.0.1.48:1337/api/episodes?fields=order,Title,thumb";

const EPISODES_PER_PAGE = 2; // ✅ Show 2 episodes per page

const Library = () => {
  const [items, setItems] = useState([]);
  const [episodes, setEpisodes] = useState([]);
  const [error, setError] = useState(null);
  const [currentPage, setCurrentPage] = useState(1); // ✅ Track current page

  useEffect(() => {
    async function fetchData() {
      try {
        console.log("Fetching data from API:", LIBRARY_API_URL, EPISODES_API_URL);

        const [libraryRes, episodesRes] = await Promise.all([
          axios.get(LIBRARY_API_URL, { timeout: 5000 }),
          axios.get(EPISODES_API_URL, { timeout: 5000 }),
        ]);

        console.log("🔍 Library API Response:", libraryRes.data);
        console.log("🔍 Episodes API Response:", episodesRes.data);

        if (libraryRes.data?.data?.length > 0) {
          setItems(libraryRes.data.data);
        } else {
          console.warn("⚠️ No books found.");
        }

        if (episodesRes.data?.data?.length > 0) {
          setEpisodes(episodesRes.data.data);
        } else {
          console.warn("⚠️ No episodes found.");
        }
      } catch (error) {
        console.error("❌ Error fetching data:", error);
        setError(error.message);
      }
    }

    fetchData();
  }, []);

  if (error) return <p>Error loading library: {error}</p>;

  // **📌 Step 1: Group books by episode order**
  const groupedBooks = items.reduce((acc, item) => {
    const book = item.attributes || item;
    const episodeNumber = book.order !== undefined ? book.order : "Unknown";

    // **✅ Find matching episode in the `episodes` dataset**
    const episodeData = episodes?.find((ep) => Number(ep?.order) === Number(episodeNumber));

    // **✅ Define `episodeKey` properly**
    const episodeKey = `EP${episodeNumber}`;
    const episodeTitle = episodeData?.Title || `Episode ${episodeNumber}`;
    const episodeThumb = episodeData?.thumb || "/images/fallback-thumbnail.jpg";

    if (!acc[episodeKey]) {
      acc[episodeKey] = {
        books: [],
        episodeTitle,
        episodeThumb,
      };
    }

    acc[episodeKey].books.push(book);
    return acc;
  }, {});

  console.log("📌 Grouped Books Debug:", JSON.stringify(groupedBooks, null, 2));

// **📌 Step 2: Convert Object to Array & Sort by Episode Order Descending**
const groupedEpisodesArray = Object.entries(groupedBooks)
  .sort(([keyA], [keyB]) => {
    const numA = Number(keyA.replace("EP", "")); // Extract episode number
    const numB = Number(keyB.replace("EP", ""));
    return numB - numA; // ✅ Descending order (8,7,6,5)
  });

const totalPages = Math.ceil(groupedEpisodesArray.length / EPISODES_PER_PAGE); // Total number of pages

// **📌 Step 3: Slice episodes for pagination**
const paginatedEpisodes = groupedEpisodesArray.slice(
  (currentPage - 1) * EPISODES_PER_PAGE,
  currentPage * EPISODES_PER_PAGE
);

  // **📌 Step 3: Pagination Handlers**
  const nextPage = () => {
    if (currentPage < totalPages) setCurrentPage(currentPage + 1);
  };

  const prevPage = () => {
    if (currentPage > 1) setCurrentPage(currentPage - 1);
  };

  return (
    <div className="library-container">
      <h1 className="title">Library</h1>
  <p className="library-description">
    Explore a collection of books and media categorized by episodes. Click on any book for more details or purchase options.
  </p>

      {paginatedEpisodes.length > 0 ? (
        paginatedEpisodes.map(([episodeKey, episodeData]) => (
          <div key={episodeKey} className="episode-section">
            {/* 🔥 Episode Header with Thumbnail & Title Side by Side */}
            <div className="episode-header">
              <img src={episodeData.episodeThumb} alt={episodeData.episodeTitle} className="episode-thumbnail" />
              <h2 className="episode-title">{episodeData.episodeTitle}</h2>
            </div>

            {/* 🔥 Display Books for this Episode */}
            <div className="booksGrid">
              {episodeData.books.map((book) => (
                <div key={book.id} className="bookCard">
                  <Link href={`/library/${book.slug}`} passHref>
                    <img src={book.cover_image} alt={"Book Cover"} className="book-image" />
                  </Link>

                  {/* ✅ Amazon Buy Link as an Image */}
                  {book.amazon_link && (
                    <a
                      href={book.amazon_link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="buy-button"
                    >
                      <img src="/images/amazonbuy.png" alt="Buy on Amazon" className="amazon-buy-img" />
                    </a>
                  )}
                </div>
              ))}
            </div>
          </div>
        ))
      ) : (
        <p>Loading books...</p>
      )}

      {/* ✅ Pagination Controls */}
      <div className="pagination">
        <button onClick={prevPage} disabled={currentPage === 1} className="pagination-btn">
          ← Previous
        </button>
        <span className="page-info">Page {currentPage} of {totalPages}</span>
        <button onClick={nextPage} disabled={currentPage === totalPages} className="pagination-btn">
          Next →
        </button>
      </div>
    </div>
  );
};

export default Library;