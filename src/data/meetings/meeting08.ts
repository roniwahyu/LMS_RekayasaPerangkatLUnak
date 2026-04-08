import { Meeting } from '../types';

export const meeting08: Meeting = {
  id: 8,
  title: "Ujian Tengah Semester (UTS)",
  type: "uts",
  description: "Evaluasi pemahaman materi pertemuan 1-7 meliputi pengantar RPL, proses software, Agile, requirements engineering, UML, arsitektur, dan design patterns.",
  objectives: [
    "Mengevaluasi pemahaman konsep dasar Rekayasa Perangkat Lunak",
    "Mengukur kemampuan analisis proses dan metodologi pengembangan",
    "Menilai keterampilan dalam requirements engineering dan modeling",
    "Mengukur pemahaman arsitektur dan design patterns"
  ],
  subtopics: [
    {
      title: "Cakupan Materi UTS",
      content: `**Materi yang Diujikan:**

**Pertemuan 1: Pengantar RPL**
- Definisi Software Engineering
- Sejarah dan evolusi
- Software vs Program
- Tantangan modern dalam pengembangan software

**Pertemuan 2: Proses Perangkat Lunak**
- Aktivitas dasar proses (Specification, Development, Validation, Evolution)
- Model Waterfall
- Model Incremental & Iterative
- Model Spiral
- V-Model dan RAD

**Pertemuan 3: Agile Software Development**
- Agile Manifesto (4 nilai, 12 prinsip)
- Scrum Framework (roles, events, artifacts)
- Extreme Programming (XP)
- Kanban dan Lean
- Scaling Agile

**Pertemuan 4: Requirements Engineering**
- Jenis requirements (Functional, Non-functional, Domain)
- Teknik elicitation
- Requirements analysis dan specification
- Use Case modeling
- Requirements validation dan management

**Pertemuan 5: System Modeling dengan UML**
- Pengantar UML
- Class Diagram
- Sequence Diagram
- Activity Diagram
- State Machine Diagram
- Component & Deployment Diagram

**Pertemuan 6: Architectural Design**
- Pentingnya software architecture
- Layered Architecture
- Client-Server & MVC
- Microservices
- Event-Driven & Pipe-Filter

**Pertemuan 7: Design Patterns**
- Pengantar Design Patterns
- Creational Patterns (Singleton, Factory, Builder)
- Structural Patterns (Adapter, Decorator, Facade, Proxy)
- Behavioral Patterns (Observer, Strategy, Command, Template Method, State)
- SOLID Principles
- Anti-Patterns`
    },
    {
      title: "Format dan Tipe Soal",
      content: `**Format Ujian:**

**1. Pilihan Ganda (Multiple Choice)**
- 30-40 soal
- Bobot: 40-50%
- Waktu: 40-50 menit
- Menguji pemahaman konsep dasar

**Contoh Soal:**
"Manakah yang BUKAN merupakan nilai inti Agile Manifesto?"
a) Individuals and interactions over processes and tools
b) Working software over comprehensive documentation
c) Following a plan over responding to change ✓
d) Customer collaboration over contract negotiation

**2. Essay/Uraian**
- 5-7 soal
- Bobot: 30-40%
- Waktu: 40-50 menit
- Menguji pemahaman mendalam dan kemampuan analisis

**Contoh Soal:**
"Jelaskan perbedaan antara Waterfall dan Agile, serta kapan sebaiknya menggunakan masing-masing model!"

**3. Studi Kasus**
- 1-2 kasus
- Bobot: 20-30%
- Waktu: 30-40 menit
- Menguji kemampuan aplikasi konsep

**Contoh Soal:**
"Sebuah startup ingin membangun aplikasi e-commerce. Requirements sering berubah dan time-to-market sangat penting. Rekomendasikan:
a) Model proses yang tepat
b) Arsitektur yang sesuai
c) Design patterns yang relevan
Berikan justifikasi untuk setiap pilihan!"

**4. Diagram/Modeling**
- 2-3 soal
- Bobot: 10-20%
- Waktu: 20-30 menit
- Menguji kemampuan membuat model UML

**Contoh Soal:**
"Buatlah Class Diagram untuk sistem perpustakaan dengan requirements berikut:
- Member dapat meminjam buku
- Buku memiliki kategori
- Peminjaman memiliki tanggal pinjam dan kembali
- Member memiliki batas maksimal peminjaman"

**Total Waktu: 120-150 menit (2-2.5 jam)**`
    },
    {
      title: "Tips Persiapan UTS",
      content: `**Strategi Belajar:**

**1. Review Materi Sistematis**
- Baca ulang slide dan catatan
- Fokus pada konsep kunci
- Buat mind map untuk setiap topik
- Hubungkan antar konsep

**2. Latihan Soal**
- Kerjakan soal-soal latihan
- Review quiz dan tugas sebelumnya
- Diskusi dengan teman
- Buat soal sendiri

**3. Praktik Modeling**
- Latihan membuat diagram UML
- Praktik use case description
- Latihan identifikasi design patterns
- Review contoh-contoh kasus

**4. Pahami, Jangan Hafal**
- Fokus pada pemahaman konsep
- Pahami "why" bukan hanya "what"
- Bisa menjelaskan dengan kata-kata sendiri
- Bisa memberikan contoh

**Checklist Materi:**

**Konsep Dasar:**
□ Definisi Software Engineering
□ Karakteristik software
□ Software Crisis
□ Perbedaan programming vs software engineering

**Proses:**
□ 4 aktivitas fundamental
□ Karakteristik setiap model proses
□ Kelebihan dan kekurangan
□ Kapan menggunakan model tertentu

**Agile:**
□ 4 nilai Agile Manifesto
□ 12 prinsip Agile
□ Scrum roles, events, artifacts
□ XP practices
□ Kanban principles

**Requirements:**
□ Jenis requirements
□ Teknik elicitation
□ Karakteristik good requirements
□ Use case components
□ Requirements validation

**UML:**
□ Class diagram notation
□ Relationships (association, aggregation, composition, inheritance)
□ Sequence diagram components
□ Activity diagram symbols
□ State machine diagram

**Architecture:**
□ Layered architecture
□ MVC pattern
□ Microservices characteristics
□ Architectural trade-offs

**Design Patterns:**
□ Creational patterns (Singleton, Factory, Builder)
□ Structural patterns (Adapter, Decorator, Facade)
□ Behavioral patterns (Observer, Strategy)
□ SOLID principles
□ When to use each pattern

**Tips Saat Ujian:**

**Time Management:**
- Baca semua soal dulu
- Kerjakan yang mudah dulu
- Alokasikan waktu per soal
- Sisakan waktu untuk review

**Multiple Choice:**
- Baca soal dengan teliti
- Eliminasi jawaban yang jelas salah
- Perhatikan kata kunci (BUKAN, KECUALI, PALING, dll)
- Jangan terlalu lama di satu soal

**Essay:**
- Buat outline dulu
- Jawab langsung ke poin
- Berikan contoh jika diminta
- Tulis dengan jelas dan terstruktur

**Studi Kasus:**
- Baca kasus dengan teliti
- Identifikasi requirements
- Pertimbangkan constraints
- Berikan justifikasi untuk setiap keputusan

**Diagram:**
- Gunakan notasi yang benar
- Label dengan jelas
- Perhatikan relationships
- Pastikan konsisten`
    },
    {
      title: "Contoh Soal dan Pembahasan",
      content: `**Soal 1: Pilihan Ganda**

"Dalam Scrum, siapa yang bertanggung jawab untuk memaksimalkan nilai produk?"
a) Scrum Master
b) Product Owner ✓
c) Development Team
d) Stakeholders

**Pembahasan:**
Product Owner bertanggung jawab untuk product backlog dan memaksimalkan nilai produk. Scrum Master adalah facilitator, Development Team mengembangkan produk, Stakeholders memberikan input.

---

**Soal 2: Essay**

"Jelaskan 3 pilar Scrum dan mengapa penting!"

**Jawaban:**
1. **Transparency:** Aspek signifikan harus visible bagi yang bertanggung jawab. Penting untuk shared understanding dan informed decisions.

2. **Inspection:** Sering memeriksa artifacts dan progress untuk detect variances. Penting untuk early problem detection.

3. **Adaptation:** Menyesuaikan proses jika diperlukan untuk minimize deviation. Penting untuk continuous improvement.

---

**Soal 3: Studi Kasus**

"Perusahaan fintech ingin membangun aplikasi mobile banking. Requirements:
- High security
- 99.9% availability
- Frequent updates
- Compliance dengan regulasi

Rekomendasikan model proses dan arsitektur!"

**Jawaban:**

**Model Proses: Hybrid (Agile + Waterfall)**
- Agile untuk feature development (frequent updates)
- Waterfall untuk compliance dan security (documentation)
- Justifikasi: Balance antara flexibility dan regulatory requirements

**Arsitektur: Microservices dengan API Gateway**
- Independent deployment untuk frequent updates
- Fault isolation untuk high availability
- Security layer di API Gateway
- Scalability untuk growing users
- Justifikasi: Memenuhi semua requirements (security, availability, updates)

---

**Soal 4: Diagram**

"Buatlah Sequence Diagram untuk proses login!"

**Jawaban:**
\`\`\`
User -> LoginPage: enterCredentials(username, password)
LoginPage -> AuthService: authenticate(username, password)
AuthService -> Database: validateUser(username, password)
Database --> AuthService: userValid
AuthService -> TokenService: generateToken(user)
TokenService --> AuthService: token
AuthService --> LoginPage: authSuccess(token)
LoginPage --> User: redirectToDashboard()
\`\`\`

---

**Soal 5: Design Pattern**

"Anda perlu membuat sistem notification yang dapat mengirim notifikasi via Email, SMS, dan Push Notification. Design pattern apa yang cocok?"

**Jawaban:**
**Strategy Pattern**

**Alasan:**
- Multiple algorithms (Email, SMS, Push) untuk same task (send notification)
- Algorithms dapat diswitch at runtime
- Easy to add new notification methods
- Follows Open/Closed Principle

**Implementation:**
\`\`\`java
interface NotificationStrategy {
    void send(String message);
}

class EmailNotification implements NotificationStrategy {
    void send(String message) { /* send email */ }
}

class SMSNotification implements NotificationStrategy {
    void send(String message) { /* send SMS */ }
}

class NotificationService {
    private NotificationStrategy strategy;
    
    void setStrategy(NotificationStrategy strategy) {
        this.strategy = strategy;
    }
    
    void notify(String message) {
        strategy.send(message);
    }
}
\`\`\``
    },
    {
      title: "Materi Tambahan untuk Review",
      content: `**Key Concepts Summary:**

**Software Engineering Fundamentals:**
- Software = Programs + Documentation + Data
- Characteristics: Intangible, Complex, Conformity, Changeability
- Process, Methods, Tools, Quality

**Process Models Comparison:**

| Model | Best For | Flexibility | Documentation |
|-------|----------|-------------|---------------|
| Waterfall | Stable requirements | Low | High |
| Incremental | Partial delivery | Medium | Medium |
| Spiral | High-risk projects | High | High |
| Agile | Changing requirements | Very High | Low |

**Agile Quick Reference:**
- **Values:** Individuals, Working software, Collaboration, Change
- **Scrum Roles:** PO, SM, Dev Team
- **Scrum Events:** Sprint, Planning, Daily, Review, Retro
- **XP Practices:** TDD, Pair Programming, CI, Refactoring

**UML Diagrams Quick Guide:**
- **Class:** Structure, relationships
- **Sequence:** Time-ordered interactions
- **Activity:** Workflow, process
- **State Machine:** Object lifecycle
- **Use Case:** System functionality

**Architecture Patterns:**
- **Layered:** Separation of concerns
- **MVC:** Presentation separation
- **Microservices:** Independent services
- **Event-Driven:** Asynchronous, loose coupling

**Design Patterns Cheat Sheet:**

**Creational:**
- Singleton: One instance
- Factory: Create objects
- Builder: Complex construction

**Structural:**
- Adapter: Interface conversion
- Decorator: Add functionality
- Facade: Simplify interface
- Proxy: Placeholder

**Behavioral:**
- Observer: One-to-many notification
- Strategy: Interchangeable algorithms
- Command: Encapsulate request
- Template Method: Algorithm skeleton
- State: Behavior based on state

**SOLID Principles:**
- **S**ingle Responsibility
- **O**pen/Closed
- **L**iskov Substitution
- **I**nterface Segregation
- **D**ependency Inversion

**Common Mistakes to Avoid:**
❌ Confusing Agile values
❌ Wrong UML notation
❌ Mixing up design patterns
❌ Not justifying choices in case studies
❌ Incomplete diagrams
❌ Not managing time properly

**Final Checklist:**
□ Review all 7 pertemuan
□ Practice UML diagrams
□ Understand pattern applications
□ Review quiz dan tugas
□ Get enough sleep
□ Arrive early
□ Bring required materials

**Good Luck! 🍀**`
    }
  ],
  references: [
    "Semua referensi dari Pertemuan 1-7",
    "Slide kuliah dan catatan",
    "Latihan soal dan quiz",
    "Tugas dan studi kasus"
  ]
};
