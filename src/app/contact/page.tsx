"use client";

import Footer from "@/components/footer/Footer";
import Navbar from "@/components/navbar/Navbar";
import React, { useState } from "react";
import {
  FiMail,
  FiPhone,
  FiMapPin,
  FiSend,
  FiClock,
  FiMessageSquare,
  FiUser,
} from "react-icons/fi";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [isSending, setIsSending] = useState(false);

  const handleChange = (e: any) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    setIsSending(true);

    try {
      await new Promise((r) => setTimeout(r, 1200));
      alert("Message sent successfully!");
      setFormData({ name: "", email: "", subject: "", message: "" });
    } finally {
      setIsSending(false);
    }
  };

  return (
  <>
  <Navbar/>
    <div className="min-h-screen bg-slate-50">

      {/* HEADER */}
      <section className="border-b border-slate-200 bg-white">
        <div className="mx-auto max-w-7xl px-4 py-14 text-center">
          <h1 className="text-3xl font-bold text-slate-900">
            Contact Support
          </h1>
          <p className="mt-3 text-sm text-slate-600 max-w-2xl mx-auto">
            Need help with Smart School ERP? We’re here to support schools,
            admins, and parents anytime.
          </p>
        </div>
      </section>

      {/* MAIN */}
      <section className="mx-auto max-w-7xl px-4 py-12">
        <div className="grid lg:grid-cols-2 gap-10">

          {/* LEFT */}
          <div className="space-y-5">

            <div className="bg-white border border-slate-200 p-6">
              <h2 className="text-xl font-semibold text-slate-900">
                Get in Touch
              </h2>
              <p className="mt-2 text-sm text-slate-600">
                Reach out for support, demo requests, or school onboarding.
              </p>
            </div>

            <ContactCard icon={<FiMail />} title="Email" value="support@smartschoolerp.com" />
            <ContactCard icon={<FiPhone />} title="Phone" value="+91 98765 43210" />
            <ContactCard icon={<FiMapPin />} title="Location" value="India" />
            <ContactCard icon={<FiClock />} title="Response Time" value="Within 24 Hours" />

          </div>

          {/* RIGHT FORM */}
          <div className="bg-white border border-slate-200 p-6">

            <div className="flex items-center gap-3 mb-6">
              <div className="bg-slate-100 p-3">
                <FiMessageSquare />
              </div>
              <div>
                <h2 className="text-xl font-semibold text-slate-900">
                  Send Message
                </h2>
                <p className="text-sm text-slate-500">
                  We’ll respond as soon as possible
                </p>
              </div>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">

              <Input
                icon={<FiUser />}
                name="name"
                placeholder="Full Name"
                value={formData.name}
                onChange={handleChange}
              />

              <Input
                icon={<FiMail />}
                name="email"
                placeholder="Email Address"
                value={formData.email}
                onChange={handleChange}
              />

              <Input
                icon={<FiMessageSquare />}
                name="subject"
                placeholder="Subject"
                value={formData.subject}
                onChange={handleChange}
              />

              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows={5}
                placeholder="Write your message..."
                className="w-full border border-slate-200 bg-slate-50 px-4 py-3 text-sm outline-none focus:bg-white"
                required
              />

              <button
                type="submit"
                disabled={isSending}
                className="w-full border border-slate-900 bg-slate-900 text-white py-3 text-sm font-medium hover:opacity-90 transition disabled:opacity-60"
              >
                <span className="flex items-center justify-center gap-2">
                  <FiSend />
                  {isSending ? "Sending..." : "Send Message"}
                </span>
              </button>

            </form>

          </div>

        </div>
      </section>
    </div> 
  <Footer/>
  </>
  );
}

/* COMPONENTS */

function ContactCard({ icon, title, value }: any) {
  return (
    <div className="bg-white border border-slate-200 p-5 flex gap-4 items-start">
      <div className="bg-slate-100 p-3 text-slate-700">{icon}</div>
      <div>
        <p className="text-sm font-semibold text-slate-900">{title}</p>
        <p className="text-sm text-slate-600">{value}</p>
      </div>
    </div>
  );
}

function Input({ icon, ...props }: any) {
  return (
    <div className="relative">
      <span className="absolute left-3 top-3 text-slate-400">
        {icon}
      </span>
      <input
        {...props}
        className="w-full border border-slate-200 bg-slate-50 pl-10 px-4 py-3 text-sm outline-none focus:bg-white"
      />
    </div>
  );
}