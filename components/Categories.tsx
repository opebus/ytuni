'use client';

import Link from 'next/link';
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
import { categories } from '@/constants';

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

const CategoriesNav = () => {
  return (
    <div>
      <div className='container max-w-2xl justify-center mx-auto flex flex-wrap gap-2 '>
        {categories.map((category) => {
          const Icon = IconMap[category];
          return (
            <Link
              key={category}
              href={`/categories/${category}`}
              className='text-lg text-gray-600 flex bg-white gap-2 p-2 items-center justify-center rounded-sm shadow-sm hover:bg-gray-300 hover:text-gray-800 transition-colors'
            >
              {Icon && <Icon size={20} />}
              <span>{category}</span>
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default CategoriesNav;
