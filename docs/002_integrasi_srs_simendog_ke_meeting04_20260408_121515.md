# Laporan Integrasi Dokumen SRS SIMENDOG ke Materi Requirements Engineering

**Tanggal:** 08 April 2026
**File Terkait:** 
- `src/data/meetings/meeting04.ts` (Requirements Engineering)
- `docs/REQUIREMENTS.md` (SRS SIMENDOG - Sistem Informasi Manajemen Peternakan Endog)

---

## Ringkasan

Dokumen `REQUIREMENTS.md` adalah contoh sempurna dari **Software Requirements Specification (SRS)** yang komprehensif dan mengikuti standar industri. Dokumen ini harus diintegrasikan ke dalam materi Pertemuan 4 (Requirements Engineering) agar mahasiswa dapat melihat aplikasi praktis dari konsep-konsep yang dipelajari.

---

## Analisis Dokumen REQUIREMENTS.md

### 1. Struktur Dokumen
Dokumen SIMENDOG mengikuti struktur IEEE 830 dengan baik:

| Bagian | Status | Keterangan |
|--------|--------|-----------|
| **1. Pendahuluan** | ✅ Lengkap | Latar belakang, tujuan, pengguna, model operasional |
| **2. Arsitektur Sistem** | ✅ Lengkap | Stack teknologi, kondisi saat ini, pola arsitektur |
| **3. Modul & Fitur Detail** | ✅ Sangat Lengkap | 8 modul utama dengan spesifikasi tabel database |
| **4. Kebutuhan Non-Fungsional** | ⚠️ Implisit | Tersebar di berbagai bagian, bisa lebih eksplisit |
| **5. Constraints & Assumptions** | ⚠️ Minimal | Perlu diperkuat |

### 2. Jenis Requirements yang Tercakup

#### Functional Requirements (FR)
Sangat lengkap dan terstruktur per modul:

**Contoh FR dari SIMENDOG:**
- **FR-1.1:** Sistem harus mencatat data farm/peternakan dengan field: nama, alamat, pemilik, kapasitas, status aktif.
- **FR-2.1:** Sistem harus mencatat flock/batch ayam dengan tracking umur, fase (DOC, Starter, Grower, Pre-Layer, Layer, Afkir).
- **FR-3.1:** Sistem harus mencatat produksi telur harian per flock dengan kalkulasi otomatis HDP (Hen-Day Production).
- **FR-4.1:** Sistem harus mengelola stok pakan dengan alert jika stok < 3 hari kebutuhan.
- **FR-5.1:** Sistem harus mengelola jaringan mitra peternak dengan monitoring terpusat (Hub & Mitra model).
- **FR-6.1:** Sistem harus mencatat transaksi keuangan (pembelian, penjualan, pengeluaran operasional).

#### Non-Functional Requirements (NFR)
Tersebar dan perlu diidentifikasi:

**Performance:**
- Sistem harus mendukung multi-tenant (10+ peternak mitra dalam satu desa).
- Dashboard harus load dalam < 2 detik.
- Laporan real-time untuk konversi telur → uang.

**Reliability:**
- Sistem harus mencatat mutasi populasi dengan akurat (tidak boleh ada data loss).
- Alert otomatis jika mortalitas harian > 0.5%.

**Usability:**
- Interface harus mudah digunakan oleh operator kandang (non-technical).
- Mobile-friendly untuk input produksi di lapangan.

**Security:**
- Role-based access control (6 peran berbeda: Super Admin, Pemilik, Operator, Petugas Gudang, Petugas Keuangan, Mitra).
- Data mitra harus terisolasi (mitra hanya bisa lihat data miliknya).

**Scalability:**
- Sistem harus scalable untuk menambah mitra baru tanpa perlu redesign.

**Maintainability:**
- Stack teknologi: Laravel 10, Livewire 3, Jetstream, Tailwind CSS, MySQL (modern dan well-documented).

---

## Rekomendasi Integrasi ke Materi Meeting 4

### A. Tambahkan Subtopik Baru: "Contoh Dokumen SRS Dunia Nyata"

**Lokasi:** Di akhir `meeting04.ts`, sebelum `references`.

**Konten yang ditambahkan:**

```typescript
{
  title: "Contoh Dokumen SRS Dunia Nyata: SIMENDOG",
  content: `**Studi Kasus: Sistem Informasi Manajemen Peternakan Endog (SIMENDOG)**

SIMENDOG adalah aplikasi web untuk mengelola operasional peternakan ayam petelur, baik untuk peternakan mandiri maupun jaringan mitra dalam satu desa/wilayah.

**Karakteristik Proyek:**
- **Domain:** Agritech / Peternakan
- **Pengguna:** 6 peran berbeda (Super Admin, Pemilik, Operator, Petugas Gudang, Petugas Keuangan, Mitra)
- **Kompleksitas:** Medium-High (multi-tenant, real-time tracking, financial transactions)
- **Stack:** Laravel 10, Livewire 3, Jetstream, Tailwind CSS, MySQL

---

**Functional Requirements (FR) - Contoh dari SIMENDOG:**

**Modul 1: Master Data**
- FR-1.1: Sistem harus menyimpan data farm dengan field: nama, alamat, pemilik, luas area, kapasitas total, status aktif.
- FR-1.2: Sistem harus menyimpan data kandang dengan field: kode, nama, tipe (open/closed/semi-closed), kapasitas, dimensi, jumlah baris/tingkat.
- FR-1.3: Sistem harus menyimpan data strain ayam dengan field: kode, nama, kategori (ras komersial/kampung/KUB/Elba), umur bertelur, target HDP, standar pakan harian.

**Modul 2: Manajemen Populasi**
- FR-2.1: Sistem harus mencatat flock/batch ayam dengan tracking: tanggal masuk, umur masuk, jumlah masuk, supplier, fase (DOC/Starter/Grower/Pre-Layer/Layer/Afkir).
- FR-2.2: Sistem harus mencatat mutasi populasi (masuk, mati, afkir, pindah kandang) dengan tipe dan penyebab.
- FR-2.3: Sistem harus menghitung otomatis: umur ayam, fase berdasarkan umur, mortalitas harian.

**Modul 3: Produksi Telur (Inti)**
- FR-3.1: Sistem harus mencatat produksi telur harian per flock dengan field: jumlah telur utuh, retak, abnormal, berat total, populasi hari ini.
- FR-3.2: Sistem harus menghitung otomatis: total telur, HDP (%), berat rata-rata per butir, egg mass.
- FR-3.3: Sistem harus mencegah duplikasi data (unique constraint: flock_id + tanggal).

**Modul 4: Manajemen Pakan**
- FR-4.1: Sistem harus mencatat stok pakan masuk/keluar dengan field: jenis pakan, tanggal, tipe (masuk/keluar/penyesuaian), jumlah kg, harga, supplier.
- FR-4.2: Sistem harus mencatat konsumsi pakan harian per flock dengan kalkulasi otomatis: konsumsi per ekor (gram/ekor/hari).
- FR-4.3: Sistem harus memberikan alert jika stok pakan < 3 hari kebutuhan (konfigurabel).

**Modul 5: Kesehatan & Vaksinasi**
- FR-5.1: Sistem harus menyimpan jadwal vaksinasi dengan field: flock, obat, tanggal rencana, tanggal pelaksanaan, dosis, metode, jumlah divaksin, biaya.
- FR-5.2: Sistem harus menyimpan catatan penyakit dengan field: flock, tanggal mulai, gejala, diagnosis, jumlah sakit, jumlah mati, status.
- FR-5.3: Sistem harus menyimpan detail pengobatan dengan field: penyakit, obat, tanggal, dosis, durasi, biaya.

**Modul 6: Keuangan**
- FR-6.1: Sistem harus mencatat transaksi pembelian dengan field: no transaksi, tanggal, supplier, kategori (DOC/pakan/obat/peralatan), total, status bayar.
- FR-6.2: Sistem harus mencatat transaksi penjualan dengan field: no transaksi, tanggal, customer, kategori (telur/ayam afkir), total, status bayar, status settlement.
- FR-6.3: Sistem harus mencatat pengeluaran operasional dengan field: tanggal, kategori (listrik/air/gaji/transportasi), deskripsi, jumlah.

**Modul 7: Manajemen Mitra (Hub & Mitra)**
- FR-7.1: Sistem harus mengelola data mitra peternak dengan field: kode, nama, alamat, pemilik, jumlah kandang, populasi total.
- FR-7.2: Sistem harus mendukung model Hub & Mitra: pusat beli pakan bulk → distribusi ke mitra → catat konsumsi per mitra.
- FR-7.3: Sistem harus mengkonsolidasi penjualan telur dari semua mitra dengan tracking: siapa yang setor, berapa jumlah, harga, settlement.
- FR-7.4: Sistem harus memberikan visibility ke mitra: lihat distribusi pakan miliknya, lihat penjualan miliknya, lihat settlement.

**Modul 8: Laporan & Dashboard**
- FR-8.1: Sistem harus menyajikan dashboard dengan KPI: total populasi, produksi telur hari ini, HDP rata-rata, stok pakan, cash flow.
- FR-8.2: Sistem harus menyajikan laporan: produksi harian/mingguan/bulanan, FCR (Feed Conversion Ratio), profitabilitas per flock, performa mitra.

---

**Non-Functional Requirements (NFR) - Contoh dari SIMENDOG:**

**Performance:**
- NFR-1.1: Dashboard harus load dalam < 2 detik.
- NFR-1.2: Laporan bulanan harus generate dalam < 5 detik.
- NFR-1.3: Sistem harus mendukung 10+ mitra dengan 50+ kandang tanpa degradasi performa.

**Reliability:**
- NFR-2.1: Sistem harus mencatat setiap mutasi populasi dengan akurat (tidak boleh ada data loss).
- NFR-2.2: Alert otomatis jika mortalitas harian > 0.5% (konfigurabel).
- NFR-2.3: Sistem harus backup data setiap hari.

**Usability:**
- NFR-3.1: Interface harus mudah digunakan oleh operator kandang (non-technical background).
- NFR-3.2: Input produksi harian harus bisa dilakukan dalam < 2 menit per kandang.
- NFR-3.3: Aplikasi harus mobile-friendly untuk input di lapangan.

**Security:**
- NFR-4.1: Sistem harus mengimplementasikan role-based access control (RBAC) dengan 6 peran: Super Admin, Pemilik, Operator, Petugas Gudang, Petugas Keuangan, Mitra.
- NFR-4.2: Data mitra harus terisolasi: mitra hanya bisa akses data miliknya sendiri.
- NFR-4.3: Semua transaksi keuangan harus ter-audit dengan log user dan timestamp.
- NFR-4.4: Password harus minimal 8 karakter dengan kombinasi huruf, angka, simbol.

**Scalability:**
- NFR-5.1: Sistem harus scalable untuk menambah mitra baru tanpa perlu redesign.
- NFR-5.2: Database harus bisa menampung 1000+ flock dengan 10 tahun data historis.

**Maintainability:**
- NFR-6.1: Stack teknologi: Laravel 10 (PHP ^8.1), Livewire 3, Jetstream, Tailwind CSS, MySQL 8.x.
- NFR-6.2: Kode harus mengikuti PSR-12 coding standard.
- NFR-6.3: Setiap fitur harus didokumentasikan dengan API docs dan user manual.

---

**Constraints & Assumptions:**

**Constraints:**
- Budget terbatas untuk development (startup/BUMDes).
- Tim developer kecil (2-3 orang).
- Tidak ada dedicated QA team.

**Assumptions:**
- Pengguna memiliki akses internet yang stabil.
- Pengguna memiliki smartphone atau laptop untuk akses sistem.
- Data historis dari sistem lama dapat dimigrasikan.

---

**Lessons Learned dari SIMENDOG:**

1. **Multi-Tenant Complexity:** Mengelola data mitra yang terpisah namun terpusat memerlukan design yang matang (foreign key, row-level security).

2. **Domain Knowledge:** Memahami domain peternakan (fase ayam, HDP, FCR, vaksinasi) sangat penting untuk menulis requirements yang akurat.

3. **Real-Time Tracking:** Requirement untuk "konversi telur → uang real-time" memerlukan arsitektur yang mendukung event-driven atau polling yang efisien.

4. **Financial Accuracy:** Sistem keuangan memerlukan audit trail yang ketat dan reconciliation mechanism.

5. **User Diversity:** 6 peran berbeda dengan kebutuhan akses yang berbeda memerlukan careful RBAC design.

---

**Bagaimana Menggunakan Dokumen SRS SIMENDOG dalam Pembelajaran:**

1. **Identifikasi FR vs NFR:** Mahasiswa diminta mengklasifikasikan setiap requirement di SIMENDOG ke dalam FR atau NFR.

2. **Buat Use Case Diagram:** Dari FR yang ada, mahasiswa membuat use case diagram dengan 6 aktor (Super Admin, Pemilik, Operator, Petugas Gudang, Petugas Keuangan, Mitra).

3. **Buat Class Diagram:** Dari struktur tabel database yang ada, mahasiswa membuat class diagram dengan relationships (1-to-many, many-to-many).

4. **Identifikasi Design Patterns:** Mahasiswa mengidentifikasi design patterns yang cocok untuk SIMENDOG (misal: Repository Pattern untuk data access, Observer Pattern untuk alert sistem).

5. **Buat Test Cases:** Dari FR, mahasiswa membuat test cases untuk setiap fitur (misal: test input produksi telur dengan boundary value analysis).

6. **Diskusi Architectural Decisions:** Mengapa SIMENDOG memilih Laravel + Livewire (monolithic) daripada microservices? Apa trade-offs-nya?`
}
```

### B. Update Referensi di Meeting 4

Tambahkan referensi ke dokumen SIMENDOG:

```typescript
references: [
  "Sommerville, I. (2016). Software Engineering. Chapter 4-5.",
  "Wiegers, K. & Beatty, J. (2013). Software Requirements. 3rd Edition.",
  "IEEE Std 830-1998. Recommended Practice for Software Requirements Specifications.",
  "Pohl, K. (2010). Requirements Engineering: Fundamentals, Principles, and Techniques.",
  "SIMENDOG SRS Document (2026). Sistem Informasi Manajemen Peternakan Endog - Real-world example of comprehensive SRS."
]
```

### C. Tambahkan Contoh Use Case dari SIMENDOG

Di subtopik "Use Case Modeling", tambahkan contoh konkret:

```
**Contoh Use Case dari SIMENDOG:**

Use Case ID: UC-001
Use Case Name: Record Daily Egg Production
Actor: Operator Kandang (Primary), System (Secondary)
Preconditions:
- Operator is logged in
- Flock exists in system
- Date is current date

Main Flow:
1. Operator navigates to "Produksi Telur" menu
2. System displays list of flocks
3. Operator selects flock (misal: "Kandang A - Batch 2026-001")
4. System displays production form with fields:
   - Jumlah telur utuh
   - Jumlah telur retak
   - Jumlah telur abnormal
   - Berat total (kg)
5. Operator enters data:
   - Jumlah telur utuh: 450
   - Jumlah telur retak: 5
   - Jumlah telur abnormal: 2
   - Berat total: 28.5 kg
6. System calculates automatically:
   - Total telur: 457
   - HDP: (457 / 500) × 100 = 91.4%
   - Berat rata-rata: (28.5 × 1000) / 457 = 62.4 gram
7. Operator clicks "Simpan"
8. System saves record dan displays confirmation
9. System updates dashboard KPI

Alternative Flows:
3a. Operator selects wrong flock
  3a.1. Operator clicks "Batal"
  3a.2. Return to step 2

5a. Operator enters invalid data (misal: negative number)
  5a.1. System displays error message
  5a.2. Return to step 5

Exception Flows:
E1. Network timeout
  E1.1. System displays error message
  E1.2. System saves draft locally
  E1.3. Use case ends

Postconditions:
- Production record is saved in database
- Dashboard KPI is updated
- Alert triggered if HDP < 80% (konfigurabel)
- Notification sent to Pemilik/Manager

Business Rules:
- One record per flock per day (unique constraint)
- HDP must be between 0-100%
- Berat telur harus > 0

Special Requirements:
- Input harus bisa dilakukan dalam < 2 menit
- Mobile-friendly interface
- Offline capability (sync when online)

Frequency: 1 kali per hari per kandang (50+ kandang = 50+ records/hari)
Priority: High
```

---

## Kesimpulan

Dokumen SIMENDOG adalah aset pembelajaran yang sangat berharga. Dengan mengintegrasikannya ke dalam materi Requirements Engineering, mahasiswa akan:

1. ✅ Melihat aplikasi praktis dari konsep-konsep abstrak.
2. ✅ Memahami kompleksitas requirements di dunia nyata.
3. ✅ Belajar dari contoh yang relevan dengan domain lokal (agritech/peternakan).
4. ✅ Memiliki referensi konkret untuk tugas-tugas praktik.
5. ✅ Tersiap lebih baik untuk proyek-proyek serupa di masa depan.

**Action Item:** Update `meeting04.ts` dengan menambahkan subtopik "Contoh Dokumen SRS Dunia Nyata: SIMENDOG" dan contoh use case yang relevan.