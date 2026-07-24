import React, { useState } from "react";
import { Mail, Phone, Building2, User, Send } from "lucide-react";
import api from "../api/api";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    phone: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);
const [success, setSuccess] = useState("");
const [error, setError] = useState("");

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
  e.preventDefault();

  setLoading(true);
  setSuccess("");
  setError("");

  try {
    const res = await api.post("/contact", formData);

    if (res.data.success) {
      setSuccess("Your message has been sent successfully!");

      setFormData({
        name: "",
        email: "",
        company: "",
        phone: "",
        message: "",
      });
    }
  } catch (err) {
    setError(err.response?.data?.message || "Something went wrong.");
  } finally {
    setLoading(false);
  }
};

  return (
    <section className="relative overflow-hidden bg-white py-24">
      {/* Background Grid */}
      <div className="absolute inset-0 bg-[linear-gradient(#efefef_1px,transparent_1px),linear-gradient(90deg,#efefef_1px,transparent_1px)] bg-[size:80px_80px]" />

      {/* Glow */}
      <div className="absolute right-0 top-0 h-80 w-80 rounded-full bg-red-100 blur-3xl opacity-60" />

      <div className="relative mx-auto max-w-7xl px-6 ">

        {/* Heading */}

        <div className="text-center">
          <span className="inline-flex items-center gap-2 text-sm font-semibold uppercase tracking-[0.3em] text-red-600">
            <span className="h-px w-10 bg-red-300"></span>
            Contact Us
            <span className="h-px w-10 bg-red-300"></span>
          </span>

          <h2 className="mt-5 text-4xl font-extrabold text-gray-900 lg:text-5xl">
            Let's Secure Your Business
          </h2>

          <p className="mx-auto mt-5 max-w-3xl text-lg leading-8 text-gray-500">
            Speak with our cybersecurity specialists to discover how our
            Managed Detection & Response services can strengthen your
            organization's security posture.
          </p>
        </div>

        <div className="mt-20 grid gap-16 lg:grid-cols-2 border border-red-100 bg-red-50 p-10 ">

          {/* Left Side */}

          <div>

            <h3 className="text-3xl font-bold text-gray-900">
              Get in Touch
            </h3>

            <p className="mt-5 text-lg leading-8 text-gray-500">
              Fill out the form and our experts will reach out within one
              business day.
            </p>

            <div className="mt-10 space-y-8">

              <div className="flex items-center gap-5">
                <div className="rounded-xl bg-red-50 p-4 text-red-600">
                  <Mail size={24} />
                </div>

                <div>
                  <p className="font-semibold text-gray-900">Email</p>
                  <p className="text-gray-500">
                    info@acpl.com
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-5">
                <div className="rounded-xl bg-red-50 p-4 text-red-600">
                  <Phone size={24} />
                </div>

                <div>
                  <p className="font-semibold text-gray-900">Phone</p>
                  <p className="text-gray-500">
                    +91 98765 43210
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-5">
                <div className="rounded-xl bg-red-50 p-4 text-red-600">
                  <Building2 size={24} />
                </div>

                <div>
                  <p className="font-semibold text-gray-900">
                    Office
                  </p>
                  <p className="text-gray-500">
                    New Delhi, India
                  </p>
                </div>
              </div>

            </div>

          </div>

          {/* Right Side */}

          <form
            onSubmit={handleSubmit}
            className="rounded-3xl border border-gray-200 bg-white p-8 shadow-lg"
          >

            <div className="grid gap-6">

              <div>
                <label className="mb-2 block font-medium text-gray-700">
                  Full Name
                </label>

                <div className="relative">
                  <User
                    className="absolute left-4 top-4 text-gray-400"
                    size={20}
                  />

                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="John Doe"
                    className="w-full rounded-xl border border-gray-300 py-3 pl-12 pr-4 outline-none transition focus:border-red-500"
                  />
                </div>
              </div>

              <div>
                <label className="mb-2 block font-medium text-gray-700">
                  Email
                </label>

                <div className="relative">
                  <Mail
                    className="absolute left-4 top-4 text-gray-400"
                    size={20}
                  />

                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="john@email.com"
                    className="w-full rounded-xl border border-gray-300 py-3 pl-12 pr-4 outline-none transition focus:border-red-500"
                  />
                </div>
              </div>

              <div className="grid gap-6 md:grid-cols-2">

                <div>
                  <label className="mb-2 block font-medium text-gray-700">
                    Company
                  </label>

                  <input
                    type="text"
                    name="company"
                    value={formData.company}
                    onChange={handleChange}
                    placeholder="Company Name"
                    className="w-full rounded-xl border border-gray-300 px-4 py-3 outline-none focus:border-red-500"
                  />
                </div>

                <div>
                  <label className="mb-2 block font-medium text-gray-700">
                    Phone
                  </label>

                  <input
                    type="text"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="+91 9876543210"
                    className="w-full rounded-xl border border-gray-300 px-4 py-3 outline-none focus:border-red-500"
                  />
                </div>

              </div>

              <div>
                <label className="mb-2 block font-medium text-gray-700">
                  Message
                </label>

                <textarea
                  rows={5}
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Tell us about your security requirements..."
                  className="w-full resize-none rounded-xl border border-gray-300 p-4 outline-none focus:border-red-500"
                />
              </div>

              {success && (
  <p className="mb-4 rounded-lg bg-green-100 p-3 text-green-700">
    {success}
  </p>
)}

{error && (
  <p className="mb-4 rounded-lg bg-red-100 p-3 text-red-700">
    {error}
  </p>
)}

              <button
  type="submit"
  disabled={loading}
  className="w-full rounded-xl bg-red-600 py-4 text-white font-semibold hover:bg-red-700 disabled:opacity-50"
>
  {loading ? "Sending..." : "Send Message"}
</button>
            </div>

          </form>

        </div>
      </div>
    </section>
  );
};

export default Contact;