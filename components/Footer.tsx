export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-10 bg-black text-neutral-500 text-center border-t border-white/10">
      <p className="font-light text-sm tracking-wide">
        {/* EDIT HERE - Your Name */}
        © {currentYear} Donnel Simbajon. All rights reserved.
      </p>
    </footer>
  );
}
