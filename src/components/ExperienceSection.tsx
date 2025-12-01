import { FaBriefcase } from 'react-icons/fa';

export default function ExperienceSection() {
    const experiences = [
        "Membuat gambar kerja bangunan (denah, tampak, potongan, detail kusen, sumur resapan, tangga) menggunakan AutoCAD.",
        "Membuat gambar perencanaan & perbaikan jalan.",
        "Menyusun laporan daftar pekerjaan bangunan menggunakan Microsoft Excel.",
        "Mengikuti pelatihan sederhana tentang bagaimana bersikap profesional saat berada di industri.",
        "Freelancer: jasa desain 2D & 3D furniture dan bangunan lengkap dengan RAB.",
        "Mengoperasikan alat Waterpass Auto Level dan pendataan bidikan.",
        "Membuat gambar kerja manual di kertas A3.",
        "Membuat produk mebel “door decoration” dari bahan bangunan."
    ];

    return (
        <section id="portofolio" className="py-16 sm:py-20 md:py-24 bg-gradient-to-b from-[#fee5c8] to-[#FFF3E6]">
            <div className="container mx-auto px-4 sm:px-6 max-w-7xl">
                {/* Section Header */}
                <div className="text-center mb-10 sm:mb-12 md:mb-16">
                    <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-3 sm:mb-4 text-[#2C2416]">
                        Pengalaman & Proyek
                    </h2>
                    <div className="w-20 sm:w-24 h-0.5 sm:h-1 bg-gradient-to-r from-[#D97706] to-[#EA580C] mx-auto rounded-full"></div>
                    <p className="text-sm sm:text-base text-[#6B5844] mt-3 sm:mt-4 max-w-2xl mx-auto px-4">
                        Pengalaman profesional dan proyek yang telah saya kerjakan
                    </p>
                </div>

                {/* Experience Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5 md:gap-6 max-w-6xl mx-auto">
                    {experiences.map((exp, index) => (
                        <div key={index} className="glow-card p-5 sm:p-6 md:p-8 rounded-xl sm:rounded-2xl flex gap-3 sm:gap-4 md:gap-5 items-start group hover:shadow-lg">
                            {/* Number Badge */}
                            <div className="flex-shrink-0 w-10 h-10 sm:w-12 sm:h-12 rounded-lg sm:rounded-xl bg-gradient-to-br from-[#D97706] to-[#EA580C] text-white flex items-center justify-center font-bold text-base sm:text-lg shadow-md group-hover:scale-110 transition-transform">
                                {index + 1}
                            </div>

                            {/* Content */}
                            <div className="flex-1">
                                <div className="flex items-start gap-2 sm:gap-3 mb-1 sm:mb-2">
                                    <div className="text-[#D97706] group-hover:text-[#EA580C] transition-colors mt-0.5 sm:mt-1">
                                        <FaBriefcase size={18} className="sm:w-5 sm:h-5" />
                                    </div>
                                </div>
                                <p className="text-[#2C2416] leading-relaxed text-sm sm:text-base">
                                    {exp}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
