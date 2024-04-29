"use client";
import * as React from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import VideoCard from "./VideoCard";
import Autoplay from "embla-carousel-autoplay";

interface Video {
  id: string;
  title: string;
  author: string;
  thumbnail: string;
}

interface VideoCarouselProps {
  videos: Video[];
}

const VideoCarousel: React.FC<VideoCarouselProps> = ({ videos }) => {
  const plugin = React.useRef(
    Autoplay({ delay: 2000, stopOnInteraction: true })
  );

  return (
    <Carousel
      className="container w-full"
      plugins={[plugin.current]}
      onMouseEnter={plugin.current.stop}
      onMouseLeave={plugin.current.reset}
    >
      <CarouselContent className="-ml-1">
        {videos.map((video, index) => (
          <CarouselItem key={index} className="pl-1 basis-1/2 md:basis-1/4">
            <div className="p-1">
              <VideoCard
                id={video.id}
                title={video.title}
                author={video.author}
                thumbnail={video.thumbnail}
              />
            </div>
          </CarouselItem>
        ))}{" "}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  );
};

export default VideoCarousel;
