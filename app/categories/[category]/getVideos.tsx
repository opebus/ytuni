'use client';

import VideoCarousel from '@/components/VideoCarousel';
import { useState, useEffect } from 'react';

export const GetVideos = ({ category }: any) => {
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    const fetchVideos = async () => {
      try {
        const response = await fetch(
          `https://weichunnn-production--yt-university-app.modal.run/api/videos?page=1&page_size=10&category=${category}`,
          {
            method: 'GET',
            headers: { 'Content-Type': 'application/json' },
          }
        );
        const data = await response.json();
        // Ensure the data is an array before setting the state
        if (Array.isArray(data)) {
          setVideos(data);
        } else {
          console.error('Fetched data is not an array:', data);
          setVideos([]); // Set to an empty array if data is not as expected
        }
      } catch (error) {
        console.error('Failed to fetch videos:', error);
        setVideos([]); // Set to an empty array in case of error
      }
    };

    fetchVideos();
  }, [category]);

  return (
    <div className="h-screen">
      <VideoCarousel videos={videos} />
    </div>
  );
};
