import Link from 'next/link';
import { navLinks, regionOptions } from '@/lib/data';

export default function Navbar() {
  return (
    <nav
      className="w-full bg-[#FFFFFF] border-b border-gray-100"
      style={{ maxWidth: 'var(--page-max)', marginLeft: 'auto', marginRight: 'auto' }}
    >
      <div
        className="w-full h-[88px] flex items-center justify-between"
        style={{ paddingLeft: 'var(--page-px)', paddingRight: 'var(--page-px)' }}
      >
        {/* Logo */}
        <div className="flex items-center">
          <div className="flex flex-col items-center justify-center w-[52px] h-[52px] relative text-[#111827] flex-shrink-0">
            <svg viewBox="0 0 100 100" className="w-full h-full text-current absolute inset-0" fill="none" stroke="currentColor" strokeWidth="6" strokeLinejoin="miter">
              <polygon points="50,4 95,28 95,72 50,96 5,72 5,28" />
              <path d="M 22 30 Q 50 15 78 30" strokeWidth="5"/>
              <path d="M 17 38 Q 50 25 83 38" strokeWidth="4"/>
            </svg>
            <span className="text-[12px] font-extrabold mt-3.5 tracking-tight z-10 text-current">DEMO</span>
          </div>
        </div>

        {/* Desktop Nav */}
        <div className="flex items-center h-full">
          <div className="hidden lg:flex items-center space-x-[42px] text-[12px] font-extrabold text-[#111827] tracking-widest h-full pr-10">
            {navLinks.map((link) => (
              <Link key={link.id} href={link.href} className="hover:text-[#0b3383] transition-colors whitespace-nowrap">
                {link.label}
              </Link>
            ))}
          </div>

          <div className="hidden lg:flex items-center space-x-7 pl-10 text-[12px] font-extrabold text-[#111827] tracking-widest h-full">
            <button aria-label="Search" className="hover:text-[#0b3383] transition-colors flex items-center justify-center">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={3} stroke="currentColor" className="w-5 h-5">
                <path strokeLinecap="round" strokeLinejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
              </svg>
            </button>
            {regionOptions.map((opt) => (
              <div key={opt.id} className="flex items-center gap-[6px] cursor-pointer hover:text-[#0b3383] transition-colors uppercase whitespace-nowrap">
                {opt.code}
                <svg className="w-2.5 h-2.5" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" />
                </svg>
              </div>
            ))}
          </div>

          {/* Mobile: Search + Hamburger */}
          <div className="flex lg:hidden items-center gap-4 text-[#111827]">
            <button aria-label="Search" className="hover:text-[#0b3383] transition-colors">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={3} stroke="currentColor" className="w-5 h-5">
                <path strokeLinecap="round" strokeLinejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
              </svg>
            </button>
            <button aria-label="Open menu" className="hover:text-[#0b3383] transition-colors">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}
