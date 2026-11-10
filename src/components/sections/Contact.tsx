// import { ArrowUpRight, Mail } from "lucide-react";

// const Contact = () => {
//   return (
//     <section
//       id="contact"
//       className="bg-[#f2f2f2] px-6 py-28 md:px-12 lg:px-20"
//     >
//       <div className="mx-auto max-w-7xl">
//         <p className="mb-5 text-xs font-semibold uppercase tracking-[0.3em] text-neutral-400">
//           06 / Start a Conversation
//         </p>

//         <h2 className="max-w-5xl text-5xl font-semibold leading-tight tracking-tighter md:text-8xl">
//           Have an idea?
//           <br />
//           <span className="text-neutral-400">Let's build it.</span>
//         </h2>

//         <div className="mt-12 flex flex-col justify-between gap-8 border-t border-neutral-300 pt-8 md:flex-row md:items-end">
//           <div>
//             <p className="mb-4 text-sm text-neutral-500">
//               Tell us what you're working on.
//             </p>

//             <a
//               href="mailto:hello@abhnix.com"
//               className="flex items-center gap-3 text-xl font-medium transition hover:text-neutral-500 md:text-2xl"
//             >
//               <Mail size={22} />
//               hello@abhnix.com
//             </a>
//           </div>

//           <a
//             href="mailto:hello@abhnix.com"
//             className="group flex w-fit items-center gap-4 rounded-full bg-black px-7 py-4 text-sm font-medium text-white transition hover:bg-neutral-700"
//           >
//             Discuss your project
//             <ArrowUpRight
//               size={18}
//               className="transition-transform group-hover:translate-x-1 group-hover:-translate-y-1"
//             />
//           </a>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Contact;

import { useState, type FormEvent } from "react";
import { motion } from "framer-motion";
import { Mail, MapPin, Send } from "lucide-react";

const Contact = () => {
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState("");

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    setStatus("");

    const form = e.currentTarget;
    const formData = new FormData(form);

    try {
      const response = await fetch(
        "https://formsubmit.co/ajax/hello@abhnix.com",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
          },
          body: JSON.stringify({
            name: formData.get("name"),
            email: formData.get("email"),
            phone: formData.get("phone"),
            service: formData.get("service"),
            message: formData.get("message"),
            _subject: "New Project Enquiry - ABHNIX",
            _template: "table",
          }),
        }
      );

      const result = await response.json();

      if (!response.ok || result.success !== "true") {
        throw new Error("Unable to send enquiry.");
      }

      setStatus("Thank you! Your enquiry has been sent successfully.");
      form.reset();
    } catch (error) {
      console.error(error);
      setStatus("Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="bg-white px-6 py-24 md:px-12 md:py-32 lg:px-20">
      <div className="mx-auto max-w-[1440px]">

        <div className="mb-8 flex items-center gap-3">
          <span className="h-px w-10 bg-black" />
          <span className="text-xs font-semibold uppercase tracking-[0.2em] text-neutral-500">
            Get In Touch
          </span>
        </div>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-[900px] text-[clamp(42px,6vw,76px)] font-semibold leading-[1.08] tracking-[-0.06em] text-[#111111]"
        >
          Have a project in mind?
          <br />
          <span className="text-neutral-400">Let's talk about it.</span>
        </motion.h2>

        <p className="mt-7 max-w-[580px] text-sm leading-8 text-neutral-500 md:text-base">
          Tell us about your project, requirements and goals.
          Let's build something meaningful together.
        </p>

        <div className="mt-20 grid gap-16 lg:grid-cols-[0.75fr_1.25fr] lg:gap-24">

          {/* CONTACT DETAILS */}
          <div>
            <h3 className="text-2xl font-semibold text-[#111111]">
              Let's connect.
            </h3>

            <p className="mt-4 max-w-[350px] text-sm leading-7 text-neutral-500">
              Have an idea or a project to discuss? Send us an enquiry.
            </p>

            <div className="mt-12 space-y-9">
              <div className="flex gap-5">
                <Mail size={20} className="mt-1 text-neutral-500" />
                <div>
                  <p className="text-xs uppercase tracking-widest text-neutral-400">
                    Official Email
                  </p>
                  <p className="mt-2 text-sm font-medium text-neutral-800">
                    hello@abhnix.com
                  </p>
                </div>
              </div>

              <div className="flex gap-5">
                <MapPin size={20} className="mt-1 text-neutral-500" />
                <div>
                  <p className="text-xs uppercase tracking-widest text-neutral-400">
                    Location
                  </p>
                  <p className="mt-2 text-sm font-medium text-neutral-800">
                    Odisha, India
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* ENQUIRY FORM */}
          <motion.form
            onSubmit={handleSubmit}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div className="grid gap-8 sm:grid-cols-2">
              <div>
                <label className="mb-3 block text-xs font-medium text-neutral-600">
                  Your Name *
                </label>
                <input
                  name="name"
                  type="text"
                  placeholder="Enter your name"
                  required
                  className="w-full border-b border-neutral-300 py-4 text-sm outline-none focus:border-black"
                />
              </div>

              <div>
                <label className="mb-3 block text-xs font-medium text-neutral-600">
                  Email Address *
                </label>
                <input
                  name="email"
                  type="email"
                  placeholder="you@example.com"
                  required
                  className="w-full border-b border-neutral-300 py-4 text-sm outline-none focus:border-black"
                />
              </div>
            </div>

            <div className="grid gap-8 sm:grid-cols-2">
              <div>
                <label className="mb-3 block text-xs font-medium text-neutral-600">
                  Phone Number
                </label>
                <input
                  name="phone"
                  type="tel"
                  placeholder="+91 00000 00000"
                  className="w-full border-b border-neutral-300 py-4 text-sm outline-none focus:border-black"
                />
              </div>

              <div>
                <label className="mb-3 block text-xs font-medium text-neutral-600">
                  Service Required *
                </label>
                <select
                  name="service"
                  required
                  defaultValue=""
                  className="w-full border-b border-neutral-300 bg-white py-4 text-sm outline-none focus:border-black"
                >
                  <option value="" disabled>Select a service</option>
                  <option value="Website Development">Website Development</option>
                  <option value="E-commerce Development">E-commerce Development</option>
                  <option value="Custom Software Development">Custom Software Development</option>
                  <option value="UI/UX Design">UI/UX Design</option>
                  <option value="Other">Other</option>
                </select>
              </div>
            </div>

            <div>
              <label className="mb-3 block text-xs font-medium text-neutral-600">
                Project Details *
              </label>
              <textarea
                name="message"
                placeholder="Tell us about your project and requirements..."
                required
                rows={5}
                className="w-full resize-none border-b border-neutral-300 py-4 text-sm outline-none focus:border-black"
              />
            </div>

            <button
              type="submit"
              disabled={loading}
              className="group flex items-center gap-10 border border-black bg-black px-8 py-4 text-sm font-medium text-white transition hover:bg-white hover:text-black disabled:opacity-50"
            >
              {loading ? "Sending..." : "Send Enquiry"}
              <Send size={16} />
            </button>

            {status && (
              <p role="status" aria-live="polite" className="text-sm text-neutral-600">
                {status}
              </p>
            )}
          </motion.form>
        </div>
      </div>
    </section>
  );
};

export default Contact;