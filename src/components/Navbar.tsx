import Link from 'next/link';
import { FaEnvelope, FaPhone } from 'react-icons/fa';

export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-[#fee5c8]/95 backdrop-blur-md border-b border-[#E7DED0] shadow-sm">
      <div className="container mx-auto px-4 sm:px-6 py-3 sm:py-4 flex justify-between items-center">
        <Link href="/" className="text-xl sm:text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-[#D97706] to-[#EA580C] hover:to-[#DC2626] transition-all duration-300">
          Nayla Syafira
        </Link>

        <div className="hidden md:flex items-center gap-8">
          {['Beranda', 'Profil', 'Portofolio', 'Skill', 'Kontak'].map((item) => (
            <Link
              key={item}
              href={`#${item.toLowerCase()}`}
              className="text-sm font-semibold text-[#2C2416] hover:text-[#D97706] transition-colors relative group"
            >
              {item}
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-[#D97706] to-[#EA580C] group-hover:w-full transition-all duration-300"></span>
            </Link>
          ))}
        </div>

        <div className="flex items-center gap-2 sm:gap-4">
          <a href="mailto:naylasyafiraaa25@gmail.com" className="text-[#6B5844] hover:text-[#D97706] transition-colors p-1.5 sm:p-2 rounded-lg hover:bg-[#D97706]/10">
            <FaEnvelope size={16} className="sm:w-[18px] sm:h-[18px]" />
          </a>
          <a href="tel:+6285846079108" className="text-[#6B5844] hover:text-[#0D9488] transition-colors p-1.5 sm:p-2 rounded-lg hover:bg-[#0D9488]/10">
            <FaPhone size={16} className="sm:w-[18px] sm:h-[18px]" />
          </a>
        </div>
      </div>
    </nav>
  );
}
