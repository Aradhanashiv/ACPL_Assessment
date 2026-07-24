import React from "react";
import { useEffect, useState } from "react";
import api from "../api/api";
import {
  ShieldCheck,
  Radar,
  Search,
  ShieldAlert,
  ScanSearch,
  FileBarChart2,
  ArrowRight,
} from "lucide-react";





// const services = [
//   {
//     id: "01",
//     icon: ShieldCheck,
//     title: "CrowdStrike Falcon MDR",
//     description:
//       "24/7 managed detection powered by CrowdStrike Falcon Insight XDR with real-time endpoint monitoring, automated response, and expert-led investigations.",
//   },
//   {
//     id: "02",
//     icon: Radar,
//     title: "Palo Alto Cortex XDR",
//     description:
//       "Behavior analytics, AI-driven threat detection, and intelligent incident response leveraging Cortex XSOAR playbooks for rapid containment.",
//   },
//   {
//     id: "03",
//     icon: Search,
//     title: "Proactive Threat Hunting",
//     description:
//       "Continuous threat hunting across endpoints, cloud, and network infrastructure to uncover advanced threats before they become incidents.",
//   },
//   {
//     id: "04",
//     icon: ShieldAlert,
//     title: "Rapid Containment",
//     description:
//       "Immediate isolation of compromised devices, automated response workflows, and expert analyst intervention within minutes.",
//   },
//   {
//     id: "05",
//     icon: ScanSearch,
//     title: "Detection Engineering",
//     description:
//       "Custom detection rules, MITRE ATT&CK mapping, continuous tuning, and threat simulations to improve visibility and coverage.",
//   },
//   {
//     id: "06",
//     icon: FileBarChart2,
//     title: "Threat Intelligence",
//     description:
//       "Executive reporting, IOC analysis, monthly threat summaries, and actionable recommendations for security improvement.",
//   },
// ];

const Services = () => {

    const [services, setServices] = useState([]);
    const [loading, setLoading] = useState(true);
    const iconMap = {
  ShieldCheck,
  Radar,
  Search,
  ShieldAlert,
  ScanSearch,
  FileBarChart2,
};

    useEffect(() => {
    const fetchServices = async () => {
        try {
            const res = await api.get("/services");
            setServices(res.data.data);
        } catch (error) {
            console.log(error);
        } finally {
            setLoading(false);
        }
    };

    fetchServices();
}, []);

  return (
    <section className="relative overflow-hidden bg-white py-24">
      {/* Background Grid */}
      <div className="absolute inset-0 bg-[linear-gradient(#efefef_1px,transparent_1px),linear-gradient(90deg,#efefef_1px,transparent_1px)] bg-[size:80px_80px]" />

      {/* Red Glow */}
      <div className="absolute left-1/2 top-20 h-72 w-72 -translate-x-1/2 rounded-full bg-red-100 blur-3xl opacity-60" />

      <div className="relative mx-auto max-w-7xl px-6">
        {/* Heading */}

        <div className="text-center">
          <span className="inline-flex items-center gap-2 text-sm font-semibold uppercase tracking-[0.3em] text-red-600">
            <span className="h-px w-10 bg-red-300"></span>
            What We Deliver
            <span className="h-px w-10 bg-red-300"></span>
          </span>

          <h2 className="mt-5 text-4xl font-extrabold text-gray-900 lg:text-5xl">
            MDR Service Capabilities
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-lg leading-8 text-gray-500">
            Comprehensive Managed Detection & Response services combining
            AI-powered threat detection, continuous monitoring, and rapid
            incident response.
          </p>
        </div>

        {/* Cards */}

        <div className="mt-16 grid gap-8 md:grid-cols-2 xl:grid-cols-3">
          {services.map((service) => {
            const Icon = iconMap[service.icon];

            return (
              <div
                key={service._id}
                className="group relative overflow-hidden rounded-3xl border border-gray-200 bg-white p-8 shadow-sm transition-all duration-300 hover:-translate-y-3 hover:border-red-200 hover:shadow-2xl"
              >
                {/* Top Border Animation */}
                <div className="absolute left-0 top-0 h-1 w-0 bg-red-600 transition-all duration-500 group-hover:w-full"></div>

               
              
                {/* Icon */}

           
                <div className="mt-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-red-50 text-red-600">
                    {Icon && <Icon size={28} />}
               </div>

                {/* Title */}

                <h3 className="mt-6 text-xl font-bold text-gray-900">
                  {service.title}
                </h3>

                {/* Description */}

                <p className="mt-4 leading-7 text-gray-500">
                  {service.description}
                </p>

                {/* Link */}

                <button className="mt-8 flex items-center gap-2 font-semibold text-red-600 opacity-0 transition-all duration-300 group-hover:opacity-100">
                  Learn More
                  <ArrowRight size={18} />
                </button>

                {/* Background Circle */}

                <div className="absolute -right-16 -top-16 h-36 w-36 rounded-full bg-red-50 transition-all duration-500 group-hover:scale-150"></div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Services;