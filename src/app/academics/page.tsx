"use client";

import Navbar from "@/components/navbar/Navbar";
import Footer from "@/components/footer/Footer";

export default function Academics() {
  return (
    <div className="bg-white text-slate-800">
      <Navbar />

      {/* HERO */}
      <section className="bg-[#8B0000] text-white py-20 text-center">
        <h1 className="text-4xl font-bold">Academics</h1>
        <p className="mt-4 text-sm text-white/80">
          Excellence in education through structured learning
        </p>
      </section>

      {/* CURRICULUM */}
      <section className="py-20 max-w-5xl mx-auto px-4">
        <h2 className="text-2xl font-bold text-slate-900">
          Curriculum
        </h2>
        <p className="mt-4 text-slate-600 leading-7">
          Our school follows the CBSE curriculum designed to ensure 
          a strong academic foundation along with co-curricular development.
        </p>
      </section>

      {/* LEVELS */}
      <section className="bg-slate-50 py-20">
        <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-6 px-4">

          <Level 
            title="Primary School"
            desc="Focus on basic learning, creativity, and activity-based education."
          />

          <Level 
            title="Middle School"
            desc="Concept-based learning with emphasis on critical thinking."
          />

          <Level 
            title="Senior Secondary"
            desc="Specialized streams with focus on board exam preparation."
          />

        </div>
      </section>

      {/* SUBJECTS */}
      <section className="py-20 max-w-6xl mx-auto px-4">
        <h2 className="text-2xl font-bold text-slate-900 text-center">
          Subjects Offered
        </h2>

        <div className="mt-10 grid md:grid-cols-3 gap-6 text-center">
          <Subject name="Mathematics" />
          <Subject name="Science" />
          <Subject name="English" />
          <Subject name="Social Studies" />
          <Subject name="Computer Science" />
          <Subject name="Physical Education" />
        </div>
      </section>

      {/* EXAMS */}
      <section className="bg-slate-50 py-20 text-center px-4">
        <h2 className="text-2xl font-bold text-slate-900">
          Examination System
        </h2>
        <p className="mt-4 text-slate-600 max-w-2xl mx-auto">
          Regular assessments, unit tests, and final examinations ensure 
          continuous evaluation and improvement of students.
        </p>
      </section>

      <Footer />
    </div>
  );
}

function Level({ title, desc }: any) {
  return (
    <div className="bg-white border p-6 text-center">
      <h3 className="text-lg font-semibold">{title}</h3>
      <p className="mt-2 text-sm text-slate-600">{desc}</p>
    </div>
  );
}

function Subject({ name }: any) {
  return (
    <div className="border p-4 bg-white">
      <p className="text-sm font-medium">{name}</p>
    </div>
  );
}