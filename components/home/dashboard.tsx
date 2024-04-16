'use client';

import * as React from 'react';
import { cn } from '@/lib/utils';

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
import UserDropdown from '@/components/layout/user-dropdown';
import { Nav } from './sidebar';
import { TooltipProvider } from '@/components/ui/tooltip';
import { Input } from '@/components/ui/input';

interface DashboardProps {
  //content: React.ReactNode;
  defaultLayout: number[] | undefined;
  defaultCollapsed?: boolean;
  navCollapsedSize: number;
}

export function Dashboard({
  //content,
  defaultLayout = [265, 400],
  defaultCollapsed = false,
  navCollapsedSize,
}: DashboardProps) {
  const [isCollapsed, setIsCollapsed] = React.useState(defaultCollapsed);

  return (
    <TooltipProvider delayDuration={0}>
      <ResizablePanelGroup
        direction='horizontal'
        onLayout={(sizes: number[]) => {
          document.cookie = `react-resizable-panels:layout=${JSON.stringify(
            sizes
          )}`;
        }}
        className='h-full max-h-[800px] items-stretch'
      >
        <ResizablePanel
          defaultSize={defaultLayout[0]}
          collapsedSize={navCollapsedSize}
          collapsible={true}
          minSize={15}
          maxSize={20}
          onCollapse={(collapsed: boolean) => {
            setIsCollapsed(collapsed);
            document.cookie = `react-resizable-panels:collapsed=${JSON.stringify(
              collapsed
            )}`;
          }}
          className={cn(
            isCollapsed &&
              'min-w-[50px] transition-all duration-300 ease-in-out'
          )}
        >
          <div
            className={cn(
              'flex h-[52px] items-center justify-left',
              isCollapsed ? 'h-[52px]' : 'px-2'
            )}
          >
            <Logo logoOnly={isCollapsed} />
          </div>
          <Separator />
          <Nav
            isCollapsed={isCollapsed}
            links={[
              {
                title: 'Home',
                icon: Inbox,
                variant: 'default',
              },
              {
                title: 'Explore',
                icon: Search,
                variant: 'ghost',
              },
              {
                title: 'Library',
                icon: Bookmark,
                variant: 'ghost',
              },
              {
                title: 'Collections',
                icon: SquareLibrary,
                variant: 'ghost',
              },
            ]}
          />
          <Separator />
          <Nav
            isCollapsed={isCollapsed}
            links={[
              {
                title: 'Settings',
                icon: Settings,
                variant: 'ghost',
              },
              {
                title: 'Support',
                icon: Info,
                variant: 'ghost',
              },
              {
                title: 'Logout',
                icon: LogOut,
                variant: 'ghost',
              },
            ]}
          />
        </ResizablePanel>
        <ResizableHandle withHandle />
        <ResizablePanel defaultSize={defaultLayout[1]} minSize={30}>
          <Tabs defaultValue='all'>
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
            <TabsContent value='all' className='m-0'>
              <p>hi</p>
            </TabsContent>
          </Tabs>
        </ResizablePanel>
      </ResizablePanelGroup>
    </TooltipProvider>
  );
}
