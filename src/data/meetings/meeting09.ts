import { Meeting } from '../types';

export const meeting09: Meeting = {
  id: 9,
  title: "Software Testing",
  type: "materi",
  description: "Mempelajari berbagai teknik dan strategi testing untuk memastikan kualitas perangkat lunak.",
  objectives: [
    "Memahami pentingnya software testing",
    "Mengenal berbagai level dan tipe testing",
    "Mampu merancang test cases yang efektif",
    "Memahami test automation dan tools"
  ],
  subtopics: [
    {
      title: "Pengantar Software Testing",
      content: `**Software Testing adalah proses evaluasi sistem untuk menemukan defects.**

**Tujuan Testing:**
- Menemukan bugs/defects
- Memverifikasi requirements terpenuhi
- Memvalidasi software memenuhi kebutuhan user
- Meningkatkan kualitas
- Reduce risks
- Build confidence

**Testing Principles:**

**1. Testing shows presence of defects**
- Tidak bisa prove absence of defects
- Hanya bisa show defects exist

**2. Exhaustive testing is impossible**
- Tidak mungkin test semua kombinasi
- Risk-based testing

**3. Early testing**
- Test sedini mungkin
- Cheaper to fix early
- Shift-left testing

**4. Defect clustering**
- 80% defects di 20% modules
- Focus on high-risk areas

**5. Pesticide paradox**
- Same tests won't find new bugs
- Update test cases regularly

**6. Testing is context dependent**
- Different approaches untuk different systems
- E-commerce vs medical device

**7. Absence-of-errors fallacy**
- Bug-free ≠ usable
- Must meet user needs

**Verification vs Validation:**
- **Verification:** "Are we building the product right?"
  - Check against specifications
  - Reviews, inspections
- **Validation:** "Are we building the right product?"
  - Check against user needs
  - Testing dengan users

**Error, Defect, Failure:**
- **Error:** Human mistake
- **Defect/Bug:** Flaw in code
- **Failure:** System doesn't work as expected`
    },
    {
      title: "Testing Levels",
      content: `**1. Unit Testing**

Test individual components/units in isolation.

**Characteristics:**
- Smallest testable parts
- Typically functions/methods
- White-box testing
- Automated
- Fast execution

**Tools:**
- JUnit (Java)
- pytest (Python)
- Jest (JavaScript)
- NUnit (.NET)

**Example:**
\`\`\`java
@Test
public void testAddition() {
    Calculator calc = new Calculator();
    assertEquals(5, calc.add(2, 3));
}
\`\`\`

---

**2. Integration Testing**

Test interaction between integrated components.

**Approaches:**

**Big Bang:**
- Integrate all at once
- Test together
- Hard to debug

**Incremental:**
- **Top-Down:** Start dari top, use stubs
- **Bottom-Up:** Start dari bottom, use drivers
- **Sandwich:** Combination

**Tools:**
- Postman (API testing)
- SoapUI
- REST Assured

---

**3. System Testing**

Test complete integrated system.

**Types:**
- Functional testing
- Performance testing
- Security testing
- Usability testing
- Compatibility testing

**Environment:**
- Production-like environment
- Complete system
- End-to-end scenarios

---

**4. Acceptance Testing**

Validate system meets business requirements.

**Types:**

**User Acceptance Testing (UAT):**
- Real users test
- Real scenarios
- Production-like data

**Alpha Testing:**
- In-house testing
- Simulated environment
- Before beta

**Beta Testing:**
- Limited release
- Real users
- Real environment
- Feedback collection

**Contract Acceptance:**
- Verify contract criteria
- Formal acceptance

---

**Test Pyramid:**

\`\`\`
      /\\
     /E2E\\      ← Few, Slow, Expensive
    /------\\
   /  API   \\    ← More, Medium
  /----------\\
 /   Unit     \\  ← Many, Fast, Cheap
/--------------\\
\`\`\`

**Ratio:** 70% Unit, 20% Integration, 10% E2E`
    },
    {
      title: "Testing Techniques",
      content: `**Black-Box Testing**

Test tanpa knowledge of internal structure.

**Techniques:**

**1. Equivalence Partitioning**
- Divide input into partitions
- Test one value dari each partition
- Assume all values in partition behave sama

**Example:** Age input (0-150)
- Invalid: <0
- Valid: 0-150
- Invalid: >150

**2. Boundary Value Analysis**
- Test at boundaries
- Errors often at boundaries
- Test: min, min+1, max-1, max

**Example:** Age 0-150
- Test: -1, 0, 1, 149, 150, 151

**3. Decision Table Testing**
- Combinations of conditions
- Actions untuk each combination

**4. State Transition Testing**
- Test state changes
- Valid dan invalid transitions

**5. Use Case Testing**
- Test based on use cases
- Main flow + alternative flows

---

**White-Box Testing**

Test dengan knowledge of internal structure.

**Techniques:**

**1. Statement Coverage**
- Execute every statement
- Basic coverage
- Target: 100%

**2. Branch Coverage**
- Execute every branch (if/else)
- More thorough than statement
- Target: 100%

**3. Path Coverage**
- Execute every possible path
- Most thorough
- Often impractical

**4. Condition Coverage**
- Each condition true dan false
- Multiple conditions

**Code Coverage Tools:**
- JaCoCo (Java)
- Coverage.py (Python)
- Istanbul (JavaScript)

---

**Gray-Box Testing**

Combination of black-box dan white-box.

**Characteristics:**
- Partial knowledge of internals
- Test design based on architecture
- Database testing
- Integration testing`
    },
    {
      title: "Test Design & Automation",
      content: `**Test Case Design**

**Test Case Components:**
- **Test Case ID:** Unique identifier
- **Test Description:** What is being tested
- **Preconditions:** Setup required
- **Test Steps:** Actions to perform
- **Test Data:** Input values
- **Expected Result:** What should happen
- **Actual Result:** What actually happened
- **Status:** Pass/Fail
- **Priority:** High/Medium/Low

**Example:**
\`\`\`
TC-001: User Login with Valid Credentials
Preconditions: User account exists
Steps:
1. Navigate to login page
2. Enter username: "testuser"
3. Enter password: "Test@123"
4. Click Login button
Expected: User redirected to dashboard
Actual: [To be filled]
Status: [Pass/Fail]
\`\`\`

**Test Data Management:**
- Valid data
- Invalid data
- Boundary values
- Special characters
- Null values
- Large datasets

---

**Test Automation**

**Benefits:**
✅ Faster execution
✅ Repeatable
✅ Consistent
✅ Regression testing
✅ CI/CD integration
✅ Cost-effective long-term

**When to Automate:**
- Repetitive tests
- Regression tests
- Data-driven tests
- Performance tests
- Stable functionality

**When NOT to Automate:**
- One-time tests
- Exploratory testing
- Usability testing
- Frequently changing UI
- Complex scenarios

**Automation Tools:**

**Web:**
- Selenium WebDriver
- Cypress
- Playwright
- TestCafe

**Mobile:**
- Appium
- Espresso (Android)
- XCUITest (iOS)

**API:**
- Postman
- REST Assured
- Karate

**Performance:**
- JMeter
- Gatling
- LoadRunner

**Example - Selenium:**
\`\`\`java
WebDriver driver = new ChromeDriver();
driver.get("https://example.com/login");
driver.findElement(By.id("username")).sendKeys("testuser");
driver.findElement(By.id("password")).sendKeys("Test@123");
driver.findElement(By.id("loginBtn")).click();
assertEquals("Dashboard", driver.getTitle());
driver.quit();
\`\`\`

---

**Test-Driven Development (TDD)**

Write tests before code.

**Red-Green-Refactor Cycle:**
1. **Red:** Write failing test
2. **Green:** Write minimal code to pass
3. **Refactor:** Improve code

**Benefits:**
✅ Better design
✅ High coverage
✅ Confidence
✅ Documentation

**Example:**
\`\`\`java
// 1. Red - Write test first
@Test
public void testCalculateDiscount() {
    Order order = new Order(100);
    assertEquals(10, order.calculateDiscount());
}

// 2. Green - Implement
public class Order {
    private double amount;
    public Order(double amount) { this.amount = amount; }
    public double calculateDiscount() {
        return amount * 0.1; // 10% discount
    }
}

// 3. Refactor - Improve
public double calculateDiscount() {
    final double DISCOUNT_RATE = 0.1;
    return amount * DISCOUNT_RATE;
}
\`\`\``
    },
    {
      title: "Performance & Security Testing",
      content: `**Performance Testing**

Test system performance under load.

**Types:**

**1. Load Testing**
- Normal expected load
- Verify performance acceptable
- Response time, throughput

**2. Stress Testing**
- Beyond normal load
- Find breaking point
- How system fails

**3. Spike Testing**
- Sudden increase in load
- Handle traffic spikes
- Black Friday scenario

**4. Endurance Testing (Soak)**
- Sustained load over time
- Memory leaks
- Resource exhaustion

**5. Scalability Testing**
- Increasing load gradually
- Find scalability limits
- Horizontal vs vertical

**Metrics:**
- Response time
- Throughput (requests/sec)
- Resource utilization (CPU, memory)
- Error rate
- Concurrent users

**Tools:**
- Apache JMeter
- Gatling
- LoadRunner
- K6

**Example JMeter Test:**
- 1000 concurrent users
- Ramp-up: 60 seconds
- Duration: 10 minutes
- Target: Response time < 2 seconds

---

**Security Testing**

Identify vulnerabilities dan security risks.

**OWASP Top 10:**

**1. Injection**
- SQL injection
- Command injection
- LDAP injection

**2. Broken Authentication**
- Weak passwords
- Session management
- Credential stuffing

**3. Sensitive Data Exposure**
- Unencrypted data
- Weak encryption
- Data leakage

**4. XML External Entities (XXE)**
- XML parser vulnerabilities

**5. Broken Access Control**
- Unauthorized access
- Privilege escalation

**6. Security Misconfiguration**
- Default credentials
- Unnecessary features
- Error messages

**7. Cross-Site Scripting (XSS)**
- Inject malicious scripts
- Steal cookies/sessions

**8. Insecure Deserialization**
- Remote code execution

**9. Using Components with Known Vulnerabilities**
- Outdated libraries
- Unpatched systems

**10. Insufficient Logging & Monitoring**
- Cannot detect breaches
- Slow response

**Security Testing Types:**

**Vulnerability Scanning:**
- Automated tools
- Known vulnerabilities
- OWASP ZAP, Nessus

**Penetration Testing:**
- Simulated attacks
- Ethical hacking
- Manual + automated

**Security Auditing:**
- Code review
- Configuration review
- Compliance check

**Tools:**
- OWASP ZAP
- Burp Suite
- Metasploit
- Nmap

**Best Practices:**
✅ Security by design
✅ Input validation
✅ Output encoding
✅ Authentication & authorization
✅ Encryption (data at rest & in transit)
✅ Regular updates
✅ Security testing in CI/CD
✅ Penetration testing
✅ Security training`
    }
  ],
  references: [
    "Myers, G., Sandler, C., Badgett, T. (2011). The Art of Software Testing. 3rd Edition.",
    "ISTQB Foundation Level Syllabus",
    "Crispin, L., Gregory, J. (2009). Agile Testing: A Practical Guide.",
    "OWASP Testing Guide v4.0"
  ]
};
