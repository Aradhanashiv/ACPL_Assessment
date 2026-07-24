import React, { useEffect, useState } from "react";
import {
  Mail,
  ArrowUp,
  ShieldCheck,
} from "lucide-react";

export default function Footer() {
  const [showButton, setShowButton] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowButton(window.scrollY > 300);
    };

    window.addEventListener("scroll", handleScroll);

    return () =>
      window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollTop = () =>
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });

  return (
    <footer className="relative overflow-hidden border-t-8 border-red-700 bg-white">

      {/* Background Grid */}

      <div className="absolute inset-0 bg-[linear-gradient(#f1f1f1_1px,transparent_1px),linear-gradient(90deg,#f1f1f1_1px,transparent_1px)] bg-[size:80px_80px]" />

      <div className="relative mx-auto max-w-7xl px-6 py-20">

        <div className="grid gap-16 lg:grid-cols-4">

          {/* Left */}

          <div>

            <div className="flex items-center gap-3">

              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-red-600 text-white">
                <ShieldCheck size={24} />
              </div>

              <div>

                <h2 className="text-3xl font-bold text-red-600">
                  ACPL
                </h2>

                <p className="text-xs uppercase tracking-[0.3em] text-gray-500">
                  Cyber Security
                </p>

              </div>

            </div>

            <p className="mt-8 leading-8 text-gray-600">
              ACPL transforms cybersecurity complexity into
              intelligent, measurable protection helping
              organizations secure digital assets with confidence.
            </p>

            {/* Social */}

            {/* <div className="mt-8 flex gap-4">

              <a
                href="#"
                className="rounded-xl border border-gray-200 p-3 transition hover:border-red-600 hover:bg-red-600 hover:text-white"
              >
                <Linkedin size={20} />
              </a>

            </div> */}

            {/* Email */}

            <div className="mt-8 flex items-center gap-3 text-gray-700">

              <Mail className="text-red-600" />

              <span>info@acpl.com</span>

            </div>

          </div>

          {/* Solutions */}

          <div>

            <h3 className="border-b pb-3 text-xl font-bold">
              Solutions
            </h3>

            <ul className="mt-6 space-y-4 text-gray-600">

              <li className="hover:text-red-600 cursor-pointer">
                Microsoft
              </li>

              <li className="hover:text-red-600 cursor-pointer">
                Netskope
              </li>

              <li className="hover:text-red-600 cursor-pointer">
                Zscaler
              </li>

              <li className="hover:text-red-600 cursor-pointer">
                Palo Alto
              </li>

              <li className="hover:text-red-600 cursor-pointer">
                CrowdStrike
              </li>

              <li className="hover:text-red-600 cursor-pointer">
                Fortinet
              </li>

              <li className="hover:text-red-600 cursor-pointer">
                Cloudflare
              </li>

              <li className="hover:text-red-600 cursor-pointer">
                Okta
              </li>

              <li className="hover:text-red-600 cursor-pointer">
                Qualys
              </li>

            </ul>

          </div>

          {/* Services */}

          <div>

            <h3 className="border-b pb-3 text-xl font-bold">
              Services
            </h3>

            <ul className="mt-6 space-y-4 text-gray-600">

              <li className="hover:text-red-600 cursor-pointer">
                Platform Assessment
              </li>

              <li className="hover:text-red-600 cursor-pointer">
                Security Consulting
              </li>

              <li className="hover:text-red-600 cursor-pointer">
                Managed Detection & Response
              </li>

              <li className="hover:text-red-600 cursor-pointer">
                Threat Hunting
              </li>

              <li className="hover:text-red-600 cursor-pointer">
                Cloud Security
              </li>

              <li className="hover:text-red-600 cursor-pointer">
                Incident Response
              </li>

            </ul>

          </div>

          {/* Company */}

          <div>

            <h3 className="border-b pb-3 text-xl font-bold">
              Company
            </h3>

            <ul className="mt-6 space-y-4 text-gray-600">

              <li className="hover:text-red-600 cursor-pointer">
                About ACPL
              </li>

              <li className="hover:text-red-600 cursor-pointer">
                Contact
              </li>

              <li className="hover:text-red-600 cursor-pointer">
                Careers
              </li>

              <li className="hover:text-red-600 cursor-pointer">
                Privacy Policy
              </li>

              <li className="hover:text-red-600 cursor-pointer">
                Terms & Conditions
              </li>

            </ul>

          </div>

        </div>

        {/* Bottom */}

        <div className="mt-16 flex flex-col items-center justify-between gap-5 border-t pt-8 text-gray-500 md:flex-row">

          <p>
            © {new Date().getFullYear()} ACPL Systems Pvt. Ltd.
            All Rights Reserved.
          </p>

          <div className="flex gap-8">

            <a
              href="#"
              className="hover:text-red-600"
            >
              Privacy Policy
            </a>

            <a
              href="#"
              className="hover:text-red-600"
            >
              CSR Policy
            </a>

          </div>

        </div>

      </div>

      {/* Scroll Top */}

      {showButton && (
        <button
          onClick={scrollTop}
          className="fixed bottom-8 right-8 z-50 rounded-full bg-red-600 p-4 text-white shadow-xl transition hover:scale-110 hover:bg-red-700"
        >
          <ArrowUp size={24} />
        </button>
      )}
    </footer>
  );
}