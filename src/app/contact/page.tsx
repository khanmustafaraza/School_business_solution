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
      alert("Your message has been sent successfully!");
      setFormData({ name: "", email: "", subject: "", message: "" });
    } finally {
      setIsSending(false);
    }
  };

  return (
    <>
      <Navbar />

      <div className="min-h-screen bg-slate-50">

        {/* HEADER */}
        <section className="bg-gradient-to-r from-blue-500 via-purple-500 to-pink-400 text-white py-20 text-center">
          <h1 className="text-4xl font-bold">Contact Us</h1>
          <p className="mt-4 text-sm text-white/80 max-w-xl mx-auto">
            We’d love to hear from you. Reach out for admissions, inquiries, or general information.
          </p>
        </section>

        {/* MAIN */}
        <section className="mx-auto max-w-7xl px-4 py-12">
          <div className="grid lg:grid-cols-2 gap-10">

            {/* LEFT INFO */}
            <div className="space-y-5">

              <div className="bg-white border p-6">
                <h2 className="text-xl font-semibold text-slate-900">
                  Get in Touch
                </h2>
                <p className="mt-2 text-sm text-slate-600">
                  Visit our campus or contact us for admission-related queries.
                </p>
              </div>

              <ContactCard icon={<FiMail />} title="Email" value="info@rosevalleyschool.com" />
              <ContactCard icon={<FiPhone />} title="Phone" value="+91 98765 43210" />
              <ContactCard icon={<FiMapPin />} title="Address" value="Delhi, India" />
              <ContactCard icon={<FiClock />} title="School Hours" value="Mon - Sat: 8:00 AM – 2:00 PM" />

            </div>

            {/* FORM */}
            <div className="bg-white border p-6">

              <div className="flex items-center gap-3 mb-6">
                <div className="bg-slate-100 p-3">
                  <FiMessageSquare />
                </div>
                <div>
                  <h2 className="text-xl font-semibold text-slate-900">
                    Send a Message
                  </h2>
                  <p className="text-sm text-slate-500">
                    We will respond shortly
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
                  required
                />

                <Input
                  icon={<FiMail />}
                  name="email"
                  placeholder="Email Address"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />

                <Input
                  icon={<FiMessageSquare />}
                  name="subject"
                  placeholder="Subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
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
                  className="w-full bg-[#8B0000] text-white py-3 text-sm font-medium hover:opacity-90 transition disabled:opacity-60"
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

        {/* MAP (OPTIONAL BUT IMPORTANT) */}
        <section className="px-4 pb-16">
          <div className="max-w-7xl mx-auto border">
            <iframe
              src="https://maps.google.com/maps?q=delhi&t=&z=13&ie=UTF8&iwloc=&output=embed"
              className="w-full h-[350px]"
              loading="lazy"
            />
          </div>
        </section>

      </div>

      <Footer />
    </>
  );
}

/* COMPONENTS */

function ContactCard({ icon, title, value }: any) {
  return (
    <div className="bg-white border p-5 flex gap-4 items-start">
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