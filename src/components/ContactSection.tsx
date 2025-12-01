import { FaMapMarkerAlt, FaPhone, FaEnvelope, FaWhatsapp } from 'react-icons/fa';

export default function ContactSection() {
    return (
        <section id="kontak" className="py-16 sm:py-20 md:py-24 bg-gradient-to-b from-[#fee5c8] to-[#FFF3E6] relative overflow-hidden">
            {/* Background Decoration */}
            <div className="absolute top-0 left-0 w-64 sm:w-96 h-64 sm:h-96 bg-gradient-to-br from-[#D97706]/10 to-transparent rounded-full blur-3xl"></div>
            <div className="absolute bottom-0 right-0 w-64 sm:w-96 h-64 sm:h-96 bg-gradient-to-tl from-[#0D9488]/10 to-transparent rounded-full blur-3xl"></div>

            <div className="container mx-auto px-4 sm:px-6 relative z-10">
                {/* Section Header */}
                <div className="text-center mb-10 sm:mb-12 md:mb-16">
                    <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-3 sm:mb-4 text-[#2C2416]">
                        Mari Bekerja Sama!
                    </h2>
                    <div className="w-20 sm:w-24 h-0.5 sm:h-1 bg-gradient-to-r from-[#D97706] to-[#0D9488] mx-auto rounded-full"></div>
                    <p className="text-sm sm:text-base text-[#6B5844] mt-3 sm:mt-4 max-w-2xl mx-auto px-4">
                        Hubungi saya untuk diskusi proyek atau kolaborasi
                    </p>
                </div>

                {/* Contact Cards Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 max-w-6xl mx-auto">
                    {/* Location */}
                    <div className="glow-card p-6 sm:p-8 rounded-2xl text-center group hover:shadow-xl transition-all">
                        <div className="w-16 h-16 sm:w-20 sm:h-20 mx-auto mb-4 rounded-full bg-gradient-to-br from-[#0D9488]/20 to-[#0F766E]/10 flex items-center justify-center group-hover:scale-110 transition-transform">
                            <FaMapMarkerAlt className="text-[#0D9488] text-2xl sm:text-3xl" />
                        </div>
                        <p className="text-xs sm:text-sm text-[#6B5844] mb-2 font-bold uppercase tracking-wider">Lokasi</p>
                        <p className="font-semibold text-sm sm:text-base text-[#2C2416] leading-tight">Jalan Kalianak Timur, Surabaya, Indonesia</p>
                    </div>

                    {/* Phone */}
                    <a href="tel:+6285846079108" className="glow-card p-6 sm:p-8 rounded-2xl text-center group hover:shadow-xl transition-all block">
                        <div className="w-16 h-16 sm:w-20 sm:h-20 mx-auto mb-4 rounded-full bg-gradient-to-br from-[#D97706]/20 to-[#EA580C]/10 flex items-center justify-center group-hover:scale-110 transition-transform">
                            <FaPhone className="text-[#D97706] text-2xl sm:text-3xl" />
                        </div>
                        <p className="text-xs sm:text-sm text-[#6B5844] mb-2 font-bold uppercase tracking-wider">Telepon</p>
                        <p className="font-semibold text-base sm:text-lg text-[#2C2416] group-hover:text-[#D97706] transition-colors">0858-4607-9108</p>
                    </a>

                    {/* WhatsApp */}
                    <a href="https://wa.me/qr/KZ6XXI4ONBFWC1" target="_blank" rel="noopener noreferrer" className="glow-card p-6 sm:p-8 rounded-2xl text-center group hover:shadow-xl transition-all block hover:bg-gradient-to-br hover:from-[#25D366]/10 hover:to-[#25D366]/5">
                        <div className="w-16 h-16 sm:w-20 sm:h-20 mx-auto mb-4 rounded-full bg-gradient-to-br from-[#25D366]/20 to-[#128C7E]/10 flex items-center justify-center group-hover:scale-110 transition-transform">
                            <FaWhatsapp className="text-[#25D366] text-2xl sm:text-3xl" />
                        </div>
                        <p className="text-xs sm:text-sm text-[#6B5844] mb-2 font-bold uppercase tracking-wider">WhatsApp</p>
                        <p className="font-semibold text-base sm:text-lg text-[#2C2416] group-hover:text-[#25D366] transition-colors">Chat Langsung</p>
                    </a>

                    {/* Email/Gmail */}
                    <a href="mailto:naylasyafiraaa25@gmail.com" className="glow-card p-6 sm:p-8 rounded-2xl text-center group hover:shadow-xl transition-all block">
                        <div className="w-16 h-16 sm:w-20 sm:h-20 mx-auto mb-4 rounded-full bg-gradient-to-br from-[#0D9488]/20 to-[#0F766E]/10 flex items-center justify-center group-hover:scale-110 transition-transform">
                            <FaEnvelope className="text-[#0D9488] text-2xl sm:text-3xl" />
                        </div>
                        <p className="text-xs sm:text-sm text-[#6B5844] mb-2 font-bold uppercase tracking-wider">Email</p>
                        <p className="font-semibold text-xs sm:text-sm text-[#2C2416] group-hover:text-[#0D9488] transition-colors break-all px-2">naylasyafiraaa25@gmail.com</p>
                    </a>
                </div>

                {/* Additional Info */}
                <div className="text-center mt-10 sm:mt-12">
                    <p className="text-sm sm:text-base text-[#6B5844] max-w-2xl mx-auto">
                        Saya siap menerima kesempatan PKL dan proyek desain bangunan. Jangan ragu untuk menghubungi! 🏗️
                    </p>
                </div>
            </div>
        </section>
    );
}
