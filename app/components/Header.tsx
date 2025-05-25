import Link from "next/link";

export function Header() {
  return (
    <Link href="/" className="flex items-center space-x-2 group">
      <span className="text-xl font-bold text-white 
                       [text-shadow:_0_2px_4px_rgba(220,38,38,0.8)]
                       group-hover:[text-shadow:_0_2px_6px_rgba(249,115,22,0.9)]
                       transition-all duration-300">
        LUCHA MUERE
      </span>
      <span className="hidden md:inline text-sm text-gray-300 
                       [text-shadow:_0_1px_2px_rgba(220,38,38,0.5)]
                       group-hover:[text-shadow:_0_1px_3px_rgba(249,115,22,0.7)]
                       transition-all duration-300">
        The Rise of Carolina the Conqueror
      </span>
    </Link>
  );
}