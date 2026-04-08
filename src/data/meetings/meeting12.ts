import { Meeting } from '../types';

export const meeting12: Meeting = {
  id: 12,
  title: "Software Security",
  type: "materi",
  description: "Memahami prinsip-prinsip keamanan software dan implementasi secure coding practices.",
  objectives: [
    "Memahami security threats dan vulnerabilities",
    "Mengenal OWASP Top 10",
    "Mampu menerapkan secure coding practices",
    "Memahami security testing"
  ],
  subtopics: [
    {
      title: "Security Fundamentals",
      content: `**Security Principles:**

**CIA Triad:**
1. **Confidentiality** - Data hanya accessible oleh authorized parties
2. **Integrity** - Data tidak diubah tanpa authorization
3. **Availability** - System dan data available saat dibutuhkan

**Additional Principles:**
- **Authentication** - Verify identity
- **Authorization** - Control access
- **Non-repudiation** - Cannot deny actions
- **Accountability** - Track actions

**Common Threats:**
- Unauthorized access
- Data breaches
- Denial of Service (DoS)
- Man-in-the-Middle attacks
- SQL Injection
- Cross-Site Scripting (XSS)
- Cross-Site Request Forgery (CSRF)`
    },
    {
      title: "OWASP Top 10 & Secure Coding",
      content: `**OWASP Top 10 (2021):**

1. **Broken Access Control**
2. **Cryptographic Failures**
3. **Injection**
4. **Insecure Design**
5. **Security Misconfiguration**
6. **Vulnerable Components**
7. **Authentication Failures**
8. **Software and Data Integrity Failures**
9. **Security Logging Failures**
10. **Server-Side Request Forgery**

**Secure Coding Practices:**
- Input validation
- Output encoding
- Parameterized queries
- Principle of least privilege
- Defense in depth
- Fail securely
- Keep security simple
- Don't trust external data`
    }
  ],
  references: [
    "OWASP Top 10 - 2021",
    "Seacord, R. (2013). Secure Coding in C and C++."
  ]
};
