import { Meeting } from '../types';

export const meeting13: Meeting = {
  id: 13,
  title: "Software Quality Management",
  type: "materi",
  description: "Memahami konsep quality management dan teknik untuk memastikan kualitas software.",
  objectives: [
    "Memahami quality attributes",
    "Mengenal quality management processes",
    "Mampu melakukan quality assurance",
    "Memahami quality metrics"
  ],
  subtopics: [
    {
      title: "Software Quality",
      content: `**Software Quality adalah degree to which software meets requirements dan user expectations.**

**Quality Attributes (ISO 25010):**

**Functional Suitability:**
- Functional completeness
- Functional correctness
- Functional appropriateness

**Performance Efficiency:**
- Time behavior
- Resource utilization
- Capacity

**Compatibility:**
- Co-existence
- Interoperability

**Usability:**
- Appropriateness recognizability
- Learnability
- Operability
- User error protection
- User interface aesthetics
- Accessibility

**Reliability:**
- Maturity
- Availability
- Fault tolerance
- Recoverability

**Security:**
- Confidentiality
- Integrity
- Non-repudiation
- Accountability
- Authenticity

**Maintainability:**
- Modularity
- Reusability
- Analyzability
- Modifiability
- Testability

**Portability:**
- Adaptability
- Installability
- Replaceability`
    },
    {
      title: "Quality Management",
      content: `**Quality Management Activities:**

**1. Quality Planning**
- Define quality standards
- Define quality procedures
- Allocate responsibilities

**2. Quality Assurance (QA)**
- Process-oriented
- Prevent defects
- Reviews dan audits
- Process improvement

**3. Quality Control (QC)**
- Product-oriented
- Detect defects
- Testing
- Inspections

**Quality Metrics:**
- Defect density
- Mean Time Between Failures (MTBF)
- Code coverage
- Cyclomatic complexity
- Technical debt ratio
- Customer satisfaction

**Quality Standards:**
- ISO 9001
- ISO 25010 (Software Quality)
- CMMI (Capability Maturity Model Integration)`
    }
  ],
  references: [
    "ISO/IEC 25010:2011 - Systems and software Quality Requirements and Evaluation",
    "Sommerville, I. (2016). Software Engineering. Chapter 24."
  ]
};
