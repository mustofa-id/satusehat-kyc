# SatuSehat KYC

## Instal NodeJS

Download installer di [sini](https://nodejs.org/en/download) sesuai dengan OS yang digunakan.

## Clone Proyek

```bash
git clone https://github.com/mustofa-id/satusehat-kyc
```

Jika di OS belum ter-instal `git`, download proyek secara manual dengan men-klik tombol `<> Code` di atas lalu pilih **Download ZIP** lalu ekstrak.

## Instal Dependensi

Buka Terminal/CMD/PowerShell dan masuk ke folder proyek lalu ketik perintah:

```bash
npm install
```

Tunggu hingga proses instalasi selesai.

## Build Proyek

Masih di dalam folder proyek, ketik perintah:

```bash
npm run build
```

Untuk mem-build proyek ke production dan tunggu hingga proses build selesai.

## Jalankan Server

Masih di dalam folder proyek, buat file `.env` dari template atau sample `.env.example` dengan perintah berikut:

```bash
cp .env.example .env
```

atau dengan menyalin/copy file `.env.example` secara manual dan tempel/paste menjadi file `.env`. Isi setiap variabel:

```conf
IHS_CLIENT_SECRET=...
IHS_SECRET_KEY=...
ORIGIN=http://alamat-server:port
```

Ganti dan sesuaikan `...` dengan client secret dan secret key dari platform SatuSehat. Juga atur nilai `ORIGIN` sesuai dengan alamat dan port di mana server dijalankan.

Lalu untuk menjalankan server, ketik perintah berikut:

```bash
node -r dotenv/config build
```

## Buka Aplikasi

Buka aplikasi di browser dengan url yang tampil pada konsol, umumnya `0.0.0.0:3000` atau `localhost:3000`.

Port dapat diganti dengan mengatur env `PORT`:

```conf
PORT=8080
```

Server juga dapat dijalankan menggunakan [PM2](https://pm2.keymetrics.io/docs/usage/quick-start/) atau pun [Docker](https://hub.docker.com/_/node).
