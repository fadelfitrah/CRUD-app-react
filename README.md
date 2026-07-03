# React CRUD App

Aplikasi **React CRUD App** merupakan dashboard administrasi berbasis web yang dibangun menggunakan **ReactJS**, **Firebase**, dan **Tailwind CSS**. Aplikasi ini memungkinkan pengguna yang telah terautentikasi untuk mengelola data produk melalui fitur **Create, Read, Update, dan Delete (CRUD)**.

Proyek ini dikembangkan sebagai portofolio untuk mempelajari pengembangan aplikasi modern menggunakan React dengan arsitektur yang rapi, komponen yang reusable, serta integrasi dengan layanan Firebase.

---

## ✨ Fitur

* 🔐 Login menggunakan Email & Password (Firebase Authentication)
* 🛡️ Protected Route
* 📋 Menampilkan daftar produk
* ➕ Menambahkan produk baru
* ✏️ Mengubah data produk
* 🗑️ Menghapus produk
* 🔄 Sinkronisasi data real-time menggunakan TanStack Query
* 🔔 Notifikasi menggunakan React Hot Toast
* 🎨 Tampilan modern menggunakan Tailwind CSS
* 📦 Arsitektur berbasis Service Layer dan Custom Hooks

---

## 🛠️ Teknologi yang Digunakan

| Teknologi               | Keterangan                                       |
| ----------------------- | ------------------------------------------------ |
| ReactJS                 | Library utama untuk membangun antarmuka pengguna |
| Vite                    | Build Tool                                       |
| Tailwind CSS            | Framework CSS                                    |
| Firebase Authentication | Sistem Login                                     |
| Cloud Firestore         | Database NoSQL                                   |
| React Router DOM        | Routing                                          |
| TanStack Query          | Data Fetching & Caching                          |
| React Hook Form         | Pengelolaan Form                                 |
| React Hot Toast         | Notifikasi                                       |
| React Icons             | Icon UI                                          |

---

## 📁 Struktur Proyek

```text
src
│
├── components
│   ├── common
│   ├── dashboard
│   ├── layout
│   ├── table
│   └── ui
│
├── context
│
├── firebase
│
├── hooks
│   └── product
│
├── layouts
│
├── pages
│   └── product
│
├── routes
│
├── services
│   └── product
│
└── App.jsx
```

---

## 🚀 Instalasi

Clone repository

```bash
git clone https://github.com/USERNAME/react-crud-app.git
```

Masuk ke folder project

```bash
cd react-crud-app
```

Install dependencies

```bash
npm install
```

Jalankan project

```bash
npm run dev
```

---

## 🔥 Konfigurasi Firebase

Buat file `.env` pada root project.

Contoh:

```env
VITE_FIREBASE_API_KEY=xxxxxxxxxxxxxxxx
VITE_FIREBASE_AUTH_DOMAIN=xxxxxxxxxxxxxxxx
VITE_FIREBASE_PROJECT_ID=xxxxxxxxxxxxxxxx
VITE_FIREBASE_STORAGE_BUCKET=xxxxxxxxxxxxxxxx
VITE_FIREBASE_MESSAGING_SENDER_ID=xxxxxxxxxxxxxxxx
VITE_FIREBASE_APP_ID=xxxxxxxxxxxxxxxx
```

Selanjutnya sesuaikan konfigurasi Firebase pada file:

```text
src/firebase/firebase.js
```

---

## 🗄️ Konfigurasi Firestore

Buat database Firestore dengan collection:

```text
products
```

Struktur dokumen:

```javascript
{
    name: "",
    category: "",
    bahan: "",
    stock: 0,
    description: "",
    status: "active",
    uid: "",
    createdAt: Timestamp,
    updatedAt: Timestamp
}
```

---

## 🔒 Firestore Rules (Development)

```javascript
rules_version = '2';

service cloud.firestore {
  match /databases/{database}/documents {

    match /{document=**} {
      allow read, write: if request.auth != null;
    }

  }
}
```

> **Catatan:** Gunakan aturan yang lebih ketat sebelum aplikasi digunakan di lingkungan produksi.

---

## 📌 Fitur yang Sudah Tersedia

* Authentication
* Login
* Logout
* Protected Route
* Dashboard Layout
* Sidebar
* Navbar
* Reusable Components
* Data Table
* Product List
* Create Product
* Edit Product
* Responsive Layout

---

## 📌 Pengembangan Selanjutnya

* Detail Produk
* Upload Gambar Produk
* Pencarian Produk
* Filter Produk
* Statistik Dashboard
* Pagination
* Konfirmasi Hapus
* Firebase Storage
* Export Excel
* Dark Mode

---

## 📷 Tampilan Aplikasi

Tambahkan screenshot aplikasi pada folder berikut:

```text
/public/screenshots
```

Contoh:

```markdown
![Dashboard](public/screenshots/dashboard.png)

![Products](public/screenshots/products.png)

![Login](public/screenshots/login.png)
```

---

## 📖 Cara Menggunakan

1. Login menggunakan akun yang telah terdaftar pada Firebase Authentication.
2. Masuk ke halaman **Products**.
3. Klik tombol **Tambah Produk** untuk menambahkan data baru.
4. Isi informasi produk kemudian klik **Simpan Produk**.
5. Data akan langsung tersimpan ke Cloud Firestore.
6. Gunakan tombol **Edit** untuk memperbarui data.
7. Gunakan tombol **Hapus** untuk menghapus data produk.

---

## 🤝 Kontribusi

Kontribusi sangat terbuka.

Silakan melakukan:

1. Fork repository
2. Buat branch baru
3. Commit perubahan
4. Push ke repository
5. Buat Pull Request

---

## 👨‍💻 Author

**Fadel Fitrah**

GitHub: https://github.com/USERNAME

LinkedIn: https://linkedin.com/in/USERNAME

---

## 📄 Lisensi

Project ini dibuat untuk kebutuhan pembelajaran, pengembangan portofolio, dan eksperimen menggunakan ReactJS serta Firebase.
