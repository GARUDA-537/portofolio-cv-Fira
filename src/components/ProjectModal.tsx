'use client';

import { Project } from '@/data/projects';
import Image from 'next/image';
import { FiX, FiTool } from 'react-icons/fi';
import { useEffect } from 'react';

interface ProjectModalProps {
    project: Project;
    onClose: () => void;
}

export default function ProjectModal({ project, onClose }: ProjectModalProps) {
    // Prevent scroll when modal is open
    useEffect(() => {
        document.body.style.overflow = 'hidden';
        return () => {
            document.body.style.overflow = 'unset';
        };
    }, []);

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm animate-fade-in" onClick={onClose}>
            <div className="relative bg-[#FFF3E6] rounded-3xl max-w-4xl w-full max-h-[90vh] overflow-y-auto shadow-2xl animate-scale-in" onClick={(e) => e.stopPropagation()}>
                {/* Close Button */}
                <button
                    onClick={onClose}
                    className="absolute top-4 right-4 z-10 p-2 bg-white/90 backdrop-blur-sm rounded-full hover:bg-[#DC2626] hover:text-white transition-colors shadow-lg"
                    aria-label="Close"
                >
                    <FiX className="w-6 h-6" />
                </button>

                {/* Header Image */}
                <div className="relative h-64 md:h-96 w-full rounded-t-3xl overflow-hidden">
                    <Image
                        src={project.thumbnail}
                        alt={project.title}
                        fill
                        className="object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#2C2416]/80 to-transparent" />
                    <div className="absolute bottom-6 left-6 right-6">
                        <span className="inline-block px-3 py-1 bg-[#D97706] text-white text-xs font-semibold rounded-full mb-2">
                            {project.category}
                        </span>
                        <h2 className="text-3xl md:text-4xl font-bold text-white">{project.title}</h2>
                        <p className="text-[#FF9F43] font-medium mt-1">{project.year}</p>
                    </div>
                </div>

                {/* Content */}
                <div className="p-6 md:p-8 space-y-6">
                    {/* Description */}
                    <div>
                        <h3 className="text-xl font-bold text-[#2C2416] mb-3">Deskripsi Proyek</h3>
                        <p className="text-[#6B5844] leading-relaxed">{project.detailedDescription}</p>
                    </div>

                    {/* Software Used */}
                    <div>
                        <h3 className="text-xl font-bold text-[#2C2416] mb-3 flex items-center gap-2">
                            <FiTool className="text-[#D97706]" />
                            Software yang Digunakan
                        </h3>
                        <div className="flex flex-wrap gap-2">
                            {project.software.map((sw, index) => (
                                <span
                                    key={index}
                                    className="px-4 py-2 bg-[#0D9488]/10 text-[#0D9488] rounded-full font-medium text-sm border border-[#0D9488]/20"
                                >
                                    {sw}
                                </span>
                            ))}
                        </div>
                    </div>

                    {/* Features */}
                    <div>
                        <h3 className="text-xl font-bold text-[#2C2416] mb-3">Yang Dihasilkan</h3>
                        <ul className="space-y-2">
                            {project.features.map((feature, index) => (
                                <li key={index} className="flex items-start gap-2 text-[#6B5844]">
                                    <span className="text-[#D97706] mt-1">✓</span>
                                    <span>{feature}</span>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Image Gallery */}
                    <div>
                        <h3 className="text-xl font-bold text-[#2C2416] mb-3">Galeri Gambar</h3>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            {project.images.map((image, index) => (
                                <div key={index} className="relative h-48 rounded-xl overflow-hidden border-2 border-white shadow-lg group">
                                    <Image
                                        src={image}
                                        alt={`${project.title} - Image ${index + 1}`}
                                        fill
                                        className="object-cover group-hover:scale-110 transition-transform duration-500"
                                    />
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
