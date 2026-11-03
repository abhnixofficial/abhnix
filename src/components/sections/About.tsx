import { motion } from "framer-motion";
import {
  ArrowUpRight,
  Code2,
  Lightbulb,
  Target,
} from "lucide-react";
import { Link } from "react-router-dom";

const values = [
  {
    number: "01",
    icon: Lightbulb,
    title: "Thoughtful Approach",
    description:
      "We understand your business goals before choosing the right technology and building a solution.",
  },
  {
    number: "02",
    icon: Code2,
    title: "Quality Engineering",
    description:
      "We focus on clean code, reliable architecture and modern technologies to build dependable products.",
  },
  {
    number: "03",
    icon: Target,
    title: "Business Focus",
    description:
      "Every digital solution is designed with usability, performance and long-term business needs in mind.",
  },
];

const About = () => {
  return (
    <section
      id="about"
      className="bg-[#f8f8f7] px-6 py-24 md:px-12 md:py-32 lg:px-20"
    >
      <div className="mx-auto max-w-[1440px]">

        {/* SECTION HEADER */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="mb-16 flex items-center gap-3"
        >
          <span className="h-[1px] w-10 bg-black" />

          <span className="text-xs font-semibold uppercase tracking-[0.2em] text-neutral-500">
            About ABHNIX
          </span>
        </motion.div>

        {/* MAIN CONTENT */}
        <div className="grid gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:gap-24">

          {/* LEFT */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.7 }}
          >
            <h2 className="max-w-[750px] text-[clamp(42px,6vw,76px)] font-semibold leading-[1.08] tracking-[-0.06em] text-[#111111]">
              Technology with a{" "}
              <span className="text-neutral-400">
                clear purpose.
              </span>
            </h2>

            <p className="mt-8 max-w-[560px] text-base leading-8 text-neutral-500 md:text-lg">
              ABHNIX is a software development company focused on
              creating modern websites, web applications and
              digital solutions for businesses.
            </p>

            <p className="mt-5 max-w-[560px] text-sm leading-8 text-neutral-500 md:text-base">
              We combine thoughtful design, modern engineering
              and a practical understanding of business needs
              to turn ideas into reliable digital products.
              Our focus is simple: build technology that works
              beautifully and delivers real value.
            </p>

            <Link
              to="/about"
              className="group mt-9 inline-flex items-center gap-4 border-b border-neutral-300 pb-3 text-sm font-semibold text-black transition-colors hover:border-black"
            >
              More About ABHNIX

              <ArrowUpRight
                size={17}
                className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
              />
            </Link>
          </motion.div>

          {/* RIGHT */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.7, delay: 0.15 }}
            className="flex flex-col justify-center"
          >
            <div className="border-l-2 border-black py-2 pl-7 md:pl-9">
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-neutral-400">
                Our Mission
              </p>

              <h3 className="mt-5 max-w-[480px] text-2xl font-medium leading-[1.4] tracking-[-0.035em] text-neutral-900 md:text-3xl">
                To make technology more useful, accessible and
                meaningful for businesses.
              </h3>
            </div>

            <div className="mt-14 grid grid-cols-2 gap-8 border-t border-neutral-200 pt-8">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.15em] text-neutral-400">
                  Our Focus
                </p>

                <p className="mt-3 text-base font-semibold text-neutral-900">
                  Digital Development
                </p>

                <p className="mt-2 text-sm leading-6 text-neutral-500">
                  Websites, applications and software solutions.
                </p>
              </div>

              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.15em] text-neutral-400">
                  Our Approach
                </p>

                <p className="mt-3 text-base font-semibold text-neutral-900">
                  Design & Engineering
                </p>

                <p className="mt-2 text-sm leading-6 text-neutral-500">
                  Combining usability with reliable technology.
                </p>
              </div>
            </div>
          </motion.div>
        </div>

        {/* CORE VALUES */}
        <div className="mt-24 border-t border-neutral-200 pt-10">
          <div className="mb-10 flex flex-wrap items-center justify-between gap-4">
            <h3 className="text-xs font-semibold uppercase tracking-[0.2em] text-neutral-400">
              What Defines Us
            </h3>

            <span className="text-xs text-neutral-400">
              Our Principles
            </span>
          </div>

          <div className="grid gap-10 md:grid-cols-3 md:gap-8">
            {values.map((value, index) => {
              const Icon = value.icon;

              return (
                <motion.div
                  key={value.number}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.3 }}
                  transition={{
                    duration: 0.5,
                    delay: index * 0.12,
                  }}
                  className="group"
                >
                  <div className="mb-7 flex items-center justify-between">
                    <span className="text-xs font-medium tracking-wider text-neutral-400">
                      {value.number}
                    </span>

                    <Icon
                      size={21}
                      strokeWidth={1.5}
                      className="text-neutral-400 transition-colors duration-300 group-hover:text-black"
                    />
                  </div>

                  <h4 className="text-xl font-semibold tracking-tight text-neutral-900">
                    {value.title}
                  </h4>

                  <p className="mt-4 max-w-[350px] text-sm leading-7 text-neutral-500">
                    {value.description}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
};

export default About;