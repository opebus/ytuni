'use client';

import * as React from 'react';
import { cn } from '@/lib/utils';
import { ScrollArea } from '@/components/ui/scroll-area';

import {
  Info,
  Bookmark,
  SquareLibrary,
  Inbox,
  Search,
  Settings,
  LogOut,
} from 'lucide-react';
import { Separator } from '@/components/ui/separator';
import {
  ResizableHandle,
  ResizablePanel,
  ResizablePanelGroup,
} from '@/components/ui/resizable';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import Logo from '@/components/Logo';
import { Nav } from './sidebar';
import { TooltipProvider } from '@/components/ui/tooltip';
import { Input } from '@/components/ui/input';

interface DashboardProps {
  children: React.ReactNode;
  defaultLayout: number[] | undefined;
  defaultCollapsed?: boolean;
  navCollapsedSize: number;
}

export function Dashboard({
  children,
  defaultLayout = [265, 400],
  defaultCollapsed = false,
  navCollapsedSize,
}: DashboardProps) {
  const [isCollapsed, setIsCollapsed] = React.useState(defaultCollapsed);

  return (
    <div className='w-full min-h-screen'>
      <TooltipProvider delayDuration={0}>
        <ResizablePanelGroup
          direction='horizontal'
          onLayout={(sizes: number[]) => {
            document.cookie = `react-resizable-panels:layout=${JSON.stringify(
              sizes
            )}`;
          }}
          className='h-full items-stretch'
        >
          <ResizablePanel
            defaultSize={defaultLayout[0]}
            collapsedSize={navCollapsedSize}
            collapsible={true}
            onCollapse={() => {
              setIsCollapsed(true);
              document.cookie = 'react-resizable-panels:collapsed=true';
            }}
            onExpand={() => {
              setIsCollapsed(false);
              document.cookie = 'react-resizable-panels:collapsed=false';
            }}
            className={cn(
              isCollapsed &&
                'min-w-[50px] transition-all duration-300 ease-in-out'
            )}
          >
            <div className='flex h-[52px] items-center justify-left px-2 mb-10'>
              <Logo logoOnly={isCollapsed} />
            </div>
            <Nav
              isCollapsed={isCollapsed}
              links={[
                {
                  title: 'Home',
                  icon: Inbox,
                  path: '/home',
                },
                {
                  title: 'Explore',
                  icon: Search,
                  path: '/explore',
                },
                {
                  title: 'Library',
                  icon: Bookmark,
                  path: '/library',
                },
                {
                  title: 'Collections',
                  icon: SquareLibrary,
                  path: '/collections',
                },
              ]}
            />
            <Separator className='my-4' />
            <Nav
              isCollapsed={isCollapsed}
              links={[
                {
                  title: 'Settings',
                  icon: Settings,
                  path: '/settings',
                },
                {
                  title: 'Support',
                  icon: Info,
                  path: '/support',
                },
                {
                  title: 'Logout',
                  icon: LogOut,
                  path: '/api/auth/signout',
                },
              ]}
            />
          </ResizablePanel>
          <ResizableHandle withHandle />
          <ResizablePanel defaultSize={defaultLayout[1]}>
            <div className='flex h-[52px] items-center justify-between px-4'>
              <h1 className='text-xl font-bold'>Inbox</h1>
              <div className='backdrop-blur mr-20'>
                <form>
                  <div className='relative'>
                    <Search className='absolute left-2 top-2.5 h-4 w-4 text-muted-foreground' />
                    <Input placeholder='Search' className='pl-8' />
                  </div>
                </form>
              </div>
            </div>
            <Separator />
            <ScrollArea className='h-screen'>{children}</ScrollArea>
          </ResizablePanel>
        </ResizablePanelGroup>
      </TooltipProvider>
    </div>
  );
}
