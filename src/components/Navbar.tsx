import Link from 'next/link';
import { navLinks, regionOptions } from '@/lib/data';

export default function Navbar() {
  return (
    <nav className="w-full flex items-center justify-between px-6 md:px-12 py-5 bg-white border-b border-gray-100">
      <div className="flex items-center">
        <div className="w-12 h-12 border-[3px] border-gray-800 flex items-center justify-center font-bold text-sm tracking-widest uppercase">
          DEMO
        </div>
      </div>
      
      <div className="hidden lg:flex items-center space-x-10 text-[13px] font-bold text-gray-700 tracking-wider">
        {navLinks.map((link) => (
          <Link key={link.id} href={link.href} className="hover:text-[#0A3D91] transition-colors">
            {link.label}
          </Link>
        ))}
      </div>

      <div className="flex items-center space-x-6 text-[13px] font-bold text-gray-800 tracking-wider">
        <button aria-label="Search" className="hover:text-[#0A3D91] transition-colors">
           <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="w-[18px] h-[18px]">
            <path strokeLinecap="round" strokeLinejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
          </svg>
        </button>
        {regionOptions.map((opt) => (
          <div key={opt.id} className="flex items-center gap-1.5 cursor-pointer hover:text-[#0A3D91] transition-colors">
            {opt.code} <span className="text-[10px]">▼</span>
          </div>
        ))}
      </div>
    </nav>
  );
}
