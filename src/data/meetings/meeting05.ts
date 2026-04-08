import { Meeting } from '../types';

export const meeting05: Meeting = {
  id: 5,
  title: "System Modeling dengan UML",
  type: "materi",
  description: "Mempelajari teknik pemodelan sistem menggunakan UML untuk mendokumentasikan dan mengkomunikasikan desain.",
  objectives: [
    "Memahami pentingnya pemodelan sistem",
    "Menguasai berbagai diagram UML",
    "Mampu membuat model yang efektif",
    "Memahami hubungan antar diagram UML"
  ],
  subtopics: [
    {
      title: "Pengantar UML",
      content: `**Unified Modeling Language (UML)**

Standard visual modeling language untuk software systems.

**Sejarah UML:**
- 1990s: Banyak metodologi OO (Booch, OMT, OOSE)
- 1995: "Three Amigos" - Booch, Rumbaugh, Jacobson
- 1997: UML 1.0 diadopsi OMG
- 2005: UML 2.0
- Current: UML 2.5 (2015)

**14 Diagram UML:**

**Structural Diagrams (Static View):**
1. **Class Diagram** - Classes dan relationships
2. **Object Diagram** - Object instances
3. **Component Diagram** - Component organization
4. **Deployment Diagram** - Physical deployment
5. **Package Diagram** - Package dependencies
6. **Composite Structure Diagram** - Internal structure
7. **Profile Diagram** - UML extensions

**Behavioral Diagrams (Dynamic View):**
8. **Use Case Diagram** - System functionality
9. **Activity Diagram** - Workflow
10. **State Machine Diagram** - Object states
11. **Sequence Diagram** - Time-ordered interactions
12. **Communication Diagram** - Object interactions
13. **Timing Diagram** - Timing constraints
14. **Interaction Overview Diagram** - Control flow

**Kegunaan UML:**
- **Visualize:** Gambaran sistem
- **Specify:** Detail spesifikasi
- **Construct:** Blueprint untuk implementation
- **Document:** Dokumentasi arsitektur

**UML Tools:**
- Enterprise Architect
- Visual Paradigm
- StarUML (free)
- Lucidchart
- draw.io (free)
- PlantUML (text-based)`
    },
    {
      title: "Class Diagram",
      content: `**Class Diagram - Most Important UML Diagram**

Menunjukkan struktur statis sistem: classes, attributes, operations, dan relationships.

**Komponen Class:**

\`\`\`
+---------------------------+
|       ClassName           |  ← Class Name (Bold, Centered)
+---------------------------+
| - attribute1: Type        |  ← Attributes
| # attribute2: Type        |
| + attribute3: Type        |
+---------------------------+
| + method1(): ReturnType   |  ← Operations/Methods
| - method2(param): void    |
| # method3(): Type         |
+---------------------------+
\`\`\`

**Visibility:**
- **+** Public: Accessible dari mana saja
- **-** Private: Hanya dalam class
- **#** Protected: Class dan subclasses
- **~** Package: Dalam package yang sama

**Attribute Syntax:**
\`visibility name: type [multiplicity] = defaultValue {property}\`

Example: \`- balance: double [1] = 0.0 {readOnly}\`

**Operation Syntax:**
\`visibility name(parameters): returnType {property}\`

Example: \`+ withdraw(amount: double): boolean\`

**Relationships:**

**1. Association**
- Structural relationship antar classes
- Solid line
- **Multiplicity:**
  - 1: Exactly one
  - 0..1: Zero or one
  - *: Zero or more
  - 1..*: One or more
  - n..m: Range

Example:
\`\`\`
Customer 1 -------- * Order
(One customer has many orders)
\`\`\`

**Navigability:**
- Arrow menunjukkan direction
- Bidirectional (default): Both can access
- Unidirectional: One-way access

**2. Aggregation (Has-a, Weak)**
- Part dapat exist tanpa whole
- Hollow diamond di sisi whole
- Shared ownership

Example:
\`\`\`
Department ◇-------- * Employee
(Department has employees, employee can exist without department)
\`\`\`

**3. Composition (Part-of, Strong)**
- Part tidak exist tanpa whole
- Filled diamond di sisi whole
- Exclusive ownership
- Lifecycle dependency

Example:
\`\`\`
House ◆-------- * Room
(House has rooms, room cannot exist without house)
\`\`\`

**4. Inheritance/Generalization (Is-a)**
- Subclass inherits dari superclass
- Hollow triangle arrow ke parent
- Represents specialization

Example:
\`\`\`
    Animal
      △
      |
   ---|---
   |     |
  Dog   Cat
\`\`\`

**5. Dependency (Uses)**
- Temporary relationship
- Dashed arrow
- One class uses another

Example:
\`\`\`
OrderProcessor -----> PaymentGateway
(OrderProcessor uses PaymentGateway)
\`\`\`

**6. Realization/Implementation**
- Class implements interface
- Dashed line dengan hollow triangle
- Interface shown dengan <<interface>> stereotype

Example:
\`\`\`
<<interface>>
  Drawable
     △
     |
  Circle
\`\`\`

**Advanced Concepts:**

**Abstract Class:**
- Italic name atau {abstract}
- Cannot be instantiated
- May have abstract methods

**Interface:**
- <<interface>> stereotype
- All methods abstract
- No attributes (except constants)

**Static Members:**
- Underlined
- Class-level, not instance-level

**Derived Attributes:**
- Calculated from other attributes
- Prefix with /
- Example: /age (derived from birthDate)`
    },
    {
      title: "Sequence & Communication Diagrams",
      content: `**Sequence Diagram - Interaction Over Time**

Menunjukkan interaksi antar objek dalam urutan waktu (time-ordered).

**Komponen:**

**1. Lifeline**
- Vertical dashed line
- Represents participant
- Box dengan nama: objectName:ClassName

**2. Activation Bar**
- Thin rectangle pada lifeline
- Menunjukkan object sedang active/executing

**3. Messages:**

**Synchronous Call:**
- Solid arrow dengan filled head
- Sender waits untuk response
- Example: method call

**Asynchronous Call:**
- Solid arrow dengan open head
- Sender continues immediately
- Example: event, signal

**Return Message:**
- Dashed arrow
- Optional (implied)
- Shows return value

**Self-Message:**
- Arrow ke lifeline sendiri
- Recursive call atau internal method

**Create Message:**
- Dashed arrow dengan <<create>>
- Object creation

**Destroy Message:**
- Arrow dengan X
- Object destruction

**4. Combined Fragments:**

**alt (alternative):**
\`\`\`
alt [condition1]
   messages...
[else]
   messages...
\`\`\`

**opt (optional):**
\`\`\`
opt [condition]
   messages...
\`\`\`

**loop:**
\`\`\`
loop [condition or count]
   messages...
\`\`\`

**par (parallel):**
- Concurrent execution
- Multiple regions

**ref (reference):**
- Reference to another diagram
- Reuse interaction

**Example - Online Shopping:**
\`\`\`
Customer -> ShoppingCart: addItem(product)
ShoppingCart -> Product: checkAvailability()
Product --> ShoppingCart: available
ShoppingCart --> Customer: itemAdded

Customer -> ShoppingCart: checkout()
ShoppingCart -> PaymentService: processPayment(amount)
PaymentService -> Bank: authorize(card, amount)
Bank --> PaymentService: approved
PaymentService --> ShoppingCart: paymentSuccess
ShoppingCart -> OrderService: createOrder()
OrderService --> ShoppingCart: orderID
ShoppingCart --> Customer: orderConfirmation
\`\`\`

---

**Communication Diagram (Collaboration Diagram)**

Menunjukkan interaksi antar objek dengan fokus pada structural organization.

**Differences dari Sequence:**
- Tidak show time explicitly
- Show object relationships
- Messages numbered untuk sequence
- More compact

**Components:**
- Objects (boxes)
- Links (lines between objects)
- Messages (arrows dengan numbers)

**Message Numbering:**
- 1, 2, 3... untuk sequence
- 1.1, 1.2... untuk nested calls
- 1a, 1b... untuk concurrent

**Example:**
\`\`\`
[Customer] --1: login()--> [AuthService]
           <--2: token---
           --3: getOrders()--> [OrderService]
                               --3.1: query()--> [Database]
                               <--3.2: results--
           <--4: orderList--
\`\`\`

**When to Use:**
- **Sequence:** Focus on time ordering, complex interactions
- **Communication:** Focus on relationships, simpler interactions`
    },
    {
      title: "Activity & State Machine Diagrams",
      content: `**Activity Diagram - Workflow Modeling**

Menunjukkan flow aktivitas dalam proses, use case, atau method.

**Komponen:**

**1. Initial Node**
- Filled circle (●)
- Starting point
- One per diagram

**2. Activity/Action**
- Rounded rectangle
- Unit of behavior
- Can be: action, sub-activity

**3. Control Flow**
- Solid arrow
- Sequence of activities

**4. Decision Node**
- Diamond (◇)
- Branching berdasarkan condition
- Guards: [condition]
- One input, multiple outputs

**5. Merge Node**
- Diamond (◇)
- Menggabungkan branches
- Multiple inputs, one output

**6. Fork Node**
- Thick horizontal/vertical bar
- Split ke parallel activities
- One input, multiple outputs

**7. Join Node**
- Thick horizontal/vertical bar
- Synchronize parallel activities
- Multiple inputs, one output
- Wait untuk all inputs

**8. Final Node**
- Circle dengan filled circle (◉)
- End point
- Can have multiple

**9. Activity Final Node**
- Terminates all flows

**10. Flow Final Node**
- Terminates one flow only

**11. Swimlanes/Partitions**
- Vertical atau horizontal lanes
- Organize activities by actor/system
- Show responsibility

**12. Object Nodes**
- Rectangle
- Data/object flow
- Input/output

**13. Signals:**
- **Send Signal:** Pentagon pointing right
- **Receive Signal:** Pentagon pointing left (concave)

**Example - Order Processing:**
\`\`\`
(●) Start
  ↓
[Receive Order]
  ↓
◇ Check Stock
  ├─[In Stock]─→ [Process Payment]
  │                ↓
  │              ◇ Payment OK?
  │                ├─[Yes]─→ [Pack Order]
  │                │           ↓
  │                │         [Ship Order]
  │                │           ↓
  │                │         (◉) End
  │                │
  │                └─[No]──→ [Notify Customer]
  │                            ↓
  │                          (◉) End
  │
  └─[Out of Stock]─→ [Notify Customer]
                       ↓
                     (◉) End
\`\`\`

---

**State Machine Diagram - Object Lifecycle**

Menunjukkan states dari objek dan transisi antar states.

**Komponen:**

**1. State**
- Rounded rectangle
- Kondisi objek pada waktu tertentu
- Can have internal activities:
  - **entry/** Action saat masuk state
  - **do/** Activity selama di state
  - **exit/** Action saat keluar state

**2. Initial State**
- Filled circle (●)
- Pseudo-state

**3. Final State**
- Circle dengan filled circle (◉)
- Terminal state

**4. Transition**
- Arrow antar states
- Label: **trigger [guard] / action**
  - **trigger:** Event yang cause transition
  - **[guard]:** Condition yang harus true
  - **action:** Behavior saat transition

**5. Composite State**
- State yang berisi sub-states
- Hierarchical modeling
- Entry point, exit point

**6. History State**
- H dalam circle
- Remember last sub-state
- **Shallow history:** H
- **Deep history:** H*

**7. Choice Pseudo-state**
- Diamond
- Dynamic conditional branch

**8. Fork/Join**
- Bar untuk concurrent states

**Example - Order State Machine:**
\`\`\`
(●) → [New]
        ↓ place order
     [Pending]
        ├─ confirm payment ─→ [Processing]
        │                        ↓ ship
        │                     [Shipped]
        │                        ↓ deliver
        │                     [Delivered] → (◉)
        │
        └─ cancel ─→ [Cancelled] → (◉)
\`\`\`

**State dengan Internal Activities:**
\`\`\`
┌─────────────────────┐
│    Processing       │
├─────────────────────┤
│ entry/ startTimer   │
│ do/ processItems    │
│ exit/ notifyShipping│
└─────────────────────┘
\`\`\`

**When to Use:**
- Object dengan complex lifecycle
- Reactive systems
- Protocol modeling
- UI navigation flows
- Game character states`
    },
    {
      title: "Component & Deployment Diagrams",
      content: `**Component Diagram - Logical Architecture**

Menunjukkan organization dan dependencies antar software components.

**Component:**
- Modular part of system
- Encapsulates implementation
- Provides interfaces
- Rectangle dengan <<component>> atau component icon

**Interfaces:**
- **Provided Interface:** Lollipop (circle)
- **Required Interface:** Socket (half-circle)

**Dependencies:**
- Dashed arrow
- Component depends on another

**Example:**
\`\`\`
┌─────────────┐
│   Web UI    │
│<<component>>│
└──────┬──────┘
       │ uses
       ↓
┌─────────────┐     ┌──────────────┐
│ API Gateway │────→│ Auth Service │
│<<component>>│     │<<component>> │
└──────┬──────┘     └──────────────┘
       │
       ├──→ ┌──────────────┐
       │    │Order Service │
       │    │<<component>> │
       │    └──────┬───────┘
       │           │
       └──→ ┌──────┴───────┐
            │   Database   │
            │<<component>> │
            └──────────────┘
\`\`\`

**Ports:**
- Interaction point
- Square on component boundary

**Connectors:**
- Assembly connector: Provided to required
- Delegation connector: External to internal

---

**Deployment Diagram - Physical Architecture**

Menunjukkan physical deployment dari artifacts pada nodes.

**Node:**
- Physical atau virtual resource
- 3D box
- Types:
  - **Device:** Hardware (server, PC, mobile)
  - **Execution Environment:** Software platform (OS, container, VM)

**Artifact:**
- Physical piece of information
- File, executable, library, database
- Rectangle dengan <<artifact>>

**Communication Path:**
- Line between nodes
- Protocol/technology label

**Deployment:**
- Artifact deployed pada node
- Dashed arrow atau containment

**Example - Web Application:**
\`\`\`
┌─────────────────────┐
│   Client Browser    │
│     (Device)        │
│  ┌───────────────┐  │
│  │   Web App     │  │
│  │  <<artifact>> │  │
│  └───────────────┘  │
└──────────┬──────────┘
           │ HTTPS
           ↓
┌──────────────────────┐
│   Web Server         │
│   (Device)           │
│  ┌────────────────┐  │
│  │  Nginx         │  │
│  │  <<execution   │  │
│  │  environment>> │  │
│  │  ┌──────────┐  │  │
│  │  │ app.jar  │  │  │
│  │  │<<artifact│  │  │
│  │  └──────────┘  │  │
│  └────────────────┘  │
└──────────┬───────────┘
           │ JDBC
           ↓
┌──────────────────────┐
│   Database Server    │
│   (Device)           │
│  ┌────────────────┐  │
│  │  PostgreSQL    │  │
│  │  <<execution   │  │
│  │  environment>> │  │
│  │  ┌──────────┐  │  │
│  │  │ data.db  │  │  │
│  │  │<<artifact│  │  │
│  │  └──────────┘  │  │
│  └────────────────┘  │
└──────────────────────┘
\`\`\`

**Stereotypes:**
- <<device>>
- <<execution environment>>
- <<artifact>>
- <<deploy>>

**Specifications:**
- Hardware specs
- OS version
- Network bandwidth
- Protocols

**Use Cases:**
- System topology
- Infrastructure planning
- Deployment strategy
- Scalability design
- Cloud architecture`
    }
  ],
  references: [
    "Fowler, M. (2003). UML Distilled. 3rd Edition. Addison-Wesley.",
    "OMG Unified Modeling Language Specification v2.5.1",
    "Sommerville, I. (2016). Software Engineering. Chapter 5.",
    "Booch, G., Rumbaugh, J., Jacobson, I. (2005). The Unified Modeling Language User Guide. 2nd Edition."
  ],
  assignments: [
    {
      id: "tugas-5-1",
      title: "UML Modeling Project: Sistem Perpustakaan Digital",
      type: "kelompok",
      description: "Membuat serangkaian diagram UML lengkap untuk sistem perpustakaan digital kampus.",
      instructions: [
        "Bentuk kelompok 4-5 orang",
        "Analisis kebutuhan sistem perpustakaan digital:",
        "  - Peminjaman buku digital",
        "  - Pencarian katalog",
        "  - Manajemen anggota",
        "  - Reservasi buku",
        "  - Notifikasi dan reminder",
        "Buat diagram UML berikut:",
        "  1. Use Case Diagram (semua actors dan use cases)",
        "  2. Class Diagram (minimal 10 classes dengan relationships)",
        "  3. Sequence Diagram (untuk 3 skenario utama)",
        "  4. Activity Diagram (untuk 2 proses bisnis)",
        "  5. State Machine Diagram (untuk entitas yang relevan)",
        "Gunakan UML tools profesional (StarUML, Visual Paradigm, atau Enterprise Architect)",
        "Pastikan konsistensi antar diagram",
        "Buat dokumentasi penjelasan untuk setiap diagram"
      ],
      deliverables: [
        "Use Case Diagram dengan actor glossary",
        "Class Diagram dengan class specifications",
        "3 Sequence Diagrams dengan penjelasan",
        "2 Activity Diagrams dengan swimlanes",
        "State Machine Diagram",
        "Dokumentasi lengkap (10-15 halaman)",
        "File source (editable) dan export (PDF/PNG)"
      ],
      duration: "2 minggu",
      difficulty: "sulit",
      skills: [
        "UML modeling",
        "System analysis",
        "Object-oriented design",
        "Tools proficiency",
        "Team collaboration"
      ],
      resources: [
        "StarUML atau Visual Paradigm",
        "UML specification guide",
        "Contoh diagram UML"
      ],
      rubric: [
        {
          criteria: "Kelengkapan Diagram",
          excellent: "Semua diagram yang diminta dibuat dengan lengkap dan detail",
          good: "Sebagian besar diagram lengkap dengan beberapa yang kurang detail",
          satisfactory: "Beberapa diagram kurang lengkap atau tidak ada",
          points: 30
        },
        {
          criteria: "Ketepatan Notasi UML",
          excellent: "Semua notasi UML benar dan mengikuti standar",
          good: "Sebagian besar notasi benar dengan sedikit kesalahan",
          satisfactory: "Banyak notasi yang tidak sesuai standar",
          points: 25
        },
        {
          criteria: "Konsistensi Antar Diagram",
          excellent: "Semua diagram konsisten satu sama lain",
          good: "Sebagian besar diagram konsisten",
          satisfactory: "Banyak inkonsistensi antar diagram",
          points: 25
        },
        {
          criteria: "Kualitas Dokumentasi",
          excellent: "Dokumentasi sangat jelas, terstruktur, dan informatif",
          good: "Dokumentasi cukup jelas dan terstruktur",
          satisfactory: "Dokumentasi kurang jelas atau tidak lengkap",
          points: 20
        }
      ]
    },
    {
      id: "tugas-5-2",
      title: "Class Diagram Reverse Engineering",
      type: "praktikum",
      description: "Melakukan reverse engineering dari kode program yang ada menjadi class diagram UML.",
      instructions: [
        "Pilih proyek open source atau kode program yang sudah ada (minimal 10 classes)",
        "Analisis struktur kode program:",
        "  - Identifikasi semua classes",
        "  - Identifikasi attributes dan methods",
        "  - Identifikasi relationships (association, inheritance, dll)",
        "Buat class diagram secara manual menggunakan UML tools",
        "Gunakan fitur reverse engineering dari UML tools (jika tersedia)",
        "Bandingkan hasil manual dengan hasil otomatis",
        "Analisis perbedaan dan kesamaan",
        "Buat laporan perbandingan"
      ],
      deliverables: [
        "Class diagram hasil manual",
        "Class diagram hasil reverse engineering otomatis",
        "Perbandingan kedua diagram",
        "Analisis perbedaan (3-5 halaman)",
        "Source code yang dianalisis"
      ],
      duration: "1 minggu",
      difficulty: "sedang",
      skills: [
        "Code analysis",
        "UML modeling",
        "Reverse engineering",
        "Critical thinking"
      ],
      resources: [
        "Proyek open source (GitHub)",
        "StarUML atau Visual Paradigm",
        "IDE dengan fitur reverse engineering"
      ]
    },
    {
      id: "tugas-5-3",
      title: "Sequence Diagram: API Integration",
      type: "praktikum",
      description: "Membuat sequence diagram untuk skenario integrasi API antar sistem.",
      instructions: [
        "Pilih skenario integrasi API (contoh: payment gateway, social media login, maps API)",
        "Identifikasi semua participants (objects/systems) yang terlibat",
        "Tentukan skenario yang akan dimodelkan:",
        "  - Happy path (skenario sukses)",
        "  - Alternative flows (skenario alternatif)",
        "  - Exception flows (error handling)",
        "Buat sequence diagram dengan detail:",
        "  - Lifelines",
        "  - Messages (synchronous, asynchronous, return)",
        "  - Activation bars",
        "  - Combined fragments (alt, opt, loop, par)",
        "Tambahkan constraints dan notes",
        "Validasi dengan implementasi nyata (jika memungkinkan)"
      ],
      deliverables: [
        "Sequence diagram untuk happy path",
        "Sequence diagram untuk alternative/exception flows",
        "Penjelasan setiap message dan interaction",
        "Perbandingan dengan dokumentasi API resmi"
      ],
      duration: "5 hari",
      difficulty: "sedang",
      skills: [
        "Sequence diagram modeling",
        "API understanding",
        "System integration",
        "Detail orientation"
      ],
      resources: [
        "API documentation (contoh: Stripe, Google Maps, Facebook)",
        "UML tools",
        "Sequence diagram examples"
      ]
    },
    {
      id: "tugas-5-4",
      title: "Activity Diagram: Business Process Modeling",
      type: "survey",
      description: "Memodelkan proses bisnis nyata dari unit di kampus menggunakan activity diagram.",
      instructions: [
        "Pilih satu proses bisnis di kampus (contoh: pendaftaran mata kuliah, pengajuan cuti, pengajuan skripsi)",
        "Lakukan wawancara dengan staff terkait untuk memahami proses",
        "Identifikasi:",
        "  - Semua aktivitas dalam proses",
        "  - Decision points",
        "  - Parallel activities",
        "  - Actors yang terlibat",
        "  - Input dan output setiap aktivitas",
        "Buat activity diagram dengan swimlanes",
        "Tunjukkan decision nodes, merge nodes, fork, dan join",
        "Validasi diagram dengan staff yang diwawancarai",
        "Buat usulan perbaikan proses jika ada inefficiency"
      ],
      deliverables: [
        "Transkrip wawancara",
        "Activity diagram dengan swimlanes",
        "Penjelasan setiap aktivitas dan decision",
        "Validasi dari staff terkait",
        "Usulan perbaikan proses (jika ada)"
      ],
      duration: "1 minggu",
      difficulty: "sedang",
      skills: [
        "Business process modeling",
        "Interview skills",
        "Activity diagram",
        "Process improvement"
      ],
      resources: [
        "UML tools",
        "Interview guide",
        "Activity diagram examples"
      ]
    },
    {
      id: "tugas-5-5",
      title: "State Machine: Object Lifecycle",
      type: "individual",
      description: "Membuat state machine diagram untuk menunjukkan lifecycle objek dalam sistem.",
      instructions: [
        "Pilih entitas dengan lifecycle yang kompleks (contoh: Order, Ticket, Document, Account)",
        "Identifikasi semua states yang mungkin:",
        "  - Initial state",
        "  - Intermediate states",
        "  - Final states",
        "Identifikasi transitions antar states:",
        "  - Triggers (events)",
        "  - Guards (conditions)",
        "  - Actions",
        "Buat state machine diagram",
        "Tambahkan entry/do/exit actions untuk setiap state",
        "Identifikasi composite states jika ada",
        "Buat state transition table sebagai pelengkap diagram"
      ],
      deliverables: [
        "State machine diagram",
        "State transition table",
        "Penjelasan setiap state dan transition",
        "Contoh skenario perjalanan objek melalui states"
      ],
      duration: "4 hari",
      difficulty: "sedang",
      skills: [
        "State machine modeling",
        "Object lifecycle understanding",
        "Detail orientation"
      ]
    }
  ]
};
