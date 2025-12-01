# Panduan Menjalankan & Deploy Portofolio Nayla Syafira

## 1. Menjalankan di Lokal

Pastikan Anda sudah berada di folder proyek:
```bash
cd nayla-portfolio
```

Install dependencies (jika belum):
```bash
npm install
```

Jalankan server development:
```bash
npm run dev
```

Buka browser dan akses: `http://localhost:3000`

## 2. Struktur Proyek

- `src/app/page.tsx`: Halaman utama (Landing Page)
- `src/app/globals.css`: Tema global (Dark mode & Glow effects)
- `src/components/`: Folder komponen (Navbar, Hero, Profile, dll)
- `next.config.ts`: Konfigurasi Next.js (termasuk izin gambar dari picsum.photos)

## 3. Deploy ke Vercel

1.  Push kode ini ke GitHub repository Anda.
2.  Buka [Vercel Dashboard](https://vercel.com/dashboard).
3.  Klik "Add New..." -> "Project".
4.  Import repository GitHub Anda.
5.  Framework Preset akan otomatis terdeteksi sebagai "Next.js".
6.  Klik "Deploy".

## 4. Catatan Penting

- **Gambar**: Saat ini menggunakan placeholder dari `picsum.photos`. Untuk mengganti dengan foto asli, simpan foto di folder `public/` dan update path di komponen terkait (misal: `/foto-nayla.jpg`).
- **Kontak**: Form kontak saat ini hanya tampilan (UI). Untuk membuatnya berfungsi, Anda bisa menggunakan layanan seperti [Formspree](https://formspree.io/) atau integrasi API email.
