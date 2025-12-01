import { FaMapMarkerAlt, FaPhone, FaEnvelope } from 'react-icons/fa';

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

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 max-w-6xl mx-auto">
                    {/* Contact Info */}
                    <div className="space-y-4 sm:space-y-6">
                        {/* Location */}
                        <div className="glow-card p-5 sm:p-6 md:p-8 rounded-xl sm:rounded-2xl flex items-start gap-4 sm:gap-6 group hover:shadow-xl transition-all">
                            <div className="p-3 sm:p-4 md:p-5 rounded-xl sm:rounded-2xl bg-gradient-to-br from-[#0D9488]/20 to-[#0F766E]/10 text-[#0D9488] group-hover:scale-110 transition-transform flex-shrink-0">
                                <FaMapMarkerAlt size={20} className="sm:w-6 sm:h-6 md:w-7 md:h-7" />
                            </div>
                            <div className="flex-1">
                                <p className="text-xs sm:text-sm text-[#6B5844] mb-1 sm:mb-2 font-bold uppercase tracking-wider">Lokasi</p>
                                <p className="font-semibold text-base sm:text-lg text-[#2C2416]">Jalan Kalianak Timur, Surabaya, Indonesia</p>
                            </div>
                        </div>

                        {/* Phone */}
                        <a href="tel:+6285846079108" className="glow-card p-5 sm:p-6 md:p-8 rounded-xl sm:rounded-2xl flex items-start gap-4 sm:gap-6 group hover:shadow-xl transition-all block">
                            <div className="p-3 sm:p-4 md:p-5 rounded-xl sm:rounded-2xl bg-gradient-to-br from-[#D97706]/20 to-[#EA580C]/10 text-[#D97706] group-hover:scale-110 transition-transform flex-shrink-0">
                                <FaPhone size={20} className="sm:w-6 sm:h-6 md:w-7 md:h-7" />
                            </div>
                            <div className="flex-1">
                                <p className="text-xs sm:text-sm text-[#6B5844] mb-1 sm:mb-2 font-bold uppercase tracking-wider">Telepon</p>
                                <p className="font-semibold text-base sm:text-lg text-[#2C2416] group-hover:text-[#D97706] transition-colors">0858-4607-9108</p>
                            </div>
                        </a>

                        {/* Email */}
                        <a href="mailto:naylasyafiraaa25@gmail.com" className="glow-card p-5 sm:p-6 md:p-8 rounded-xl sm:rounded-2xl flex items-start gap-4 sm:gap-6 group hover:shadow-xl transition-all block">
                            <div className="p-3 sm:p-4 md:p-5 rounded-xl sm:rounded-2xl bg-gradient-to-br from-[#0D9488]/20 to-[#0F766E]/10 text-[#0D9488] group-hover:scale-110 transition-transform flex-shrink-0">
                                <FaEnvelope size={20} className="sm:w-6 sm:h-6 md:w-7 md:h-7" />
                            </div>
                            <div className="flex-1">
                                <p className="text-xs sm:text-sm text-[#6B5844] mb-1 sm:mb-2 font-bold uppercase tracking-wider">Email</p>
                                <p className="font-semibold text-sm sm:text-base md:text-lg text-[#2C2416] group-hover:text-[#0D9488] transition-colors break-all">naylasyafiraaa25@gmail.com</p>
                            </div>
                        </a>
                    </div>

                    {/* Contact Form */}
                    <form className="space-y-4 sm:space-y-6 glow-card p-6 sm:p-8 md:p-10 rounded-2xl sm:rounded-3xl shadow-xl border-2 border-[#E7DED0]">
                        <div className="space-y-2">
                            <label htmlFor="name" className="block text-xs sm:text-sm font-bold text-[#2C2416] mb-2 uppercase tracking-wider">Nama</label>
                            <input
                                type="text"
                                id="name"
                                className="w-full bg-white border-2 border-[#E7DED0] rounded-lg sm:rounded-xl px-4 sm:px-5 py-2.5 sm:py-3.5 text-sm sm:text-base text-[#2C2416] focus:outline-none focus:border-[#D97706] focus:ring-2 focus:ring-[#D97706]/20 transition-all placeholder:text-[#6B5844]/50"
                                placeholder="Nama Anda"
                            />
                        </div>

                        <div className="space-y-2">
                            <label htmlFor="email" className="block text-xs sm:text-sm font-bold text-[#2C2416] mb-2 uppercase tracking-wider">Email</label>
                            <input
                                type="email"
                                id="email"
                                className="w-full bg-white border-2 border-[#E7DED0] rounded-lg sm:rounded-xl px-4 sm:px-5 py-2.5 sm:py-3.5 text-sm sm:text-base text-[#2C2416] focus:outline-none focus:border-[#0D9488] focus:ring-2 focus:ring-[#0D9488]/20 transition-all placeholder:text-[#6B5844]/50"
                                placeholder="email@contoh.com"
                            />
                        </div>

                        <div className="space-y-2">
                            <label htmlFor="message" className="block text-xs sm:text-sm font-bold text-[#2C2416] mb-2 uppercase tracking-wider">Pesan</label>
                            <textarea
                                id="message"
                                rows={4}
                                className="w-full bg-white border-2 border-[#E7DED0] rounded-lg sm:rounded-xl px-4 sm:px-5 py-2.5 sm:py-3.5 text-sm sm:text-base text-[#2C2416] focus:outline-none focus:border-[#D97706] focus:ring-2 focus:ring-[#D97706]/20 transition-all placeholder:text-[#6B5844]/50 resize-none"
                                placeholder="Tulis pesan Anda..."
                            ></textarea>
                        </div>

                        <button type="submit" className="w-full btn-primary py-3 sm:py-4 rounded-lg sm:rounded-xl font-bold text-base sm:text-lg hover:shadow-xl transition-all">
                            Kirim Pesan
                        </button>
                    </form>
                </div>
            </div>
        </section>
    );
}
