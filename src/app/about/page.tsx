"use client";

import Navbar from "@/components/navbar/Navbar";
import Footer from "@/components/footer/Footer";

export default function About() {
  return (
    <div className="bg-white text-slate-800">
      <Navbar />

      {/* HERO */}
    <section className="relative py-24 text-center overflow-hidden">

  {/* background gradient */}
  <div className="absolute inset-0 bg-brand-gradient" />

  {/* soft overlay for readability */}
  <div className="absolute inset-0 bg-black/10" />

  <div className="relative max-w-3xl mx-auto px-4 text-white">

    <span className="inline-block text-xs font-medium bg-white/20 border border-white/30 px-3 py-1 rounded-full">
      About Us
    </span>

    <h1 className="mt-6 text-4xl sm:text-5xl font-bold tracking-tight">
      About Rose Valley Public School
    </h1>

    <p className="mt-6 text-white/90 text-base leading-7">
      We focus on academic excellence, discipline, and holistic development
      to prepare students for a successful future.
    </p>

  </div>
</section>

      {/* ABOUT */}
      <section className="py-20 max-w-5xl mx-auto px-4">
        <h2 className="text-2xl font-bold text-slate-900">Who We Are</h2>
        <p className="mt-4 text-slate-600 leading-7">
          Rose Valley Public School is dedicated to academic excellence,
          discipline, and holistic development. We nurture students to become
          confident, responsible, and future-ready individuals.
        </p>
      </section>

      {/* VISION & MISSION */}
      <section className="bg-slate-50 py-20">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10 px-4">
          <div>
            <h3 className="text-xl font-semibold text-slate-900">Our Vision</h3>
            <p className="mt-3 text-slate-600">
              To develop global citizens with strong values and knowledge.
            </p>
          </div>
          <div>
            <h3 className="text-xl font-semibold text-slate-900">Our Mission</h3>
            <p className="mt-3 text-slate-600">
              To create a safe and inspiring environment for learning and growth.
            </p>
          </div>
        </div>
      </section>

      {/* PRINCIPAL MESSAGE */}
      <section className="py-20 max-w-4xl mx-auto px-4 text-center">
        <h2 className="text-2xl font-bold text-slate-900">
          Principal's Message
        </h2>
        <p className="mt-6 text-slate-600 leading-7">
          "Education is not just about knowledge but about shaping character and
          future leaders. At Rose Valley, we ensure every child thrives."
        </p>
      </section>

      <Footer />
    </div>
  );
}