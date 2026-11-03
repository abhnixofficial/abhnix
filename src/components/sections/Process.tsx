// const steps = [
//   {
//     number: "01",
//     title: "Discover",
//     description:
//       "We understand your business, audience, requirements, and project goals.",
//   },
//   {
//     number: "02",
//     title: "Plan & Design",
//     description:
//       "We create a clear project direction, structure, and user experience.",
//   },
//   {
//     number: "03",
//     title: "Develop",
//     description:
//       "We build your solution using modern technologies and development practices.",
//   },
//   {
//     number: "04",
//     title: "Launch & Support",
//     description:
//       "We test, launch, and help you move forward with your digital product.",
//   },
// ];

// const Process = () => {
//   return (
//     <section className="bg-white px-6 py-28 md:px-12 lg:px-20">
//       <div className="mx-auto max-w-7xl">
//         <div className="mb-16">
//           <p className="mb-5 text-xs font-semibold uppercase tracking-[0.3em] text-neutral-400">
//             05 / Our Process
//           </p>
//           <h2 className="text-4xl font-semibold tracking-tight md:text-6xl">
//             Simple. Focused. Effective.
//           </h2>
//         </div>

//         <div className="grid border-l border-t border-neutral-200 sm:grid-cols-2 lg:grid-cols-4">
//           {steps.map((step) => (
//             <div
//               key={step.number}
//               className="border-b border-r border-neutral-200 p-8 md:p-10"
//             >
//               <span className="text-sm text-neutral-400">{step.number}</span>
//               <h3 className="mt-12 text-2xl font-semibold">{step.title}</h3>
//               <p className="mt-5 text-sm leading-7 text-neutral-500">
//                 {step.description}
//               </p>
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Process;

import { motion } from "framer-motion";
import { ArrowUpRight, CheckCircle2 } from "lucide-react";
import { Link } from "react-router-dom";

const steps = [
  {
    number: "01",
    title: "Understanding Requirements",
    description:
      "We start by understanding your business, project goals, target audience and technical requirements.",
    deliverables: [
      "Initial discussion",
      "Project requirements",
      "Scope definition",
    ],
  },
  {
    number: "02",
    title: "Planning & Strategy",
    description:
      "We define the project structure, select suitable technologies and create a clear development roadmap.",
    deliverables: [
      "Technical planning",
      "Technology selection",
      "Development roadmap",
    ],
  },
  {
    number: "03",
    title: "Design & Development",
    description:
      "We turn the approved plan into a functional digital product with a focus on usability, performance and quality.",
    deliverables: [
      "Interface development",
      "Backend integration",
      "Regular progress updates",
    ],
  },
  {
    number: "04",
    title: "Testing & Delivery",
    description:
      "We test the functionality, resolve issues and prepare the completed solution for deployment.",
    deliverables: [
      "Quality testing",
      "Deployment preparation",
      "Project handover",
    ],
  },
];

const Process = () => {
  return (
    <section className="bg-[#f8f8f7] px-6 py-24 md:px-12 md:py-32 lg:px-20">
      <div className="mx-auto max-w-[1440px]">
        {/* HEADER */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="mb-8 flex items-center gap-3">
            <span className="h-px w-10 bg-black" />

            <span className="text-xs font-semibold uppercase tracking-[0.2em] text-neutral-500">
              How We Work
            </span>
          </div>

          <div className="grid gap-8 lg:grid-cols-[1.2fr_0.8fr] lg:items-end">
            <h2 className="max-w-[850px] text-[clamp(42px,6vw,76px)] font-semibold leading-[1.08] tracking-[-0.06em] text-[#111111]">
              A clear process.
              <br />
              <span className="text-neutral-400">Better outcomes.</span>
            </h2>

            <p className="max-w-[430px] text-sm leading-8 text-neutral-500 md:text-base lg:ml-auto">
              Every successful project needs a clear direction. Our structured
              development process keeps the work organized, transparent and
              focused on your goals.
            </p>
          </div>
        </motion.div>

        {/* PROCESS STEPS */}
        <div className="mt-20 grid gap-0 md:grid-cols-2">
          {steps.map((step, index) => (
            <motion.div
              key={step.number}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{
                duration: 0.5,
                delay: index * 0.1,
              }}
              className="group border-t border-neutral-200 py-10 md:p-10 lg:p-12"
            >
              {/* STEP NUMBER */}
              <div className="mb-10 flex items-center justify-between">
                <span className="text-sm font-medium tracking-widest text-neutral-400">
                  STEP {step.number}
                </span>

                <span className="flex h-9 w-9 items-center justify-center border border-neutral-300 text-neutral-500 transition-all duration-300 group-hover:border-black group-hover:bg-black group-hover:text-white">
                  <ArrowUpRight size={16} />
                </span>
              </div>

              {/* TITLE */}
              <h3 className="max-w-[420px] text-2xl font-semibold tracking-[-0.04em] text-[#111111] md:text-3xl">
                {step.title}
              </h3>

              {/* DESCRIPTION */}
              <p className="mt-5 max-w-[470px] text-sm leading-7 text-neutral-500">
                {step.description}
              </p>

              {/* DELIVERABLES */}
              <div className="mt-8 space-y-4">
                {step.deliverables.map((item) => (
                  <div key={item} className="flex items-center gap-3">
                    <CheckCircle2
                      size={16}
                      strokeWidth={1.5}
                      className="text-neutral-400"
                    />

                    <span className="text-sm text-neutral-600">{item}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-12 flex flex-col justify-between gap-6 bg-white p-8 md:flex-row md:items-center md:p-12"
        >
          <div>
            <h3 className="text-2xl font-semibold tracking-tight text-[#111111]">
              Ready to get started?
            </h3>

            <p className="mt-3 text-sm leading-7 text-neutral-500">
              Tell us about your idea. Let's plan the next steps together.
            </p>
          </div>

          <Link
            to="/contact"
            className="group flex w-fit items-center gap-8 border border-black bg-black px-7 py-4 text-sm font-bold text-white transition-all duration-300 hover:bg-white hover:text-black"
          >
            <span className="text-white transition-colors group-hover:text-black">
              Discuss Your Project
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

export default Process;
