
import { Search, Menu } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useState } from "react";
import { Link } from "react-router-dom";
import { cn } from "@/lib/utils";

export const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isAuthOpen, setIsAuthOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <nav className="bg-white border-b border-gray-200 sticky top-0 z-30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <Link to="/" className="flex-shrink-0 flex items-center">
              <svg viewBox="0 0 24 24" className="h-8 w-8 text-brand-blue" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
              </svg>
              <span className="ml-2 text-xl font-bold text-gray-900">DataStruct<span className="text-brand-blue">Lab</span></span>
            </Link>
            <div className="hidden md:block ml-10">
              <div className="flex items-center space-x-4">
                <Link to="/" className="text-gray-700 hover:text-brand-blue px-3 py-2 rounded-md text-sm font-medium">
                  Home
                </Link>
                <Link to="/courses" className="text-gray-700 hover:text-brand-blue px-3 py-2 rounded-md text-sm font-medium">
                  Courses
                </Link>
                <Link to="/playground" className="text-gray-700 hover:text-brand-blue px-3 py-2 rounded-md text-sm font-medium">
                  Playground
                </Link>
                <Link to="/forum" className="text-gray-700 hover:text-brand-blue px-3 py-2 rounded-md text-sm font-medium">
                  Forum
                </Link>
              </div>
            </div>
          </div>
          <div className="hidden md:block">
            <div className="flex items-center gap-2">
              <div className="relative">
                <Input
                  type="text"
                  placeholder="Search courses..."
                  className="w-64 pl-10 pr-4 focus:ring-brand-blue focus:border-brand-blue"
                />
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <Search className="h-4 w-4 text-gray-400" />
                </div>
              </div>
              <Sheet open={isAuthOpen} onOpenChange={setIsAuthOpen}>
                <SheetTrigger asChild>
                  <Button variant="ghost" className="text-gray-700 hover:text-brand-blue">
                    Sign In
                  </Button>
                </SheetTrigger>
                <SheetContent className="w-[400px] sm:w-[540px]">
                  <SheetHeader>
                    <SheetTitle className="text-2xl font-bold text-center mb-6">
                      Welcome to DataStructLab
                    </SheetTitle>
                  </SheetHeader>
                  <Tabs defaultValue="signin" className="w-full">
                    <TabsList className="grid w-full grid-cols-2 mb-6">
                      <TabsTrigger value="signin">Sign In</TabsTrigger>
                      <TabsTrigger value="signup">Sign Up</TabsTrigger>
                    </TabsList>
                    <TabsContent value="signin" className="space-y-4">
                      <div className="space-y-4">
                        <Input type="email" placeholder="Email" />
                        <Input type="password" placeholder="Password" />
                        <Button className="w-full bg-brand-blue hover:bg-brand-darkBlue text-white">
                          Sign In
                        </Button>
                      </div>
                    </TabsContent>
                    <TabsContent value="signup" className="space-y-4">
                      <div className="space-y-4">
                        <Input type="text" placeholder="Full Name" />
                        <Input type="email" placeholder="Email" />
                        <Input type="password" placeholder="Password" />
                        <Input type="password" placeholder="Confirm Password" />
                        <Button className="w-full bg-brand-blue hover:bg-brand-darkBlue text-white">
                          Sign Up
                        </Button>
                      </div>
                    </TabsContent>
                  </Tabs>
                </SheetContent>
              </Sheet>
            </div>
          </div>
          <div className="md:hidden flex items-center">
            <Button variant="ghost" className="p-1" onClick={toggleMenu}>
              <Menu className="h-6 w-6 text-gray-700" />
            </Button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      <div className={cn("md:hidden", isMenuOpen ? "block" : "hidden")}>
        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 border-t border-gray-200">
          <Link to="/" className="text-gray-700 hover:text-brand-blue block px-3 py-2 rounded-md text-base font-medium">
            Home
          </Link>
          <Link to="/courses" className="text-gray-700 hover:text-brand-blue block px-3 py-2 rounded-md text-base font-medium">
            Courses
          </Link>
          <Link to="/playground" className="text-gray-700 hover:text-brand-blue block px-3 py-2 rounded-md text-base font-medium">
            Playground
          </Link>
          <Link to="/forum" className="text-gray-700 hover:text-brand-blue block px-3 py-2 rounded-md text-base font-medium">
            Forum
          </Link>
          <div className="pt-4 pb-2">
            <div className="relative">
              <Input
                type="text"
                placeholder="Search courses..."
                className="w-full pl-10 pr-4"
              />
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <Search className="h-4 w-4 text-gray-400" />
              </div>
            </div>
          </div>
          <div className="pt-4 pb-2 flex gap-2">
            <Sheet>
              <SheetTrigger asChild>
                <Button variant="outline" className="w-full">
                  Sign In / Sign Up
                </Button>
              </SheetTrigger>
              <SheetContent className="w-full">
                <SheetHeader>
                  <SheetTitle className="text-2xl font-bold text-center mb-6">
                    Welcome to DataStructLab
                  </SheetTitle>
                </SheetHeader>
                <Tabs defaultValue="signin" className="w-full">
                  <TabsList className="grid w-full grid-cols-2 mb-6">
                    <TabsTrigger value="signin">Sign In</TabsTrigger>
                    <TabsTrigger value="signup">Sign Up</TabsTrigger>
                  </TabsList>
                  <TabsContent value="signin" className="space-y-4">
                    <div className="space-y-4">
                      <Input type="email" placeholder="Email" />
                      <Input type="password" placeholder="Password" />
                      <Button className="w-full bg-brand-blue hover:bg-brand-darkBlue text-white">
                        Sign In
                      </Button>
                    </div>
                  </TabsContent>
                  <TabsContent value="signup" className="space-y-4">
                    <div className="space-y-4">
                      <Input type="text" placeholder="Full Name" />
                      <Input type="email" placeholder="Email" />
                      <Input type="password" placeholder="Password" />
                      <Input type="password" placeholder="Confirm Password" />
                      <Button className="w-full bg-brand-blue hover:bg-brand-darkBlue text-white">
                        Sign Up
                      </Button>
                    </div>
                  </TabsContent>
                </Tabs>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </nav>
  );
};
