const mongoose = require("mongoose");
require("dotenv").config();


const connectDB = require("./config/db");
const Service = require("./models/Service");

const services = [
  {
    id: "01",
    icon: "ShieldCheck",
    title: "CrowdStrike Falcon MDR",
    description:
      "24/7 managed detection powered by CrowdStrike Falcon Insight XDR with real-time endpoint monitoring, automated response, and expert-led investigations.",
  },
  {
    id: "02",
    icon: "Radar",
    title: "Palo Alto Cortex XDR",
    description:
      "Behavior analytics, AI-driven threat detection, and intelligent incident response leveraging Cortex XSOAR playbooks for rapid containment.",
  },
  {
    id: "03",
    icon: "Search",
    title: "Proactive Threat Hunting",
    description:
      "Continuous threat hunting across endpoints, cloud, and network infrastructure to uncover advanced threats before they become incidents.",
  },
  {
    id: "04",
    icon: "ShieldAlert",
    title: "Rapid Containment",
    description:
      "Immediate isolation of compromised devices, automated response workflows, and expert analyst intervention within minutes.",
  },
  {
    id: "05",
    icon: "ScanSearch",
    title: "Detection Engineering",
    description:
      "Custom detection rules, MITRE ATT&CK mapping, continuous tuning, and threat simulations to improve visibility and coverage.",
  },
  {
    id: "06",
    icon: "FileBarChart2",
    title: "Threat Intelligence",
    description:
      "Executive reporting, IOC analysis, monthly threat summaries, and actionable recommendations for security improvement.",
  },
];


const seedData = async () => {
  try {
    await connectDB();

    await Service.deleteMany(); // Clear existing data
    await Service.insertMany(services);

    console.log("Services seeded successfully.");
    process.exit();
  } catch (error) {
    console.error(error);
    process.exit(1);
  }
};

seedData();