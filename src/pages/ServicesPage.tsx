import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import {
ArrowDown,
ArrowUpRight,
Code2,
ShoppingCart,
Layers3,
Palette,
Check,
} from "lucide-react";

const services = [
{
number: "01",
title: "Website Development",
subtitle: "Digital experiences built to perform.",
description:
"We create modern, responsive and high-performance websites that help businesses establish a strong online presence and connect with their audience.",
icon: Code2,
deliverables: [
"Business & Corporate Websites",
"Landing Page Development",
"Portfolio & Personal Websites",
"Responsive Web Applications",
"Website Maintenance & Optimization",
],
},
{
number: "02",
title: "E-commerce Development",
subtitle: "Turn visitors into customers.",
description:
"We develop user-friendly e-commerce platforms that make online shopping simple, secure and convenient while supporting your business growth.",
icon: ShoppingCart,
deliverables: [
"Custom Online Stores",
"Product & Category Management",
"Shopping Cart & Checkout",
"Payment Gateway Integration",
"Order & Admin Management",
],
},
{
number: "03",
title: "Custom Software Development",
subtitle: "Technology designed around your needs.",
description:
"We build tailored software solutions that simplify business operations, improve workflows and solve specific challenges through technology.",
icon: Layers3,
deliverables: [
"Custom Web Applications",
"Admin & Management Dashboards",
"API Development & Integration",
"Database Design",
"Authentication & User Management",
],
},
{
number: "04",
title: "UI/UX Design",
subtitle: "Simple interfaces. Better experiences.",
description:
"We design intuitive digital experiences that balance visual clarity, usability and business objectives across desktop and mobile devices.",
icon: Palette,
deliverables: [
"Website Interface Design",
"Mobile-Friendly Layouts",
"User Experience Planning",
"Wireframes & Prototypes",
"Design Systems & Components",
],
},
];

const technologies = [
{
category: "Frontend",
tools: ["React.js", "TypeScript", "JavaScript", "Tailwind CSS"],
},
{
category: "Backend",
tools: ["Node.js", "Express.js", "REST APIs"],
},
{
category: "Database",
tools: ["MongoDB", "MongoDB Atlas"],
},
{
category: "Tools & Deployment",
tools: ["Git", "GitHub", "Vercel", "Render", "Postman"],
},
];

const ServicesPage = () => {
return ( <div className="overflow-hidden bg-white text-[#111111]">

```
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
            What We Do
          </span>
        </div>

        <h1 className="max-w-[1150px] text-[clamp(48px,8vw,110px)] font-semibold leading-[0.98] tracking-[-0.075em]">
          Digital services.
          <span className="block text-neutral-400">
            Real business value.
          </span>
        </h1>

        <div className="mt-12 flex flex-col justify-between gap-10 md:mt-20 md:flex-row md:items-end">
          <p className="max-w-[620px] text-base leading-8 text-neutral-500 md:text-lg">
            From building your first website to developing complex digital
            platforms, we provide technology solutions designed around
            your business goals.
          </p>

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
        </div>
      </motion.div>

      <div className="mt-24 border-t border-neutral-200 pt-6">
        <div className="flex items-center justify-between">
          <span className="text-xs font-medium uppercase tracking-widest text-neutral-400">
            Our Expertise
          </span>
          <ArrowDown size={18} className="text-neutral-400" />
        </div>
      </div>
    </div>
  </section>

  {/* SERVICES */}
  <section className="bg-[#F7F7F7] px-6 py-24 md:px-12 md:py-32 lg:px-20">
    <div className="mx-auto max-w-[1440px]">

      <div className="mb-16">
        <span className="text-xs font-semibold uppercase tracking-[0.2em] text-neutral-400">
          Our Services
        </span>

        <h2 className="mt-8 max-w-[800px] text-[clamp(38px,5vw,65px)] font-semibold leading-[1.08] tracking-[-0.06em]">
          Everything you need to
          <span className="text-neutral-400"> build digitally.</span>
        </h2>
      </div>

      <div className="border-t border-neutral-300">
        {services.map((service, index) => {
          const Icon = service.icon;

          return (
            <motion.div
              key={service.number}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.08 }}
              className="group grid gap-10 border-b border-neutral-300 py-12 md:py-16 lg:grid-cols-[0.65fr_1.35fr]"
            >
              <div>
                <div className="flex items-center justify-between lg:justify-start lg:gap-10">
                  <span className="text-sm font-medium text-neutral-400">
                    {service.number}
                  </span>

                  <Icon
                    size={26}
                    strokeWidth={1.5}
                    className="text-neutral-400 transition-colors duration-300 group-hover:text-black"
                  />
                </div>

                <h3 className="mt-9 text-3xl font-semibold tracking-[-0.04em] md:text-4xl">
                  {service.title}
                </h3>

                <p className="mt-3 text-sm text-neutral-500">
                  {service.subtitle}
                </p>
              </div>

              <div className="grid gap-10 md:grid-cols-2 md:gap-16">
                <p className="text-base leading-8 text-neutral-500">
                  {service.description}
                </p>

                <div>
                  <span className="text-xs font-semibold uppercase tracking-widest text-neutral-400">
                    What We Deliver
                  </span>

                  <ul className="mt-6 space-y-4">
                    {service.deliverables.map((item) => (
                      <li
                        key={item}
                        className="flex items-start gap-3 text-sm text-neutral-700"
                      >
                        <Check
                          size={16}
                          className="mt-0.5 shrink-0 text-black"
                        />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </motion.div>
          );
        })}
      </div>
    </div>
  </section>

  {/* TECHNOLOGY */}
  <section className="px-6 py-24 md:px-12 md:py-32 lg:px-20">
    <div className="mx-auto max-w-[1440px]">

      <div className="mb-16">
        <span className="text-xs font-semibold uppercase tracking-[0.2em] text-neutral-400">
          Technology
        </span>

        <h2 className="mt-8 max-w-[850px] text-[clamp(38px,5vw,65px)] font-semibold leading-[1.08] tracking-[-0.06em]">
          Built with modern
          <span className="text-neutral-400"> technology.</span>
        </h2>

        <p className="mt-7 max-w-[600px] text-base leading-8 text-neutral-500">
          We work with modern development technologies and tools to build
          responsive, maintainable and scalable digital products.
        </p>
      </div>

      <div className="border-t border-neutral-200">
        {technologies.map((item, index) => (
          <motion.div
            key={item.category}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.08 }}
            className="grid gap-5 border-b border-neutral-200 py-8 md:grid-cols-[0.6fr_1.4fr] md:items-center"
          >
            <h3 className="text-lg font-semibold">
              {item.category}
            </h3>

            <div className="flex flex-wrap gap-3">
              {item.tools.map((tool) => (
                <span
                  key={tool}
                  className="border border-neutral-200 px-5 py-3 text-sm text-neutral-600 transition-colors duration-300 hover:border-black hover:text-black"
                >
                  {tool}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  </section>

  {/* OUR APPROACH */}
  <section className="bg-[#111111] px-6 py-24 text-white md:px-12 md:py-32 lg:px-20">
    <div className="mx-auto grid max-w-[1440px] gap-16 lg:grid-cols-2 lg:gap-28">

      <div>
        <span className="text-xs font-semibold uppercase tracking-[0.2em] text-neutral-500">
          Our Approach
        </span>

        <h2 className="mt-8 text-[clamp(40px,6vw,75px)] font-semibold leading-[1.05] tracking-[-0.065em]">
          Good work starts
          <span className="block text-neutral-500">
            with understanding.
          </span>
        </h2>
      </div>

      <div className="flex flex-col justify-end">
        <p className="text-base leading-8 text-neutral-400 md:text-lg">
          Every business has different goals, challenges and expectations.
          That is why we focus on understanding your requirements before
          deciding how to build your solution.
        </p>

        <p className="mt-7 text-base leading-8 text-neutral-400 md:text-lg">
          Our process combines planning, thoughtful development, testing
          and communication to keep every project moving in the right
          direction.
        </p>

        <Link
          to="/contact"
          className="group mt-10 flex w-fit items-center gap-8 border border-white/30 bg-transparent px-7 py-4 text-sm font-bold text-white transition-all duration-300 hover:border-white hover:bg-white hover:text-black"
        >
          <span className="text-white transition-colors group-hover:text-black">
            Let's Work Together
          </span>

          <ArrowUpRight
            size={17}
            className="text-white transition-all duration-300 group-hover:text-black group-hover:translate-x-1 group-hover:-translate-y-1"
          />
        </Link>
      </div>
    </div>
  </section>

  {/* FINAL CTA */}
  <section className="px-6 py-24 md:px-12 md:py-32 lg:px-20">
    <div className="mx-auto max-w-[1440px]">

      <span className="text-xs font-semibold uppercase tracking-[0.2em] text-neutral-400">
        Start a Conversation
      </span>

      <h2 className="mt-10 max-w-[1050px] text-[clamp(42px,7vw,90px)] font-semibold leading-[1.02] tracking-[-0.07em]">
        Have a project?
        <span className="block text-neutral-400">
          Let's build it together.
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

export default ServicesPage;
