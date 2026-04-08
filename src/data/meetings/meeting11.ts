import { Meeting } from '../types';

export const meeting11: Meeting = {
  id: 11,
  title: "Software Reuse",
  type: "materi",
  description: "Memahami konsep reuse dalam software engineering dan implementasi component-based development.",
  objectives: [
    "Memahami benefits dan challenges software reuse",
    "Mengenal berbagai bentuk reuse",
    "Memahami component-based software engineering",
    "Mampu menggunakan frameworks dan libraries"
  ],
  subtopics: [
    {
      title: "Konsep Software Reuse",
      content: `**Software Reuse adalah penggunaan kembali software artifacts dalam pengembangan sistem baru.**

**Benefits of Reuse:**
- Reduced development time dan cost
- Increased reliability (tested components)
- Reduced process risk
- Effective use of specialists
- Standards compliance
- Accelerated development

**Challenges:**
- Increased maintenance costs
- Lack of tool support
- Not-invented-here syndrome
- Creating dan maintaining component library
- Finding dan adapting reusable components

**Levels of Reuse:**
1. **Code Reuse** - Copy-paste code
2. **Design Reuse** - Reuse design patterns
3. **Architecture Reuse** - Reuse architectural patterns
4. **Component Reuse** - Reuse binary components
5. **Application Reuse** - Reuse entire applications`
    },
    {
      title: "Component-Based Development",
      content: `**Component-Based Software Engineering (CBSE)**

**Component:**
- Independent, deployable unit
- Well-defined interfaces
- Encapsulated implementation
- Composable dengan components lain

**Component Models:**
- **EJB (Enterprise JavaBeans)**
- **COM/DCOM (Microsoft)**
- **.NET Components**
- **CORBA Components**

**Component Development Process:**
1. Identify candidate components
2. Search for reusable components
3. Validate components
4. Adapt components if needed
5. Integrate components
6. Test integrated system

**Design for Reuse:**
- Generalization
- Configurability
- Documentation
- Standard interfaces`
    }
  ],
  references: [
    "Sommerville, I. (2016). Software Engineering. Chapter 16.",
    "Szyperski, C. (2002). Component Software: Beyond Object-Oriented Programming."
  ]
};
