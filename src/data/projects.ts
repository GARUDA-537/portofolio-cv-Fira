export interface Project {
    id: number;
    title: string;
    category: string;
    description: string;
    image: string;
    tools: string[];
    year: string;
    featured?: boolean;
}

export const projects: Project[] = [
    {
        id: 1,
        title: "Desain Rumah Minimalis Modern",
        category: "Arsitektur Residensial",
        description: "Desain rumah minimalis 2 lantai dengan konsep modern tropis. Menggunakan material kayu dan kaca untuk menciptakan kesan hangat namun tetap elegan. Dilengkapi dengan taman indoor dan pencahayaan alami maksimal.",
        image: "/projects/rumah-minimalis.jpg",
        tools: ["AutoCAD", "SketchUp", "V-Ray"],
        year: "2024",
        featured: true
    },
    {
        id: 2,
        title: "Furniture Set Ruang Tamu",
        category: "Desain Furniture",
        description: "Desain set furniture ruang tamu dengan konsep Scandinavian. Terdiri dari sofa, meja kopi, dan rak display dengan material kayu jati dan finishing natural. Desain 3D lengkap dengan detail konstruksi.",
        image: "/projects/furniture-set.jpg",
        tools: ["SketchUp", "AutoCAD", "Lumion"],
        year: "2024",
        featured: true
    },
    {
        id: 3,
        title: "RAB Gedung Perkantoran 3 Lantai",
        category: "Rencana Anggaran Biaya",
        description: "Penyusunan Rencana Anggaran Biaya (RAB) untuk pembangunan gedung perkantoran 3 lantai dengan luas bangunan 450m². Mencakup perhitungan volume, analisa harga satuan, dan total anggaran proyek.",
        image: "/projects/rab-gedung.jpg",
        tools: ["Microsoft Excel", "AutoCAD"],
        year: "2024",
        featured: false
    },
    {
        id: 4,
        title: "Desain Interior Cafe Modern",
        category: "Desain Interior",
        description: "Konsep interior cafe dengan tema industrial modern. Menggunakan kombinasi material beton ekspos, kayu, dan metal. Dilengkapi dengan layout furniture yang efisien dan pencahayaan ambient yang nyaman.",
        image: "/projects/cafe-interior.jpg",
        tools: ["SketchUp", "V-Ray", "AutoCAD"],
        year: "2023",
        featured: true
    },
    {
        id: 5,
        title: "Gambar Kerja Renovasi Rumah",
        category: "Gambar Teknik",
        description: "Gambar kerja lengkap untuk renovasi rumah tinggal meliputi denah, tampak, potongan, detail konstruksi, dan rencana MEP (Mechanical, Electrical, Plumbing). Sesuai standar SNI dan siap untuk pelaksanaan.",
        image: "/projects/gambar-kerja.jpg",
        tools: ["AutoCAD"],
        year: "2023",
        featured: false
    },
    {
        id: 6,
        title: "Meja Belajar Multifungsi",
        category: "Desain Furniture",
        description: "Desain meja belajar multifungsi dengan storage terintegrasi. Cocok untuk ruang kecil dengan sistem lipat dan rak modular. Material plywood dengan finishing HPL warna natural oak.",
        image: "/projects/meja-belajar.jpg",
        tools: ["SketchUp", "AutoCAD"],
        year: "2023",
        featured: false
    },
    {
        id: 7,
        title: "Desain Taman Minimalis",
        category: "Landscape Design",
        description: "Perencanaan taman minimalis untuk area depan rumah seluas 50m². Menggunakan konsep zen garden dengan elemen air, batu alam, dan tanaman tropis. Dilengkapi dengan pencahayaan landscape.",
        image: "/projects/taman-minimalis.jpg",
        tools: ["SketchUp", "Lumion"],
        year: "2023",
        featured: false
    },
    {
        id: 8,
        title: "Lemari Pakaian Custom",
        category: "Desain Furniture",
        description: "Desain lemari pakaian custom dengan sistem sliding door dan interior organizer. Dimensi disesuaikan dengan ruang kamar tidur. Material MDF dengan finishing duco putih dan aksen kayu.",
        image: "/projects/lemari-pakaian.jpg",
        tools: ["SketchUp", "AutoCAD"],
        year: "2024",
        featured: false
    }
];

// Filter functions
export const getFeaturedProjects = () => projects.filter(p => p.featured);
export const getProjectsByCategory = (category: string) => projects.filter(p => p.category === category);
export const getProjectById = (id: number) => projects.find(p => p.id === id);
export const getAllCategories = () => [...new Set(projects.map(p => p.category))];
