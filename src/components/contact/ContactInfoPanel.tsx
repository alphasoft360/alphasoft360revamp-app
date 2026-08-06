"use client";

import { Phone, Mail, MapPin, Clock, ArrowUpRight } from "lucide-react";
import { contact } from "@/data/content";

export default function ContactInfoPanel() {
  return (
    <div className="space-y-5">
      <a
        href={contact.whatsapp}
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center justify-between gap-4 rounded-2xl bg-gradient-to-br from-accent to-accent-2 p-6 text-white card-hover"
      >
        <div>
          <p className="text-xs uppercase tracking-wide text-white/70">Chat with us 24/7</p>
          <p className="mt-1 font-medium">Message us on WhatsApp</p>
        </div>
        <ArrowUpRight className="h-5 w-5 shrink-0" />
      </a>

      <a
        href={`tel:${contact.phone.replace(/\s/g, "")}`}
        className="flex items-center gap-4 rounded-2xl border border-line bg-surface p-5 card-hover hover:border-accent/50"
      >
        <span className="h-11 w-11 rounded-xl bg-accent/15 flex items-center justify-center shrink-0">
          <Phone className="h-5 w-5 text-accent-2" />
        </span>
        <div>
          <p className="text-xs text-muted">Call us</p>
          <p className="text-sm font-medium mt-0.5">{contact.phone}</p>
        </div>
      </a>

      <a
        href={`mailto:${contact.email}`}
        className="flex items-center gap-4 rounded-2xl border border-line bg-surface p-5 card-hover hover:border-accent/50"
      >
        <span className="h-11 w-11 rounded-xl bg-accent/15 flex items-center justify-center shrink-0">
          <Mail className="h-5 w-5 text-accent-2" />
        </span>
        <div>
          <p className="text-xs text-muted">Email us</p>
          <p className="text-sm font-medium mt-0.5">{contact.email}</p>
        </div>
      </a>

      <div className="flex items-center gap-4 rounded-2xl border border-line bg-surface p-5">
        <span className="h-11 w-11 rounded-xl bg-accent/15 flex items-center justify-center shrink-0">
          <MapPin className="h-5 w-5 text-accent-2" />
        </span>
        <div>
          <p className="text-xs text-muted">Our location</p>
          <p className="text-sm font-medium mt-0.5">{contact.location}</p>
        </div>
      </div>

      <div className="flex items-center gap-4 rounded-2xl border border-line bg-surface p-5">
        <span className="h-11 w-11 rounded-xl bg-accent/15 flex items-center justify-center shrink-0">
          <Clock className="h-5 w-5 text-accent-2" />
        </span>
        <div>
          <p className="text-xs text-muted">Working hours</p>
          <p className="text-sm font-medium mt-0.5">{contact.hours}</p>
        </div>
      </div>
    </div>
  );
}
