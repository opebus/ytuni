"use client";

import Link from "next/link";
import {
  LucideIcon,
  Sigma,
  School,
  PanelsTopLeft,
  Bot,
  Cpu,
  Cross,
  Book,
  Brain,
  Target,
  Rocket,
  PiggyBank,
  Landmark,
  BriefcaseBusiness,
  BookX,
  Pickaxe,
  Languages,
  BookOpenText,
  MessageCircleMore,
  Palette,
  Music,
  Code,
  Leaf,
  Vote,
  Scale,
  Biohazard,
  Medal,
  GraduationCap,
  PersonStanding,
  Pill,
} from "lucide-react";
import { categories } from "@/constants";

interface IconMapType {
  [key: string]: LucideIcon;
}

export const IconMap = {
  Tutorials: School,
  Technology: Cpu,
  Healthcare: Cross,
  Business: BriefcaseBusiness,
  History: BookX,
  Mathematics: Sigma,
  Engineering: Pickaxe,
  Languages: Languages,
  Literature: BookOpenText,
  Art: Palette,
  Music: Music,
  Programming: Code,
  Environment: Leaf,
  Politics: Vote,
  Psychology: Brain,
  Law: Scale,
  Biology: Biohazard,
  Astronomy: Rocket,
  Economics: Landmark,
  Sports: Medal,
  Culture: Landmark,
  Philosophy: Landmark,
  Education: GraduationCap,
  Leadership: PersonStanding,
  Medicine: Pill,
  Design: PanelsTopLeft,
  Reading: Book,
  Productivity: Target,
  Entrepreneurship: Rocket,
  Communication: MessageCircleMore,
  Finance: PiggyBank,
};

const CategoriesNav = () => {
  return (
    <div>
      <div className="container max-w-2xl justify-center mx-auto flex flex-wrap gap-2 ">
        {categories.map((category) => {
          const Icon = IconMap[category];
          return (
            <Link
              key={category}
              href={`/categories/${category}`}
              className="text-lg text-gray-600 flex bg-white gap-2 p-2 items-center justify-center rounded-sm shadow-sm hover:bg-gray-300 hover:text-gray-800 transition-colors"
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
