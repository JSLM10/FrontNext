import type { Metadata } from "next";
import "./globals.css";
import { Header } from "./components/Header";
import { Footer } from "./components/Footer";
import { Navbar } from "./components/Navbar";

export const metadata: Metadata = {
  title: "The Rise of Carolina the Conqueror",
  description: "A game by Chule y Tali",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body className="min-h-screen flex flex-col bg-gray-950">
        <header className="sticky top-0 z-50 bg-gray-900 border-b border-rust">
          <div className="container mx-auto flex items-center justify-between p-4">
            <Header />
            <Navbar />
          </div>
        </header>

        <main className="flex-1 p-4 md:p-6 bg-gray-900">
          {children}
        </main>

        <Footer />
      </body>
    </html>
  );
}