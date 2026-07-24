const mongoose = require("mongoose");
require("dotenv").config();

const connectDB = require("./config/db");
const FAQ = require("./models/FAQ");

const faqs = [
  {
    question: "What is Managed Detection & Response (MDR)?",
    answer:
      "Managed Detection & Response (MDR) is a cybersecurity service that combines advanced threat detection, continuous monitoring, threat hunting, and rapid incident response to protect organizations from cyber attacks 24/7.",
  },
  {
    question: "How quickly can threats be detected?",
    answer:
      "Our MDR platform continuously monitors your environment and is designed to detect and investigate threats within minutes, significantly reducing response time compared to traditional security solutions.",
  },
  {
    question: "Which security platforms do you support?",
    answer:
      "We work with leading cybersecurity platforms including Microsoft Defender, CrowdStrike, Palo Alto Cortex XDR, Fortinet, Zscaler, Okta, Cloudflare, Qualys, Netskope and many more.",
  },
  {
    question: "Do you provide 24/7 monitoring?",
    answer:
      "Yes. Our Security Operations Center (SOC) monitors your infrastructure 24 hours a day, 7 days a week, ensuring rapid detection and response to potential security incidents.",
  },
  {
    question: "Can MDR help with compliance requirements?",
    answer:
      "Absolutely. Our services support compliance frameworks such as ISO 27001, SOC 2, PCI DSS, NIST, and other regulatory requirements through continuous monitoring and reporting.",
  },
  {
    question: "How do I get started?",
    answer:
      "Simply schedule a consultation with our security experts. We'll assess your current security posture, understand your requirements, and recommend the best MDR solution for your organization.",
  },
];

const seedFAQ = async () => {
  try {
    await connectDB();

    await FAQ.deleteMany();

    await FAQ.insertMany(faqs);

    console.log("FAQ data seeded successfully.");

    process.exit();
  } catch (err) {
    console.log(err);
    process.exit(1);
  }
};

seedFAQ();