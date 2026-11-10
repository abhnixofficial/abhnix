import { useState, type FormEvent } from "react";
import { motion } from "framer-motion";
import {
ArrowUpRight,
Mail,
MapPin,
Phone,
Send,
CheckCircle2,
LoaderCircle,
} from "lucide-react";

const ContactPage = () => {
const [loading, setLoading] = useState(false);
const [status, setStatus] = useState("");

const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
e.preventDefault();

const form = e.currentTarget;
const formData = new FormData(form);

const name = String(formData.get("name") || "").trim();
const email = String(formData.get("email") || "").trim();
const service = String(formData.get("service") || "");
const message = String(formData.get("message") || "").trim();

if (!name || !email || !service || !message) {
  setStatus("Please complete all required fields.");
  return;
}

setLoading(true);
setStatus("");

try {
  const response = await fetch(
    "https://formsubmit.co/ajax/abhnix.official@gmail.com",
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify({
        name,
        email,
        phone: formData.get("phone"),
        service,
        message,
        _subject: "New Project Enquiry - ABHNIX",
        _template: "table",
      }),
    }
  );

  const result = await response.json();

  if (!response.ok || result.success !== "true") {
    throw new Error("Unable to send enquiry.");
  }

  setStatus("success");
  form.reset();
} catch (error) {
  console.error("Contact form error:", error);
  setStatus("Unable to send your enquiry. Please try again.");
} finally {
  setLoading(false);
}

};

return (
<div className="overflow-hidden bg-white text-[#111111]">

  {/* HERO */}
  <section className="px-6 pb-20 pt-24 md:px-12 md:pb-28 md:pt-36 lg:px-20">
    <div className="mx-auto max-w-[1440px]">

      <motion.div
        initial={{ opacity: 0, y: 25 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
      >
        <div className="mb-10 flex items-center gap-3">
          <span className="h-px w-10 bg-black" />
          <span className="text-xs font-semibold uppercase tracking-[0.2em] text-neutral-500">
            Contact ABHNIX
          </span>
        </div>

        <h1 className="max-w-[1050px] text-[clamp(48px,8vw,105px)] font-semibold leading-[0.98] tracking-[-0.075em]">
          Let's build
          <span className="block text-neutral-400">
            something meaningful.
          </span>
        </h1>

        <div className="mt-12 flex flex-col justify-between gap-8 md:mt-16 md:flex-row md:items-end">
          <p className="max-w-[580px] text-base leading-8 text-neutral-500 md:text-lg">
            Have an idea, a business challenge or a project in mind?
            Tell us what you're looking to build. We'd love to hear from you.
          </p>

          <span className="text-xs font-medium uppercase tracking-widest text-neutral-400">
            Let's start a conversation
          </span>
        </div>
      </motion.div>
    </div>
  </section>

  {/* CONTACT CONTENT */}
  <section className="bg-[#F7F7F7] px-6 py-20 md:px-12 md:py-28 lg:px-20">
    <div className="mx-auto grid max-w-[1440px] gap-16 lg:grid-cols-[0.8fr_1.2fr] lg:gap-24">

      {/* LEFT INFORMATION */}
      <motion.div
        initial={{ opacity: 0, x: -25 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
      >
        <span className="text-xs font-semibold uppercase tracking-[0.2em] text-neutral-400">
          Get in Touch
        </span>

        <h2 className="mt-8 text-4xl font-semibold leading-tight tracking-[-0.06em] md:text-5xl">
          Every great project starts with a conversation.
        </h2>

        <p className="mt-7 max-w-md text-base leading-8 text-neutral-500">
          Share your requirements with us. Whether you need a business
          website, an e-commerce platform or custom software, let's discuss
          how we can help.
        </p>

        <div className="mt-14 space-y-9">

          <div className="flex items-start gap-5">
            <div className="flex h-12 w-12 shrink-0 items-center justify-center border border-neutral-300 bg-white">
              <Mail size={19} />
            </div>

            <div>
              <p className="text-xs font-semibold uppercase tracking-widest text-neutral-400">
                Email
              </p>
              <p className="mt-2 text-sm font-medium">
                {/* abhnix.official@gmail.com */}
                hello@abhnix.com
              </p>
            </div>
          </div>

          <div className="flex items-start gap-5">
            <div className="flex h-12 w-12 shrink-0 items-center justify-center border border-neutral-300 bg-white">
              <MapPin size={19} />
            </div>

            <div>
              <p className="text-xs font-semibold uppercase tracking-widest text-neutral-400">
                Location
              </p>
              <p className="mt-2 text-sm font-medium">
                Odisha, India
              </p>
            </div>
          </div>

          <div className="flex items-start gap-5">
            <div className="flex h-12 w-12 shrink-0 items-center justify-center border border-neutral-300 bg-white">
              <Phone size={19} />
            </div>

            <div>
              <p className="text-xs font-semibold uppercase tracking-widest text-neutral-400">
                Availability
              </p>
              <p className="mt-2 text-sm font-medium">
                Open for project enquiries
              </p>
            </div>
          </div>

        </div>

        <div className="mt-16 border-t border-neutral-300 pt-7">
          <p className="text-xs font-semibold uppercase tracking-widest text-neutral-400">
            ABHNIX
          </p>
          <p className="mt-3 text-sm text-neutral-500">
            Engineering Digital Excellence.
          </p>
        </div>
      </motion.div>

      {/* FORM */}
      <motion.div
        initial={{ opacity: 0, x: 25 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
        className="bg-white p-7 md:p-12"
      >
        <div className="mb-10">
          <span className="text-xs font-semibold uppercase tracking-[0.2em] text-neutral-400">
            Project Enquiry
          </span>

          <h2 className="mt-5 text-3xl font-semibold tracking-[-0.05em] md:text-4xl">
            Tell us about your project.
          </h2>

          <p className="mt-4 text-sm leading-7 text-neutral-500">
            Fill out the form below and share a few details about your idea.
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-7">

          <div className="grid gap-7 md:grid-cols-2">
            <div>
              <label className="mb-3 block text-xs font-semibold uppercase tracking-widest">
                Your Name *
              </label>
              <input
                type="text"
                name="name"
                required
                minLength={2}
                placeholder="Enter your name"
                className="w-full border-b border-neutral-300 bg-transparent py-4 text-sm outline-none transition-colors placeholder:text-neutral-400 focus:border-black"
              />
            </div>

            <div>
              <label className="mb-3 block text-xs font-semibold uppercase tracking-widest">
                Email Address *
              </label>
              <input
                type="email"
                name="email"
                required
                placeholder="you@example.com"
                className="w-full border-b border-neutral-300 bg-transparent py-4 text-sm outline-none transition-colors placeholder:text-neutral-400 focus:border-black"
              />
            </div>
          </div>

          <div className="grid gap-7 md:grid-cols-2">
            <div>
              <label className="mb-3 block text-xs font-semibold uppercase tracking-widest">
                Phone Number
              </label>
              <input
                type="tel"
                name="phone"
                placeholder="Enter phone number"
                className="w-full border-b border-neutral-300 bg-transparent py-4 text-sm outline-none transition-colors placeholder:text-neutral-400 focus:border-black"
              />
            </div>

            <div>
              <label className="mb-3 block text-xs font-semibold uppercase tracking-widest">
                Service Required *
              </label>

              <select
                name="service"
                required
                defaultValue=""
                className="w-full border-b border-neutral-300 bg-transparent py-4 text-sm text-neutral-600 outline-none transition-colors focus:border-black"
              >
                <option value="" disabled>
                  Select a service
                </option>
                <option value="Website Development">
                  Website Development
                </option>
                <option value="E-commerce Development">
                  E-commerce Development
                </option>
                <option value="Custom Software Development">
                  Custom Software Development
                </option>
                <option value="UI/UX Design">
                  UI/UX Design
                </option>
                <option value="Other">Other</option>
              </select>
            </div>
          </div>

          <div>
            <label className="mb-3 block text-xs font-semibold uppercase tracking-widest">
              Tell us about your project *
            </label>

            <textarea
              name="message"
              required
              minLength={10}
              rows={5}
              placeholder="Describe your project, requirements and goals..."
              className="w-full resize-none border-b border-neutral-300 bg-transparent py-4 text-sm leading-7 outline-none transition-colors placeholder:text-neutral-400 focus:border-black"
            />
          </div>

          {status && (
            <div
              role="status"
              className={`flex items-start gap-3 text-sm ${
                status === "success"
                  ? "text-green-700"
                  : "text-red-600"
              }`}
            >
              {status === "success" && (
                <CheckCircle2 size={18} className="shrink-0" />
              )}
              <span>
                {status === "success"
                  ? "Thank you! Your enquiry has been sent successfully."
                  : status}
              </span>
            </div>
          )}

          <button
            type="submit"
            disabled={loading}
            className="group flex w-full items-center justify-between border border-black bg-black px-7 py-5 text-sm font-bold text-white transition-all duration-300 hover:bg-white hover:text-black disabled:cursor-not-allowed disabled:opacity-60"
          >
            <span className="text-white transition-colors group-hover:text-black">
              {loading ? "Sending Enquiry..." : "Send Enquiry"}
            </span>

            {loading ? (
              <LoaderCircle
                size={19}
                className="animate-spin text-white group-hover:text-black"
              />
            ) : (
              <Send
                size={18}
                className="text-white transition-colors group-hover:text-black"
              />
            )}
          </button>

          <p className="text-center text-xs leading-6 text-neutral-400">
            Your information will only be used to respond to your enquiry.
          </p>

        </form>
      </motion.div>
    </div>
  </section>

  {/* FINAL CTA */}
  <section className="px-6 py-24 md:px-12 md:py-32 lg:px-20">
    <div className="mx-auto max-w-[1440px]">
      <span className="text-xs font-semibold uppercase tracking-[0.2em] text-neutral-400">
        Let's Create Something
      </span>

      <h2 className="mt-8 max-w-[900px] text-[clamp(42px,7vw,82px)] font-semibold leading-[1.05] tracking-[-0.07em]">
        Good ideas deserve great execution.
      </h2>

      <a
        href="mailto:hello@abhnix.com"
        className="group mt-10 inline-flex items-center gap-5 text-sm font-bold"
      >
        <span className="border-b border-black pb-2">
          Email ABHNIX
        </span>

        <ArrowUpRight
          size={18}
          className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
        />
      </a>
    </div>
  </section>

</div>

);
};

export default ContactPage;