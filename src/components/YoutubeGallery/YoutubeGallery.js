'use client';
import React, { useRef, useEffect } from 'react';
import styles from './Youtube.module.css';

const youtubeVideos = [
  { url: 'https://www.youtube.com/watch?v=pWVwVaYAVlM', title: 'My Car' },
  { url: 'https://www.youtube.com/watch?v=o4QXiKLv9yo', title: 'My Formula 1' },
  { url: 'https://www.youtube.com/watch?v=UVqi5du-Za0', title: 'Lufi our business partner' },
  { url: 'https://www.youtube.com/watch?v=w1AoQF4Ayr0', title: 'My Grandma' },
  { url: 'https://www.youtube.com/watch?v=4NRXx6U8ABQ', title: 'Weekend plans' },
  { url: 'https://www.youtube.com/watch?v=WLkkaBMU5EM', title: 'My childhood friend' },
];

const extractVideoId = (url) => {
  try {
    const urlObj = new URL(url);
    return urlObj.searchParams.get('v');
  } catch {
    return '';
  }
};

const YouTubeGallerySection = () => {
  const scrollRef = useRef(null);

  useEffect(() => {
    const scrollContainer = scrollRef.current;
    let animationFrame;

    const scroll = () => {
      if (scrollContainer) {
        // When we've scrolled past the width of one full set of videos, reset scrollLeft to 0
        if (scrollContainer.scrollLeft >= scrollContainer.scrollWidth / 2) {
          scrollContainer.scrollLeft = 0;
        } else {
          scrollContainer.scrollLeft += 0.8; // scroll speed
        }
      }
      animationFrame = requestAnimationFrame(scroll);
    };

    animationFrame = requestAnimationFrame(scroll);

    return () => cancelAnimationFrame(animationFrame);
  }, []);

  // Duplicate the videos array so the scroll can loop infinitely
  const videosToRender = [...youtubeVideos, ...youtubeVideos];

  return (
    <section className={styles.gallerySection}>
      <div className={styles.sectionHeader}>
        <h2 className={styles.sectionTitle}>Video Gallery</h2>
        <p className={styles.sectionSubtitle}>Watch our operations and stories in motion.</p>
      </div>

      <div className={styles.scrollContainer}>
        <div className={styles.videoRow} ref={scrollRef}>
          {videosToRender.map((video, index) => {
            const videoId = extractVideoId(video.url);
            return (
              <div key={index} className={styles.videoCard}>
                <iframe
                  src={`https://www.youtube.com/embed/${videoId}`}
                  title={video.title}
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
                <p className={styles.videoTitle}>{video.title}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default YouTubeGallerySection;
