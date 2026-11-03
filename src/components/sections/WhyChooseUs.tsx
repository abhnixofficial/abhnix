// import { motion } from "framer-motion";
// import { Check } from "lucide-react";

// const benefits = [
//   "Solutions built around your business goals",
//   "Modern and reliable technology",
//   "Responsive design across devices",
//   "Clear communication throughout the project",
//   "Scalable development approach",
//   "Support beyond the initial launch",
// ];

// const WhyChooseUs = () => {
//   return (
//     <section className="bg-black px-6 py-28 text-white md:px-12 lg:px-20">
//       <div className="mx-auto grid max-w-7xl gap-16 md:grid-cols-2">
//         <div>
//           <p className="mb-5 text-xs font-semibold uppercase tracking-[0.3em] text-neutral-500">
//             03 / Why ABHNIX
//           </p>

//           <h2 className="text-4xl font-semibold leading-tight tracking-tight md:text-6xl">
//             Good ideas deserve great execution.
//           </h2>

//           <p className="mt-8 max-w-md leading-8 text-neutral-400">
//             We believe great digital products come from understanding the
//             problem, choosing the right technology, and paying attention to
//             every detail.
//           </p>
//         </div>

//         <div className="space-y-0">
//           {benefits.map((benefit, index) => (
//             <motion.div
//               key={benefit}
//               initial={{ opacity: 0, x: 20 }}
//               whileInView={{ opacity: 1, x: 0 }}
//               viewport={{ once: true }}
//               transition={{ delay: index * 0.08 }}
//               className="flex items-center gap-5 border-b border-neutral-800 py-6"
//             >
//               <Check size={19} className="shrink-0 text-white" />
//               <span className="text-base text-neutral-300">{benefit}</span>
//             </motion.div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// };

// export default WhyChooseUs;

import { motion } from "framer-motion";
import {
  ArrowUpRight,
  Code2,
  Lightbulb,
  ShieldCheck,
  Workflow,
} from "lucide-react";
import { Link } from "react-router-dom";

const advantages = [
  {
    number: "01",
    icon: Lightbulb,
    title: "Business-First Thinking",
    description:
      "We begin by understanding your business, goals and challenges before recommending the right digital solution.",
  },
  {
    number: "02",
    icon: Code2,
    title: "Modern Technology",
    description:
      "We use modern development technologies and practical engineering approaches to build reliable digital products.",
  },
  {
    number: "03",
    icon: Workflow,
    title: "Tailored Solutions",
    description:
      "Every business is different. We develop solutions around your specific requirements instead of relying on one-size-fits-all approaches.",
  },
  {
    number: "04",
    icon: ShieldCheck,
    title: "Quality & Reliability",
    description:
      "We focus on maintainable code, responsive experiences and dependable functionality throughout development.",
  },
];

const WhyChooseUs = () => {
  return (
    <section className="bg-[#111111] px-6 py-24 text-white md:px-12 md:py-32 lg:px-20">
      <div className="mx-auto max-w-[1440px]">
        {/* HEADER */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="mb-8 flex items-center gap-3">
            <span className="h-px w-10 bg-white" />

            <span className="text-xs font-semibold uppercase tracking-[0.2em] text-neutral-400">
              Why ABHNIX
            </span>
          </div>

          <div className="grid gap-8 lg:grid-cols-[1.2fr_0.8fr] lg:items-end">
            <h2 className="max-w-[850px] text-[clamp(42px,6vw,76px)] font-semibold leading-[1.08] tracking-[-0.06em]">
              A thoughtful approach to{" "}
              <span className="text-neutral-500">digital development.</span>
            </h2>

            <p className="max-w-[430px] text-sm leading-8 text-neutral-400 md:text-base lg:ml-auto">
              Good technology starts with understanding the problem. We combine
              business thinking, thoughtful design and modern engineering to
              create meaningful solutions.
            </p>
          </div>
        </motion.div>

        {/* ADVANTAGES GRID */}
        <div className="mt-20 grid border-l border-t border-white/15 md:grid-cols-2">
          {advantages.map((item, index) => {
            const Icon = item.icon;

            return (
              <motion.div
                key={item.number}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{
                  duration: 0.5,
                  delay: index * 0.1,
                }}
                className="group border-b border-r border-white/15 p-7 transition-colors duration-300 hover:bg-white/[0.04] md:p-10 lg:p-12"
              >
                {/* NUMBER AND ICON */}
                <div className="mb-12 flex items-center justify-between">
                  <span className="text-xs tracking-widest text-neutral-500">
                    {item.number}
                  </span>

                  <Icon
                    size={23}
                    strokeWidth={1.4}
                    className="text-neutral-500 transition-colors duration-300 group-hover:text-white"
                  />
                </div>

                {/* CONTENT */}
                <h3 className="text-xl font-semibold tracking-tight text-white md:text-2xl">
                  {item.title}
                </h3>

                <p className="mt-4 max-w-[460px] text-sm leading-7 text-neutral-400">
                  {item.description}
                </p>

                <div className="mt-8 h-px w-0 bg-white transition-all duration-500 group-hover:w-12" />
              </motion.div>
            );
          })}
        </div>

        {/* BOTTOM CTA */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-16 flex flex-col justify-between gap-6 sm:flex-row sm:items-center"
        >
          <div>
            <p className="text-lg font-medium text-white md:text-xl">
              Have an idea worth building?
            </p>

            <p className="mt-2 text-sm text-neutral-500">
              Let's turn your business requirements into a digital solution.
            </p>
          </div>

          <Link
            to="/contact"
            className="group flex w-fit items-center gap-8 border border-white/30 bg-transparent px-7 py-4 text-sm font-bold text-white transition-all duration-300 hover:border-white hover:bg-white hover:text-black"
          >
            <span className="text-white transition-colors group-hover:text-black">
              Let's Work Together
            </span>

            <ArrowUpRight
              size={17}
              className="text-white transition-all duration-300 group-hover:text-black group-hover:translate-x-1 group-hover:-translate-y-1"
            />
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
