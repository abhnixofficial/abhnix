// import { motion } from "framer-motion";
// import {
//   Code2,
//   ShoppingBag,
//   Layers3,
//   Palette,
//   ArrowUpRight,
// } from "lucide-react";

// const services = [
//   {
//     number: "01",
//     title: "Website Development",
//     description:
//       "Modern, responsive websites that communicate your brand and turn visitors into customers.",
//     icon: Code2,
//   },
//   {
//     number: "02",
//     title: "E-commerce Solutions",
//     description:
//       "Scalable online stores with smooth shopping experiences and practical business features.",
//     icon: ShoppingBag,
//   },
//   {
//     number: "03",
//     title: "Custom Web Applications",
//     description:
//       "Purpose-built web applications designed around your business processes and goals.",
//     icon: Layers3,
//   },
//   {
//     number: "04",
//     title: "UI/UX & Frontend",
//     description:
//       "Clean interfaces and engaging interactions that make digital products easier to use.",
//     icon: Palette,
//   },
// ];

// const Services = () => {
//   return (
//     <section id="services" className="bg-white px-6 py-28 md:px-12 lg:px-20">
//       <div className="mx-auto max-w-7xl">
//         <div className="mb-16 flex flex-col justify-between gap-6 md:flex-row md:items-end">
//           <div>
//             <p className="mb-5 text-xs font-semibold uppercase tracking-[0.3em] text-neutral-400">
//               02 / What We Do
//             </p>
//             <h2 className="text-4xl font-semibold tracking-tight md:text-6xl">
//               Our expertise.
//             </h2>
//           </div>

//           <p className="max-w-sm leading-7 text-neutral-500">
//             Digital services designed to help businesses build better
//             experiences and achieve more.
//           </p>
//         </div>

//         <div className="grid border-l border-t border-neutral-200 sm:grid-cols-2">
//           {services.map((service, index) => {
//             const Icon = service.icon;

//             return (
//               <motion.div
//                 key={service.number}
//                 initial={{ opacity: 0, y: 20 }}
//                 whileInView={{ opacity: 1, y: 0 }}
//                 viewport={{ once: true }}
//                 transition={{ delay: index * 0.1 }}
//                 className="group border-b border-r border-neutral-200 p-8 transition hover:bg-[#f7f7f7] md:p-12"
//               >
//                 <div className="mb-12 flex items-center justify-between">
//                   <span className="text-xs text-neutral-400">
//                     {service.number}
//                   </span>
//                   <Icon
//                     size={25}
//                     strokeWidth={1.5}
//                     className="text-neutral-500 transition group-hover:text-black"
//                   />
//                 </div>

//                 <h3 className="text-2xl font-semibold tracking-tight">
//                   {service.title}
//                 </h3>

//                 <p className="mt-4 max-w-md leading-7 text-neutral-500">
//                   {service.description}
//                 </p>

//                 <ArrowUpRight
//                   className="mt-8 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1"
//                   size={20}
//                 />
//               </motion.div>
//             );
//           })}
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Services;
import { motion } from "framer-motion";
import {
  ArrowUpRight,
  Code2,
  ShoppingCart,
  Layers3,
  MonitorSmartphone,
} from "lucide-react";
import { Link } from "react-router-dom";

const services = [
  {
    number: "01",
    title: "Website Development",
    description:
      "High-performance, responsive websites built to strengthen your online presence and support your business goals.",
    details: ["Business Websites", "Corporate Websites", "Landing Pages"],
    icon: MonitorSmartphone,
  },
  {
    number: "02",
    title: "E-commerce Development",
    description:
      "Powerful online stores with intuitive shopping experiences, secure integrations and scalable architecture.",
    details: ["Online Stores", "Payment Integration", "Store Management"],
    icon: ShoppingCart,
  },
  {
    number: "03",
    title: "Custom Software",
    description:
      "Purpose-built web applications that simplify workflows, solve business challenges and improve efficiency.",
    details: ["Web Applications", "Business Platforms", "API Development"],
    icon: Code2,
  },
  {
    number: "04",
    title: "UI/UX Design",
    description:
      "User-focused digital interfaces that combine thoughtful design, usability and consistent visual identity.",
    details: ["Website Design", "Application UI", "User Experience"],
    icon: Layers3,
  },
];

const Services = () => {
  return (
    <section className="bg-white px-6 py-24 md:px-12 md:py-32 lg:px-20">
      <div className="mx-auto max-w-[1440px]">

        {/* HEADER */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <div className="mb-8 flex items-center gap-3">
            <span className="h-px w-10 bg-black" />
            <span className="text-xs font-semibold uppercase tracking-[0.2em] text-neutral-500">
              Our Services
            </span>
          </div>

          <div className="grid gap-8 lg:grid-cols-[1.2fr_0.8fr] lg:items-end">
            <h2 className="max-w-[800px] text-[clamp(42px,6vw,76px)] font-semibold leading-[1.08] tracking-[-0.06em] text-[#111111]">
              Technology solutions for{" "}
              <span className="text-neutral-400">
                ambitious businesses.
              </span>
            </h2>

            <p className="max-w-[440px] text-sm leading-8 text-neutral-500 md:text-base lg:ml-auto">
              From websites to custom applications, we deliver
              digital solutions designed around your business
              requirements and long-term goals.
            </p>
          </div>
        </motion.div>

        {/* SERVICE GRID */}
        <div className="grid border-l border-t border-neutral-200 md:grid-cols-2">
          {services.map((service, index) => {
            const Icon = service.icon;

            return (
              <motion.div
                key={service.number}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{
                  duration: 0.55,
                  delay: index * 0.08,
                }}
                className="group border-b border-r border-neutral-200 p-7 transition-colors duration-300 hover:bg-[#f8f8f7] md:p-10 lg:p-12"
              >
                {/* NUMBER + ICON */}
                <div className="mb-12 flex items-center justify-between">
                  <span className="text-xs font-medium tracking-widest text-neutral-400">
                    {service.number}
                  </span>

                  <div className="flex h-11 w-11 items-center justify-center border border-neutral-200 bg-white transition-all duration-300 group-hover:border-black group-hover:bg-black group-hover:text-white">
                    <Icon size={20} strokeWidth={1.5} />
                  </div>
                </div>

                {/* TITLE */}
                <div className="flex items-start justify-between gap-4">
                  <h3 className="max-w-[400px] text-2xl font-semibold tracking-[-0.04em] text-neutral-900 md:text-3xl">
                    {service.title}
                  </h3>

                  <ArrowUpRight
                    size={21}
                    className="mt-1 shrink-0 text-neutral-300 transition-all duration-300 group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-black"
                  />
                </div>

                {/* DESCRIPTION */}
                <p className="mt-5 max-w-[470px] text-sm leading-7 text-neutral-500">
                  {service.description}
                </p>

                {/* SERVICE DETAILS */}
                <div className="mt-8 flex flex-wrap gap-x-5 gap-y-3">
                  {service.details.map((detail) => (
                    <span
                      key={detail}
                      className="text-[11px] font-medium text-neutral-400"
                    >
                      {detail}
                    </span>
                  ))}
                </div>
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
          className="mt-12 flex flex-col justify-between gap-6 sm:flex-row sm:items-center"
        >
          <p className="max-w-[500px] text-sm leading-7 text-neutral-500">
            Have a project in mind? Let's discuss how we can
            build the right digital solution for your business.
          </p>

      <Link
  to="/contact"
  className="group flex w-fit items-center gap-7 border border-black bg-black px-6 py-4 text-sm font-bold text-white transition-all duration-300 hover:bg-white hover:text-black"
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

export default Services;