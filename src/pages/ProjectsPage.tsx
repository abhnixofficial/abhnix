import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import {
ArrowDown,
ArrowUpRight,
ExternalLink,

ShoppingBag,
ShoppingCart,
} from "lucide-react";

const projects = [
{
number: "01",
name: "KKCart",
category: "E-commerce / Grocery & Food Delivery",
description:
"A grocery and food delivery platform designed to make everyday shopping simple and convenient. The platform includes customer authentication, product browsing, cart management, checkout and order management.",
challenge:
"Create a convenient online shopping experience with separate customer and administrative workflows.",
solution:
"Developed a MERN stack application with product management, authentication, shopping cart functionality and order workflows.",
technologies: ["React.js", "Node.js", "Express.js", "MongoDB", "Tailwind CSS"],
status: "Completed",
image: "/images/kkcart.png",
link: "https://www.kkcart.store",
icon: ShoppingCart,
},
{
number: "02",
name: "ABRUPA",
category: "Fashion / E-commerce",
description:
"An online fashion shopping platform focused on presenting ethnic and contemporary clothing through a clean, user-friendly shopping experience.",
challenge:
"Build a fashion-focused online shopping experience with clear product presentation and responsive layouts.",
solution:
"Developing a modern storefront with responsive interfaces and API-based functionality.",
technologies: ["React.js", "JavaScript", "REST API", "Tailwind CSS"],
status: "In Development",
image: "/images/abrupa.png",
link: "https://abrupa.shop",
icon: ShoppingBag,
},
// {
// number: "03",
// name: "Silan Software",
// category: "Corporate / Business Website",
// description:
// "A corporate website presenting software development services, technology solutions, training programs and company information.",
// challenge:
// "Organize multiple business offerings into a clear and accessible digital presence.",
// solution:
// "Developed a responsive corporate website with structured pages, reusable components and modern interface design.",
// technologies: ["React.js", "TypeScript", "Tailwind CSS", "Framer Motion"],
// status: "Developed",
// image: "",
// link: "https://silansoftware.com",
// icon: Code2,
// },
];

const ProjectsPage = () => {
return (
<div className="overflow-hidden bg-white text-[#111111]">

  {/* HERO */}
  <section className="px-6 pb-24 pt-24 md:px-12 md:pb-32 md:pt-36 lg:px-20">
    <div className="mx-auto max-w-[1440px]">

      <motion.div
        initial={{ opacity: 0, y: 25 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
      >
        <div className="mb-10 flex items-center gap-3">
          <span className="h-px w-10 bg-black" />
          <span className="text-xs font-semibold uppercase tracking-[0.2em] text-neutral-500">
            Selected Work
          </span>
        </div>

        <h1 className="max-w-[1100px] text-[clamp(48px,8vw,110px)] font-semibold leading-[0.98] tracking-[-0.075em]">
          Ideas into
          <span className="block text-neutral-400">
            digital reality.
          </span>
        </h1>

        <div className="mt-12 flex flex-col justify-between gap-10 md:mt-20 md:flex-row md:items-end">
          <p className="max-w-[620px] text-base leading-8 text-neutral-500 md:text-lg">
            A selection of digital products and web experiences developed
            through thoughtful design, modern technology and practical
            problem-solving.
          </p>

          <span className="text-xs font-medium uppercase tracking-widest text-neutral-400">
            Development / Design / Technology
          </span>
        </div>
      </motion.div>

      <div className="mt-24 border-t border-neutral-200 pt-6">
        <div className="flex items-center justify-between">
          <span className="text-xs font-medium uppercase tracking-widest text-neutral-400">
            Project Showcase
          </span>
          <ArrowDown size={18} className="text-neutral-400" />
        </div>
      </div>
    </div>
  </section>

  {/* PROJECTS */}
  <section className="bg-[#F7F7F7] px-6 py-24 md:px-12 md:py-32 lg:px-20">
    <div className="mx-auto max-w-[1440px]">

      <div className="mb-16">
        <span className="text-xs font-semibold uppercase tracking-[0.2em] text-neutral-400">
           Our Work
        </span>

        <h2 className="mt-8 max-w-[800px] text-[clamp(38px,5vw,65px)] font-semibold leading-[1.08] tracking-[-0.06em]">
          Projects built with
          <span className="text-neutral-400"> purpose.</span>
        </h2>
      </div>

      <div className="space-y-24 md:space-y-32">
        {projects.map((project) => {
          const Icon = project.icon;

          return (
            <motion.article
              key={project.number}
              initial={{ opacity: 0, y: 35 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.15 }}
              transition={{ duration: 0.7 }}
              className="border-t border-neutral-300 pt-8"
            >

              {/* PROJECT HEADER */}
              <div className="mb-10 flex flex-wrap items-center justify-between gap-5">
                <div className="flex items-center gap-5">
                  <span className="text-sm text-neutral-400">
                    {project.number}
                  </span>

                  <span className="text-xs font-semibold uppercase tracking-widest text-neutral-500">
                    {project.category}
                  </span>
                </div>

                <span className="border border-neutral-300 px-4 py-2 text-[11px] font-semibold uppercase tracking-widest text-neutral-600">
                  {project.status}
                </span>
              </div>

              {/* PROJECT CONTENT */}
              <div className="grid gap-12 lg:grid-cols-[1.05fr_0.95fr] lg:gap-20">

                {/* PROJECT PREVIEW */}
                <div className="flex min-h-[280px] items-center justify-center overflow-hidden bg-white md:min-h-[430px]">
                  {project.image ? (
                    <img
                      src={project.image}
                      alt={`${project.name} project preview`}
                      className="h-full min-h-[280px] w-full object-contain transition-transform duration-700 hover:scale-[1.03] md:min-h-[430px]"
                    />
                  ) : (
                    <div className="flex flex-col items-center justify-center p-10 text-center">
                      <Icon size={48} strokeWidth={1} />
                      <span className="mt-7 text-3xl font-black tracking-[-0.06em]">
                        SILAN SOFTWARE
                      </span>
                      <span className="mt-3 text-xs uppercase tracking-[0.2em] text-neutral-400">
                        Corporate Website
                      </span>
                    </div>
                  )}
                </div>

                {/* PROJECT DETAILS */}
                <div className="flex flex-col justify-center">

                  <h3 className="text-[clamp(40px,5vw,65px)] font-semibold leading-none tracking-[-0.065em]">
                    {project.name}
                  </h3>

                  <p className="mt-7 text-base leading-8 text-neutral-500">
                    {project.description}
                  </p>

                  <div className="mt-10 grid gap-8 sm:grid-cols-2">
                    <div>
                      <span className="text-xs font-semibold uppercase tracking-widest text-neutral-400">
                        The Challenge
                      </span>

                      <p className="mt-4 text-sm leading-7 text-neutral-600">
                        {project.challenge}
                      </p>
                    </div>

                    <div>
                      <span className="text-xs font-semibold uppercase tracking-widest text-neutral-400">
                        The Solution
                      </span>

                      <p className="mt-4 text-sm leading-7 text-neutral-600">
                        {project.solution}
                      </p>
                    </div>
                  </div>

                  <div className="mt-10 border-t border-neutral-300 pt-7">
                    <span className="text-xs font-semibold uppercase tracking-widest text-neutral-400">
                      Technologies
                    </span>

                    <div className="mt-5 flex flex-wrap gap-2">
                      {project.technologies.map((technology) => (
                        <span
                          key={technology}
                          className="border border-neutral-300 bg-white px-3 py-2 text-xs text-neutral-600"
                        >
                          {technology}
                        </span>
                      ))}
                    </div>
                  </div>

                  {project.link && (
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group mt-10 flex w-fit items-center gap-5 border border-black bg-black px-6 py-4 text-sm font-bold text-white transition-all duration-300 hover:bg-white hover:text-black"
                    >
                      <span className="text-white transition-colors group-hover:text-black">
                        Visit Live Website
                      </span>

                      <ExternalLink
                        size={16}
                        className="text-white transition-colors group-hover:text-black"
                      />
                    </a>
                  )}

                </div>
              </div>
            </motion.article>
          );
        })}
      </div>
    </div>
  </section>

  {/* CTA */}
  <section className="px-6 py-24 md:px-12 md:py-32 lg:px-20">
    <div className="mx-auto max-w-[1440px]">

      <span className="text-xs font-semibold uppercase tracking-[0.2em] text-neutral-400">
        Your Project
      </span>

      <h2 className="mt-10 max-w-[1050px] text-[clamp(42px,7vw,90px)] font-semibold leading-[1.02] tracking-[-0.07em]">
        Your idea could be
        <span className="block text-neutral-400">
          our next project.
        </span>
      </h2>

      <Link
        to="/contact"
        className="group mt-12 flex w-fit items-center gap-8 border border-black bg-black px-7 py-4 text-sm font-bold text-white transition-all duration-300 hover:bg-white hover:text-black"
      >
        <span className="text-white transition-colors group-hover:text-black">
          Start a Project
        </span>

        <ArrowUpRight
          size={17}
          className="text-white transition-all duration-300 group-hover:text-black group-hover:translate-x-1 group-hover:-translate-y-1"
        />
      </Link>

    </div>
  </section>

</div>

);
};

export default ProjectsPage;