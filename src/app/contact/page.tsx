"use client";

import React, { useState } from "react";
import {
  FiMail,
  FiPhone,
  FiMapPin,
  FiSend,
  FiClock,
  FiMessageSquare,
} from "react-icons/fi";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [isSending, setIsSending] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSending(true);

    try {
      console.log("Contact Form Data:", formData);

      // TODO: replace with real API call
      await new Promise((resolve) => setTimeout(resolve, 1200));

      alert("Message sent successfully!");
      setFormData({
        name: "",
        email: "",
        subject: "",
        message: "",
      });
    } catch (error) {
      console.error(error);
      alert("Failed to send message.");
    } finally {
      setIsSending(false);
    }
  };

  return (
    <div className="min-h-screen bg-slate-50">
      {/* Hero */}
      <section className="border-b border-slate-200 bg-white">
        <div className="mx-auto max-w-7xl px-4 py-16 text-center sm:px-6 lg:px-8">
          <h1 className="text-3xl font-bold text-slate-900 sm:text-4xl">
            Contact Us
          </h1>
          <p className="mx-auto mt-4 max-w-2xl text-sm leading-7 text-slate-600 sm:text-base">
            Have questions about Smart School ERP, need technical support, or
            want to discuss your school management needs? We’re here to help.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid gap-8 lg:grid-cols-2">
          {/* Left Info */}
          <div className="space-y-6">
            <div className="rounded-3xl bg-white p-6 shadow-sm">
              <h2 className="text-2xl font-bold text-slate-900">
                Get in Touch
              </h2>
              <p className="mt-3 text-sm leading-7 text-slate-600">
                Reach out for product information, school setup, support, or any
                business inquiries related to your ERP system.
              </p>
            </div>

            <ContactCard
              icon={<FiMail size={20} />}
              title="Email Support"
              value="support@smartschoolerp.com"
              desc="For general support and technical help"
            />

            <ContactCard
              icon={<FiPhone size={20} />}
              title="Phone Number"
              value="+91 98765 43210"
              desc="Call us during working hours"
            />

            <ContactCard
              icon={<FiMapPin size={20} />}
              title="Office Address"
              value="Aligarh, Uttar Pradesh, India"
              desc="School ERP service and support office"
            />

            <ContactCard
              icon={<FiClock size={20} />}
              title="Working Hours"
              value="Mon - Sat, 9:00 AM - 6:00 PM"
              desc="We usually reply within 24 hours"
            />
          </div>

          {/* Right Form */}
          <div className="rounded-3xl bg-white p-6 shadow-sm sm:p-8">
            <div className="mb-6 flex items-center gap-3">
              <div className="rounded-2xl bg-slate-100 p-3 text-slate-700">
                <FiMessageSquare size={20} />
              </div>
              <div>
                <h2 className="text-2xl font-bold text-slate-900">
                  Send a Message
                </h2>
                <p className="text-sm text-slate-500">
                  Fill out the form and we’ll get back to you
                </p>
              </div>
            </div>

            <form onSubmit={handleSubmit} className="space-y-5">
              <InputField
                label="Full Name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Enter your full name"
              />

              <InputField
                label="Email Address"
                name="email"
                type="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Enter your email"
              />

              <InputField
                label="Subject"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                placeholder="Enter message subject"
              />

              <div>
                <label className="mb-1.5 block text-sm font-medium text-slate-700">
                  Message
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={6}
                  placeholder="Write your message here..."
                  className="w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm text-slate-800 outline-none transition focus:border-slate-300 focus:ring-2 focus:ring-slate-200 focus:bg-white"
                  required
                />
              </div>

              <button
                type="submit"
                disabled={isSending}
                className="inline-flex w-full items-center justify-center gap-2 rounded-xl bg-slate-900 px-5 py-3 text-sm font-medium text-white shadow-sm transition hover:opacity-90 disabled:cursor-not-allowed disabled:opacity-70"
              >
                <FiSend size={18} />
                {isSending ? "Sending..." : "Send Message"}
              </button>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
}

/* ---------- Reusable Components ---------- */

function ContactCard({
  icon,
  title,
  value,
  desc,
}: {
  icon: React.ReactNode;
  title: string;
  value: string;
  desc: string;
}) {
  return (
    <div className="rounded-3xl bg-white p-5 shadow-sm">
      <div className="flex items-start gap-4">
        <div className="rounded-2xl bg-slate-100 p-3 text-slate-700">
          {icon}
        </div>
        <div>
          <h3 className="text-lg font-semibold text-slate-900">{title}</h3>
          <p className="mt-1 text-sm font-medium text-slate-700">{value}</p>
          <p className="mt-1 text-sm leading-6 text-slate-500">{desc}</p>
        </div>
      </div>
    </div>
  );
}

function InputField({
  label,
  name,
  value,
  onChange,
  placeholder,
  type = "text",
}: {
  label: string;
  name: string;
  value: string;
  onChange: (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => void;
  placeholder: string;
  type?: string;
}) {
  return (
    <div>
      <label className="mb-1.5 block text-sm font-medium text-slate-700">
        {label}
      </label>
      <input
        type={type}
        name={name}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        className="w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm text-slate-800 outline-none transition focus:border-slate-300 focus:ring-2 focus:ring-slate-200 focus:bg-white"
        required
      />
    </div>
  );
}
