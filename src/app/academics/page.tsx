"use client";

import Navbar from "@/components/navbar/Navbar";
import Footer from "@/components/footer/Footer";

export default function Academics() {
  return (
    <div className="bg-white primary-text overflow-hidden">

      <Navbar />

      {/* HERO */}
      <section className="primary-bg py-28 sm:py-36 text-white">

        <div className="max-w-4xl mx-auto px-6 text-center">

          <span className="inline-flex rounded bg-white/10 px-4 py-1.5 text-sm font-medium backdrop-blur">
            Academics
          </span>

          <h1 className="mt-8 text-5xl sm:text-6xl font-bold leading-tight">
            Excellence Through
            <span className="block">
              Structured Learning
            </span>
          </h1>

          <p className="mt-8 text-lg leading-8 text-white/80 max-w-2xl mx-auto">
            Our academic framework nurtures intellectual growth, creativity,
            discipline, and critical thinking for a successful future.
          </p>

        </div>

      </section>

      {/* CURRICULUM */}
      <section className="py-24">

        <div className="max-w-5xl mx-auto px-6 text-center">

          <span className="text-sm font-semibold uppercase tracking-[0.2em] primary-text">
            Curriculum
          </span>

          <h2 className="mt-4 text-4xl font-bold primary-text">
            A Balanced Educational Journey
          </h2>

          <p className="mt-8 text-lg leading-8 secondary-text max-w-3xl mx-auto">
            Our institution follows the CBSE curriculum designed for academic
            strength and holistic growth.
          </p>

        </div>

      </section>

      {/* LEVELS */}
      <section className="bg-gray-50 py-24">

        <div className="max-w-6xl mx-auto px-6 grid gap-8 md:grid-cols-3">

          <Level
            icon="📘"
            title="Primary School"
            desc="Activity-based learning and strong fundamentals."
          />

          <Level
            icon="🧠"
            title="Middle School"
            desc="Conceptual understanding and analytical thinking."
          />

          <Level
            icon="🎓"
            title="Senior Secondary"
            desc="Career-focused streams and guidance."
          />

        </div>

      </section>

      {/* SUBJECTS */}
      <section className="py-24">

        <div className="max-w-6xl mx-auto px-6 text-center">

          <span className="text-sm font-semibold uppercase tracking-[0.2em] primary-text">
            Subjects Offered
          </span>

          <h2 className="mt-4 text-4xl font-bold primary-text">
            Diverse & Future-Ready Learning
          </h2>

        </div>

        <div className="mt-14 max-w-6xl mx-auto px-6 grid gap-6 sm:grid-cols-2 md:grid-cols-3">

          <Subject name="Mathematics" />
          <Subject name="Science" />
          <Subject name="English" />
          <Subject name="Social Studies" />
          <Subject name="Computer Science" />
          <Subject name="Physical Education" />

        </div>

      </section>

      {/* EXAMINATION */}
      <section className="bg-gray-50 py-24">

        <div className="max-w-4xl mx-auto px-6 text-center">

          <span className="text-sm font-semibold uppercase tracking-[0.2em] primary-text">
            Assessment System
          </span>

          <h2 className="mt-4 text-4xl font-bold primary-text">
            Continuous Evaluation & Growth
          </h2>

          <div className="mt-10 rounded-2xl bg-white p-10 sm:p-14">

            <p className="text-lg leading-8 secondary-text">
              Regular assessments, unit tests, and examinations ensure steady
              academic progress and student development.
            </p>

          </div>

        </div>

      </section>

      <Footer />

    </div>
  );
}

/* LEVEL CARD */
function Level({ icon, title, desc }: any) {
  return (
    <div className="rounded-3xl bg-white p-10 text-center">

      <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl secondary-bg text-white text-3xl">
        {icon}
      </div>

      <h3 className="mt-6 text-2xl font-semibold primary-text">
        {title}
      </h3>

      <p className="mt-4 secondary-text leading-7">
        {desc}
      </p>

    </div>
  );
}

/* SUBJECT CARD */
function Subject({ name }: any) {
  return (
    <div className="rounded-2xl bg-white p-6 text-center">

      <p className="text-base font-semibold primary-text">
        {name}
      </p>

    </div>
  );
}