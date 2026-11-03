// import { motion } from "framer-motion";
// import { ArrowUpRight } from "lucide-react";

// const projects = [
//   {
//     name: "KKCart",
//     category: "E-commerce Platform",
//     description:
//       "A grocery and food delivery platform with product management, authentication, cart, and order features.",
//     image: "/images/kkcart.png",
//     number: "01",
//     technologies: "React · Node.js · MongoDB",
//   },
//   {
//     name: "ABRUPA",
//     category: "Fashion E-commerce",
//     description:
//       "An online fashion brand experience focused on elegant presentation and a smooth shopping journey.",
//     image: "/images/abrupa.png",
//     number: "02",
//     technologies: "React · TypeScript · Tailwind CSS",
//   },
// ];

// const Projects = () => {
//   return (
//     <section id="projects" className="bg-[#f7f7f7] px-6 py-28 md:px-12 lg:px-20">
//       <div className="mx-auto max-w-7xl">
//         <div className="mb-16">
//           <p className="mb-5 text-xs font-semibold uppercase tracking-[0.3em] text-neutral-400">
//             04 / Selected Work
//           </p>
//           <h2 className="text-4xl font-semibold tracking-tight md:text-6xl">
//             Ideas into reality.
//           </h2>
//         </div>

//         <div className="grid gap-12 md:grid-cols-2">
//           {projects.map((project, index) => (
//             <motion.article
//               key={project.name}
//               initial={{ opacity: 0, y: 30 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               viewport={{ once: true }}
//               transition={{ delay: index * 0.15 }}
//             >
//               <div className="group aspect-4/3 overflow-hidden bg-neutral-200">
//                 <img
//                   src={project.image}
//                   alt={`${project.name} project preview`}
//                   className="h-full w-full object-cover transition duration-700 group-hover:scale-105"
//                 />
//               </div>

//               <div className="mt-7 flex items-start justify-between">
//                 <div>
//                   <p className="text-xs uppercase tracking-widest text-neutral-400">
//                     {project.number} / {project.category}
//                   </p>

//                   <h3 className="mt-3 text-3xl font-semibold tracking-tight">
//                     {project.name}
//                   </h3>

//                   <p className="mt-4 max-w-md leading-7 text-neutral-500">
//                     {project.description}
//                   </p>

//                   <p className="mt-5 text-xs font-medium text-neutral-400">
//                     {project.technologies}
//                   </p>
//                 </div>

//                 <ArrowUpRight size={23} />
//               </div>
//             </motion.article>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Projects;

import { motion } from "framer-motion";
import { ArrowUpRight, Code2 } from "lucide-react";
import { Link } from "react-router-dom";

const projects = [
  {
    number: "01",
    name: "KKCart",
    category: "E-commerce & Delivery",
    description:
      "A grocery and food delivery platform designed to make online shopping simple, convenient and accessible.",
    technologies: ["React", "Node.js", "Express", "MongoDB"],
    type: "Full-Stack Application",
    status: "Completed",
    website: "",
  },
  {
    number: "02",
    name: "ABRUPA",
    category: "Fashion E-commerce",
    description:
      "An online fashion platform focused on bringing traditional and modern Indian clothing together through a seamless shopping experience.",
    technologies: ["React", "JavaScript", "REST API"],
    type: "E-commerce Platform",
    status: "In Development",
    website: "https://abrupa.shop",
  },
  {
    number: "03",
    name: "Silan Software",
    category: "Corporate Website",
    description:
      "A professional business website presenting software development services, educational programs and digital solutions.",
    technologies: ["React", "TypeScript", "Tailwind CSS"],
    type: "Business Website",
    status: "Developed",
    website: "https://silansoftware.com",
  },
];

const Projects = () => {
  return (
    <section className="bg-white px-6 py-24 md:px-12 md:py-32 lg:px-20">
      <div className="mx-auto max-w-[1440px]">
        {/* SECTION HEADER */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="mb-8 flex items-center gap-3">
            <span className="h-px w-10 bg-black" />

            <span className="text-xs font-semibold uppercase tracking-[0.2em] text-neutral-500">
              Selected Projects
            </span>
          </div>

          <div className="flex flex-col justify-between gap-6 lg:flex-row lg:items-end">
            <h2 className="max-w-[750px] text-[clamp(42px,6vw,76px)] font-semibold leading-[1.08] tracking-[-0.06em] text-[#111111]">
              Ideas transformed
              <br />
              into <span className="text-neutral-400">digital products.</span>
            </h2>

            <p className="max-w-[390px] text-sm leading-8 text-neutral-500 md:text-base">
              A selection of digital projects demonstrating our approach to
              development, problem-solving and building practical technology
              solutions.
            </p>
          </div>
        </motion.div>

        {/* PROJECT LIST */}
        <div className="mt-20">
          {projects.map((project, index) => (
            <motion.article
              key={project.number}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group grid gap-8 border-t border-neutral-200 py-10 md:grid-cols-[80px_1fr_1fr] md:items-start md:gap-12 md:py-14"
            >
              {/* PROJECT NUMBER */}
              <span className="text-xs font-medium tracking-widest text-neutral-400">
                {project.number}
              </span>

              {/* PROJECT DETAILS */}
              <div>
                <p className="mb-4 text-xs font-medium uppercase tracking-[0.16em] text-neutral-400">
                  {project.category}
                </p>

                <h3 className="text-3xl font-semibold tracking-[-0.05em] text-[#111111] transition-colors duration-300 group-hover:text-neutral-500 md:text-4xl">
                  {project.name}
                </h3>

                <p className="mt-5 max-w-[480px] text-sm leading-7 text-neutral-500">
                  {project.description}
                </p>

                <div className="mt-7 flex flex-wrap gap-2">
                  {project.technologies.map((technology) => (
                    <span
                      key={technology}
                      className="border border-neutral-200 px-3 py-2 text-xs text-neutral-600"
                    >
                      {technology}
                    </span>
                  ))}
                </div>
              </div>

              {/* PROJECT INFORMATION */}
              <div className="flex flex-col justify-between gap-8 md:ml-auto md:h-full md:w-full md:max-w-[300px]">
                <div className="flex items-center gap-3">
                  <Code2 size={17} className="text-neutral-400" />

                  <span className="text-sm text-neutral-600">
                    {project.type}
                  </span>
                </div>

                <div>
                  <p className="mb-2 text-xs uppercase tracking-widest text-neutral-400">
                    Project Status
                  </p>

                  <p className="text-sm font-medium text-neutral-800">
                    {project.status}
                  </p>
                </div>

                {project.website && (
                  <a
                    href={project.website}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group/link flex w-fit items-center gap-3 text-sm font-medium text-black"
                  >
                    Visit Website
                    <ArrowUpRight
                      size={17}
                      className="transition-transform duration-300 group-hover/link:translate-x-1 group-hover/link:-translate-y-1"
                    />
                  </a>
                )}
              </div>
            </motion.article>
          ))}
        </div>

        {/* BOTTOM CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-12 flex flex-col justify-between gap-6 bg-[#f8f8f7] p-8 md:flex-row md:items-center md:p-12"
        >
          <div>
            <h3 className="text-2xl font-semibold tracking-tight text-[#111111]">
              Have a project in mind?
            </h3>

            <p className="mt-3 text-sm leading-7 text-neutral-500">
              Let's discuss how we can help bring your idea to life.
            </p>
          </div>
          <Link
            to="/contact"
            className="group flex w-fit items-center gap-8 border border-black bg-black px-7 py-4 text-sm font-bold text-white transition-all duration-300 hover:bg-white hover:text-black"
          >
            <span className="text-white transition-colors group-hover:text-black">
              Start a Project
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

export default Projects;
