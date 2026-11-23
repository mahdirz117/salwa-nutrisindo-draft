<div align="center">
<img width="1200" height="475" alt="GHBanner" src="https://ai.google.dev/static/site-assets/images/share-ais-513315318.png" />
</div>

# Salwa Nutrisindo

Website profil dan katalog produk PT Salwa Nutrisindo.

## Menjalankan secara lokal

**Prerequisites:**  Node.js

1. Install dependencies: `npm install`
2. Start the development server: `npm run dev`
3. Build for production: `npm run build`

## Deploy ke GitHub Pages

Workflow GitHub Actions di `.github/workflows/deploy.yml` akan membangun dan menerbitkan website secara otomatis setiap kali ada push ke branch `main`.

1. Push perubahan ke branch `main`.
2. Di GitHub, buka **Settings → Pages** pada repositori ini.
3. Pada **Build and deployment → Source**, pilih **GitHub Actions**.
4. Buka tab **Actions** dan tunggu workflow **Deploy to GitHub Pages** selesai.
5. Website tersedia di `https://mahdirz117.github.io/salwa-nutrisindo-draft/`.

Build memakai jalur aset relatif agar dapat digunakan di URL GitHub Pages repositori maupun domain kustom. Untuk memakai domain kustom, tambahkan domain di **Settings → Pages** lalu arahkan DNS domain ke GitHub Pages sesuai petunjuk GitHub.
