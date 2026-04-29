"use client";

import { useState, type FormEvent } from "react";
import Icon from "./Icon";

type Status = "idle" | "submitting" | "success" | "error";

const initialForm = {
  name: "",
  email: "",
  phone: "",
  service: "",
  message: "",
};

export default function ContactForm() {
  const [form, setForm] = useState(initialForm);
  const [status, setStatus] = useState<Status>("idle");
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("submitting");
    setErrorMessage(null);

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      const data = (await res.json()) as { ok?: boolean; error?: string };
      if (!res.ok || !data.ok) {
        throw new Error(data.error || "Failed to send message");
      }

      setStatus("success");
      setForm(initialForm);
    } catch (err) {
      setStatus("error");
      setErrorMessage(err instanceof Error ? err.message : "Something went wrong");
    }
  }

  function update<K extends keyof typeof form>(key: K, value: string) {
    setForm((f) => ({ ...f, [key]: value }));
  }

  if (status === "success") {
    return (
      <div className="rounded-2xl border border-emerald-200 bg-emerald-50 p-8 text-center">
        <div className="mx-auto mb-3 flex h-12 w-12 items-center justify-center rounded-full bg-emerald-500 text-white">
          <Icon name="check" className="h-6 w-6" />
        </div>
        <h3 className="text-xl font-semibold text-emerald-900">Message received</h3>
        <p className="mt-2 text-sm text-emerald-800">
          Thanks for reaching out. A licensed electrician will be in touch within one business day.
        </p>
        <button
          type="button"
          onClick={() => setStatus("idle")}
          className="mt-4 text-sm font-semibold text-emerald-700 underline"
        >
          Send another message
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5" noValidate>
      <div className="grid gap-5 sm:grid-cols-2">
        <Field
          label="Full name"
          required
          id="name"
          value={form.name}
          onChange={(v) => update("name", v)}
          autoComplete="name"
        />
        <Field
          label="Phone"
          required
          id="phone"
          type="tel"
          value={form.phone}
          onChange={(v) => update("phone", v)}
          autoComplete="tel"
        />
      </div>

      <Field
        label="Email"
        required
        id="email"
        type="email"
        value={form.email}
        onChange={(v) => update("email", v)}
        autoComplete="email"
      />

      <div>
        <label htmlFor="service" className="mb-1.5 block text-sm font-medium text-ink-800">
          Service needed
        </label>
        <select
          id="service"
          value={form.service}
          onChange={(e) => update("service", e.target.value)}
          className="w-full rounded-lg border border-ink-200 bg-white px-3 py-2.5 text-sm text-ink-900 shadow-sm transition focus:border-brand-500 focus:outline-none focus:ring-2 focus:ring-brand-500"
        >
          <option value="">Select a service...</option>
          <option value="residential">Residential Wiring</option>
          <option value="commercial">Commercial Electrical</option>
          <option value="emergency">Emergency Service</option>
          <option value="panels">Panel Upgrade</option>
          <option value="ev-chargers">EV Charger</option>
          <option value="troubleshooting">Diagnostics & Repair</option>
          <option value="other">Other</option>
        </select>
      </div>

      <div>
        <label htmlFor="message" className="mb-1.5 block text-sm font-medium text-ink-800">
          How can we help? <span className="text-rose-500">*</span>
        </label>
        <textarea
          id="message"
          required
          value={form.message}
          onChange={(e) => update("message", e.target.value)}
          rows={5}
          className="w-full rounded-lg border border-ink-200 bg-white px-3 py-2.5 text-sm text-ink-900 shadow-sm transition focus:border-brand-500 focus:outline-none focus:ring-2 focus:ring-brand-500"
          placeholder="Briefly describe what you need help with..."
        />
      </div>

      {status === "error" && errorMessage && (
        <div className="rounded-md border border-rose-200 bg-rose-50 px-3 py-2 text-sm text-rose-800">
          {errorMessage}
        </div>
      )}

      <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
        <p className="text-xs text-ink-500">
          We respond within one business day. Real emergencies — please call.
        </p>
        <button
          type="submit"
          disabled={status === "submitting"}
          className="btn-primary disabled:cursor-not-allowed disabled:opacity-70"
        >
          {status === "submitting" ? "Sending..." : "Send message"}
        </button>
      </div>
    </form>
  );
}

type FieldProps = {
  label: string;
  id: string;
  value: string;
  onChange: (value: string) => void;
  type?: string;
  required?: boolean;
  autoComplete?: string;
};

function Field({ label, id, value, onChange, type = "text", required, autoComplete }: FieldProps) {
  return (
    <div>
      <label htmlFor={id} className="mb-1.5 block text-sm font-medium text-ink-800">
        {label} {required && <span className="text-rose-500">*</span>}
      </label>
      <input
        id={id}
        type={type}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        required={required}
        autoComplete={autoComplete}
        className="w-full rounded-lg border border-ink-200 bg-white px-3 py-2.5 text-sm text-ink-900 shadow-sm transition focus:border-brand-500 focus:outline-none focus:ring-2 focus:ring-brand-500"
      />
    </div>
  );
}
