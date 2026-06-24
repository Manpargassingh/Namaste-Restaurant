"use client";

import React, { useState } from "react";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [errorMsg, setErrorMsg] = useState("");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");
    setErrorMsg("");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          subject: formData.subject,
          message: formData.message,
        }),
      });

      if (!res.ok) {
        const data = await res.json();
        setErrorMsg(data.error || "Something went wrong. Please try again.");
        setStatus("error");
        return;
      }

      setStatus("success");
      setFormData({ name: "", email: "", subject: "", message: "" });
    } catch {
      setErrorMsg("Network error. Please try again.");
      setStatus("error");
    }
  };

  return (
    <div>
      <div className="bg-[#0f0b08] text-[#e0b172] min-h-screen flex items-center justify-center p-6">
        <main className="max-w-7xl w-full grid grid-cols-1 md:grid-cols-2 gap-16">
          {/* <!-- Left side --> */}
          <section className="space-y-8 max-w-lg">
            <div>
              <div className="flex items-center gap-3 mb-2">
                <span className="block w-8 border-t border-[#e0b172]"></span>
                <p className="text-xs tracking-widest font-semibold">
                  KEEP CLOSE
                </p>
              </div>
              <h1 className="text-white text-5xl font-extrabold leading-tight">
                Get In Touch
              </h1>
            </div>
            <p className="text-[#e0b172] text-base leading-relaxed">
              Experience the perfect blend of ambiance and culinary delight.
              Reserve your table now and indulge in a memorable dining experience
              at our restaurant.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-6 gap-x-12">
              <div className="flex gap-4 items-start">
                <i className="fas fa-map fa-lg text-[#e0b172] mt-1"></i>
                <p className="text-[#e0b172] text-sm leading-relaxed">
                  Namaste Authentic Indian Cuisine 200 Trans Canada Highway SW
                  Salmon Arm, B.C. V1E 4H7
                </p>
              </div>
              <div className="flex gap-4 items-start">
                <i className="fas fa-phone-alt fa-lg text-[#e0b172] mt-1"></i>
                <div className="text-[#e0b172] text-sm leading-relaxed space-y-1">
                  <p>+1 778-489-5044</p>
                </div>
              </div>
              <div className="flex gap-4 items-start">
                <i className="far fa-clock fa-lg text-[#e0b172] mt-1"></i>
                <div className="text-[#e0b172] text-sm leading-relaxed space-y-1">
                  <p>
                    <strong>Opens at</strong> 11:00 am Everyday and{" "}
                    <strong>Closes at</strong> 09:00 pm Everyday.
                  </p>
                </div>
              </div>
            </div>
            <hr className="border-t border-[#3a2e1f]" />
          </section>

          {/* <!-- Right side --> */}
          <section className="max-w-lg">
            <h2 className="text-white text-3xl font-extrabold mb-2">
              Your Details
            </h2>
            <p className="text-[#e0b172] mb-8">
              Let us know how to get back to you.
            </p>

            {status === "success" ? (
              <div className="bg-[#1a1f22] text-[#e0b172] rounded-sm p-6 text-center space-y-2">
                <p className="text-2xl font-bold text-white">Message Sent!</p>
                <p>Thank you for reaching out. We'll get back to you soon.</p>
                <button
                  onClick={() => setStatus("idle")}
                  className="mt-4 bg-[#e0b172] text-black tracking-widest px-8 py-2 text-sm font-medium hover:bg-[#c99a5a] transition-colors"
                >
                  SEND ANOTHER
                </button>
              </div>
            ) : (
              <form className="space-y-8" onSubmit={handleSubmit}>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label
                      htmlFor="name"
                      className="block text-xs tracking-widest font-semibold mb-2"
                    >
                      NAME<span className="text-[#e0b172]">*</span>
                    </label>
                    <input
                      id="name"
                      type="text"
                      placeholder="John"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full bg-[#1a1f22] text-[#6a7a85] placeholder-[#6a7a85] rounded-sm px-4 py-3 focus:outline-none"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="email"
                      className="block text-xs tracking-widest font-semibold mb-2"
                    >
                      EMAIL ADDRESS<span className="text-[#e0b172]">*</span>
                    </label>
                    <input
                      id="email"
                      type="email"
                      placeholder="email@gmail.com"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full bg-[#1a1f22] text-[#6a7a85] placeholder-[#6a7a85] rounded-sm px-4 py-3 focus:outline-none"
                    />
                  </div>
                </div>
                <div>
                  <label
                    htmlFor="subject"
                    className="block text-xs tracking-widest font-semibold mb-2"
                  >
                    SUBJECT<span className="text-[#e0b172]">*</span>
                  </label>
                  <input
                    id="subject"
                    type="text"
                    placeholder="Subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className="w-full bg-[#1a1f22] text-[#6a7a85] placeholder-[#6a7a85] rounded-sm px-4 py-3 focus:outline-none"
                  />
                </div>
                <div>
                  <label
                    htmlFor="message"
                    className="block text-xs tracking-widest font-semibold mb-2"
                  >
                    COMMENTS / QUESTIONS<span className="text-[#e0b172]">*</span>
                  </label>
                  <textarea
                    id="message"
                    rows={6}
                    placeholder="Question"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    className="w-full bg-[#1a1f22] text-[#6a7a85] placeholder-[#6a7a85] rounded-sm px-4 py-3 resize-y focus:outline-none"
                  ></textarea>
                </div>

                {status === "error" && (
                  <p className="text-red-400 text-sm">{errorMsg}</p>
                )}

                <div className="flex justify-center">
                  <button
                    type="submit"
                    disabled={status === "loading"}
                    className="bg-[#e0b172] text-black tracking-widest px-10 py-3 text-sm font-medium hover:bg-[#c99a5a] transition-colors disabled:opacity-60 disabled:cursor-not-allowed"
                  >
                    {status === "loading" ? "SENDING..." : "CONTACT US"}
                  </button>
                </div>
              </form>
            )}
          </section>
        </main>
      </div>
    </div>
  );
};

export default Contact;
