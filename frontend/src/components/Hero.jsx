import React from "react";
import {
  ShieldCheck,
  ArrowRight,
  Activity,
  Radar,
  Clock3,
} from "lucide-react";

const Hero = () => {
  return (
    <section className="relative overflow-hidden bg-white">
      {/* Background Grid */}
      <div className="absolute inset-0 bg-[linear-gradient(#efefef_1px,transparent_1px),linear-gradient(90deg,#efefef_1px,transparent_1px)] bg-[size:80px_80px]" />
  <div className="absolute -right-40 top-20 h-[450px] w-[450px] rounded-full bg-red-100 blur-3xl opacity-70" />

      <div className="relative mx-auto flex max-w-7xl flex-col items-center justify-between gap-16 px-6 py-24 lg:flex-row">
       <div className="max-w-xl">
      
          {/* Heading */}
          <h1 className="mt-8 text-5xl font-extrabold leading-tight text-gray-900 lg:text-6xl">
            Advanced{" "}
            <span className="text-red-600">MDR</span>
            <br />
            Security That
            <br />
            Never Sleeps
          </h1>

          {/* Paragraph */}
          <p className="mt-8 text-lg leading-8 text-gray-600">
            Our MDR service is powered by industry-leading XDR platforms,
            combining AI-powered threat hunting, rapid incident response,
            and continuous monitoring to stop cyber attacks before they
            impact your business.
          </p>

          {/* Buttons */}
          <div className="mt-10 flex flex-wrap gap-4">
            <button className="flex items-center gap-2 rounded-xl bg-red-600 px-7 py-4 font-semibold text-white transition hover:bg-red-700">
              Schedule Consultation
              <ArrowRight size={18} />
            </button>

            <button className="rounded-xl border-2 border-red-600 px-7 py-4 font-semibold text-red-600 transition hover:bg-red-50">
              Explore Capabilities
            </button>
          </div>
        </div>

        {/* Right */}
        <div className="relative flex items-center justify-center">
          {/* Outer Rings */}
          <div className="absolute h-[420px] w-[420px] rounded-full border border-red-100"></div>
          <div className="absolute h-[330px] w-[330px] rounded-full border border-red-200"></div>
          <div className="absolute h-[240px] w-[240px] rounded-full border border-red-300"></div>

          {/* Floating Card Top */}
          <div className="absolute -top-5 left-0 rounded-2xl border border-red-100 bg-white p-4 shadow-xl">
            <div className="flex items-center gap-3">
              <Activity className="text-red-600" />
              <div>
                <p className="text-sm text-gray-500">Threats Blocked</p>
                <h3 className="font-bold text-gray-900">98.7%</h3>
              </div>
            </div>
          </div>

          {/* Floating Card Bottom */}
          <div className="absolute -bottom-5 right-0 rounded-2xl border border-red-100 bg-white p-4 shadow-xl">
            <div className="flex items-center gap-3">
              <Radar className="text-red-600" />
              <div>
                <p className="text-sm text-gray-500">SOC Status</p>
                <h3 className="font-bold text-green-600">Active</h3>
              </div>
            </div>
          </div>

          {/* Shield */}
          <div className="relative flex h-60 w-60 items-center justify-center rounded-full border-8 border-red-100 bg-white shadow-2xl">
            <div className="absolute h-40 w-40 rounded-full border-2 border-dashed border-red-300 animate-spin [animation-duration:15s]"></div>

            <div className="flex h-28 w-28 items-center justify-center rounded-full bg-red-600 shadow-xl">
              <ShieldCheck
                size={56}
                className="text-white"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Stats */}
      <div className="relative mx-auto -mt-4 grid max-w-6xl grid-cols-2 gap-5 px-6 pb-20 lg:grid-cols-4">
        <div className="rounded-2xl border border-gray-200 bg-white p-6 text-center shadow-sm transition hover:-translate-y-2 hover:shadow-xl">
          <Clock3 className="mx-auto mb-4 text-red-600" />
          <h2 className="text-3xl font-bold text-red-600">&lt;4m</h2>
          <p className="mt-2 text-sm text-gray-500">
            Mean Detect
          </p>
        </div>

        <div className="rounded-2xl border border-gray-200 bg-white p-6 text-center shadow-sm transition hover:-translate-y-2 hover:shadow-xl">
          <Radar className="mx-auto mb-4 text-red-600" />
          <h2 className="text-3xl font-bold text-red-600">
            4,200+
          </h2>
          <p className="mt-2 text-sm text-gray-500">
            Custom Rules
          </p>
        </div>

        <div className="rounded-2xl border border-gray-200 bg-white p-6 text-center shadow-sm transition hover:-translate-y-2 hover:shadow-xl">
          <Activity className="mx-auto mb-4 text-red-600" />
          <h2 className="text-3xl font-bold text-red-600">
            14
          </h2>
          <p className="mt-2 text-sm text-gray-500">
            Intel Feeds
          </p>
        </div>

        <div className="rounded-2xl border border-gray-200 bg-white p-6 text-center shadow-sm transition hover:-translate-y-2 hover:shadow-xl">
          <ShieldCheck className="mx-auto mb-4 text-red-600" />
          <h2 className="text-3xl font-bold text-red-600">
            24/7
          </h2>
          <p className="mt-2 text-sm text-gray-500">
            Coverage
          </p>
        </div>
      </div>
    </section>
  );
};

export default Hero;