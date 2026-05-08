"use client";

import Footer from "@/components/footer/Footer";
import Navbar from "@/components/navbar/Navbar";
import {
  FiMail,
  FiPhone,
  FiMapPin,
  FiClock,
} from "react-icons/fi";

export default function Contact() {
  return (
    <>
      <Navbar />

      <div className="min-h-screen bg-white primary-text">

        {/* HERO */}
        <section className="py-24 sm:py-32 bg-gray-50">

          <div className="mx-auto max-w-4xl px-6 text-center">

            <span className="inline-flex rounded bg-white px-4 py-1.5 text-sm font-medium secondary-text">
              Contact Us
            </span>

            <h1 className="mt-8 text-5xl font-bold leading-tight primary-text sm:text-6xl">
              We’d Love to Hear From You
            </h1>

            <p className="mx-auto mt-8 max-w-2xl text-lg leading-8 secondary-text">
              Connect with Rose Valley Public School for admissions, academic
              inquiries, campus visits, or general assistance.
            </p>

          </div>

        </section>

        {/* CONTACT DETAILS */}
        <section className="py-24">

          <div className="mx-auto max-w-6xl px-6">

            {/* Heading */}
            <div className="text-center">

              <span className="text-sm font-semibold uppercase tracking-[0.2em] primary-text">
                Reach Out
              </span>

              <h2 className="mt-4 text-4xl font-bold primary-text">
                We’re Here to Help
              </h2>

              <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 secondary-text">
                Feel free to contact us through the following channels or visit
                our campus during working hours.
              </p>

            </div>

            {/* Cards */}
            <div className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-4">

              <ContactCard
                icon={<FiMail />}
                title="Email Address"
                value="info@rosevalleyschool.com"
              />

              <ContactCard
                icon={<FiPhone />}
                title="Phone Number"
                value="+91 98765 43210"
              />

              <ContactCard
                icon={<FiMapPin />}
                title="Campus Location"
                value="Delhi, India"
              />

              <ContactCard
                icon={<FiClock />}
                title="School Hours"
                value="Mon - Sat · 8:00 AM – 2:00 PM"
              />

            </div>

          </div>

        </section>

        {/* MAP */}
        <section className="pb-24">

          <div className="mx-auto max-w-7xl px-6">

            <div className="overflow-hidden rounded-2xl">

              <iframe
                src="https://maps.google.com/maps?q=delhi&t=&z=13&ie=UTF8&iwloc=&output=embed"
                className="h-[450px] w-full"
                loading="lazy"
              />

            </div>

          </div>

        </section>

      </div>

      <Footer />
    </>
  );
}

/* COMPONENT */

function ContactCard({ icon, title, value }: any) {
  return (
    <div className="rounded bg-gray-50 p-8 transition hover:bg-gray-100">

      <div className="text-2xl primary-text">
        {icon}
      </div>

      <h3 className="mt-6 text-lg font-semibold primary-text">
        {title}
      </h3>

      <p className="mt-3 secondary-text">
        {value}
      </p>

    </div>
  );
}