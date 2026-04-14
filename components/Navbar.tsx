import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="fixed w-full top-0 z-50 bg-black/50 backdrop-blur-md border-b border-white/10">
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex items-center justify-between h-20">
          <div className="flex-shrink-0">
            {/* EDIT HERE - Your Logo or Name */}
            <Link href="#" className="font-semibold text-xl tracking-wide text-white">
              Portfolio.
            </Link>
          </div>
          <div className="hidden md:flex space-x-10">
            <Link href="#about" className="text-gray-400 hover:text-white transition-colors text-sm font-medium">
              About
            </Link>
            <Link href="#tech" className="text-gray-400 hover:text-white transition-colors text-sm font-medium">
              Stack
            </Link>
            <Link href="#projects" className="text-gray-400 hover:text-white transition-colors text-sm font-medium">
              Projects
            </Link>
            <Link href="#contact" className="text-gray-400 hover:text-white transition-colors text-sm font-medium">
              Contact
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}
