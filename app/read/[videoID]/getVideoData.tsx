"use client";
// Import necessary hooks and components
import { useState, useEffect } from "react";
import Image from "next/image";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import remarkToc from "remark-toc";

interface VideoDataProps {
  videoID: string;
}

const GetVideoData = ({ videoID }: VideoDataProps) => {
  const [video, setVideo] = useState<any>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string>("");

  useEffect(() => {
    const fetchVideo = async () => {
      try {
        const response = await fetch(
          `https://weichunnn-production--yt-university-app.modal.run/api/video?id=${videoID}`
        );
        const data = await response.json();
        console.log(data);

        if (data) {
          setVideo(data);
        } else {
          throw new Error("Video not found");
        }
      } catch (err) {
        setError("Failed to fetch video");
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    fetchVideo();
  }, [videoID]);

  if (loading) {
    return <div className="text-center py-10">Loading...</div>;
  }

  if (error || !video) {
    return (
      <div className="text-center py-10">{error || "Video not found"}</div>
    );
  }

  return (
    <div className="py-10 px-4">
      <div className="mb-8 max-w-2xl">
        <Image
          src={video.thumbnail}
          alt={video.title}
          width={1000}
          height={360}
          className="rounded-lg"
        />
      </div>
      <h1 className="max-w-2xl text-3xl font-bold mb-12">{video.title}</h1>
      <div className="prose">
        <ReactMarkdown
          remarkPlugins={[
            [remarkGfm, { singleTilde: false }],
            [remarkToc, { tight: true, maxDepth: 5 }],
          ]}
        >
          {video.summary}
        </ReactMarkdown>
      </div>
      <div className="text-lg mt-4">
        <strong>Category:</strong> {video.category}
        <br />
        <strong>Channel:</strong> {video.channel}
      </div>
    </div>
  );
};

export default GetVideoData;
