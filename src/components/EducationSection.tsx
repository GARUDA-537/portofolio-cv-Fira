import { FaGraduationCap } from 'react-icons/fa';

export default function EducationSection() {
    return (
        <section className="py-16 sm:py-20 md:py-24 bg-[#fee5c8]">
            <div className="container mx-auto px-4 sm:px-6">
                {/* Section Header */}
                <div className="text-center mb-10 sm:mb-12 md:mb-16">
                    <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-3 sm:mb-4 text-[#2C2416]">
                        Pendidikan
                    </h2>
                    <div className="w-20 sm:w-24 h-0.5 sm:h-1 bg-gradient-to-r from-[#D97706] to-[#0D9488] mx-auto rounded-full"></div>
                    <p className="text-sm sm:text-base text-[#6B5844] mt-3 sm:mt-4 max-w-2xl mx-auto px-4">
                        Latar belakang pendidikan dan kompetensi yang saya miliki
                    </p>
                </div>

                <div className="max-w-4xl mx-auto">
                    <div className="glow-card p-6 sm:p-8 md:p-10 lg:p-12 rounded-2xl sm:rounded-3xl relative overflow-hidden border-2 border-[#E7DED0] shadow-xl">
                        {/* Background Icon */}
                        <div className="absolute top-0 right-0 p-12 text-[#D97706]/10">
                            <FaGraduationCap size={150} />
                        </div>

                        <div className="relative z-10 space-y-6 sm:space-y-8">
                            {/* School Info */}
                            <div>
                                <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-[#2C2416] mb-2 sm:mb-3">SMK NEGERI 2 SURABAYA</h3>
                                <div className="inline-block bg-gradient-to-r from-[#0D9488] to-[#0F766E] text-white px-3 sm:px-4 py-1.5 sm:py-2 rounded-full font-semibold text-xs sm:text-sm">
                                    Juli 2024 – Sekarang
                                </div>
                            </div>

                            {/* Major */}
                            <div className="bg-gradient-to-r from-[#D97706]/5 to-transparent p-4 sm:p-6 rounded-xl border-l-4 border-[#D97706]">
                                <p className="text-[#6B5844] text-xs sm:text-sm uppercase tracking-wider mb-2 font-bold">Jurusan</p>
                                <p className="text-base sm:text-lg md:text-xl font-bold text-[#2C2416]">Desain Permodelan dan Informasi Bangunan (DPIB)</p>
                            </div>

                            {/* Competencies */}
                            <div>
                                <p className="text-[#6B5844] text-xs sm:text-sm uppercase tracking-wider mb-3 sm:mb-4 font-bold flex items-center gap-2">
                                    <span className="w-6 sm:w-8 h-0.5 bg-[#0D9488]"></span>
                                    Kompetensi Utama
                                </p>
                                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
                                    {[
                                        'Perencanaan, pelaksanaan, & pemeliharaan bangunan',
                                        'Rancangan Anggaran Biaya (RAB)',
                                        'Gambar Kerja Konstruksi Gedung',
                                        'Konstruksi Jalan & Jembatan',
                                        'Prakarya dan Kewirausahaan'
                                    ].map((item, index) => (
                                        <li key={index} className="flex items-start gap-2 sm:gap-3 text-[#2C2416] bg-white p-3 sm:p-4 rounded-xl shadow-sm hover:shadow-md transition-shadow">
                                            <span className="w-1.5 sm:w-2 h-1.5 sm:h-2 rounded-full bg-gradient-to-r from-[#D97706] to-[#EA580C] flex-shrink-0 mt-1.5"></span>
                                            <span className="font-medium text-sm sm:text-base">{item}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
