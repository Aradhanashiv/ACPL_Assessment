import React from "react";
import {
  ShieldCheck,
  ScanSearch,
  Cloud,
  Crosshair,
  Lock,
  Search,
  BadgeCheck,
  GraduationCap,
} from "lucide-react";

const features = [
  {
    icon: ShieldCheck,
    title: "Zero Trust",
    description:
      "Identity-centric access, micro-segmentation and continuous verification.",
  },
  {
    icon: ScanSearch,
    title: "Managed Detection",
    description:
      "24/7 monitoring, threat hunting and rapid incident containment.",
  },
  {
    icon: Cloud,
    title: "Cloud Security",
    description:
      "Secure cloud workloads, CSPM, CWPP and multi-cloud protection.",
  },
  {
    icon: Crosshair,
    title: "Threat Surface",
    description:
      "Discover, prioritize and reduce external attack surface exposure.",
  },
  {
    icon: Lock,
    title: "Data Protection",
    description:
      "Data classification, DLP, encryption and governance policies.",
  },
  {
    icon: Search,
    title: "Security Assessment",
    description:
      "Gap analysis, vulnerability assessment and technology evaluation.",
  },
  {
    icon: BadgeCheck,
    title: "Compliance",
    description:
      "ISO 27001, SOC2, PCI DSS, NIST and regulatory readiness.",
  },
  {
    icon: GraduationCap,
    title: "Security Awareness",
    description:
      "Phishing simulations and employee cyber security training.",
  },
];

const Features = () => {
  return (
    <section className="relative overflow-hidden bg-white py-24">
      {/* Background Grid */}
      <div className="absolute inset-0 bg-[linear-gradient(#efefef_1px,transparent_1px),linear-gradient(90deg,#efefef_1px,transparent_1px)] bg-[size:80px_80px]" />

      {/* Glow */}
      <div className="absolute left-1/2 top-10 h-72 w-72 -translate-x-1/2 rounded-full bg-red-100 blur-3xl opacity-50"></div>

      <div className="relative mx-auto max-w-7xl px-6">
        {/* Heading */}
        <div className="text-center">
          <span className="inline-flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.35em] text-red-600">
            <span className="h-px w-12 bg-red-300"></span>
            Security Domains
            <span className="h-px w-12 bg-red-300"></span>
          </span>

          <h2 className="mt-5 text-4xl font-extrabold text-gray-900 lg:text-5xl">
            We Assess Across Every Domain
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-lg leading-8 text-gray-500">
            Our assessment covers every critical security layer, helping your
            organization identify risks before attackers do.
          </p>
        </div>

        {/* Cards */}

        <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {features.map((item, index) => {
            const Icon = item.icon;

            return (
              <div
                key={index}
                className="group relative overflow-hidden rounded-3xl border border-gray-200 bg-white p-8 text-center shadow-sm transition-all duration-300 hover:-translate-y-3 hover:border-red-200 hover:shadow-2xl"
              >
                {/* Hover Background */}
                <div className="absolute inset-0 scale-0 rounded-full bg-red-50 transition-all duration-500 group-hover:scale-[3]"></div>

                <div className="relative z-10">
                  {/* Icon */}

                  <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-red-50 text-red-600 transition-all duration-300 group-hover:bg-red-600 group-hover:text-white">
                    <Icon size={30} />
                  </div>

                  {/* Title */}

                  <h3 className="mt-6 text-xl font-bold text-gray-900">
                    {item.title}
                  </h3>

                  {/* Description */}

                  <p className="mt-4 leading-7 text-gray-500">
                    {item.description}
                  </p>
                </div>

              
                <div className="absolute left-0 top-0 h-1 w-0 bg-red-600 transition-all duration-500 group-hover:w-full"></div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Features;