import { Meeting } from '../types';

export const meeting04: Meeting = {
  id: 4,
  title: "Requirements Engineering",
  type: "materi",
  description: "Mempelajari teknik-teknik untuk mengumpulkan, menganalisis, dan mendokumentasikan kebutuhan perangkat lunak.",
  objectives: [
    "Memahami pentingnya requirements engineering",
    "Menguasai teknik elicitation requirements",
    "Mampu menulis requirements yang baik",
    "Memahami proses validasi dan manajemen requirements"
  ],
  subtopics: [
    {
      title: "Pengantar Requirements",
      content: `**Requirements Engineering adalah proses sistematis untuk mengidentifikasi, mendokumentasikan, dan memelihara requirements.**

**Definisi Requirements:**

Deskripsi layanan yang harus disediakan sistem dan batasan operasinya.

**Jenis Requirements:**

**1. Functional Requirements**
- Apa yang harus dilakukan sistem
- Fitur dan fungsi spesifik
- Input, process, output
- Business rules

**Contoh:**
- "Sistem harus dapat memproses pembayaran dengan kartu kredit"
- "User harus dapat reset password melalui email"
- "Sistem harus generate laporan penjualan bulanan"

**2. Non-Functional Requirements (Quality Attributes)**

**Performance:**
- Response time: "Halaman harus load dalam 2 detik"
- Throughput: "Sistem harus handle 1000 transaksi/detik"
- Resource usage: "Aplikasi max 500MB RAM"

**Reliability:**
- Availability: "99.9% uptime"
- MTBF (Mean Time Between Failures)
- MTTR (Mean Time To Repair)
- Fault tolerance

**Usability:**
- Learnability: "New user dapat complete task dalam 10 menit"
- Efficiency: "Expert user complete task dalam 30 detik"
- Error rate
- Satisfaction

**Security:**
- Authentication: "Multi-factor authentication required"
- Authorization: "Role-based access control"
- Data encryption: "AES-256 encryption"
- Audit logging

**Scalability:**
- Horizontal scaling: "Support 100 concurrent users"
- Vertical scaling
- Load balancing
- Database sharding

**Maintainability:**
- Modifiability: "New payment method dapat ditambah dalam 2 hari"
- Testability: "80% code coverage"
- Analyzability
- Reusability

**Portability:**
- Platform independence
- Browser compatibility
- Mobile responsiveness

**3. Domain Requirements**
- Berasal dari domain aplikasi
- Regulasi dan standar industri
- Business constraints

**Contoh:**
- "Sistem perbankan harus comply dengan regulasi OJK"
- "Medical system harus follow HIPAA"
- "E-commerce harus comply dengan PCI-DSS"

**Requirements Levels:**

**User Requirements:**
- High-level, natural language
- Untuk stakeholders non-technical
- What system should do
- Business perspective

**System Requirements:**
- Detailed, technical specs
- Untuk developers
- How system will do it
- Technical perspective

**Karakteristik Good Requirements:**

✅ **Complete:** Semua informasi tersedia
✅ **Consistent:** Tidak ada kontradiksi
✅ **Unambiguous:** Satu interpretasi
✅ **Verifiable:** Dapat ditest
✅ **Traceable:** Dapat dilacak sumbernya
✅ **Modifiable:** Mudah diubah
✅ **Prioritized:** Ada ranking importance
✅ **Feasible:** Dapat diimplementasikan`
    },
    {
      title: "Requirements Elicitation",
      content: `**Elicitation adalah proses mengumpulkan requirements dari stakeholders.**

**Challenges dalam Elicitation:**
- Stakeholders tidak tahu apa yang mereka inginkan
- Stakeholders express requirements dalam bahasa mereka
- Different stakeholders, different requirements
- Political factors
- Economic dan business environment changes

**Teknik Elicitation:**

**1. Interviews**

**Structured Interview:**
- Pre-defined questions
- Consistent data
- Easy to analyze
- Less flexibility

**Unstructured Interview:**
- Open-ended discussion
- Explore ideas
- More insights
- Harder to analyze

**Tips Interview:**
- Prepare questions
- Active listening
- Take notes atau record (dengan permission)
- Ask "why" untuk understand rationale
- Use open-ended questions
- Avoid leading questions

**2. Questionnaires/Surveys**
- Untuk banyak stakeholders
- Quantifiable data
- Closed dan open questions
- Online distribution (Google Forms, SurveyMonkey)
- Statistical analysis

**Question Types:**
- Multiple choice
- Rating scales (Likert)
- Open-ended
- Ranking

**3. Observation (Ethnography)**
- Mengamati users dalam environment mereka
- Memahami actual vs stated needs
- Contextual inquiry
- Shadow users
- Time-consuming tapi valuable

**Benefits:**
- Discover implicit requirements
- Understand workflow
- Identify pain points

**4. Workshops**

**JAD (Joint Application Development):**
- Facilitated sessions
- Key stakeholders together
- Brainstorming
- Collaborative decision making
- Resolve conflicts
- Build consensus

**Workshop Activities:**
- Brainstorming
- Mind mapping
- Affinity diagrams
- Prioritization exercises

**5. Document Analysis**
- Existing system documentation
- Business process documents
- Reports dan forms
- Competitor analysis
- Industry standards
- Regulations

**6. Prototyping**

**Low-Fidelity:**
- Paper prototypes
- Wireframes
- Sketches
- Quick dan cheap

**High-Fidelity:**
- Interactive mockups
- Clickable prototypes
- Tools: Figma, Adobe XD, InVision
- More realistic

**Benefits:**
- Clarify requirements
- Early user feedback
- Reduce misunderstandings
- Validate ideas

**7. Use Cases & User Stories**

**Use Cases:**
- Actor-system interactions
- Detailed scenarios
- Main flow + alternative flows
- Formal structure

**User Stories:**
- "As a [user], I want [goal], so that [benefit]"
- Simple dan concise
- Conversation starter
- Agile-friendly

**Example:**
"As a customer, I want to track my order status, so that I know when to expect delivery"

**8. Brainstorming**
- Generate many ideas
- No criticism during generation
- Build on others' ideas
- Quantity over quality initially

**9. Focus Groups**
- 6-10 participants
- Moderated discussion
- Diverse perspectives
- Group dynamics`
    },
    {
      title: "Requirements Analysis & Specification",
      content: `**Requirements Analysis**

**Aktivitas Analisis:**

**1. Requirements Classification**
- Functional vs Non-functional
- Priority levels
- Stakeholder groups
- System components

**2. Prioritization**

**MoSCoW Method:**
- **Must have:** Essential, non-negotiable
- **Should have:** Important but not critical
- **Could have:** Nice to have, if time permits
- **Won't have:** Out of scope (this time)

**Kano Model:**
- **Basic needs:** Expected, dissatisfaction if absent
- **Performance needs:** Satisfaction linear dengan presence
- **Excitement needs:** Delighters, unexpected

**Value vs Effort Matrix:**
```
High Value, Low Effort → Do First
High Value, High Effort → Plan Carefully
Low Value, Low Effort → Do Later
Low Value, High Effort → Avoid
```

**3. Conflict Resolution**
- Identify conflicting requirements
- Negotiate dengan stakeholders
- Trade-off analysis
- Consensus building

**4. Feasibility Analysis**
- Technical feasibility
- Economic feasibility
- Legal feasibility
- Operational feasibility
- Schedule feasibility

---

**Requirements Specification**

**Software Requirements Specification (SRS)**

**IEEE 830 Standard Structure:**

**1. Introduction**
- Purpose
- Scope
- Definitions, Acronyms, Abbreviations
- References
- Overview

**2. Overall Description**
- Product perspective
- Product functions
- User characteristics
- Constraints
- Assumptions dan dependencies

**3. Specific Requirements**
- Functional requirements
- Non-functional requirements
- Interface requirements
- Performance requirements
- Design constraints

**4. Appendices**
- Models dan diagrams
- Data dictionary
- Index

**Writing Good Requirements:**

**Use Shall/Should/May:**
- Shall: Mandatory
- Should: Recommended
- May: Optional

**Be Specific:**
❌ "System should be fast"
✅ "System shall respond within 2 seconds for 95% of requests"

**Avoid Ambiguity:**
❌ "System should handle large files"
✅ "System shall support files up to 100MB"

**Use Active Voice:**
✅ "System shall validate user input"
❌ "User input shall be validated"

**One Requirement per Statement:**
❌ "System shall authenticate users and log all activities"
✅ "System shall authenticate users"
✅ "System shall log all user activities"

**Requirements Template:**
```
REQ-ID: FR-001
Title: User Authentication
Description: System shall authenticate users using email and password
Priority: Must Have
Source: Security Team
Rationale: Protect user data
Acceptance Criteria:
- User can login with valid credentials
- Invalid credentials show error message
- Account locks after 3 failed attempts
Dependencies: None
```

**Requirements Traceability Matrix:**
| Req ID | Source | Design | Code | Test | Status |
|--------|--------|--------|------|------|--------|
| FR-001 | User   | D-001  | M-A  | TC-01| Done   |`
    },
    {
      title: "Use Case Modeling",
      content: `**Use Case Diagram - UML**

**Komponen:**

**1. Actor**
- Entitas external yang berinteraksi dengan sistem
- **Primary Actor:** Memulai use case, has goals
- **Secondary Actor:** Bereaksi atau supporting
- Dapat berupa: User, External system, Time, Hardware

**Notation:** Stick figure atau box dengan <<actor>>

**2. Use Case**
- Unit fungsionalitas yang meaningful untuk actor
- Represents goals
- Verb phrase: "Place Order", "Login", "Generate Report"
- Oval shape dengan nama

**3. System Boundary**
- Rectangle yang mengelilingi use cases
- Represents system scope
- Actors di luar boundary

**4. Relationships:**

**Association (Communication):**
- Line antara actor dan use case
- Actor participates dalam use case

**Include:**
- Use case selalu include use case lain
- Dashed arrow dengan <<include>>
- Reuse common functionality
- Example: "Place Order" includes "Validate Payment"

**Extend:**
- Use case optional extends use case lain
- Dashed arrow dengan <<extend>>
- Conditional behavior
- Example: "Place Order" extends to "Apply Discount Code"

**Generalization:**
- Inheritance relationship
- Solid arrow dengan triangle
- Specialized actor/use case
- Example: "Admin" generalizes "User"

**Use Case Description Template:**

```
Use Case ID: UC-001
Use Case Name: Place Order
Actor: Customer
Preconditions:
- Customer is logged in
- Shopping cart is not empty
- Payment method is configured

Main Flow (Basic Path):
1. Customer selects "Checkout"
2. System displays order summary
3. Customer confirms shipping address
4. Customer selects payment method
5. System processes payment
6. System creates order
7. System sends confirmation email
8. System displays order confirmation

Alternative Flows:
3a. Customer updates shipping address
  3a.1. Customer clicks "Edit Address"
  3a.2. System displays address form
  3a.3. Customer updates and saves
  3a.4. Return to step 3

5a. Payment fails
  5a.1. System displays error message
  5a.2. Customer selects different payment method
  5a.3. Return to step 5

Exception Flows:
E1. System timeout
  E1.1. System displays timeout message
  E1.2. System saves cart state
  E1.3. Use case ends

Postconditions:
- Order is created in system
- Inventory is updated
- Payment is processed
- Confirmation email is sent
- Customer receives order number

Business Rules:
- Minimum order value: $10
- Free shipping for orders > $50
- Maximum 10 items per order

Special Requirements:
- Payment processing within 5 seconds
- PCI-DSS compliance
- SSL encryption

Frequency: 1000 times per day
Priority: High
```

**Tips Use Case:**
- Fokus pada WHAT, bukan HOW
- Gunakan active voice
- Satu primary actor per use case
- Avoid functional decomposition
- Keep it simple
- User's perspective`
    },
    {
      title: "Requirements Validation & Management",
      content: `**Requirements Validation**

**Tujuan:**
- Memastikan requirements benar dan lengkap
- Menemukan masalah sebelum development
- Reduce rework costs

**Validation Checks:**

**Validity:**
- Does system provide functions untuk support user needs?
- Are requirements aligned dengan business goals?

**Consistency:**
- Are there conflicting requirements?
- Do requirements contradict each other?

**Completeness:**
- Are all functions required by customer included?
- Are all constraints defined?

**Realism:**
- Can requirements be implemented dengan available budget dan technology?
- Are requirements feasible?

**Verifiability:**
- Can requirements be tested?
- Are acceptance criteria clear?

**Teknik Validasi:**

**1. Requirements Reviews**

**Formal Inspection:**
- Structured review process
- Defined roles (moderator, reader, recorder)
- Checklist-based
- Defect detection

**Walkthrough:**
- Author presents requirements
- Informal discussion
- Stakeholder feedback

**Checklist Items:**
- Is requirement clear dan unambiguous?
- Is requirement testable?
- Is requirement necessary?
- Is requirement feasible?
- Is requirement consistent dengan others?

**2. Prototyping**
- Validate understanding
- User feedback
- Executable specification
- Reduce ambiguity

**3. Test Case Generation**
- Jika tidak bisa buat test case, requirements tidak jelas
- Early test planning
- Acceptance criteria validation

**4. Model Validation**
- Check UML diagrams
- Consistency between models
- Completeness of models

**5. Automated Consistency Analysis**
- Tools untuk check consistency
- Requirements management tools
- Dependency analysis

---

**Requirements Management**

**Change Management:**

**Change Request Process:**
1. Submit change request
2. Analyze impact
   - Technical impact
   - Cost impact
   - Schedule impact
   - Risk impact
3. Change Control Board (CCB) review
4. Approve/Reject decision
5. Implement if approved
6. Update documentation
7. Communicate changes

**Impact Analysis:**
- Which requirements affected?
- Which design components affected?
- Which code modules affected?
- Which test cases affected?
- Cost dan schedule impact?

**Version Control:**
- Baseline management
- Version history
- Configuration management
- Rollback capability

**Requirements Traceability:**

**Forward Traceability:**
Requirements → Design → Code → Test

**Backward Traceability:**
Code → Requirements

**Benefits:**
- Impact analysis
- Coverage analysis
- Change management
- Compliance verification

**Traceability Matrix:**
| Req ID | Design ID | Module | Test Case | Status |
|--------|-----------|--------|-----------|--------|
| R-001  | D-001     | Auth   | TC-001    | Pass   |
| R-002  | D-002     | Payment| TC-002    | Fail   |

**Requirements Management Tools:**

**Commercial:**
- IBM DOORS
- Jama Connect
- Polarion
- Helix RM

**Open Source/Free:**
- JIRA
- Azure DevOps
- Redmine
- ReqView

**Features:**
- Requirements capture
- Traceability
- Version control
- Change management
- Reporting
- Collaboration`
    }
  ],
  references: [
    "Sommerville, I. (2016). Software Engineering. Chapter 4-5.",
    "Wiegers, K. & Beatty, J. (2013). Software Requirements. 3rd Edition.",
    "IEEE Std 830-1998. Recommended Practice for Software Requirements Specifications.",
    "Pohl, K. (2010). Requirements Engineering: Fundamentals, Principles, and Techniques."
  ],
  assignments: [
    {
      id: "tugas-4-1",
      title: "Requirements Gathering: Sistem Informasi Akademik",
      type: "survey",
      description: "Melakukan pengumpulan requirements untuk pengembangan atau perbaikan sistem informasi akademik di fakultas dengan teknik elicitation yang berbeda.",
      instructions: [
        "Pilih salah satu modul sistem akademik (KRS, KHS, Jadwal, Nilai, dll)",
        "Identifikasi stakeholder terkait (mahasiswa, dosen, admin, kaprodi)",
        "Gunakan minimal 3 teknik elicitation berbeda:",
        "  - Interview dengan 2-3 stakeholder berbeda",
        "  - Questionnaire untuk minimal 20 responden",
        "  - Observation proses yang ada",
        "  - Document analysis sistem saat ini",
        "Dokumentasikan semua requirements yang terkumpul",
        "Klasifikasikan menjadi functional dan non-functional requirements",
        "Prioritaskan menggunakan MoSCoW method",
        "Buat Software Requirements Specification (SRS) document"
      ],
      deliverables: [
        "Transkrip wawancara (minimal 3 stakeholder)",
        "Hasil questionnaire dengan analisis",
        "Catatan observasi dan foto dokumentasi",
        "Daftar requirements (functional & non-functional)",
        "Prioritization matrix (MoSCoW)",
        "Dokumen SRS mengikuti IEEE 830 standard (minimal 15 halaman)",
        "Presentasi (15-20 slide)"
      ],
      duration: "3 minggu",
      difficulty: "sulit",
      skills: [
        "Requirements elicitation",
        "Komunikasi dengan stakeholder",
        "Dokumentasi teknis",
        "Analisis dan klasifikasi",
        "Prioritization"
      ],
      resources: [
        "IEEE 830 Template",
        "Questionnaire template (Google Forms)",
        "Interview guide",
        "MoSCoW prioritization framework"
      ],
      rubric: [
        {
          criteria: "Teknik Elicitation",
          excellent: "Menggunakan 4+ teknik elicitation dengan implementasi yang sangat baik dan komprehensif",
          good: "Menggunakan 3 teknik elicitation dengan implementasi yang baik",
          satisfactory: "Menggunakan kurang dari 3 teknik atau implementasi kurang mendalam",
          points: 25
        },
        {
          criteria: "Kelengkapan Requirements",
          excellent: "Requirements lengkap, terperinci, dan mencakup semua aspek sistem",
          good: "Requirements cukup lengkap dengan beberapa detail yang perlu ditambahkan",
          satisfactory: "Requirements kurang lengkap atau terlalu umum",
          points: 25
        },
        {
          criteria: "Dokumentasi SRS",
          excellent: "SRS mengikuti IEEE 830 standard dengan struktur yang sangat baik dan profesional",
          good: "SRS cukup baik dengan struktur yang jelas",
          satisfactory: "SRS kurang terstruktur atau tidak mengikuti standar",
          points: 25
        },
        {
          criteria: "Analisis & Prioritisasi",
          excellent: "Analisis mendalam dengan prioritisasi yang tepat dan well-justified",
          good: "Analisis cukup baik dengan prioritisasi yang relevan",
          satisfactory: "Analisis dan prioritisasi kurang mendalam",
          points: 25
        }
      ]
    },
    {
      id: "tugas-4-2",
      title: "Use Case Modeling: Aplikasi E-Commerce",
      type: "praktikum",
      description: "Membuat use case diagram dan use case specification untuk aplikasi e-commerce sederhana.",
      instructions: [
        "Pilih fitur utama aplikasi e-commerce (contoh: checkout, payment, order tracking)",
        "Identifikasi semua actors yang terlibat",
        "Buat use case diagram menggunakan UML tools (StarUML, draw.io, atau Visual Paradigm)",
        "Tulis use case specification untuk minimal 5 use case utama:",
        "  - Use case name dan ID",
        "  - Primary actor",
        "  - Preconditions",
        "  - Main flow (happy path)",
        "  - Alternative flows",
        "  - Exception flows",
        "  - Postconditions",
        "  - Business rules",
        "Identifikasi include dan extend relationships",
        "Review dan validasi dengan teman (peer review)"
      ],
      deliverables: [
        "Use case diagram (format editable dan PDF)",
        "Use case specification document (minimal 5 use cases)",
        "Actor glossary",
        "Peer review feedback form"
      ],
      duration: "1 minggu",
      difficulty: "sedang",
      skills: [
        "UML modeling",
        "Use case writing",
        "Attention to detail",
        "Tools usage"
      ],
      resources: [
        "StarUML atau draw.io",
        "Use case specification template",
        "Contoh use case diagram"
      ]
    },
    {
      id: "tugas-4-3",
      title: "User Stories Workshop",
      type: "kelompok",
      description: "Menulis user stories untuk proyek aplikasi mobile kampus dan melakukan estimation dengan planning poker.",
      instructions: [
        "Bentuk kelompok 4-5 orang",
        "Bayangkan aplikasi mobile kampus yang ideal",
        "Tulis minimal 20 user stories dengan format:",
        "  'As a [role], I want [feature], so that [benefit]'",
        "Setiap user story harus memiliki acceptance criteria",
        "Lakukan estimation session dengan planning poker:",
        "  - Setiap anggota memberikan estimate (story points)",
        "  - Diskusikan perbedaan estimate",
        "  - Capai consensus",
        "Prioritaskan user stories berdasarkan business value",
        "Buat product backlog yang terurut"
      ],
      deliverables: [
        "Daftar 20+ user stories dengan acceptance criteria",
        "Planning poker results (foto atau screenshot)",
        "Product backlog yang terurut prioritas",
        "Refleksi proses estimation (2-3 halaman)"
      ],
      duration: "1 minggu",
      difficulty: "sedang",
      skills: [
        "User story writing",
        "Estimation techniques",
        "Team collaboration",
        "Prioritization"
      ],
      resources: [
        "Planning poker cards (online atau fisik)",
        "User story template",
        "Contoh acceptance criteria"
      ]
    },
    {
      id: "tugas-4-4",
      title: "Requirements Validation Review",
      type: "kelompok",
      description: "Melakukan review dan validasi requirements document dari kelompok lain.",
      instructions: [
        "Bentuk kelompok reviewer (3-4 orang)",
        "Dapatkan requirements document dari kelompok lain",
        "Lakukan formal inspection dengan checklist:",
        "  - Completeness check",
        "  - Consistency check",
        "  - Clarity check",
        "  - Feasibility check",
        "  - Verifiability check",
        "Dokumentasikan setiap issue yang ditemukan",
        "Buat inspection report dengan severity level",
        "Presentasikan findings kepada kelompok yang dibuat",
        "Kelompok yang dibuat harus memberikan response"
      ],
      deliverables: [
        "Inspection checklist (filled)",
        "Inspection report dengan issues",
        "Severity classification",
        "Recommendations untuk improvement",
        "Response dari kelompok yang dibuat"
      ],
      duration: "4 hari",
      difficulty: "sedang",
      skills: [
        "Critical review",
        "Quality assurance",
        "Communication",
        "Documentation"
      ]
    }
  ]
};
