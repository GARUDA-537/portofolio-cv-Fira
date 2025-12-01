export interface Project {
    id: number;
    title: string;
    category: string;
    thumbnail: string;
    description: string;
    detailedDescription: string;
    software: string[];
    year: string;
    images: string[];
    features: string[];
}

export const projects: Project[] = [
    {
        id: 1,
        title: "Desain Rumah Minimalis Modern",
        category: "Bangunan",
        thumbnail: "https://picsum.photos/800/600?random=1",
        description: "Desain rumah 2 lantai dengan konsep minimalis modern dan taman indoor",
        detailedDescription: "Proyek desain rumah tinggal 2 lantai dengan total luas bangunan 180m². Mengusung konsep minimalis modern dengan sirkulasi udara dan pencahayaan alami yang optimal. Dilengkapi dengan taman indoor di tengah rumah untuk menciptakan suasana asri.",
        software: ["AutoCAD", "SketchUp"],
        year: "2024",
        images: [
            "https://picsum.photos/800/600?random=1",
            "https://picsum.photos/800/600?random=2",
            "https://picsum.photos/800/600?random=3"
        ],
        features: [
            "Gambar Denah 2D",
            "Gambar Tampak (Depan, Samping, Belakang)",
            "Gambar Potongan",
            "Model 3D Eksterior & Interior",
            "RAB (Rencana Anggaran Biaya)"
        ]
    },
    {
        id: 2,
        title: "Meja Belajar Minimalis",
        category: "Furniture",
        thumbnail: "https://picsum.photos/800/600?random=4",
        description: "Desain meja belajar dengan storage tersembunyi dan cable management",
        detailedDescription: "Furniture multifungsi dengan desain minimalis untuk ruang belajar. Dilengkapi dengan laci tersembunyi, cable management system, dan rak buku terintegrasi. Material menggunakan kombinasi kayu jati dan HPL.",
        software: ["SketchUp", "AutoCAD"],
        year: "2024",
        images: [
            "https://picsum.photos/800/600?random=4",
            "https://picsum.photos/800/600?random=5",
            "https://picsum.photos/800/600?random=6"
        ],
        features: [
            "Gambar Detail 2D",
            "Model 3D Realistis",
            "Cutting List Material",
            "Assembly Instructions",
            "Estimasi Biaya"
        ]
    },
    {
        id: 3,
        title: "Gedung Perkantoran 5 Lantai",
        category: "Bangunan",
        thumbnail: "https://picsum.photos/800/600?random=7",
        description: "Gedung kantor dengan desain modern dan sistem MEP yang efisien",
        detailedDescription: "Proyek gedung perkantoran 5 lantai dengan total luas 2500m². Menggunakan struktur beton bertulang dengan sistem MEP (Mechanical, Electrical, Plumbing) yang terintegrasi. Desain fasad menggunakan curtain wall dan aluminium composite panel.",
        software: ["AutoCAD", "SketchUp"],
        year: "2023",
        images: [
            "https://picsum.photos/800/600?random=7",
            "https://picsum.photos/800/600?random=8",
            "https://picsum.photos/800/600?random=9"
        ],
        features: [
            "Gambar Arsitektur Lengkap",
            "Gambar Struktur",
            "Gambar MEP",
            "Model 3D Eksterior",
            "RAB Detail per Item Pekerjaan"
        ]
    },
    {
        id: 4,
        title: "Kitchen Set Modern",
        category: "Furniture",
        thumbnail: "https://picsum.photos/800/600?random=10",
        description: "Kitchen set dengan island counter dan storage maksimal",
        detailedDescription: "Desain kitchen set lengkap dengan island counter, overhead cabinet, dan pantry storage. Menggunakan material HPL anti air untuk countertop dan body cabinet. Dilengkapi soft closing system dan built-in appliances.",
        software: ["SketchUp", "AutoCAD"],
        year: "2024",
        images: [
            "https://picsum.photos/800/600?random=10",
            "https://picsum.photos/800/600?random=11",
            "https://picsum.photos/800/600?random=12"
        ],
        features: [
            "Layout Plan 2D",
            "Detail Konstruksi",
            "Rendering 3D Fotorealistis",
            "Material Specifications",
            "Bill of Quantity"
        ]
    },
    {
        id: 5,
        title: "Ruko 3 Lantai",
        category: "Bangunan",
        thumbnail: "https://picsum.photos/800/600?random=13",
        description: "Desain ruko commercial dengan area parkir dan display yang luas",
        detailedDescription: "Ruko 3 lantai dengan luas tanah 6x15m. Lantai 1 untuk area commercial/toko, lantai 2-3 untuk hunian. Desain memaksimalkan pencahayaan alami dan ventilasi silang. Dilengkapi area parkir dan display window yang menarik.",
        software: ["AutoCAD", "SketchUp"],
        year: "2023",
        images: [
            "https://picsum.photos/800/600?random=13",
            "https://picsum.photos/800/600?random=14",
            "https://picsum.photos/800/600?random=15"
        ],
        features: [
            "Denah Setiap Lantai",
            "Tampak & Potongan",
            "Detail Pintu & Jendela",
            "Perspektif 3D",
            "RAB Lengkap"
        ]
    },
    {
        id: 6,
        title: "Lemari Pakaian Sliding Door",
        category: "Furniture",
        thumbnail: "https://picsum.photos/800/600?random=16",
        description: "Wardrobe 3 pintu sliding dengan interior organizer",
        detailedDescription: "Lemari pakaian 3 meter dengan sistem sliding door 3 panel. Interior dilengkapi dengan hanging rail, drawer, dan shelf organizer yang dapat disesuaikan. Menggunakan rel imported untuk sliding system yang halus.",
        software: ["SketchUp", "AutoCAD"],
        year: "2024",
        images: [
            "https://picsum.photos/800/600?random=16",
            "https://picsum.photos/800/600?random=17",
            "https://picsum.photos/800/600?random=18"
        ],
        features: [
            "Front View & Side View",
            "Interior Layout Detail",
            "Model 3D dengan Material",
            "Hardware List",
            "Estimasi Harga"
        ]
    }
];
