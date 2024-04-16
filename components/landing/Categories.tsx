'use client';

import {
  LucideIcon,
  PanelsTopLeft,
  Bot,
  Book,
  Brain,
  Target,
  Rocket,
  PiggyBank,
  Landmark,
  MessageCircleMore,
} from 'lucide-react';
import { videos, categories } from '@/constants';
import { useState } from 'react';
import VideoCarousel from '../VideoCarousel';

interface IconMapType {
  [key: string]: LucideIcon;
}

const IconMap: IconMapType = {
  Design: PanelsTopLeft,
  AI: Bot,
  Reading: Book,
  Productivity: Target,
  Psychology: Brain,
  Entrepreneurship: Rocket,
  Communication: MessageCircleMore,
  Finance: PiggyBank,
  Philosophy: Landmark,
};

const Categories = () => {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

  // Initially display all videos, and filter based on selected category upon click
  const filteredVideos = selectedCategory
    ? videos.filter((video) => video.category === selectedCategory)
    : videos; // Display all videos initially

  return (
    <div className='pt-16' id='learn'>
      <h1
        className='animate-fade-up text-slate-800 text-center text-xl font-bold tracking-[-0.02em] opacity-0 [text-wrap:balance] md:text-3xl md:leading-[5rem]'
        style={{ animationDelay: '0.6s', animationFillMode: 'forwards' }}
      >
        What are you interested in?
      </h1>
      <p
        className='animate-fade-up text-center text-gray-500 opacity-0 [text-wrap:balance] md:text-lg'
        style={{ animationDelay: '0.6s', animationFillMode: 'forwards' }}
      >
        A comprehensive video library of over 1,000 high-quality educational
        videos
      </p>
      <div
        className='animate-fade-up tracking-[-0.02em] opacity-0 [text-wrap:balance] md:leading-[5rem] text-slate-900 text-center mt-12 flex flex-wrap gap-2 justify-center'
        style={{ animationDelay: '0.8s', animationFillMode: 'forwards' }}
      >
        {categories.map((category) => {
          const Icon = IconMap[category];
          const isSelected = category === selectedCategory;

          return (
            <button
              key={category}
              className={`grow-0 shrink-0 text-sm md:text-lg text-gray-600 flex bg-white gap-2 p-2 items-center justify-center rounded-sm shadow-sm hover:bg-gray-300 hover:text-gray-800 transition-colors ${
                isSelected ? 'shadow-lg ring-2 ring-offset-2 ring-rose-900' : ''
              }`}
              onClick={() => setSelectedCategory(category)}
            >
              {Icon && <Icon size={20} />}
              <span>{category}</span>
            </button>
          );
        })}
      </div>
      <div
        className='mt-20 animate-fade-up text-slate-800 tracking-[-0.02em] opacity-0 '
        style={{ animationDelay: '0.8s', animationFillMode: 'forwards' }}
      >
        {selectedCategory && (
          <div className='p-3'>
            <p className='text-xl'>Top videos {`in ${selectedCategory}`}</p>
            <p className='text-gray-500'>
              {filteredVideos.length} videos in this category
            </p>
          </div>
        )}
        {filteredVideos.length > 0 ? (
          <VideoCarousel videos={filteredVideos} />
        ) : (
          <p>no videos</p>
        )}
      </div>
    </div>
  );
};

export default Categories;
