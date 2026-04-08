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
      content: `**Software Maintenance ad