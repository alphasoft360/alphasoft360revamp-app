"use client";

import { motion } from "framer-motion";
import ContactForm from "./ContactForm";
import ContactInfoPanel from "./ContactInfoPanel";

export default function ContactFormSection() {
  return (
    <section className="relative py-8 lg:py-12 border-t border-line">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid lg:grid-cols-5 gap-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-3"
          >
            <ContactForm />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="lg:col-span-2"
          >
            <ContactInfoPanel />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
