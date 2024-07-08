const personalInfo = {
  name: "Jyothi Prasanna Kambam",
  professionalSummary: "Skilled in Java, Selenium automation, and BDD Cucumber with Agile proficiency. Skilled in manual testing, Git version control, and basic API understanding. Completed full-stack development training and specialized Selenium training.",
  skills: [
    "Selenium",
    "Java",
    "Behavior-driven development",
    "Maven Build Tool",
    "Git Version Control",
    "Agile methodology understanding",
    "MySQL",
    "Cucumber",
    "TestNG",
    "Manual Testing",
    "Test Case Design",
    "Regression Testing",
    "Exploratory Testing",
    "User Acceptance Testing",
    "Defect Reporting",
    "Quality Assurance Practices",
    "Test Plan Creation",
    "Test Execution",
    "Cross-browser Testing",
    "Compatibility Testing",
    "Performance Testing"
  ],
  experience: [
    {
      title: "Intern",
      duration: "2023 - 2023",
      bullets: [
        "Developed and executed automated test scripts using Selenium and BDD Cucumber.",
        "Wrote and maintained manual test cases to ensure comprehensive test coverage.",
        "Collaborated with the development team to understand project requirements and design test strategies.",
        "Implemented various design patterns and frameworks in test automation.",
        "Utilized Git for version control and collaborated with team members.",
        "Documented test results, reported defects, and worked with developers to resolve issues."
      ]
    }
  ],
  education: [
    {
      degree: "Ontario College Graduate Certificate in Computer Software and Database Development",
      institution: "Loyalist College, Toronto",
      duration: "Aug 2025"
    },
    {
      degree: "Bachelor of Computer Applications (B.C.A): Computer Applications",
      institution: "Osmania University, Hyderabad, India",
      duration: "Jul 2022"
    }
  ],
  certifications: ["ISTQB Certified Tester Foundation Level 2018 v2"],
  contact: {
    email: "jyothiprasannakambam@gmail.com",
    phoneIndia: "+91 8331891891",
    phoneCanada: "+1 4376020033",
    linkedIn: "https://ca.linkedin.com/in/jyothiprasannakambam"
  }
};

document.addEventListener("DOMContentLoaded", function() {
  document.getElementById('personal-name').innerText = personalInfo.name;
  document.getElementById('professional-summary-content').innerText = personalInfo.professionalSummary;
  document.getElementById('skills-content').innerText = personalInfo.skills.join(' | ');
  document.getElementById('experience-content').innerHTML = personalInfo.experience.map(exp => `
      <p><strong>${exp.title} (${exp.duration})</strong></p>
      <ul>${exp.bullets.map(bullet => `<li>${bullet}</li>`).join('')}</ul>
  `).join('');
  document.getElementById('education-content').innerHTML = personalInfo.education.map(edu => `
      <p><strong>${edu.degree}</strong><br>${edu.institution}, ${edu.duration}</p>
  `).join('');
  document.getElementById('certifications-content').innerHTML = personalInfo.certifications.map(cert => `<li>${cert}</li>`).join('');
  document.getElementById('contact-name').innerText = personalInfo.name;
  document.getElementById('contact-email').innerText = personalInfo.contact.email;
  document.getElementById('phone-india').innerText = `Phone (India): ${personalInfo.contact.phoneIndia}`;
  document.getElementById('phone-canada').innerText = `Phone (Canada): ${personalInfo.contact.phoneCanada}`;
  document.getElementById('linkedin-profile').innerHTML = `<strong><a href="${personalInfo.contact.linkedIn}">Text me on LinkedIn</a></strong>`;
  document.getElementById('connect-email').href += personalInfo.contact.email;
});
