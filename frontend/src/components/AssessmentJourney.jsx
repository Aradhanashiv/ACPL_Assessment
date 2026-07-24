import React from "react";
import {
  Download,
  TriangleAlert,
  SearchCheck,
  ShieldCheck,
  BarChart3,
} from "lucide-react";

const steps = [
  {
    icon: Download,
    title: "Ingest",
    description: "Collect telemetry from endpoints, cloud, identity and network sources.",
  },
  {
    icon: TriangleAlert,
    title: "Detect",
    description: "AI-powered detection using 4,200+ custom rules and threat intelligence.",
  },
  {
    icon: SearchCheck,
    title: "Hunt",
    description: "Security analysts proactively hunt hidden threats and suspicious behaviour.",
  },
  {
    icon: ShieldCheck,
    title: "Contain",
    description: "Automatically isolate compromised systems and stop lateral movement.",
  },
  {
    icon: BarChart3,
    title: "Improve",
    description: "Continuously optimize detection coverage and strengthen security posture.",
  },
];

export default function AssessmentJourney() {
  return (
    <section className="relative overflow-hidden bg-white py-24">

      {/* Grid Background */}

      <div className="absolute inset-0 bg-[linear-gradient(#efefef_1px,transparent_1px),linear-gradient(90deg,#efefef_1px,transparent_1px)] bg-[size:80px_80px]" />

      <div className="relative mx-auto max-w-7xl px-6">

        {/* Heading */}

        <div className="text-center">

          <span className="inline-flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.35em] text-red-600">
            <span className="h-px w-12 bg-red-300"></span>
            OUR METHODOLOGY
            <span className="h-px w-12 bg-red-300"></span>
          </span>

          <h2 className="mt-5 text-4xl font-extrabold text-gray-900 lg:text-5xl">
            Assessment Journey
          </h2>

          <p className="mx-auto mt-5 max-w-3xl text-lg text-gray-500">
            Our structured MDR methodology ensures rapid detection,
            investigation, containment and continuous improvement.
          </p>

        </div>

        {/* Timeline */}

        <div className="relative mt-24">

          {/* Desktop Line */}

          <div className="absolute left-0 right-0 top-12 hidden h-[2px] bg-gray-200 lg:block">
            <div className="h-full w-3/5 bg-red-500"></div>
          </div>

          <div className="grid gap-10 lg:grid-cols-5">

            {steps.map((step, index) => {
              const Icon = step.icon;

              return (
                <div
                  key={index}
                  className="group relative flex flex-col items-center text-center"
                >
                  {/* Circle */}

                  <div
                    className={`relative z-10 flex h-20 w-20 items-center justify-center rounded-full border-2 bg-white shadow-lg transition duration-300
                    ${
                      index < 3
                        ? "border-red-500"
                        : "border-red-300 border-dashed"
                    }
                    group-hover:scale-110 group-hover:bg-red-600 group-hover:text-white`}
                  >
                    <Icon size={30} />
                  </div>

                  {/* Step */}

                  <div className="mt-8">

                    <h3 className="text-2xl font-bold text-gray-900">
                      {step.title}
                    </h3>

                    <p className="mt-3 text-gray-500 leading-7">
                      {step.description}
                    </p>

                  </div>

                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}