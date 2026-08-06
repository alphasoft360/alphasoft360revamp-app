"use client";

import { useState } from "react";
import type { FormEvent } from "react";
import { ArrowUpRight, CheckCircle2, AlertCircle, Loader2 } from "lucide-react";

type Status = "idle" | "loading" | "success" | "error";

export default function ContactForm() {
  const [status, setStatus] = useState<Status>("idle");
  const [errorMessage, setErrorMessage] = useState("");

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("loading");
    setErrorMessage("");

    const form = e.currentTarget;
    const data = Object.fromEntries(new FormData(form).entries());

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      const json = await res.json();

      if (!res.ok) {
        setStatus("error");
        setErrorMessage(json.error ?? "Something went wrong. Please try again.");
        return;
      }

      setStatus("success");
      form.reset();
    } catch {
      setStatus("error");
      setErrorMessage("Network error — please check your connection and try again.");
    }
  }

  if (status === "success") {
    return (
      <div className="card-border rounded-3xl bg-surface p-8 sm:p-10 flex flex-col items-center text-center justify-center min-h-[420px]">
        <span className="h-14 w-14 rounded-full bg-accent/15 flex items-center justify-center">
          <CheckCircle2 className="h-7 w-7 text-accent-2" />
        </span>
        <h3 className="mt-6 text-xl font-medium">Message sent</h3>
        <p className="mt-2 text-sm text-muted max-w-sm">
          Thanks for reaching out — our team will reply to you shortly.
        </p>
        <button
          type="button"
          onClick={() => setStatus("idle")}
          className="mt-6 btn-secondary"
        >
          Send another message
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="card-border rounded-3xl bg-surface p-8 sm:p-10 space-y-5">
      {/* Honeypot field — hidden from real users, bots tend to fill every field */}
      <input
        type="text"
        name="company"
        tabIndex={-1}
        autoComplete="off"
        className="hidden"
        aria-hidden="true"
      />

      <div className="grid sm:grid-cols-2 gap-5">
        <div>
          <label htmlFor="name" className="text-sm font-medium">
            Name <span className="text-accent-2">*</span>
          </label>
          <input
            id="name"
            name="name"
            required
            maxLength={200}
            placeholder="Your name"
            className="mt-2 w-full rounded-xl border border-line bg-background px-4 py-3 text-sm text-foreground placeholder:text-muted focus:outline-none focus:border-accent transition-colors"
          />
        </div>
        <div>
          <label htmlFor="email" className="text-sm font-medium">
            Email <span className="text-accent-2">*</span>
          </label>
          <input
            id="email"
            name="email"
            type="email"
            required
            placeholder="you@company.com"
            className="mt-2 w-full rounded-xl border border-line bg-background px-4 py-3 text-sm text-foreground placeholder:text-muted focus:outline-none focus:border-accent transition-colors"
          />
        </div>
      </div>

      <div>
        <label htmlFor="subject" className="text-sm font-medium">
          Subject
        </label>
        <input
          id="subject"
          name="subject"
          maxLength={200}
          placeholder="What's this about?"
          className="mt-2 w-full rounded-xl border border-line bg-background px-4 py-3 text-sm text-foreground placeholder:text-muted focus:outline-none focus:border-accent transition-colors"
        />
      </div>

      <div>
        <label htmlFor="message" className="text-sm font-medium">
          Message <span className="text-accent-2">*</span>
        </label>
        <textarea
          id="message"
          name="message"
          required
          rows={6}
          maxLength={5000}
          placeholder="Tell us about your project..."
          className="mt-2 w-full rounded-xl border border-line bg-background px-4 py-3 text-sm text-foreground placeholder:text-muted focus:outline-none focus:border-accent transition-colors resize-none"
        />
      </div>

      {status === "error" && (
        <div className="flex items-start gap-2.5 rounded-xl border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-700">
          <AlertCircle className="h-4 w-4 shrink-0 mt-0.5" />
          {errorMessage}
        </div>
      )}

      <button
        type="submit"
        disabled={status === "loading"}
        className="btn-primary w-full sm:w-auto justify-center disabled:opacity-60 disabled:cursor-not-allowed"
      >
        {status === "loading" ? (
          <>
            <Loader2 className="h-4 w-4 animate-spin" />
            Sending...
          </>
        ) : (
          <>
            Send Message
            <ArrowUpRight className="h-4 w-4" />
          </>
        )}
      </button>
    </form>
  );
}
