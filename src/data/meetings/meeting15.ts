import { Meeting } from '../types';

export const meeting15: Meeting = {
  id: 15,
  title: "Software Configuration Management",
  type: "materi",
  description: "Memahami version control, build management, dan release management dalam software development.",
  objectives: [
    "Memahami konsep configuration management",
    "Menguasai version control dengan Git",
    "Memahami branching strategies",
    "Mengenal CI/CD practices"
  ],
  subtopics: [
    {
      title: "Configuration Management",
      content: `**Software Configuration Management (SCM) adalah proses tracking dan controlling changes dalam software.**

**SCM Activities:**

**1. Version Control**
- Track changes to code
- Maintain history
- Enable collaboration
- Rollback capabilities

**2. Build Management**
- Compile source code
- Run tests
- Package artifacts
- Automate builds

**3. Release Management**
- Version numbering
- Release notes
- Deployment procedures
- Rollback plans

**4. Change Management**
- Change requests
- Impact analysis
- Approval process
- Implementation tracking

**Benefits:**
- Team collaboration
- Code history
- Parallel development
- Backup dan recovery
- Traceability`
    },
    {
      title: "Git & CI/CD",
      content: `**Git Version Control:**

**Basic Concepts:**
- **Repository** - Project storage
- **Commit** - Snapshot of changes
- **Branch** - Parallel development line
- **Merge** - Combine branches
- **Remote** - Server repository

**Git Workflow:**
1. Clone repository
2. Create branch
3. Make changes
4. Commit changes
5. Push to remote
6. Create pull request
7. Code review
8. Merge to main

**Branching Strategies:**

**Git Flow:**
- main (production)
- develop (integration)
- feature/* (new features)
- release/* (release preparation)
- hotfix/* (production fixes)

**GitHub Flow:**
- main (production)
- feature branches
- Pull requests
- Deploy from main

**Trunk-Based Development:**
- Single main branch
- Short-lived feature branches
- Frequent integration

**CI/CD (Continuous Integration/Continuous Deployment):**

**Continuous Integration:**
- Automated builds
- Automated tests
- Frequent commits
- Fast feedback

**Continuous Deployment:**
- Automated deployment
- Production releases
- Monitoring
- Rollback capability

**CI/CD Tools:**
- Jenkins
- GitLab CI
- GitHub Actions
- CircleCI
- Travis CI`
    }
  ],
  references: [
    "Chacon, S. & Straub, B. (2014). Pro Git. 2nd Edition.",
    "Humble, J. & Farley, D. (2010). Continuous Delivery."
  ]
};
