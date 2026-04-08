import { Meeting } from '../types';

export const meeting14: Meeting = {
  id: 14,
  title: "Software Project Management",
  type: "materi",
  description: "Memahami prinsip-prinsip project management dalam konteks software development.",
  objectives: [
    "Memahami project planning dan scheduling",
    "Mengenal risk management",
    "Mampu melakukan effort estimation",
    "Memahami team management"
  ],
  subtopics: [
    {
      title: "Project Planning",
      content: `**Software Project Management melibatkan planning, monitoring, dan controlling software projects.**

**Project Planning Activities:**

**1. Scope Definition**
- Define project boundaries
- Identify deliverables
- Define constraints

**2. Work Breakdown Structure (WBS)**
- Decompose project into tasks
- Hierarchical structure
- Manageable work packages

**3. Scheduling**
- Task dependencies
- Critical path
- Gantt charts
- PERT charts

**4. Resource Allocation**
- Team members
- Equipment
- Budget

**5. Risk Planning**
- Identify risks
- Assess probability dan impact
- Mitigation strategies

**Estimation Techniques:**

**1. Expert Judgment**
- Based on experience
- Quick but subjective

**2. Analogy-Based**
- Compare dengan similar projects
- Historical data

**3. Algorithmic Models**
- COCOMO (Constructive Cost Model)
- Function Point Analysis
- Use Case Points

**4. Bottom-Up**
- Estimate individual tasks
- Aggregate to total

**5. Planning Poker**
- Team-based estimation
- Consensus-driven`
    },
    {
      title: "Risk & Team Management",
      content: `**Risk Management:**

**Risk Categories:**
- **Technical risks** - Technology, requirements, quality
- **Project risks** - Schedule, resources, budget
- **Business risks** - Market, strategic, organizational

**Risk Management Process:**
1. **Risk Identification** - Brainstorm potential risks
2. **Risk Analysis** - Assess probability dan impact
3. **Risk Planning** - Develop mitigation strategies
4. **Risk Monitoring** - Track risks throughout project

**Risk Matrix:**
- High probability, High impact → Immediate action
- High probability, Low impact → Monitor closely
- Low probability, High impact → Contingency plan
- Low probability, Low impact → Accept

**Team Management:**

**Team Structure:**
- **Democratic** - Consensus decision making
- **Chief Programmer** - Technical leader
- **Hierarchical** - Traditional management

**Motivation:**
- Clear goals
- Recognition
- Career development
- Work-life balance

**Communication:**
- Daily standups
- Regular meetings
- Documentation
- Collaboration tools`
    }
  ],
  references: [
    "Sommerville, I. (2016). Software Engineering. Chapter 22-23.",
    "PMI (2017). A Guide to the Project Management Body of Knowledge (PMBOK Guide)."
  ]
};
