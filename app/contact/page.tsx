import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact TPS | Tetra Power Solutions",
  description:
    "Contact Tetra Power Solutions to discuss power generation, solar energy, CHP, BESS, and electrical engineering requirements.",
};

const contactItems = [
  {
    title: "Email",
    value: "info@tetra.eg.com",
    href: "mailto:info@tetra.eg.com",
    icon: (
      <svg viewBox="0 0 24 24" aria-hidden="true" className="h-6 w-6">
        <path
          d="M4 5h16v14H4V5Zm1.5 1.5v.4L12 12l6.5-5.1v-.4h-13Zm13 2.3L12.46 13.5a.75.75 0 0 1-.92 0L5.5 8.8v8.7h13V8.8Z"
          fill="currentColor"
        />
      </svg>
    ),
  },
  {
    title: "Phone",
    value: "+20 1500999409",
    href: "tel:+201500999409",
    icon: (
      <svg viewBox="0 0 24 24" aria-hidden="true" className="h-6 w-6">
        <path
          d="M7.1 3.5h2.45l1.2 4.1-1.7 1.4a15.6 15.6 0 0 0 5.95 5.95l1.4-1.7 4.1 1.2v2.45a3.1 3.1 0 0 1-3.1 3.1C9.99 20 4 14.01 4 6.6a3.1 3.1 0 0 1 3.1-3.1Z"
          fill="currentColor"
        />
      </svg>
    ),
  },
  {
    title: "Location",
    value: "Cairo, Egypt",
    href: "#",
    icon: (
      <svg viewBox="0 0 24 24" aria-hidden="true" className="h-6 w-6">
        <path
          d="M12 2.5a7 7 0 0 0-7 7c0 5.25 7 12 7 12s7-6.75 7-12a7 7 0 0 0-7-7Zm0 9.5a2.5 2.5 0 1 1 0-5 2.5 2.5 0 0 1 0 5Z"
          fill="currentColor"
        />
      </svg>
    ),
  },

  {
    title: "Business Hours",
    value: "Sunday – Thursday, 9:00 AM – 5:00 PM",
    href: "#contact-form",
    icon: (
      <svg viewBox="0 0 24 24" aria-hidden="true" className="h-6 w-6">
        <path
          d="M12 2.5a9.5 9.5 0 1 0 0 19 9.5 9.5 0 0 0 0-19Zm.75 5v4.2l3.1 1.85-.75 1.25L11.25 12.5v-5h1.5Z"
          fill="currentColor"
        />
      </svg>
    ),
  },
];

export default function ContactPage() {
  return (
    <div className="bg-white text-slate-900">
      <section className="relative isolate min-h-[calc(100vh-96px)] overflow-hidden border-b-4 border-emerald-500">
        <div
          className="absolute inset-0 bg-cover bg-[65%_center] lg:bg-[70%_center]"
          style={{ backgroundImage: "url('/images/contact-hero.png')" }}
        />
        <div className="absolute inset-0 bg-slate-950/25" />
        <div className="absolute inset-0 bg-gradient-to-r from-slate-950/82 via-slate-950/48 to-transparent" />

        <div className="relative mx-auto flex min-h-[calc(100vh-96px)] max-w-[1280px] items-start px-6 pb-20 pt-16 sm:px-8 sm:pt-20 lg:px-12 lg:pb-24 lg:pt-24">
          <div className="max-w-3xl lg:-translate-x-8">
            <h1 className="text-4xl font-black leading-[1.05] tracking-[-0.035em] text-white sm:text-6xl lg:text-7xl">
              Let&apos;s Build Your Next Energy Project Together
            </h1>
            <div className="mt-7 h-1 w-24 rounded-full bg-[#A3E635]" />
            <p className="mt-7 max-w-2xl text-lg leading-8 text-white/76 sm:text-xl">
              Tell us about your technical requirements, operational goals, or
              upcoming project. Our engineering team will review your enquiry
              and respond with the right next step.
            </p>
            <a
              href="#contact-form"
              className="mt-8 inline-flex items-center gap-3 rounded-xl bg-[#A3E635] px-7 py-4 text-sm font-extrabold text-[#071A24] shadow-[0_12px_30px_rgba(163,230,53,0.24)] transition-all duration-200 hover:-translate-y-0.5 hover:bg-[#b6ef5a] hover:shadow-[0_16px_34px_rgba(163,230,53,0.30)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#A3E635] focus-visible:ring-offset-2 focus-visible:ring-offset-slate-950"
            >
              Talk to Our Engineers
              <span aria-hidden="true">→</span>
            </a>
          </div>
        </div>
      </section>

      <section className="bg-slate-50 py-20 sm:py-24">
        <div className="mx-auto grid max-w-7xl gap-12 px-6 lg:grid-cols-[0.9fr_1.1fr] lg:px-8">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.24em] text-emerald-600">
              Get in touch
            </p>
            <h2 className="mt-3 text-3xl font-bold tracking-tight text-slate-950 sm:text-4xl">
              Speak directly with our team
            </h2>
            <p className="mt-5 max-w-xl text-base leading-7 text-slate-600">
              Whether you are planning a new installation, upgrading an
              existing system, or evaluating an energy solution, we are ready
              to understand the requirement before proposing the solution.
            </p>

            <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-1 xl:grid-cols-2">
              {contactItems.map((item) => (
                <a
                  key={item.title}
                  href={item.href}
                  className="group rounded-2xl border border-slate-200 bg-white p-5 shadow-sm transition hover:-translate-y-0.5 hover:border-emerald-300 hover:shadow-md"
                >
                  <div className="flex items-start gap-4">
                    <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-emerald-50 text-emerald-600 transition group-hover:bg-emerald-500 group-hover:text-white">
                      {item.icon}
                    </span>
                    <span>
                      <span className="block text-sm font-semibold text-slate-950">
                        {item.title}
                      </span>
                      <span className="mt-1 block text-sm leading-6 text-slate-600">
                        {item.value}
                      </span>
                    </span>
                  </div>
                </a>
              ))}
            </div>
          </div>

          <div
            id="contact-form"
            className="scroll-mt-28 rounded-3xl border border-slate-200 bg-white p-6 shadow-xl shadow-slate-200/60 sm:p-8 lg:p-10"
          >
            <div className="mb-8">
              <h2 className="text-2xl font-bold text-slate-950">
                Send us your enquiry
              </h2>
              <p className="mt-2 text-sm leading-6 text-slate-600">
                Complete the form below and include as much technical detail as
                possible.
              </p>
            </div>

            <form className="grid gap-5" action="#" method="post">
              <div className="grid gap-5 sm:grid-cols-2">
                <label className="grid gap-2 text-sm font-medium text-slate-800">
                  Full Name
                  <input
                    type="text"
                    name="name"
                    required
                    autoComplete="name"
                    placeholder="Your full name"
                    className="h-12 rounded-xl border border-slate-300 bg-white px-4 text-slate-950 outline-none transition placeholder:text-slate-400 focus:border-emerald-500 focus:ring-4 focus:ring-emerald-100"
                  />
                </label>

                <label className="grid gap-2 text-sm font-medium text-slate-800">
                  Company
                  <input
                    type="text"
                    name="company"
                    autoComplete="organization"
                    placeholder="Company name"
                    className="h-12 rounded-xl border border-slate-300 bg-white px-4 text-slate-950 outline-none transition placeholder:text-slate-400 focus:border-emerald-500 focus:ring-4 focus:ring-emerald-100"
                  />
                </label>
              </div>

              <div className="grid gap-5 sm:grid-cols-2">
                <label className="grid gap-2 text-sm font-medium text-slate-800">
                  Email Address
                  <input
                    type="email"
                    name="email"
                    required
                    autoComplete="email"
                    placeholder="name@company.com"
                    className="h-12 rounded-xl border border-slate-300 bg-white px-4 text-slate-950 outline-none transition placeholder:text-slate-400 focus:border-emerald-500 focus:ring-4 focus:ring-emerald-100"
                  />
                </label>

                <label className="grid gap-2 text-sm font-medium text-slate-800">
                  Phone Number
                  <input
                    type="tel"
                    name="phone"
                    autoComplete="tel"
                    placeholder="+20"
                    className="h-12 rounded-xl border border-slate-300 bg-white px-4 text-slate-950 outline-none transition placeholder:text-slate-400 focus:border-emerald-500 focus:ring-4 focus:ring-emerald-100"
                  />
                </label>
              </div>

              <label className="grid gap-2 text-sm font-medium text-slate-800">
                Service Required
                <select
                  name="service"
                  defaultValue=""
                  className="h-12 rounded-xl border border-slate-300 bg-white px-4 text-slate-950 outline-none transition focus:border-emerald-500 focus:ring-4 focus:ring-emerald-100"
                >
                  <option value="" disabled>
                    Select a service
                  </option>
                  <option>Power Generation</option>
                  <option>Solar Energy</option>
                  <option>CHP &amp; Cogeneration</option>
                  <option>Battery Energy Storage Systems</option>
                  <option>Electrical Engineering</option>
                  <option>Operation &amp; Maintenance</option>
                  <option>Other</option>
                </select>
              </label>

              <label className="grid gap-2 text-sm font-medium text-slate-800">
                Project Details
                <textarea
                  name="message"
                  required
                  rows={6}
                  placeholder="Tell us about the project, location, capacity, timeline, or any technical requirements."
                  className="resize-y rounded-xl border border-slate-300 bg-white px-4 py-3 text-slate-950 outline-none transition placeholder:text-slate-400 focus:border-emerald-500 focus:ring-4 focus:ring-emerald-100"
                />
              </label>

              <div className="flex flex-col gap-4 pt-2 sm:flex-row sm:items-center sm:justify-between">
                <p className="max-w-md text-xs leading-5 text-slate-500">
                  By submitting this form, you agree that TPS may contact you
                  regarding your enquiry.
                </p>
                <button
                  type="submit"
                  className="inline-flex h-12 items-center justify-center gap-2 rounded-xl bg-emerald-600 px-6 font-semibold text-white transition hover:bg-emerald-500 focus:outline-none focus:ring-4 focus:ring-emerald-200"
                >
                  Send Message
                  <span aria-hidden="true">→</span>
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>

    </div>
  );
}
