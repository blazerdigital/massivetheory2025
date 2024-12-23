import ReactMarkdown from 'react-markdown';
import { fetchAPI } from '../../lib/api';
import styles from './EpisodeDetail.module.css';

export default function EpisodeDetail({ episode }) {
    // Extract YouTube Video ID if URL is present
    const getYouTubeEmbedUrl = (url) => {
        if (!url) return null;
        const videoId = url.includes("youtu") 
            ? url.split("v=")[1]?.split("&")[0] || url.split("/").pop()
            : null;
        return videoId ? `https://www.youtube.com/embed/${videoId}` : null;
    };

    const youtubeEmbedUrl = getYouTubeEmbedUrl(episode.url);
    return (
        <div className={styles.container}>
            {/* Episode Title */}
            <h1 className={styles.heading}>{episode.Title}</h1>
            
            {/* Publish Date */}
            <p className={styles.publishDate}>
                {new Date(episode.Date).toLocaleDateString()}
            </p>

            {youtubeEmbedUrl && (
    <div className={styles.videoEmbed}>
        <iframe
            src={youtubeEmbedUrl}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            title="YouTube Video"
        ></iframe>
    </div>
)}
            
            {/* Episode Content with Markdown Support */}
            <div className={styles.transcript}>
            <button className={styles.button}>
    TRANSCRIPT
  </button>
                <ReactMarkdown>{episode.Content}</ReactMarkdown>
            </div>
            
            {/* Citations Section */}
            {episode.Citations && (
                <div className={styles.citations}>
                    
                    <button className={styles.button}>
   CITATIONS
  </button>
                    <div className={styles.linkContainer}>
                        {episode.Citations.split('\n').map((citation, index) => (
                            <a
                                key={index}
                                href={citation.trim()} // Trim spaces to ensure clean URLs
                                className={styles.link}
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                {citation}
                            </a>
                        ))}
                    </div>
                </div>
            )}
        </div>
    );
}


export async function getStaticPaths() {
    const response = await fetchAPI('/api/episodes');
    const episodes = response.data || [];

    const paths = episodes.map((episode) => ({
        params: { slug: episode.slug },
    }));

    return {
        paths,
        fallback: false,
    };
}

export async function getStaticProps({ params }) {
    const response = await fetchAPI(`/api/episodes?filters[slug][$eq]=${params.slug}`);
    const episode = response.data[0] || null;

    if (!episode) {
        return { notFound: true };
    }

    return {
        props: { episode },
    };
}
