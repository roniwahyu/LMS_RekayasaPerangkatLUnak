import { Meeting } from '../types';

export const meeting16: Meeting = {
  id: 16,
  title: "Ujian Akhir Semester (UAS)",
  type: "uas",
  description: "Evaluasi komprehensif pemahaman materi Rekayasa Perangkat Lunak selama satu semester.",
  objectives: [
    "Mengevaluasi pemahaman konsep RPL secara menyeluruh",
    "Mengukur kemampuan analisis dan problem solving",
    "Menilai kemampuan aplikasi konsep dalam studi kasus",
    "Mengukur kemampuan critical thinking"
  ],
  subtopics: [
    {
      title: "Cakupan Materi UAS",
      content: `**UAS mencakup seluruh materi pertemuan 1-15:**

**Bagian 1: Fundamental (Pertemuan 1-3)**
- Pengantar RPL
- Proses Perangkat Lunak
- Agile Development

**Bagian 2: Requirements & Design (Pertemuan 4-7)**
- Requirements Engineering
- System Modeling (UML)
- Architectural Design
- Design Patterns

**Bagian 3: Implementation & Testing (Pertemuan 9)**
- Software Testing
- Test-Driven Development
- Quality Assurance

**Bagian 4: Advanced Topics (Pertemuan 10-15)**
- Software Evolution
- Software Reuse
- Software Security
- Quality Management
- Project Management
- Configuration Management

**Bobot Penilaian:**
- Fundamental: 20%
- Requirements & Design: 30%
- Implementation & Testing: 25%
- Advanced Topics: 25%`
    },
    {
      title: "Format dan Persiapan UAS",
      content: `**Format Ujian:**

**1. Multiple Choice (30%)**
- 30 soal pilihan ganda
- Konsep dan definisi
- Best practices
- Tool dan teknologi

**2. Essay/Short Answer (40%)**
- 5-7 soal essay
- Analisis kasus
- Perbandingan konsep
- Penjelasan mendalam

**3. Studi Kasus (30%)**
- 1-2 kasus komprehensif
- Analisis requirements
- Design solution
- Justifikasi keputusan

**Tips Persiapan:**

**1. Review Materi**
- Baca kembali semua materi
- Fokus pada konsep kunci
- Pahami hubungan antar topik

**2. Latihan Soal**
- Kerjakan soal-soal latihan
- Review UTS
- Diskusi dengan teman

**3. Studi Kasus**
- Analisis real-world projects
- Practice problem solving
- Think critically

**4. Manajemen Waktu**
- Alokasi waktu per bagian
- Prioritas soal mudah dulu
- Review jawaban

**Yang Perlu Dibawa:**
- Kartu ujian
- Alat tulis
- Kalkulator (jika diperlukan)

**Aturan Ujian:**
- Closed book
- No electronic devices
- Individual work
- Academic integrity`
    },
    {
      title: "Kriteria Penilaian",
      content: `**Rubrik Penilaian UAS:**

**Multiple Choice:**
- Benar: 1 poin
- Salah/Kosong: 0 poin

**Essay:**
- **Excellent (90-100%):**
  - Jawaban lengkap dan akurat
  - Analisis mendalam
  - Contoh relevan
  - Struktur jelas

- **Good (75-89%):**
  - Jawaban cukup lengkap
  - Analisis memadai
  - Beberapa contoh
  - Struktur baik

- **Satisfactory (60-74%):**
  - Jawaban dasar
  - Analisis terbatas
  - Contoh minimal
  - Struktur kurang

- **Poor (<60%):**
  - Jawaban tidak lengkap
  - Tidak ada analisis
  - Tidak ada contoh

**Studi Kasus:**
- **Problem Understanding (25%)**
- **Solution Design (35%)**
- **Justification (25%)**
- **Presentation (15%)**

**Nilai Akhir Mata Kuliah:**
- Tugas: 20%
- UTS: 30%
- UAS: 40%
- Partisipasi: 10%

**Grade:**
- A: 85-100
- B: 70-84
- C: 55-69
- D: 40-54
- E: <40`
    }
  ],
  references: [
    "Semua materi pertemuan 1-15",
    "Pressman, R.S. (2020). Software Engineering: A Practitioner's Approach.",
    "Sommerville, I. (2016). Software Engineering. 10th Edition."
  ]
};
