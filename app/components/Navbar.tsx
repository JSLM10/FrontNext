"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";

export function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  const links = [
    { href: "/dashboard", label: "Dashboard" },
    { href: "/contestants", label: "Contestants" },
    { href: "/battles", label: "Battles" },
    { href: "/dictators", label: "Dictators" },
    { href: "/sponsors", label: "Sponsors" },
    { href: "/transactions", label: "Black Market" },
  ];

  
  const textStyle = "text-white drop-shadow-[0_1px_1px_rgba(220,38,38,0.5)]";

  return (
    <>
      
      <div className="hidden md:flex items-center space-x-2">
        {links.map((link) => (
          <Link key={link.href} href={link.href}>
            <Button
              variant={pathname === link.href ? "default" : "outline"}
              className={`${textStyle} ${
                pathname === link.href
                  ? "bg-blood hover:bg-blood/90"
                  : "border-rust bg-gray-800/80 hover:bg-gray-800"
              } hover:text-orange-300 hover:drop-shadow-[0_1px_1px_rgba(249,115,22,0.7)]`}
            >
              {link.label}
            </Button>
          </Link>
        ))}
      </div>

      
      <div className="md:hidden">
        <Button
          variant="ghost"
          className={`${textStyle} hover:text-orange-300 hover:bg-gray-800`}
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? (
            <X className="hover:text-orange-300" size={24} />
          ) : (
            <Menu className="hover:text-orange-300" size={24} />
          )}
        </Button>
      </div>

      
      {mobileMenuOpen && (
        <div className="absolute md:hidden top-16 right-0 w-full bg-gray-900 border-t border-rust shadow-lg shadow-blood/20 z-40">
          <div className="flex flex-col space-y-2 p-4">
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
              >
                <Button
                  variant={pathname === link.href ? "default" : "outline"}
                  className={`${textStyle} w-full ${
                    pathname === link.href
                      ? "bg-blood hover:bg-blood/90"
                      : "border-rust bg-gray-800/80 hover:bg-gray-800"
                  } hover:text-orange-300`}
                >
                  {link.label}
                </Button>
              </Link>
            ))}
          </div>
        </div>
      )}
    </>
  );
}