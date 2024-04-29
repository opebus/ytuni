"use client";

import * as React from "react";
import { cn } from "@/lib/utils";
import { ScrollArea } from "@/components/ui/scroll-area";

import {
  Info,
  Bookmark,
  SquareLibrary,
  Inbox,
  Search,
  Settings,
  LogOut,
  Plus,
} from "lucide-react";
import { Separator } from "@/components/ui/separator";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogClose,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

import {
  ResizableHandle,
  ResizablePanel,
  ResizablePanelGroup,
} from "@/components/ui/resizable";

import Logo from "@/components/Logo";
import { Nav } from "./sidebar";
import { TooltipProvider } from "@/components/ui/tooltip";
import { Input } from "@/components/ui/input";

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
  const [isDialogOpen, setDialogOpen] = React.useState(false);
  const [url, setUrl] = React.useState("");

  const closeDialog = () => setDialogOpen(false);

  const handleSubmit = async (e: { preventDefault: () => void }) => {
    e.preventDefault();
    if (!url) return;

    const response = await fetch(
      "https://weichunnn-production--yt-university-app.modal.run/api/process",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ url }),
      }
    );

    if (response.ok) {
      console.log("URL submitted successfully");
      setUrl(""); // Clear the input after successful submission
      closeDialog(); // Close dialog after submission
    } else {
      console.error("Failed to submit URL");
    }
  };

  return (
    <div className="w-full min-h-screen">
      <TooltipProvider delayDuration={0}>
        <ResizablePanelGroup
          direction="horizontal"
          onLayout={(sizes: number[]) => {
            document.cookie = `react-resizable-panels:layout=${JSON.stringify(
              sizes
            )}`;
          }}
          className="h-full items-stretch"
        >
          <ResizablePanel
            defaultSize={defaultLayout[0]}
            collapsedSize={navCollapsedSize}
            collapsible={true}
            minSize={15}
            maxSize={20}
            onCollapse={() => {
              setIsCollapsed(true);
              document.cookie = "react-resizable-panels:collapsed=true";
            }}
            onExpand={() => {
              setIsCollapsed(false);
              document.cookie = "react-resizable-panels:collapsed=false";
            }}
            className={cn(
              isCollapsed &&
                "min-w-[50px] transition-all duration-300 ease-in-out"
            )}
          >
            <div className="flex h-[52px] items-center justify-left px-2 mb-10">
              <Logo logoOnly={isCollapsed} />
            </div>
            <Nav
              isCollapsed={isCollapsed}
              links={[
                {
                  title: "Home",
                  icon: Inbox,
                  path: "/home",
                },
                {
                  title: "Explore",
                  icon: Search,
                  path: "/explore",
                },
                {
                  title: "Library",
                  icon: Bookmark,
                  path: "/library",
                },
                {
                  title: "Collections",
                  icon: SquareLibrary,
                  path: "/collections",
                },
              ]}
            />
            <Separator className="my-4" />
            <Nav
              isCollapsed={isCollapsed}
              links={[
                {
                  title: "Settings",
                  icon: Settings,
                  path: "/settings",
                },
                {
                  title: "Support",
                  icon: Info,
                  path: "/support",
                },
                {
                  title: "Logout",
                  icon: LogOut,
                  path: "/api/auth/signout",
                },
              ]}
            />
          </ResizablePanel>
          <ResizableHandle withHandle />
          <ResizablePanel defaultSize={defaultLayout[1]}>
            <div className="flex h-[52px] items-center justify-between px-4">
              <h1 className="text-xl font-bold">Inbox</h1>
              <div className="backdrop-blur mr-20">
                <form>
                  <div className="relative flex gap-10">
                    <Search className="absolute left-2 top-2.5 h-4 w-4 text-muted-foreground" />
                    <Input placeholder="Search" className="pl-8" />

                    <Dialog open={isDialogOpen} onOpenChange={setDialogOpen}>
                      <DialogTrigger asChild>
                        <Button hidden>
                          <Plus />
                        </Button>
                      </DialogTrigger>
                      <DialogContent>
                        <DialogTitle>Add YouTube URL</DialogTitle>
                        <Input
                          value={url}
                          onChange={(e) => setUrl(e.target.value)}
                          placeholder="Paste YouTube URL here"
                          className="mt-4"
                        />
                        <DialogClose asChild>
                          <Button onClick={handleSubmit} className="mt-4">
                            Submit
                          </Button>
                        </DialogClose>
                      </DialogContent>
                    </Dialog>
                  </div>
                </form>
              </div>
            </div>
            <Separator />
            <ScrollArea className="h-screen">{children}</ScrollArea>
          </ResizablePanel>
        </ResizablePanelGroup>
      </TooltipProvider>
    </div>
  );
}
