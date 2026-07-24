import React from "react";

const partners = [
  {
    name: "Microsoft",
    
  },
  {
    name: "Palo Alto",
  },
  {
    name: "Fortinet",
  },
  {
    name: "Zscaler",
    
  },
  {
    name: "CrowdStrike",
    
  },
  {
    name: "Netskope",
    
  },
  {
    name: "Cloudflare",
    
  },
  {
    name: "Okta",
  },  
  {
    name: "Wiz",
  }, 
  {
    name: "Qualys",
      },
];

export default function Partners() {
  return (
    <section className="relative overflow-hidden bg-white py-24">
      {/* Background Grid */}
      <div className="absolute inset-0 bg-[linear-gradient(#efefef_1px,transparent_1px),linear-gradient(90deg,#efefef_1px,transparent_1px)] bg-[size:80px_80px]" />

      {/* Glow */}
      <div className="absolute left-1/2 top-10 h-72 w-72 -translate-x-1/2 rounded-full bg-red-100 blur-3xl opacity-60" />

      <div className="relative mx-auto max-w-7xl px-6">
        {/* Heading */}
        <div className="text-center">
          <span className="inline-flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.35em] text-red-600">
            <span className="h-px w-12 bg-red-300"></span>
            Technology Ecosystem
            <span className="h-px w-12 bg-red-300"></span>
          </span>

          <h2 className="mt-5 text-4xl font-extrabold text-gray-900 lg:text-5xl">
            Across All Partner Platforms
          </h2>

          <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-gray-500">
            Delivered across every leading cybersecurity platform,
            ensuring vendor-neutral security with best-in-class
            detection and response capabilities.
          </p>
        </div>

        {/* Logo Grid */}
        <div className="mt-16 grid grid-cols-2 gap-6 sm:grid-cols-3 lg:grid-cols-5">
          {partners.map((partner) => (
            <p
              key={partner.name}
              className="group flex h-32 items-center justify-center rounded-2xl text-red-700 font-semibold border border-gray-200 bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-2 hover:border-red-200 hover:shadow-xl"
            >{partner.name}
              {/* <img
                src={partner.logo}
                alt={partner.name}
                className="h-10 w-auto object-contain grayscale transition duration-300 group-hover:grayscale-0 group-hover:scale-105"
              /> */}
            </p>
          ))}
        </div>
      </div>
    </section>
  );
}