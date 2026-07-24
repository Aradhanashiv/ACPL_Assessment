import { ChevronDown } from "lucide-react";
import { useEffect, useState } from "react";
import api from "../api/api";

// const faqs = [
//   {
//     question: "What is Managed Detection & Response (MDR)?",
//     answer:
//       "Managed Detection & Response (MDR) is a cybersecurity service that combines advanced threat detection, continuous monitoring, threat hunting, and rapid incident response to protect organizations from cyber attacks 24/7.",
//   },
//   {
//     question: "How quickly can threats be detected?",
//     answer:
//       "Our MDR platform continuously monitors your environment and is designed to detect and investigate threats within minutes, significantly reducing response time compared to traditional security solutions.",
//   },
//   {
//     question: "Which security platforms do you support?",
//     answer:
//       "We work with leading cybersecurity platforms including Microsoft Defender, CrowdStrike, Palo Alto Cortex XDR, Fortinet, Zscaler, Okta, Cloudflare, Qualys, Netskope and many more.",
//   },
//   {
//     question: "Do you provide 24/7 monitoring?",
//     answer:
//       "Yes. Our Security Operations Center (SOC) monitors your infrastructure 24 hours a day, 7 days a week, ensuring rapid detection and response to potential security incidents.",
//   },
//   {
//     question: "Can MDR help with compliance requirements?",
//     answer:
//       "Absolutely. Our services support compliance frameworks such as ISO 27001, SOC 2, PCI DSS, NIST, and other regulatory requirements through continuous monitoring and reporting.",
//   },
//   {
//     question: "How do I get started?",
//     answer:
//       "Simply schedule a consultation with our security experts. We'll assess your current security posture, understand your requirements, and recommend the best MDR solution for your organization.",
//   },
// ];

export default function FAQ() {
  const [open, setOpen] = useState(0);
  const [faqs, setFaqs] = useState([]);
const [loading, setLoading] = useState(true);

useEffect(() => {
  const fetchFaq = async () => {
    try {
      const res = await api.get("/faq");

      setFaqs(res.data.data);
    } catch (err) {
      console.log(err);
    } finally {
      setLoading(false);
    }
  };

  fetchFaq();
}, []);

  return (

    <section className="relative overflow-hidden bg-white py-24">
      {/* Background Grid */}
      <div className="absolute inset-0 bg-[linear-gradient(#efefef_1px,transparent_1px),linear-gradient(90deg,#efefef_1px,transparent_1px)] bg-[size:80px_80px]" />

      {/* Glow */}
      <div className="absolute left-1/2 top-0 h-72 w-72 -translate-x-1/2 rounded-full bg-red-100 blur-3xl opacity-60" />

      <div className="relative mx-auto max-w-4xl px-6">
        {/* Heading */}

        <div className="text-center">
          <span className="inline-flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.35em] text-red-600">
            <span className="h-px w-10 bg-red-300"></span>
            Frequently Asked Questions
            <span className="h-px w-10 bg-red-300"></span>
          </span>

          <h2 className="mt-5 text-4xl font-extrabold text-gray-900 lg:text-5xl">
            Have Questions?
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-lg text-gray-500">
            Find answers to the most common questions about our Managed
            Detection & Response services.
          </p>
        </div>

        {/* Accordion */}

        <div className="mt-16 space-y-5">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-sm transition hover:shadow-lg"
            >
              <button
                onClick={() => setOpen(open === index ? -1 : index)}
                className="flex w-full items-center justify-between px-7 py-6 text-left"
              >
                <h3 className="text-lg font-semibold text-gray-900">
                  {faq.question}
                </h3>

                <ChevronDown
                  size={22}
                  className={`text-red-600 transition-transform duration-300 ${
                    open === index ? "rotate-180" : ""
                  }`}
                />
              </button>

              <div
                className={`grid transition-all duration-300 ${
                  open === index
                    ? "grid-rows-[1fr]"
                    : "grid-rows-[0fr]"
                }`}
              >
                <div className="overflow-hidden">
                  <div className="border-t border-gray-100 px-7 py-6 text-gray-600 leading-8">
                    {faq.answer}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

    
      </div>
    </section>
  );
}