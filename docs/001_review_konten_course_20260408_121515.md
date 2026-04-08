# Laporan Review Konten Course Rekayasa Perangkat Lunak

**Tanggal Review:** 08 April 2026
**Target:** File konten materi pertemuan (`src/data/meetings/*.ts`)

## Ringkasan Eksekutif

Secara umum, materi untuk pertemuan 1-9 telah disusun dengan sangat baik, terstruktur, dan komprehensif. Penggunaan contoh-contoh relevan (terutama pada diagram dan *design patterns*) sangat membantu dalam pemahaman konsep. 

Namun, ditemukan isu kritikal: **File `meeting10-16.ts` terpotong/tidak lengkap** (hanya berisi 59 baris) sehingga konten untuk setengah semester akhir tidak tersedia dengan utuh.

Sebagai tambahan, untuk meningkatkan relevansi pembelajaran dengan dunia nyata (sesuai dokumen requirement proyek yang sedang dibangun), sangat disarankan untuk menyisipkan studi kasus dari dokumen SRS "SIMENDOG (Sistem Informasi Manajemen Peternakan Endog)".

---

## Review Per Pertemuan & Saran Improvement

### Pertemuan 1: Pengantar Rekayasa Perangkat Lunak
- **Status Konten:** Sangat Baik.
- **Kelebihan:** Penjelasan sejarah evolusi lengkap. Perbedaan "Software" vs "Program" sangat jelas.
- **Saran Improvement:**
  - Tambahkan studi kasus singkat bagaimana "Software Crisis" dapat terjadi jika aplikasi sebesar SIMENDOG (yang melibatkan multi-tenant/mitra) dikerjakan dengan pendekatan "Programming" biasa (hanya ngoding tanpa dokumen dan arsitektur yang jelas).

### Pertemuan 2: Proses Perangkat Lunak
- **Status Konten:** Sangat Baik.
- **Kelebihan:** Variasi model proses (Waterfall, Incremental, Spiral, V-Model, RAD) dijelaskan dengan kelebihan dan kekurangannya.
- **Saran Improvement:**
  - Bisa ditambahkan contoh nyata: "Untuk proyek seperti SIMENDOG yang butuh adaptasi cepat dari para mitra/peternak, model mana yang paling cocok?" (Ini bisa jadi pancingan diskusi yang sangat baik).

### Pertemuan 3: Agile Software Development
- **Status Konten:** Sangat Baik.
- **Kelebihan:** Penjelasan Scrum, XP, dan Kanban sangat detail. Agile manifesto dan 12 prinsip juga dijabarkan dengan baik.
- **Saran Improvement:**
  - Cukup lengkap, mungkin bisa ditambah ilustrasi visual struktur tim Scrum.

### Pertemuan 4: Requirements Engineering
- **Status Konten:** Sangat Baik.
- **Kelebihan:** Pembagian *Functional* vs *Non-Functional*, teknik elicitation, dan use case modeling sangat komprehensif.
- **Saran Improvement (KRITIKAL - INTEGRASI DOKUMEN SRS):**
  - **HARUS DITAMBAHKAN:** Gunakan dokumen SRS SIMENDOG sebagai contoh nyata dokumen Requirements.
  - Tambahkan subtopik "Contoh Dokumen SRS Dunia Nyata" dan sematkan studi kasus dari `REQUIREMENTS.md`.
  - Contoh untuk di-embed:
    - *Functional Requirement*: "Sistem harus bisa mencatat produksi telur harian per kandang/flock" (Referensi: Modul Produksi Telur SIMENDOG).
    - *Non-Functional Requirement*: "Sistem harus mendukung multi-tenant untuk jaringan peternakan mitra dalam satu desa".
  - Jadikan arsitektur Hub & Mitra dari SIMENDOG sebagai bahan diskusi identifikasi aktor pada Use Case.

### Pertemuan 5: System Modeling dengan UML
- **Status Konten:** Sangat Baik.
- **Kelebihan:** Penjelasan 14 diagram UML, notasi, dan syntax dijelaskan dengan baik.
- **Saran Improvement:**
  - Pada *Class Diagram*, gunakan contoh entitas dari SIMENDOG (seperti relasi `Farm`, `Kandang`, `Flock`, `Produksi_Telur`). Ini akan membuat mahasiswa paham cara mentranslasikan tabel database ke Class Diagram.
  - Pada *Activity Diagram*, gunakan flow Mutasi Populasi Ayam (kapan ayam bertambah, mati, atau afkir).

### Pertemuan 6: Architectural Design
- **Status Konten:** Sangat Baik.
- **Kelebihan:** Pola arsitektur dari Layered, MVC, Microservices, hingga Event-Driven dijelaskan dengan jelas beserta *trade-offs*.
- **Saran Improvement:**
  - Bahas arsitektur Monolithic (karena belum tercakup secara spesifik).
  - Hubungkan dengan studi kasus SIMENDOG yang menggunakan stack `Laravel 10 | Livewire 3 | Jetstream | Tailwind CSS | MySQL`. Ini adalah contoh sempurna untuk menjelaskan arsitektur **Monolithic dengan MVC pattern** (atau pendekatan Livewire-first) di era modern.

### Pertemuan 7: Design Patterns
- **Status Konten:** Sangat Baik.
- **Kelebihan:** Pengelompokan 23 pola GoF dan penjelasan prinsip SOLID sangat solid. Kode contoh dalam Java sangat jelas.
- **Saran Improvement:**
  - Karena proyek SIMENDOG menggunakan PHP/Laravel, ada baiknya menyebutkan contoh *pattern* yang sering dipakai di framework modern (misal: *Repository Pattern* untuk akses data, *Service Pattern* untuk *business logic*, atau *Observer* untuk Event/Listener di Laravel).

### Pertemuan 8: Ujian Tengah Semester (UTS)
- **Status Konten:** Baik.
- **Kelebihan:** Cakupan materi UTS dan tipe soal sangat terstruktur. Tips persiapan UTS sangat berguna bagi siswa.
- **Saran Improvement:**
  - Bisa ditambahkan satu soal studi kasus yang merujuk pada "Sistem Manajemen Peternakan" untuk konsistensi pembelajaran.

### Pertemuan 9: Software Testing
- **Status Konten:** Sangat Baik.
- **Kelebihan:** Lengkap dari piramida testing, *black-box/white-box*, hingga *Test Automation*.
- **Saran Improvement:**
  - Tambahkan studi kasus pengujian: "Bagaimana melakukan *Equivalence Partitioning* untuk input umur ayam di aplikasi SIMENDOG?"

### Pertemuan 10-16: Sisa Materi Semester Akhir
- **Status Konten:** **KRITIKAL / TIDAK LENGKAP**
- **Masalah:** File `meeting10-16.ts` terpotong pada baris 59. Konten tentang "Software Evolution & Maintenance" terpotong di tengah kalimat. Materi pertemuan 11 hingga 16 sama sekali tidak ada.
- **Saran Improvement:**
  - Segera lakukan *rewrite* atau pelengkapan file `meeting10-16.ts`.
  - Pertimbangkan untuk memecah `meeting10-16.ts` menjadi file individual (`meeting10.ts`, `meeting11.ts`, dst) agar konsisten dengan struktur pertemuan 1-9 dan mencegah ukuran file yang terlalu besar.

---

## Kesimpulan & Action Items

1. **(High Priority)** Perbaiki dan lengkapi materi untuk Pertemuan 10 hingga 16. Sangat disarankan untuk memisahkannya menjadi file-file typescript tunggal.
2. **(High Priority)** Update `meeting04.ts` (Requirements Engineering) dengan memasukkan potongan/referensi dari file dokumen `REQUIREMENTS.md` SIMENDOG agar mahasiswa dapat melihat wujud dokumen spesifikasi kebutuhan sistem yang riil.
3. **(Medium Priority)** Sesuaikan beberapa contoh diagram dan *architectural/design pattern* dengan domain studi kasus SIMENDOG (Peternakan, Laravel/PHP stack) agar mahasiswa memiliki *thread* pembelajaran yang menyambung dari awal hingga akhir semester.