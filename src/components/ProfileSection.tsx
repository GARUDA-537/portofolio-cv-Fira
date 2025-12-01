export default function ProfileSection() {
    return (
        <section id="profil" className="py-16 sm:py-20 md:py-24 bg-gradient-to-b from-[#FFF3E6] to-[#fee5c8]">
            <div className="container mx-auto px-4 sm:px-6">
                <div className="max-w-5xl mx-auto text-center space-y-8 sm:space-y-10 md:space-y-12">
                    {/* Section Header */}
                    <div className="space-y-3 sm:space-y-4">
                        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#2C2416] relative inline-block">
                            Profil Saya
                            <div className="w-24 sm:w-32 h-1 sm:h-1.5 bg-gradient-to-r from-[#D97706] to-[#EA580C] mx-auto mt-3 sm:mt-4 rounded-full"></div>
                        </h2>
                    </div>

                    {/* Profile Card */}
                    <div className="glow-card p-6 sm:p-8 md:p-10 lg:p-14 rounded-2xl sm:rounded-3xl text-left shadow-xl border-2 border-[#E7DED0] relative overflow-hidden">
                        {/* Decorative corner elements */}
                        <div className="absolute top-0 right-0 w-40 h-40 bg-gradient-to-br from-[#D97706]/5 to-transparent rounded-bl-full"></div>
                        <div className="absolute bottom-0 left-0 w-40 h-40 bg-gradient-to-tr from-[#0D9488]/5 to-transparent rounded-tr-full"></div>

                        <div className="relative z-10">
                            <div className="w-12 sm:w-16 h-0.5 sm:h-1 bg-gradient-to-r from-[#D97706] to-[#EA580C] mb-4 sm:mb-6 rounded-full"></div>
                            <p className="text-base sm:text-lg md:text-xl text-[#2C2416] leading-relaxed sm:leading-loose">
                                "Seseorang yang mahir dalam desain bangunan sehingga saya sebagai pelajar dari <span className="text-[#2C2416] font-bold bg-[#D97706]/10 px-2 py-1 rounded">SMK NEGERI 2 Surabaya</span> mengambil jurusan Desain Permodelan Dan Informasi Bangunan (DPIB). Ketertarikan pada desain bangunan dan mebel ini mulai terbiasa pada saat membuat gambar teknik manual maupun digital dengan memanfaatkan teknologi yaitu <span className="text-[#0D9488] font-bold">AutoCAD, SketchUp dan Microsoft Office</span>. Selain itu saya juga mahir dalam public speaking melalui ekstrakulikuler jurnalis. Teliti, disiplin, tanggung jawab dan siap mendukung pekerjaan proyek dan dokumentasi teknis secara rapi dan efisien. Termotivasi untuk berkontribusi sebagai peserta PKL dengan semangat belajar (fast learning) dan sikap profesional."
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
