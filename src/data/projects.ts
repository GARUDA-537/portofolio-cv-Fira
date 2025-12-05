export interface Project {
    id: number;
    title: string;
    category: string;
    description: string;
    image: string;
    tools: string[];
    year: string;
    featured?: boolean;
    link: string;
    tujuan: string;
    peran: string;
    hasil: string;
}

export const projects: Project[] = [
    {
        id: 1,
        title: "Denah Rumah 2 Lantai",
        category: "Gambar Teknik",
        description: "Merancang tata ruang fungsional dan efisiensi penggunaan lahan dengan denah detail lantai 1 & lantai 2.",
        image: "/projects/denah-rumah.jpg",
        tools: ["AutoCAD"],
        year: "2025",
        featured: true,
        link: "https://drive.google.com/file/d/1E3ytta1YKs7QGBNU3Z2SkGUI4gmYdGRM/view?usp=drive_link",
        tujuan: "Merancang tata ruang fungsional dan efisiensi penggunaan lahan.",
        peran: "Membuat sketsa, denah detail lantai 1 & lantai 2.",
        hasil: "Denah final dengan ruang publik & privat."
    },
    {
        id: 2,
        title: "Rencana Pondasi Rumah Tinggal 2 Lantai",
        category: "Struktur Bangunan",
        description: "Merancang pondasi bangunan lengkap dengan pondasi luar, pondasi dalam dan pondasi plat setempat.",
        image: "/projects/pondasi.jpg",
        tools: ["AutoCAD"],
        year: "2025",
        featured: true,
        link: "https://drive.google.com/file/d/1sXYVsQFUbsf17NrcILGXRDT4dvp3hJAk/view?usp=drive_link",
        tujuan: "Merancang pondasi bangunan lengkap dengan pondasi luar, pondasi dalam dan pondasi plat setempat.",
        peran: "Menganalisis kebutuhan struktur desain beban bangunan, menggambar detail pondasi.",
        hasil: "Gambar kerja pondasi lengkap dengan ukuran dan keterangan."
    },
    {
        id: 3,
        title: "Detail Rencana Atap Rumah Tinggal 2 Lantai",
        category: "Detail Konstruksi",
        description: "Merancang sistem atap dengan kuda-kuda dan komponen lengkap termasuk gording, usuk, reng, dan penutup atap.",
        image: "/projects/atap.jpg",
        tools: ["AutoCAD"],
        year: "2025",
        featured: true,
        link: "https://drive.google.com/file/d/1USZ1AkJtQ5I3x6aCusJk7cFKE8u6WNA1/view?usp=drive_link",
        tujuan: "Merancang sistem atap dengan kuda-kuda dan komponen lengkap.",
        peran: "Membuat gambar detail rencana atap, detail kuda-kuda, dan komponen pelengkap atap.",
        hasil: "Gambar detail atap dengan gording, usuk, reng, penutup atap."
    },
    {
        id: 4,
        title: "Denah Peletakan Kusen Pintu dan Jendela",
        category: "Gambar Teknik",
        description: "Menentukan posisi kusen sesuai fungsi ruang & pencahayaan dengan gambar kerja peletakan yang detail.",
        image: "/projects/denah-kusen.jpg",
        tools: ["AutoCAD"],
        year: "2025",
        featured: false,
        link: "https://drive.google.com/file/d/1AD7--ag4FSClJyXOD6CnxT8ZMXLAgn6t/view?usp=drive_link",
        tujuan: "Menentukan posisi kusen sesuai fungsi ruang & pencahayaan.",
        peran: "Membuat gambar denah peletakan kusen pintu dan jendela.",
        hasil: "Gambar kerja peletakan kusen pintu dan jendela."
    },
    {
        id: 5,
        title: "Detail Kusen Pintu dan Jendela",
        category: "Detail Arsitektur",
        description: "Merancang detail kusen sesuai fungsi ruang & estetika dengan gambar detail lengkap ukuran, material, dan elemen pendukung.",
        image: "/projects/detail-kusen.jpg",
        tools: ["AutoCAD"],
        year: "2025",
        featured: false,
        link: "https://drive.google.com/file/d/1GB3iCmn5FAb1SJs2RKwZ-BYP9DmaC2iB/view?usp=drive_link",
        tujuan: "Merancang detail kusen sesuai fungsi ruang & estetika.",
        peran: "Membuat gambar detail kusen, sambungan, dan material.",
        hasil: "Gambar detail kusen lengkap dengan ukuran, material, dan elemen pendukung."
    },
    {
        id: 6,
        title: "Denah Balok dan Kolom",
        category: "Struktur Bangunan",
        description: "Merancang sistem pembalokan sesuai standar kekuatan & stabilitas dengan analisis beban struktur yang tepat.",
        image: "/projects/balok-kolom.jpg",
        tools: ["AutoCAD"],
        year: "2025",
        featured: false,
        link: "https://drive.google.com/file/d/1-ogXJLpyQB3ADtqwlsV_IsIPTC8xAXcZ/view?usp=drive_link",
        tujuan: "Merancang sistem pembalokan sesuai standar kekuatan & stabilitas.",
        peran: "Membuat gambar balok dan kolom dan menempatkan sesuai kebutuhan.",
        hasil: "Gambar lengkap dengan ukuran."
    },
    {
        id: 7,
        title: "RAB Kitchen Set Custom",
        category: "Rencana Anggaran Biaya",
        description: "Menyusun anggaran biaya kitchen set sesuai kebutuhan klien dengan rincian material dan estimasi waktu.",
        image: "/projects/rab-kitchen.jpg",
        tools: ["Microsoft Excel"],
        year: "2025",
        featured: false,
        link: "https://1drv.ms/x/c/ba2a07833bda4e64/IQCaCSF-gCrCSZJpLR6fhseQASuv4rUsGSxsNBMhQFDJFtg?e=NYBWXT",
        tujuan: "Menyusun anggaran biaya kitchen set sesuai kebutuhan klien.",
        peran: "Menghitung material, kebutuhan pelengkap, dan biaya total.",
        hasil: "Dokumen RAB lengkap dengan rincian material, dan estimasi waktu."
    },
    {
        id: 8,
        title: "Kitchen Set Custom",
        category: "Freelance",
        description: "Merancang kitchen set fungsional & estetis sesuai kebutuhan klien sebagai Freelancer/pekerja lepas.",
        image: "/projects/kitchen-set.jpg",
        tools: ["SketchUp", "AutoCAD"],
        year: "2025",
        featured: true,
        link: "https://1drv.ms/w/c/ba2a07833bda4e64/IQDElrqBrbbdQ7ho9liJUFAIAa6bUFzL8NxurZcIlcO5QG4?e=tgzOzb",
        tujuan: "Merancang kitchen set fungsional & estetis sesuai kebutuhan klien sebagai Freelancer/pekerja lepas.",
        peran: "Desain 3D, pemilihan material, detail.",
        hasil: "Kitchen set ergonomis dengan sistem penyimpanan optimal"
    }
];

// Filter functions
export const getFeaturedProjects = () => projects.filter(p => p.featured);
export const getProjectsByCategory = (category: string) => projects.filter(p => p.category === category);
export const getProjectById = (id: number) => projects.find(p => p.id === id);
export const getAllCategories = () => [...new Set(projects.map(p => p.category))];
