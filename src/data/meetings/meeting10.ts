import { Meeting } from '../types';

export const meeting10: Meeting = {
  id: 10,
  title: "Software Evolution & Maintenance",
  type: "materi",
  description: "Memahami proses evolusi software dan strategi maintenance untuk sistem jangka panjang.",
  objectives: [
    "Memahami konsep software evolution",
    "Mengenal tipe-tipe maintenance",
    "Mampu mengelola technical debt",
    "Memahami refactoring dan legacy systems"
  ],
  subtopics: [
    {
      title: "Software Evolution",
      content: `**Software Evolution adalah proses perubahan software setelah delivery.**

**Lehman's Laws of Software Evolution:**

**1. Continuing Change**
- Software must continually adapt atau menjadi less useful

**2. Increasing Complexity**
- Complexity increases unless work done to maintain/reduce it

**3. Self Regulation**
- Evolution process is self-regulating

**4. Conservation of Organizational Stability**
- Average effective global activity rate is invariant

**5. Conservation of Familiarity**
- Incremental growth limits

**6. Continuing Growth**
- Functional content must continually increase

**7. Declining Quality**
- Quality declines unless rigorously maintained

**8. Feedback System**
- Evolution processes are multi-level, multi-loop feedback systems

**Evolution vs Development:**
- Development: Create new system
- Evolution: Modify existing system
- Evolution often more expensive (70-80% of costs)

**Challenges:**
- Understanding existing code
- Impact analysis
- Regression testing
- Technical debt
- Documentation outdated`
    },
    {
      title: "Software Maintenance",
      content: `**Software Maintenance adalah modifikasi software setelah delivery.**

**Types of Maintenance:**

**1. Corrective Maintenance (21%)**
- Fix bugs dan errors
- Reactive
- Emergency fixes

**2. Adaptive Maintenance (25%)**
- Adapt to environment changes
- OS updates
- Hardware changes
- Regulatory changes

**3. Perfective Maintenance (50%)**
- Add new features
- Improve performance
- Enhance usability
- User requests

**4. Preventive Maintenance (4%)**
- Improve maintainability
- Refactoring
- Documentation updates
- Code optimization

**Maintenance Costs:**
- 60-90% of total software costs
- Legacy systems expensive to maintain
- Documentation crucial

**Maintenance Process:**
1. Change request
2. Impact analysis
3. Release planning
4. Change implementation
5. System release
6. Change documentation`
    },
    {
      title: "Technical Debt & Refactoring",
      content: `**Technical Debt:**

Metaphor untuk cost of additional rework caused by choosing easy solution now instead of better approach.

**Causes:**
- Time pressure
- Lack of knowledge
- Poor design decisions
- Changing requirements
- Lack of testing

**Types:**
- **Deliberate** - Conscious decision
- **Accidental** - Lack of knowledge
- **Bit rot** - Gradual degradation

**Managing Technical Debt:**
- Track dan measure
- Prioritize repayment
- Allocate time for refactoring
- Code reviews
- Automated testing

**Refactoring:**

Restructuring code without changing external behavior.

**When to Refactor:**
- Code smells detected
- Before adding features
- During bug fixes
- Regular maintenance

**Common Refactorings:**
- Extract method
- Rename variable
- Move method
- Extract class
- Inline method

**Refactoring Tools:**
- IDE support (IntelliJ, VS Code)
- Static analysis tools
- Automated refactoring

**Legacy Systems:**

Old systems that remain critical to business.

**Challenges:**
- Outdated technology
- Poor documentation
- Original developers gone
- Fear of breaking
- High maintenance cost

**Strategies:**
- Incremental modernization
- Strangler pattern
- API wrapping
- Gradual replacement`
    }
  ],
  references: [
    "Sommerville, I. (2016). Software Engineering. Chapter 9.",
    "Fowler, M. (2018). Refactoring: Improving the Design of Existing Code. 2nd Edition.",
    "Feathers, M. (2004). Working Effectively with Legacy Code."
  ]
};
