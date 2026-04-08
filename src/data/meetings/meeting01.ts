import { Meeting } from '../types';

export const meeting01: Meeting = {
  id: 1,
  title: "Pengantar Rekayasa Perangkat Lunak",
  type: "materi",
  description: "Memahami konsep dasar rekayasa perangkat lunak, sejarah perkembangan, dan pentingnya dalam pengembangan sistem modern.",
  objectives: [
    "Memahami definisi dan ruang lingkup Rekayasa Perangkat Lunak",
    "Mengetahui sejarah dan evolusi pengembangan perangkat lunak",
    "Memahami perbedaan antara programming dan software engineering",
    "Mengenal tantangan dalam pengembangan perangkat lunak modern"
  ],
  subtopics: [
    {
      title: "Definisi Rekayasa Perangkat Lunak",
      content: `Rekayasa Perangkat Lunak (Software Engineering) adalah pendekatan sistematis, disiplin, dan terukur untuk pengembangan, pengoperasian, dan pemeliharaan perangkat lunak.

**Menurut IEEE (1993):**
"Software Engineering adalah aplikasi pendekatan yang sistematis, disiplin, dan dapat dikuantifikasi untuk pengembangan, operasi, dan pemeliharaan perangkat lunak."

**Menurut Pressman (2014):**
"Software Engineering mencakup proses, metode, dan alat yang memungkinkan profesional membangun perangkat lunak berkualitas tinggi."

**Komponen Utama:**
1. **Process (Proses)** - Kerangka kerja untuk aktivitas pengembangan
2. **Methods (Metode)** - Teknik untuk membangun perangkat lunak
3. **Tools (Alat)** - Dukungan otomatis untuk proses dan metode
4. **Quality (Kualitas)** - Fokus pada hasil yang memenuhi kebutuhan

**Mengapa Software Engineering Penting:**
- Kompleksitas sistem modern yang tinggi
- Kebutuhan akan kualitas dan reliability
- Efisiensi biaya dan waktu pengembangan
- Maintainability jangka panjang
- Kolaborasi tim yang efektif`
    },
    {
      title: "Sejarah dan Evolusi",
      content: `**Era 1 (1950-1965): Era Pionir**
- Perangkat lunak dikembangkan tanpa metodologi formal
- Program dibuat untuk hardware spesifik
- Tidak ada dokumentasi yang terstruktur
- Batch processing systems
- Assembly language programming

**Era 2 (1965-1975): Software Crisis**
- Istilah "Software Crisis" muncul di NATO Conference 1968
- Proyek over budget, terlambat, dan tidak memenuhi kebutuhan
- Lahirnya konsep Software Engineering
- Masalah: unreliable, unmaintainable, over budget
- Solusi: structured programming, top-down design

**Era 3 (1975-1985): Metodologi Terstruktur**
- Structured Programming dan Structured Analysis
- Waterfall Model oleh Winston Royce (1970)
- CASE Tools mulai dikembangkan
- Data Flow Diagrams (DFD)
- Entity Relationship Diagrams (ERD)

**Era 4 (1985-2000): Object-Oriented**
- Paradigma Object-Oriented Programming
- UML sebagai standar pemodelan (1997)
- Component-Based Development
- Design Patterns (Gang of Four, 1994)
- RAD (Rapid Application Development)

**Era 5 (2000-sekarang): Agile & DevOps**
- Agile Manifesto (2001)
- Continuous Integration/Continuous Deployment
- Cloud Computing dan Microservices
- Mobile-first development
- AI/ML integration
- Low-code/No-code platforms`
    },
    {
      title: "Software vs Program",
      content: `**Program:**
- Kode yang dapat dieksekusi
- Dikembangkan oleh individu atau tim kecil
- Fokus pada fungsionalitas dasar
- Dokumentasi minimal
- Scope terbatas
- Single purpose

**Software (Perangkat Lunak):**
- Kumpulan program + dokumentasi + data + konfigurasi
- Dikembangkan dengan proses terstruktur
- Fokus pada kualitas dan maintainability
- Dokumentasi lengkap (user manual, technical docs, API docs)
- Scope luas dan kompleks
- Multiple integrated components

**Karakteristik Perangkat Lunak:**

1. **Intangible (Tidak Berwujud)**
   - Tidak dapat dilihat atau disentuh
   - Sulit untuk visualize progress
   - Memerlukan abstraksi

2. **Tidak Aus (No Wear Out)**
   - Tidak mengalami kerusakan fisik
   - Bugs ada sejak awal atau introduced
   - Maintenance berbeda dengan hardware

3. **Kompleks**
   - Tingkat kompleksitas sangat tinggi
   - Millions of lines of code
   - Complex interactions

4. **Conformity**
   - Harus sesuai dengan kebutuhan bisnis
   - Adapt to changing requirements
   - Integration dengan sistem lain

5. **Changeability**
   - Dapat dan sering berubah
   - Evolution adalah normal
   - Versioning penting

6. **Invisibility**
   - Struktur tidak terlihat langsung
   - Memerlukan documentation dan modeling
   - Sulit untuk communicate design`
    },
    {
      title: "Tantangan Modern",
      content: `**Tantangan Teknis:**

1. **Skalabilitas**
   - Sistem untuk jutaan pengguna concurrent
   - Horizontal vs vertical scaling
   - Load balancing dan caching
   - Database sharding

2. **Keamanan dan Privasi**
   - Cyber attacks semakin sophisticated
   - GDPR, data protection regulations
   - Secure coding practices
   - Vulnerability management

3. **Integrasi Sistem Legacy**
   - Modernisasi sistem lama
   - API integration
   - Data migration
   - Backward compatibility

4. **Real-time Processing**
   - Low latency requirements
   - Streaming data
   - Event-driven architecture
   - WebSocket, gRPC

**Tantangan Organisasi:**

1. **Distributed Teams**
   - Remote work challenges
   - Time zone differences
   - Communication overhead
   - Cultural differences

2. **Stakeholder Management**
   - Multiple stakeholders dengan kepentingan berbeda
   - Expectation management
   - Change management
   - Conflict resolution

3. **Changing Requirements**
   - Business needs evolve rapidly
   - Market competition
   - Technology changes
   - Regulatory changes

4. **Time-to-Market Pressure**
   - Fast delivery expectations
   - Quality vs speed trade-off
   - Technical debt accumulation
   - Burnout risks

**Tantangan Kualitas:**

1. **Reliability & Availability**
   - 99.99% uptime expectations
   - Disaster recovery
   - Fault tolerance
   - Monitoring dan alerting

2. **Testing Kompleksitas**
   - Microservices testing
   - End-to-end testing
   - Performance testing
   - Security testing

3. **Technical Debt**
   - Accumulation over time
   - Refactoring needs
   - Documentation debt
   - Test coverage debt

4. **Performance Optimization**
   - Response time requirements
   - Resource utilization
   - Cost optimization (cloud)
   - Energy efficiency

**Solusi Modern:**

✅ **Metodologi Agile**
- Iterative development
- Continuous feedback
- Adaptive planning

✅ **DevOps & Automation**
- CI/CD pipelines
- Infrastructure as Code
- Automated testing
- Monitoring & observability

✅ **Microservices Architecture**
- Independent deployment
- Technology diversity
- Fault isolation
- Scalability

✅ **Cloud-Native Development**
- Containerization (Docker, Kubernetes)
- Serverless computing
- Managed services
- Auto-scaling`
    }
  ],
  references: [
    "Pressman, R.S. & Maxim, B.R. (2020). Software Engineering: A Practitioner's Approach. 9th Edition. McGraw-Hill.",
    "Sommerville, I. (2016). Software Engineering. 10th Edition. Pearson.",
    "IEEE Standard Glossary of Software Engineering Terminology (IEEE Std 610.12-1990)",
    "Brooks, F. (1995). The Mythical Man-Month. Anniversary Edition. Addison-Wesley."
  ]
};
