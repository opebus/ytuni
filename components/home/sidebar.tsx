'use client';

import { usePathname } from 'next/navigation';

import { cn } from '@/lib/utils';
import Link from 'next/link';
import { LucideIcon } from 'lucide-react';
import { buttonVariants } from '@/components/ui/button';
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from '@/components/ui/tooltip';

interface NavProps {
  isCollapsed: boolean;
  links: {
    title: string;
    icon: LucideIcon;
    path: string;
  }[];
}

export function Nav({ links, isCollapsed }: NavProps) {
  const pathname = usePathname();

  return (
    <div
      data-collapsed={isCollapsed}
      className='group flex flex-col gap-4 py-2 data-[collapsed=true]:py-2'
    >
      <nav className='grid gap-1 px-2 group-[[data-collapsed=true]]:justify-center group-[[data-collapsed=true]]:px-2'>
        {links.map((link, index) => {
          return isCollapsed ? (
            <Tooltip key={index} delayDuration={0}>
              <TooltipTrigger asChild>
                <Link
                  href={link.path}
                  className={cn(
                    buttonVariants({
                      variant: pathname === link.path ? 'default' : 'ghost',
                      size: 'icon',
                    }),
                    'h-9 w-9'
                  )}
                >
                  <link.icon className='h-4 w-4' />
                  <span className='sr-only'>{link.title}</span>
                </Link>
              </TooltipTrigger>
              <TooltipContent side='right' className='flex items-center gap-4'>
                {link.title}
              </TooltipContent>
            </Tooltip>
          ) : (
            <Link
              key={index}
              href={link.path}
              className={cn(
                buttonVariants({
                  variant: pathname === link.path ? 'default' : 'ghost',
                  size: 'sm',
                }),
                'justify-start'
              )}
            >
              <link.icon className='mr-2 h-4 w-4' />
              {link.title}
            </Link>
          );
        })}
      </nav>
    </div>
  );
}
