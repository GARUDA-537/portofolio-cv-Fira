'use client';

import { useState } from 'react';
import Image from 'next/image';
import { projects, Project } from '@/data/projects';
import ProjectModal from './ProjectModal';

export default function Projects() {
    const [selectedProject, setSelectedProject] = useState<Project | null>(null);
    const [filter, setFilter] = useState<'Semua' | 'Bangunan' | 'Furniture'>('Semua');

    const filteredProjects = filter === 'Semua'
        ? projects
        : projects.filter(p => p.category === filter);

    return (
        <section id="portofolio" className="py-16 sm:py-20 md:py-24 bg-gradient-to-b from-[#FFEFD5] to-[#FFF3E6] relative overflow-hidden">
            {/* Background Decorations */}
            <div className="absolute top-20 left-10 w-72 h-72 bg-[#D97706]/5 rounded-full blur-3xl"></div>
            <div className="absolute bottom-20 right-10 w-96 h-96 bg-[#0D9488]/5 rounded-full blur-3xl"></div>

            <div className="container mx-auto px-4 sm:px-6 relative z-10">
                {/* Section Header */}
                <div className="text-center mb-12 md:mb-16 space-y-4 animate-fade-in-up">
                    <div className="inline-block">
                        <span className="text-[#0D9488] font-bold tracking-wider uppercase text-xs sm:text-sm bg-[#0D9488]/10 px-4 py-2 rounded-full">
                            Portfolio
                        </span>
                    </div>
                    <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#2C2416]">
                        Proyek yang Telah <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#D97706] to-[#DC2626]">Dikerjakan</span>
                    </h2>
                    <p className="text-[#6B5844] text-base sm:text-lg max-w-2xl mx-auto">
                        Kumpulan proyek desain bangunan dan furniture yang telah saya kerjakan dengan AutoCAD dan SketchUp
                    </p>
                </div>

                {/* Filter Buttons */}
                <div className="flex flex-wrap justify-center gap-3 mb-8 md:mb-12">
                    {(['Semua', 'Bangunan', 'Furniture'] as const).map((category) => (
                        <button
                            key={category}
                            onClick={() => setFilter(category)}
                            className={`px-6 py-2.5 rounded-full font-medium text-sm transition-all duration-300 ${filter === category
                                    ? 'bg-gradient-to-r from-[#D97706] to-[#DC2626] text-white shadow-lg scale-105'
                                    : 'bg-white text-[#6B5844] hover:bg-[#0D9488]/10 hover:text-[#0D9488] border border-[#6B5844]/20'
                                }`}
                        >
                            {category}
                        </button>
                    ))}
                </div>

                {/* Projects Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
                    {filteredProjects.map((project, index) => (
                        <div
                            key={project.id}
                            className="group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 animate-fade-in-up border-2 border-white hover:border-[#D97706]/30"
                            style={{ animationDelay: `${index * 100}ms` }}
                        >
                            {/* Project Image */}
                            <div className="relative h-56 overflow-hidden">
                                <Image
                                    src={project.thumbnail}
                                    alt={project.title}
                                    fill
                                    className="object-cover group-hover:scale-110 transition-transform duration-700"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-[#2C2416]/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                                {/* Category Badge */}
                                <div className="absolute top-3 left-3">
                                    <span className={`px-3 py-1 rounded-full text-xs font-semibold ${project.category === 'Bangunan'
                                            ? 'bg-[#0D9488] text-white'
                                            : 'bg-[#EA580C] text-white'
                                        }`}>
                                        {project.category}
                                    </span>
                                </div>

                                {/* Year Badge */}
                                <div className="absolute top-3 right-3">
                                    <span className="px-3 py-1 bg-white/90 backdrop-blur-sm text-[#2C2416] rounded-full text-xs font-semibold">
                                        {project.year}
                                    </span>
                                </div>
                            </div>

                            {/* Project Info */}
                            <div className="p-5 space-y-3">
                                <h3 className="text-xl font-bold text-[#2C2416] group-hover:text-[#D97706] transition-colors line-clamp-2">
                                    {project.title}
                                </h3>
                                <p className="text-[#6B5844] text-sm line-clamp-2 leading-relaxed">
                                    {project.description}
                                </p>

                                {/* Software Tags */}
                                <div className="flex flex-wrap gap-2 pt-2">
                                    {project.software.map((sw, idx) => (
                                        <span
                                            key={idx}
                                            className="px-2.5 py-1 bg-[#FFF3E6] text-[#D97706] rounded-md text-xs font-medium"
                                        >
                                            {sw}
                                        </span>
                                    ))}
                                </div>

                                {/* View Detail Button */}
                                <button
                                    onClick={() => setSelectedProject(project)}
                                    className="w-full mt-4 px-4 py-2.5 bg-gradient-to-r from-[#D97706] to-[#DC2626] text-white rounded-xl font-medium text-sm hover:shadow-lg transition-all duration-300 hover:scale-105 active:scale-95"
                                >
                                    Lihat Detail
                                </button>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Empty State */}
                {filteredProjects.length === 0 && (
                    <div className="text-center py-16">
                        <p className="text-[#6B5844] text-lg">Tidak ada proyek dalam kategori ini</p>
                    </div>
                )}
            </div>

            {/* Project Modal */}
            {selectedProject && (
                <ProjectModal
                    project={selectedProject}
                    onClose={() => setSelectedProject(null)}
                />
            )}
        </section>
    );
}
