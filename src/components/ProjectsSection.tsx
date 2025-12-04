'use client';

import { projects } from '@/data/projects';

export default function ProjectsSection() {
    return (
        <section id="portofolio" className="py-16 sm:py-20 lg:py-24 bg-gradient-to-b from-[#FEFCF9] to-[#FFF3E6] relative overflow-hidden">
            {/* Background Decorations */}
            <div className="absolute top-20 right-10 w-64 h-64 bg-gradient-to-br from-[#D97706]/5 to-transparent rounded-full blur-3xl" />
            <div className="absolute bottom-20 left-10 w-64 h-64 bg-gradient-to-tr from-[#0D9488]/5 to-transparent rounded-full blur-3xl" />

            <div className="container mx-auto px-4 sm:px-6 relative z-10">
                {/* Section Header */}
                <div className="text-center mb-12 sm:mb-16 animate-fade-in-up">
                    <div className="inline-block mb-4">
                        <h2 className="text-[#0D9488] font-bold tracking-wider uppercase text-xs sm:text-sm bg-[#0D9488]/10 px-4 py-2 rounded-full">
                            Karya Saya
                        </h2>
                    </div>
                    <h3 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#2C2416] mb-4">
                        Portofolio <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#D97706] to-[#EA580C]">Projects</span>
                    </h3>
                    <p className="text-[#6B5844] text-base sm:text-lg max-w-2xl mx-auto">
                        Koleksi project desain arsitektur, furniture, dan gambar teknik yang telah saya kerjakan dengan detail dan presisi tinggi.
                    </p>
                </div>

                {/* Projects Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
                    {projects.map((project, index) => (
                        <div
                            key={project.id}
                            className="group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 animate-fade-in-up border border-[#E7DED0]"
                            style={{ animationDelay: `${index * 100}ms` }}
                        >
                            {/* Project Info */}
                            <div className="p-6">
                                <div className="flex items-center justify-between mb-3">
                                    <span className="text-xs font-semibold text-[#0D9488] bg-[#0D9488]/10 px-3 py-1 rounded-full">
                                        {project.category}
                                    </span>
                                    <span className="text-xs text-[#6B5844] font-medium">{project.year}</span>
                                </div>

                                <h4 className="text-xl font-bold text-[#2C2416] mb-3 group-hover:text-[#D97706] transition-colors">
                                    {project.title}
                                </h4>

                                <p className="text-[#6B5844] text-sm mb-4 line-clamp-3">
                                    {project.description}
                                </p>

                                {/* Tools Used */}
                                <div className="flex flex-wrap gap-2 mb-4">
                                    {project.tools.map((tool) => (
                                        <span
                                            key={tool}
                                            className="text-xs bg-[#FFF3E6] text-[#D97706] px-2 py-1 rounded-md font-medium border border-[#E7DED0]"
                                        >
                                            {tool}
                                        </span>
                                    ))}
                                </div>

                                {/* View Details Button */}
                                <a
                                    href={project.link}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="block w-full py-2.5 rounded-lg bg-gradient-to-r from-[#D97706] to-[#EA580C] text-white font-medium text-sm hover:shadow-lg transition-all duration-300 group-hover:scale-105 text-center"
                                >
                                    Lihat Detail
                                </a>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
