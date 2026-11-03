import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import {
  ArrowDown,
  ArrowUpRight,
  Target,
  Lightbulb,
  ShieldCheck,
  Code2,
} from "lucide-react";

const values = [
  {
    number: "01",
    title: "Purpose First",
    description:
      "Every successful digital product starts with understanding the problem. We focus on solutions that serve a real business purpose.",
    icon: Target,
  },
  {
    number: "02",
    title: "Think Different",
    description:
      "We approach every project with fresh thinking, thoughtful design and a commitment to finding better ways to solve problems.",
    icon: Lightbulb,
  },
  {
    number: "03",
    title: "Quality Matters",
    description:
      "From the first line of code to the final delivery, we believe in clean development, attention to detail and reliable results.",
    icon: ShieldCheck,
  },
  {
    number: "04",
    title: "Built for Growth",
    description:
      "We build digital experiences with scalability, performance and the future needs of businesses in mind.",
    icon: Code2,
  },
];

const AboutPage = () => {
  return (
    <div className="overflow-hidden bg-white text-[#111111]">

      {/* HERO */}
      <section className="px-6 pb-24 pt-24 md:px-12 md:pb-32 md:pt-36 lg:px-20">
        <div className="mx-auto max-w-[1440px]">

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            <div className="mb-10 flex items-center gap-3">
              <span className="h-px w-10 bg-black" />
              <span className="text-xs font-semibold uppercase tracking-[0.2em] text-neutral-500">
                About ABHNIX
              </span>
            </div>

            <h1 className="max-w-[1150px] text-[clamp(45px,8vw,110px)] font-semibold leading-[0.98] tracking-[-0.075em]">
              We turn ideas into
              <span className="block text-neutral-400">
                digital experiences.
              </span>
            </h1>

            <div className="mt-12 flex flex-col justify-between gap-10 md:mt-20 md:flex-row md:items-end">
              <p className="max-w-[620px] text-base leading-8 text-neutral-500 md:text-lg">
                ABHNIX is a digital development company focused on creating
                modern websites, powerful e-commerce platforms and custom
                software solutions that help businesses move forward.
              </p>

              <Link
                to="/contact"
                className="group flex w-fit items-center gap-8 border border-black bg-black px-7 py-4 text-sm font-bold text-white transition-all duration-300 hover:bg-white hover:text-black"
              >
                <span className="text-white transition-colors group-hover:text-black">
                  Work With Us
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
                Our Perspective
              </span>

              <ArrowDown size={18} className="text-neutral-400" />
            </div>
          </div>
        </div>
      </section>

      {/* WHO WE ARE */}
      <section className="bg-[#F7F7F7] px-6 py-24 md:px-12 md:py-32 lg:px-20">
        <div className="mx-auto grid max-w-[1440px] gap-16 lg:grid-cols-2 lg:gap-28">

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <span className="text-xs font-semibold uppercase tracking-[0.2em] text-neutral-400">
               Who We Are
            </span>

            <h2 className="mt-8 text-[clamp(38px,5vw,65px)] font-semibold leading-[1.08] tracking-[-0.06em]">
              Technology should make business better.
            </h2>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.15 }}
            className="flex flex-col justify-end"
          >
            <p className="text-base leading-8 text-neutral-500 md:text-lg">
              At ABHNIX, we believe technology is more than just writing code.
              It is about understanding business challenges and transforming
              ideas into practical digital solutions.
            </p>

            <p className="mt-7 text-base leading-8 text-neutral-500 md:text-lg">
              Our focus is on combining development, design and technology to
              create digital products that are functional, reliable and
              built with purpose.
            </p>

            <p className="mt-7 text-base leading-8 text-neutral-500 md:text-lg">
              From business websites to custom digital platforms, we aim to
              deliver solutions that create meaningful value.
            </p>
          </motion.div>
        </div>
      </section>

      {/* MISSION & VISION */}
      <section className="px-6 py-24 md:px-12 md:py-32 lg:px-20">
        <div className="mx-auto max-w-[1440px]">

          <div className="mb-16">
            <span className="text-xs font-semibold uppercase tracking-[0.2em] text-neutral-400">
              What Drives Us
            </span>

            <h2 className="mt-7 max-w-[750px] text-[clamp(38px,5vw,65px)] font-semibold leading-[1.08] tracking-[-0.06em]">
              A clear direction.
              <span className="text-neutral-400"> A meaningful impact.</span>
            </h2>
          </div>

          <div className="grid border-t border-neutral-200 md:grid-cols-2">

            <motion.div
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="border-b border-neutral-200 py-12 md:border-b-0 md:border-r md:pr-16 md:py-16"
            >
              <span className="text-xs font-semibold uppercase tracking-widest text-neutral-400">
                Our Mission
              </span>

              <h3 className="mt-7 text-3xl font-semibold tracking-tight">
                Build with purpose.
              </h3>

              <p className="mt-6 max-w-[480px] text-base leading-8 text-neutral-500">
                To help businesses turn their ideas into impactful digital
                experiences through thoughtful design, modern technology
                and quality development.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.15 }}
              className="py-12 md:pl-16 md:py-16"
            >
              <span className="text-xs font-semibold uppercase tracking-widest text-neutral-400">
                Our Vision
              </span>

              <h3 className="mt-7 text-3xl font-semibold tracking-tight">
                Create what matters.
              </h3>

              <p className="mt-6 max-w-[480px] text-base leading-8 text-neutral-500">
                To become a trusted digital technology partner for businesses
                worldwide by delivering innovative, scalable and meaningful
                digital solutions.
              </p>
            </motion.div>

          </div>
        </div>
      </section>

      {/* VALUES */}
      <section className="bg-[#111111] px-6 py-24 text-white md:px-12 md:py-32 lg:px-20">
        <div className="mx-auto max-w-[1440px]">

          <div className="mb-20">
            <span className="text-xs font-semibold uppercase tracking-[0.2em] text-neutral-500">
              Our Values
            </span>

            <h2 className="mt-8 max-w-[850px] text-[clamp(40px,6vw,76px)] font-semibold leading-[1.05] tracking-[-0.065em]">
              Principles behind
              <span className="block text-neutral-500">
                everything we build.
              </span>
            </h2>
          </div>

          <div className="grid border-t border-white/15 sm:grid-cols-2">

            {values.map((value, index) => {
              const Icon = value.icon;

              return (
                <motion.div
                  key={value.number}
                  initial={{ opacity: 0, y: 25 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.08 }}
                  className={`group border-b border-white/15 py-12 md:py-16 ${
                    index % 2 === 0
                      ? "sm:border-r sm:border-white/15 sm:pr-12"
                      : "sm:pl-12"
                  }`}
                >
                  <div className="flex items-center justify-between">
                    <span className="text-xs text-neutral-500">
                      {value.number}
                    </span>

                    <Icon
                      size={22}
                      strokeWidth={1.5}
                      className="text-neutral-500 transition-colors duration-300 group-hover:text-white"
                    />
                  </div>

                  <h3 className="mt-10 text-2xl font-semibold tracking-tight md:text-3xl">
                    {value.title}
                  </h3>

                  <p className="mt-5 max-w-[450px] text-sm leading-8 text-neutral-400 md:text-base">
                    {value.description}
                  </p>
                </motion.div>
              );
            })}

          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="px-6 py-24 md:px-12 md:py-32 lg:px-20">
        <div className="mx-auto max-w-[1440px]">

          <span className="text-xs font-semibold uppercase tracking-[0.2em] text-neutral-400">
            Let's Build Something
          </span>

          <h2 className="mt-10 max-w-[1050px] text-[clamp(42px,7vw,90px)] font-semibold leading-[1.02] tracking-[-0.07em]">
            Have an idea?
            <span className="block text-neutral-400">
              Let's make it happen.
            </span>
          </h2>

          <div className="mt-12">
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

        </div>
      </section>

    </div>
  );
};

export default AboutPage;