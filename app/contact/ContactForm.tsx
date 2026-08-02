"use client";

import { FormEvent, useRef, useState } from "react";

type FormStatus =
  | { type: "idle"; message: "" }
  | { type: "success" | "error"; message: string };

export default function ContactForm() {
  const formRef = useRef<HTMLFormElement>(null);
  const startedAtRef = useRef(Date.now());
  const [isSending, setIsSending] = useState(false);
  const [status, setStatus] = useState<FormStatus>({ type: "idle", message: "" });

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    if (isSending) return;

    setIsSending(true);
    setStatus({ type: "idle", message: "" });

    const form = event.currentTarget;
    const formData = new FormData(form);

    const payload = {
      name: String(formData.get("name") ?? ""),
      company: String(formData.get("company") ?? ""),
      email: String(formData.get("email") ?? ""),
      phone: String(formData.get("phone") ?? ""),
      service: String(formData.get("service") ?? ""),
      message: String(formData.get("message") ?? ""),
      website: String(formData.get("website") ?? ""),
      startedAt: startedAtRef.current,
    };

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      const result = (await response.json().catch(() => null)) as
        | { message?: string }
        | null;

      if (!response.ok) {
        throw new Error(result?.message || "Your message could not be sent.");
      }

      formRef.current?.reset();
      startedAtRef.current = Date.now();
      setStatus({
        type: "success",
        message: "Thank you. Your enquiry has been sent to our engineering team.",
      });
    } catch (error) {
      setStatus({
        type: "error",
        message:
          error instanceof Error
            ? error.message
            : "Your message could not be sent. Please try again.",
      });
    } finally {
      setIsSending(false);
    }
  }

  return (
    <form ref={formRef} className="grid gap-5" onSubmit={handleSubmit}>
      <div className="grid gap-5 sm:grid-cols-2">
        <label className="grid gap-2 text-sm font-medium text-slate-800">
          Full Name
          <input
            type="text"
            name="name"
            required
            maxLength={100}
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
            maxLength={120}
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
            maxLength={254}
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
            maxLength={40}
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
          minLength={10}
          maxLength={5000}
          rows={6}
          placeholder="Tell us about the project, location, capacity, timeline, or any technical requirements."
          className="resize-y rounded-xl border border-slate-300 bg-white px-4 py-3 text-slate-950 outline-none transition placeholder:text-slate-400 focus:border-emerald-500 focus:ring-4 focus:ring-emerald-100"
        />
      </label>

      <div className="absolute left-[-9999px] top-auto h-px w-px overflow-hidden" aria-hidden="true">
        <label>
          Website
          <input name="website" type="text" tabIndex={-1} autoComplete="off" />
        </label>
      </div>

      <div aria-live="polite" aria-atomic="true" className="min-h-6">
        {status.message ? (
          <p
            className={`text-sm font-medium ${
              status.type === "success" ? "text-emerald-700" : "text-red-600"
            }`}
          >
            {status.message}
          </p>
        ) : null}
      </div>

      <div className="flex flex-col gap-4 pt-2 sm:flex-row sm:items-center sm:justify-between">
        <p className="max-w-md text-xs leading-5 text-slate-500">
          By submitting this form, you agree that TPS may contact you regarding
          your enquiry.
        </p>
        <button
          type="submit"
          disabled={isSending}
          className="inline-flex h-12 items-center justify-center gap-2 rounded-xl bg-emerald-600 px-6 font-semibold text-white transition hover:bg-emerald-500 focus:outline-none focus:ring-4 focus:ring-emerald-200 disabled:cursor-not-allowed disabled:opacity-60"
        >
          {isSending ? "Sending…" : "Send Message"}
          <span aria-hidden="true">→</span>
        </button>
      </div>
    </form>
  );
}
