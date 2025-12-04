import { FaTools, FaBrain, FaMicrophone, FaChalkboardTeacher, FaLightbulb, FaUsers, FaClipboardList, FaAward, FaProjectDiagram, FaComments, FaFileAlt } from 'react-icons/fa';

export default function SkillsSection() {
    const hardSkills = [
        "AutoCAD 2D (denah, tampak, potongan, detail)",
        "SketchUp Pro (furniture & bangunan)",
        "Microsoft Office (surat, RAB, laporan)",
        "Gambar kerja manual (presisi dan teliti)",
        "Membaca gambar teknik (simbol, skala, elemen dalam gambar teknik)",
        "Pengukuran & survey (Waterpass, roll meter, pencatatan hasil bidikan)",
        "Desain interior (kitchen set, furniture custom)"
    ];

    const softSkills = [
        { name: "Public Speaking", icon: FaMicrophone },
        { name: "Presentation Skill", icon: FaChalkboardTeacher },
        { name: "Analytical & Critical Thinking", icon: FaLightbulb },
        { name: "Teamwork", icon: FaUsers },
        { name: "Administration", icon: FaClipboardList },
        { name: "Reliable", icon: FaAward },
        { name: "Komunikasi Klien", icon: FaComments },
        { name: "Manajemen Proyek", icon: FaProjectDiagram },
        { name: "Dokumentasi Teknis", icon: FaFileAlt }
    ];

    return (
        <section id="skill" className="py-16 sm:py-20 md:py-24 bg-[#fee5c8] relative overflow-hidden">
            {/* Background Decoration */}
            <div className="absolute top-0 right-0 w-64 sm:w-96 h-64 sm:h-96 bg-gradient-to-br from-[#D97706]/5 to-transparent rounded-full blur-3xl"></div>
            <div className="absolute bottom-0 left-0 w-64 sm:w-96 h-64 sm:h-96 bg-gradient-to-tr from-[#0D9488]/5 to-transparent rounded-full blur-3xl"></div>

            <div className="container mx-auto px-4 sm:px-6 max-w-7xl relative z-10">
                {/* Section Header */}
                <div className="text-center mb-10 sm:mb-12 md:mb-16">
                    <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-3 sm:mb-4 text-[#2C2416]">
                        Keahlian Saya
                    </h2>
                    <div className="w-20 sm:w-24 h-0.5 sm:h-1 bg-gradient-to-r from-[#D97706] to-[#0D9488] mx-auto rounded-full"></div>
                    <p className="text-sm sm:text-base text-[#6B5844] mt-3 sm:mt-4 max-w-2xl mx-auto px-4">
                        Kombinasi hard skills dan soft skills yang saya miliki
                    </p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 max-w-6xl mx-auto">
                    {/* Hard Skills */}
                    <div className="space-y-4 sm:space-y-6">
                        {/* Header Card */}
                        <div className="bg-gradient-to-br from-[#0D9488] to-[#0F766E] p-5 sm:p-6 rounded-xl sm:rounded-2xl shadow-xl">
                            <div className="flex items-center gap-3 sm:gap-4">
                                <div className="p-3 sm:p-4 rounded-lg sm:rounded-xl bg-white/20 backdrop-blur text-white">
                                    <FaTools size={24} className="sm:w-8 sm:h-8" />
                                </div>
                                <div>
                                    <h3 className="text-2xl sm:text-3xl font-bold text-white">Hard Skills</h3>
                                    <p className="text-teal-50 text-sm sm:text-base">Technical expertise</p>
                                </div>
                            </div>
                        </div>

                        {/* Skills List */}
                        <div className="space-y-3 sm:space-y-4">
                            {hardSkills.map((skill, index) => (
                                <div key={index} className="glow-card p-4 sm:p-5 rounded-lg sm:rounded-xl border-l-4 border-[#0D9488] group hover:border-l-[6px] transition-all">
                                    <div className="flex items-start gap-2 sm:gap-3">
                                        <div className="w-1.5 sm:w-2 h-1.5 sm:h-2 rounded-full bg-[#0D9488] group-hover:scale-150 transition-transform mt-1.5 flex-shrink-0"></div>
                                        <p className="font-semibold text-sm sm:text-base text-[#2C2416] group-hover:text-[#0D9488] transition-colors">
                                            {skill}
                                        </p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Soft Skills */}
                    <div className="space-y-4 sm:space-y-6">
                        {/* Header Card */}
                        <div className="bg-gradient-to-br from-[#D97706] to-[#EA580C] p-5 sm:p-6 rounded-xl sm:rounded-2xl shadow-xl">
                            <div className="flex items-center gap-3 sm:gap-4">
                                <div className="p-3 sm:p-4 rounded-lg sm:rounded-xl bg-white/20 backdrop-blur text-white">
                                    <FaBrain size={24} className="sm:w-8 sm:h-8" />
                                </div>
                                <div>
                                    <h3 className="text-2xl sm:text-3xl font-bold text-white">Soft Skills</h3>
                                    <p className="text-orange-50 text-sm sm:text-base">Personal qualities</p>
                                </div>
                            </div>
                        </div>

                        {/* Skills Grid */}
                        <div className="grid grid-cols-2 gap-3 sm:gap-4">
                            {softSkills.map((skill, index) => {
                                const IconComponent = skill.icon;
                                return (
                                    <div key={index} className="glow-card p-4 sm:p-5 md:p-6 rounded-lg sm:rounded-xl text-center group hover:bg-gradient-to-br hover:from-[#D97706]/10 hover:to-[#EA580C]/10 transition-all">
                                        <div className="w-12 h-12 sm:w-14 sm:h-14 mx-auto mb-2 sm:mb-3 rounded-full bg-gradient-to-br from-[#D97706]/20 to-[#EA580C]/20 flex items-center justify-center group-hover:scale-110 transition-transform">
                                            <IconComponent className="text-[#D97706] text-lg sm:text-xl group-hover:text-[#EA580C] transition-colors" />
                                        </div>
                                        <p className="font-semibold text-[#2C2416] text-xs sm:text-sm leading-tight">
                                            {skill.name}
                                        </p>
                                    </div>
                                );
                            })}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
