"use client";

export default function Contact() {
  return (
    <div className="min-h-screen bg-white px-4 py-12 flex flex-col items-center">
      <h1 className="text-2xl font-bold mb-6 text-gray-900">Contact Us</h1>
      <p className="text-gray-600 mb-6 max-w-md text-center">
        Have questions or need support? Reach out to us using the form below.
      </p>
      <form className="w-full max-w-md flex flex-col gap-4">
        <input
          type="text"
          placeholder="Name"
          className="border border-gray-300 rounded px-3 py-2 text-gray-800 focus:outline-none focus:ring-1 focus:ring-gray-400"
          required
        />
        <input
          type="email"
          placeholder="Email"
          className="border border-gray-300 rounded px-3 py-2 text-gray-800 focus:outline-none focus:ring-1 focus:ring-gray-400"
          required
        />
        <textarea
          placeholder="Message"
          className="border border-gray-300 rounded px-3 py-2 text-gray-800 focus:outline-none focus:ring-1 focus:ring-gray-400"
          rows={4}
          required
        />
        <button className="bg-gray-900 text-white py-2 rounded hover:bg-gray-800 transition">
          Send Message
        </button>
      </form>
    </div>
  );
}