import Image from 'next/image';
import Link from 'next/link';

export default function Hero() {
    return (
        <section id="beranda" className="min-h-screen flex items-center pt-16 sm:pt-20 relative overflow-hidden bg-gradient-to-br from-[#fee5c8] via-[#FFF3E6] to-[#FFEFD5]">
            {/* Background Elements */}
            <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-gradient-to-br from-[#D97706]/10 to-transparent rounded-full blur-3xl" />
            <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-gradient-to-tr from-[#0D9488]/10 to-transparent rounded-full blur-3xl" />

            {/* Decorative dots */}
            <div className="absolute top-40 right-20 w-2 h-2 bg-[#D97706] rounded-full animate-pulse"></div>
            <div className="absolute top-60 right-40 w-3 h-3 bg-[#0D9488] rounded-full animate-pulse delay-100"></div>
            <div className="absolute bottom-40 left-20 w-2 h-2 bg-[#EA580C] rounded-full animate-pulse delay-200"></div>

            <div className="container mx-auto px-4 sm:px-6 grid md:grid-cols-2 gap-8 md:gap-12 items-center relative z-10">
                <div className="space-y-4 sm:space-y-6 md:space-y-8 animate-fade-in-up">
                    <div className="inline-block">
                        <h2 className="text-[#0D9488] font-bold tracking-wider uppercase text-xs sm:text-sm bg-[#0D9488]/10 px-3 sm:px-4 py-1.5 sm:py-2 rounded-full">
                            Portofolio Profesional
                        </h2>
                    </div>

                    <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-tight text-[#2C2416]">
                        Nayla <br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#D97706] via-[#EA580C] to-[#DC2626]">
                            Syafira
                        </span>
                    </h1>

                    <p className="text-lg sm:text-xl md:text-2xl text-[#6B5844] font-medium">
                        Siswa DPIB - SMKN 2 Surabaya
                    </p>

                    <p className="text-[#2C2416] text-base sm:text-lg max-w-lg leading-relaxed">
                        Passionate dalam menciptakan desain arsitektur dan furniture yang fungsional dan estetis.
                        Berpengalaman dalam AutoCAD, SketchUp, dan penyusunan RAB.
                        Mengubah ide menjadi visualisasi 3D yang memukau dengan detail dan presisi tinggi.
                    </p>

                    <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 pt-2 sm:pt-4">
                        <Link href="#portofolio" className="px-6 sm:px-8 py-3 sm:py-4 rounded-full btn-primary font-medium text-sm sm:text-base shadow-lg hover:shadow-xl text-center">
                            Lihat Portofolio
                        </Link>
                        <Link href="#kontak" className="px-6 sm:px-8 py-3 sm:py-4 rounded-full btn-secondary font-medium text-sm sm:text-base text-center">
                            Kontak Saya
                        </Link>
                    </div>
                </div>

                <div className="relative h-[350px] sm:h-[400px] md:h-[450px] lg:h-[550px] w-full rounded-2xl sm:rounded-3xl overflow-hidden shadow-2xl group border-2 sm:border-4 border-white">
                    <Image
                        src="https://picsum.photos/500/600?grayscale&random=1"
                        alt="Architecture Design"
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#2C2416]/80 via-[#2C2416]/20 to-transparent" />
                    <div className="absolute bottom-6 sm:bottom-8 left-6 sm:left-8 right-6 sm:right-8">
                        <p className="text-xs sm:text-sm text-[#FF9F43] font-semibold mb-1 sm:mb-2 uppercase tracking-wider">Featured Project</p>
                        <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-white">Desain Rumah Minimalis Modern</h3>
                    </div>
                </div>
            </div>
        </section>
    );
}
