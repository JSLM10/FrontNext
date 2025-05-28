import { Button } from "@/components/ui/button";
import { Menu } from "lucide-react";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import Link from "next/link";

const navItems = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Contact", href: "/contact" },
];

export const SideBar = () => {
  return (
    <div className="fixed inset-y-0 left-0 z-50 flex flex-col w-64 h-screen bg-gray-900 border-r border-gray-700 text-white p-4 shadow-xl">
      
      <div className="mb-8 p-4 bg-gradient-to-r from-purple-900/50 to-blue-900/50 rounded-lg">
        <h1 className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-300 to-blue-200">
          The Rise of Carolina the Conqueror
        </h1>
        <span className="text-sm text-gray-300">A game by Chule y Tali</span>
      </div>

      <nav className="hidden md:block flex-1">
        <ul className="space-y-2">
          {navItems.map((item) => (
            <li key={item.name}>
              <Link
                href={item.href}
                className="block px-4 py-3 rounded-lg transition-all hover:bg-gray-800 hover:text-purple-200 font-medium text-gray-300 hover:translate-x-1"
              >
                {item.name}
              </Link>
            </li>
          ))}
        </ul>
      </nav>

      
      <div className="md:hidden mt-auto">
        <Sheet>
          <SheetTrigger asChild>
            <Button 
              variant="ghost" 
              size="icon" 
              className="text-gray-300 hover:bg-gray-800 hover:text-white"
            >
              <Menu className="h-6 w-6" />
            </Button>
          </SheetTrigger>
          <SheetContent side="left" className="bg-gray-900 border-r border-gray-700">
            <div className="h-full flex flex-col">
              <h2 className="text-xl font-bold mb-8 p-4 bg-gradient-to-r from-purple-900/50 to-blue-900/50 rounded-lg">
                Menu
              </h2>
              <nav className="flex-1">
                <ul className="space-y-4">
                  {navItems.map((item) => (
                    <li key={item.name}>
                      <Link
                        href={item.href}
                        className="block px-4 py-3 rounded-lg transition-all hover:bg-gray-800 hover:text-purple-200 font-medium text-gray-300"
                      >
                        {item.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </nav>
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </div>
  );
};