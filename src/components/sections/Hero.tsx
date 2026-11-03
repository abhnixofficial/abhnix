// import { motion } from "framer-motion";
// import { ArrowDown, ArrowUpRight } from "lucide-react";

// const Hero = () => {
//   return (
//     <section className="relative flex min-h-[90vh] items-center overflow-hidden bg-white px-6 py-24 md:px-12 lg:px-20">
//       <div className="mx-auto w-full max-w-7xl">
//         <motion.div
//           initial={{ opacity: 0, y: 35 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.8 }}
//         >
//           <p className="mb-8 text-xs font-semibold uppercase tracking-[0.3em] text-neutral-500">
//             Independent Digital Agency · Available Worldwide
//           </p>

//           <h1 className="max-w-5xl text-5xl font-semibold leading-[1.08] tracking-[-0.06em] text-black sm:text-6xl md:text-8xl lg:text-[105px]">
//             We build
//             <br />
//             digital <span className="text-neutral-400">possibilities.</span>
//           </h1>

//           <div className="mt-10 flex flex-col justify-between gap-8 md:flex-row md:items-end">
//             <p className="max-w-lg text-base leading-8 text-neutral-500 md:text-lg">
//               We design and develop powerful digital experiences that help
//               ambitious businesses grow, connect, and move forward.
//             </p>

//             <a
//               href="/contact"
//               className="group inline-flex w-fit items-center gap-4 rounded-full bg-black px-7 py-4 text-sm font-medium text-white transition hover:bg-neutral-700"
//             >
//               Start a project
//               <ArrowUpRight
//                 size={18}
//                 className="transition-transform group-hover:translate-x-1 group-hover:-translate-y-1"
//               />
//             </a>
//           </div>
//         </motion.div>

//         <div className="mt-24 flex items-center justify-between border-t border-neutral-200 pt-6">
//           <span className="text-xs uppercase tracking-widest text-neutral-400">
//             ABHNIX — Engineering Digital Excellence
//           </span>
//           <a
//             href="#about"
//             className="flex items-center gap-2 text-xs uppercase tracking-widest text-neutral-500 hover:text-black"
//           >
//             Scroll to explore <ArrowDown size={14} />
//           </a>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Hero;


// import { motion } from "framer-motion";
// import {
//   ArrowRight,
//   ArrowUpRight,
//   Code2,
//   Layers3,
//   ShoppingCart,
//   Monitor,
//   Check,
// } from "lucide-react";
// import { Link } from "react-router-dom";

// const services = [
//   { name: "Website Development", icon: Monitor },
//   { name: "E-commerce Solutions", icon: ShoppingCart },
//   { name: "Custom Web Applications", icon: Code2 },
//   { name: "UI/UX Design", icon: Layers3 },
// ];

// const Hero = () => {
//   return (
//     <section className="relative overflow-hidden bg-white px-6 pb-16 pt-6 md:px-12 md:pb-20 md:pt-8 lg:px-20">
//       <div className="mx-auto max-w-[1440px]">

//         {/* TOP LABEL */}
//         <motion.div
//           initial={{ opacity: 0, y: 15 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.6 }}
//           className="mb-12 flex flex-wrap items-center gap-3"
//         >
//           {/* <span className="h-[1px] w-10 bg-black" />
//           <span className="text-[11px] font-semibold uppercase tracking-[0.22em] text-neutral-500">
//             ABHNIX — Digital Engineering Company
//           </span> */}
//         </motion.div>

//         {/* MAIN GRID */}
//         <div className="grid items-center gap-16 lg:grid-cols-[1.1fr_0.9fr] lg:gap-12">

//           {/* LEFT CONTENT */}
//           <div>
//             <motion.h1
//               initial={{ opacity: 0, y: 35 }}
//               animate={{ opacity: 1, y: 0 }}
//               transition={{ duration: 0.8 }}
//               className="max-w-[850px] text-[clamp(48px,7vw,96px)] font-semibold leading-[1.04] tracking-[-0.065em] text-[#111111]"
//             >
//               We build digital solutions that{" "}
//               <span className="text-neutral-400">
//                 move businesses forward.
//               </span>
//             </motion.h1>

//             <motion.p
//               initial={{ opacity: 0, y: 20 }}
//               animate={{ opacity: 1, y: 0 }}
//               transition={{ delay: 0.2, duration: 0.7 }}
//               className="mt-8 max-w-[540px] text-base leading-8 text-neutral-500 md:text-lg"
//             >
//               ABHNIX helps businesses turn ideas into powerful digital
//               experiences through strategic design, modern web development
//               and scalable technology solutions.
//             </motion.p>

//             {/* BUTTONS */}
//             <motion.div
//               initial={{ opacity: 0, y: 20 }}
//               animate={{ opacity: 1, y: 0 }}
//               transition={{ delay: 0.35, duration: 0.7 }}
//               className="mt-10 flex flex-wrap items-center gap-4"
//             >
//               <Link
//                 to="/contact"
//                 className="group flex items-center gap-8 bg-black px-7 py-4 text-sm font-medium text-white transition-all duration-300 hover:bg-neutral-800"
//               >
//                 Let's Discuss Your Project

//                 <ArrowUpRight
//                   size={17}
//                   className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
//                 />
//               </Link>

//               <Link
//                 to="/projects"
//                 className="group flex items-center gap-3 border border-neutral-300 px-7 py-4 text-sm font-medium text-black transition-all duration-300 hover:border-black"
//               >
//                 Explore Our Work

//                 <ArrowRight
//                   size={16}
//                   className="transition-transform duration-300 group-hover:translate-x-1"
//                 />
//               </Link>
//             </motion.div>

//             {/* TRUST INFORMATION */}
//             <motion.div
//               initial={{ opacity: 0 }}
//               animate={{ opacity: 1 }}
//               transition={{ delay: 0.6, duration: 0.8 }}
//               className="mt-14 flex flex-wrap items-center gap-x-8 gap-y-4 border-t border-neutral-200 pt-7"
//             >
//               <div className="flex items-center gap-2 text-xs text-neutral-500">
//                 <Check size={15} className="text-black" />
//                 Modern Technology
//               </div>

//               <div className="flex items-center gap-2 text-xs text-neutral-500">
//                 <Check size={15} className="text-black" />
//                 Business-Focused Solutions
//               </div>

//               <div className="flex items-center gap-2 text-xs text-neutral-500">
//                 <Check size={15} className="text-black" />
//                 Worldwide Collaboration
//               </div>
//             </motion.div>
//           </div>

//           {/* RIGHT VISUAL */}
//           <motion.div
//             initial={{ opacity: 0, x: 35 }}
//             animate={{ opacity: 1, x: 0 }}
//             transition={{ duration: 0.9, delay: 0.2 }}
//             className="relative mx-auto w-full max-w-[570px]"
//           >
//             {/* MAIN PRODUCT CARD */}
//             <div className="relative overflow-hidden border border-neutral-200 bg-[#f7f7f5] p-4 shadow-[0_25px_80px_rgba(0,0,0,0.07)] sm:p-7">

//               {/* BROWSER HEADER */}
//               <div className="flex items-center justify-between border-b border-neutral-200 pb-5">
//                 <div className="flex items-center gap-2">
//                   <span className="h-2.5 w-2.5 rounded-full bg-neutral-300" />
//                   <span className="h-2.5 w-2.5 rounded-full bg-neutral-300" />
//                   <span className="h-2.5 w-2.5 rounded-full bg-neutral-300" />
//                 </div>

//                 <span className="text-[10px] tracking-[0.15em] text-neutral-400">
//                   DIGITAL EXPERIENCE / 001
//                 </span>

//                 <ArrowUpRight size={16} className="text-neutral-500" />
//               </div>

//               {/* MOCK WEBSITE */}
//               <div className="mt-6 bg-white p-5 sm:p-8">
//                 <div className="flex items-center justify-between">
//                   <span className="text-lg font-bold tracking-[-1px]">
//                     BRAND<span className="text-neutral-400">.</span>
//                   </span>

//                   <div className="hidden gap-5 sm:flex">
//                     <span className="text-[9px] text-neutral-400">ABOUT</span>
//                     <span className="text-[9px] text-neutral-400">SERVICES</span>
//                     <span className="text-[9px] text-neutral-400">CONTACT</span>
//                   </div>
//                 </div>

//                 <div className="mt-12">
//                   <span className="text-[9px] font-semibold uppercase tracking-[0.2em] text-neutral-400">
//                     Designed for what's next
//                   </span>

//                   <h2 className="mt-4 max-w-[320px] text-4xl font-semibold leading-[1.05] tracking-[-0.06em] text-black sm:text-5xl">
//                     Ideas into
//                     <br />
//                     digital impact.
//                   </h2>

//                   <p className="mt-5 max-w-[280px] text-xs leading-6 text-neutral-400">
//                     Building meaningful experiences through design
//                     and technology.
//                   </p>

//                   <div className="mt-7 flex w-fit items-center gap-5 bg-black px-5 py-3 text-[10px] text-white">
//                     Discover More
//                     <ArrowUpRight size={13} />
//                   </div>
//                 </div>

//                 {/* BOTTOM VISUAL BLOCKS */}
//                 <div className="mt-12 grid grid-cols-3 gap-2">
//                   <div className="h-20 bg-[#171717] p-3 sm:h-24">
//                     <Monitor size={17} className="text-white" />
//                     <span className="mt-5 block text-[8px] uppercase tracking-wider text-white/50">
//                       Design
//                     </span>
//                   </div>

//                   <div className="h-20 bg-[#dededb] p-3 sm:h-24">
//                     <Code2 size={17} className="text-black" />
//                     <span className="mt-5 block text-[8px] uppercase tracking-wider text-neutral-500">
//                       Develop
//                     </span>
//                   </div>

//                   <div className="h-20 bg-[#eeeeeb] p-3 sm:h-24">
//                     <Layers3 size={17} className="text-black" />
//                     <span className="mt-5 block text-[8px] uppercase tracking-wider text-neutral-500">
//                       Deliver
//                     </span>
//                   </div>
//                 </div>
//               </div>

//               {/* BOTTOM LABEL */}
//               <div className="flex items-center justify-between pt-5">
//                 <span className="text-[9px] uppercase tracking-[0.2em] text-neutral-400">
//                   Concept / Digital Solutions
//                 </span>

//                 <span className="text-[9px] font-semibold tracking-wider text-black">
//                   ABHNIX®
//                 </span>
//               </div>
//             </div>

//             {/* FLOATING BADGE */}
//             <div className="absolute -bottom-6 -left-4 flex items-center gap-3 border border-neutral-200 bg-white px-5 py-4 shadow-lg sm:-left-8">
//               <div className="flex h-10 w-10 items-center justify-center bg-black text-white">
//                 <Code2 size={19} />
//               </div>

//               <div>
//                 <p className="text-xs font-semibold text-black">
//                   Technology meets creativity
//                 </p>
//                 <p className="mt-1 text-[10px] text-neutral-400">
//                   Built with purpose
//                 </p>
//               </div>
//             </div>
//           </motion.div>
//         </div>

//         {/* SERVICES STRIP */}
//         <div className="mt-24 border-t border-neutral-200 pt-8">
//           <div className="mb-7 flex flex-wrap items-center justify-between gap-3">
//             <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-neutral-400">
//               What we do
//             </p>

//             <p className="text-[10px] uppercase tracking-[0.15em] text-neutral-400">
//               Digital solutions for modern businesses
//             </p>
//           </div>

//           <div className="grid grid-cols-2 gap-y-7 md:grid-cols-4">
//             {services.map((service, index) => {
//               const Icon = service.icon;

//               return (
//                 <motion.div
//                   key={service.name}
//                   initial={{ opacity: 0, y: 15 }}
//                   animate={{ opacity: 1, y: 0 }}
//                   transition={{ delay: 0.7 + index * 0.1 }}
//                   className="flex items-center gap-3"
//                 >
//                   <Icon size={17} className="text-neutral-400" />

//                   <span className="text-xs font-medium text-neutral-700">
//                     {service.name}
//                   </span>
//                 </motion.div>
//               );
//             })}
//           </div>
//         </div>

//       </div>
//     </section>
//   );
// };

// export default Hero;


import { motion } from "framer-motion";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <section className="bg-white px-6 pb-20 pt-10 md:px-12 md:pb-24 md:pt-14 lg:px-20">
      <div className="mx-auto max-w-[1440px]">

        {/* Company Label */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="mb-10 flex items-center gap-3"
        >
          {/* <span className="h-2 w-2 rounded-full bg-green-600" />
          <span className="text-xs font-medium uppercase tracking-[0.18em] text-neutral-500">
            ABHNIX — Software Development Company
          </span> */}
        </motion.div>

        {/* Main Heading */}
        <motion.h1
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="max-w-[1100px] text-[clamp(48px,8vw,112px)] font-semibold leading-[1.04] tracking-[-0.065em] text-[#111111]"
        >
          We build digital
          <br />
          solutions that{" "}
          <span className="text-neutral-400">
            drive growth.
          </span>
        </motion.h1>

        {/* Description */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="mt-8 max-w-[650px]"
        >
          <p className="text-base leading-8 text-neutral-500 md:text-lg">
            We help businesses transform ideas into reliable digital
            products through modern web development, custom software
            solutions and thoughtful user experiences.
          </p>
        </motion.div>

        {/* CTA */}
        {/* <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.35, duration: 0.6 }}
          className="mt-9 flex flex-wrap items-center gap-4"
        >
          <Link
            to="/contact"
           className="group flex items-center gap-8 border border-neutral-300 bg-white px-7 py-4 text-sm font-medium text-black transition-all duration-300 hover:border-black hover:bg-neutral-50"
          >
            Start a Project
            <ArrowUpRight
              size={17}
              className="transition-transform group-hover:translate-x-1 group-hover:-translate-y-1"
            />
          </Link>

          <Link
            to="/projects"
            className="group flex items-center gap-3 border border-neutral-300 px-7 py-4 text-sm font-medium text-black transition hover:border-black"
          >
            View Our Work
            <ArrowRight
              size={16}
              className="transition-transform group-hover:translate-x-1"
            />
          </Link>
        </motion.div>

       
        <div className="mt-20 border-t border-neutral-200 pt-7">
          <p className="mb-5 text-xs font-semibold uppercase tracking-[0.18em] text-neutral-400">
            Our Expertise
          </p>

          <div className="flex flex-wrap gap-x-10 gap-y-4 text-sm font-medium text-neutral-700 md:text-base">
            <span>Web Development</span>
            <span>E-commerce Development</span>
            <span>Custom Software</span>
            <span>UI/UX Design</span>
          </div>
        </div> */}
        {/* HERO BOTTOM - CTA + EXPERTISE */}
<motion.div
  initial={{ opacity: 0, y: 20 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ delay: 0.4, duration: 0.6 }}
  className=" grid grid-cols-1 items-end gap-10 lg:grid-cols-[1fr_1fr]"
>
  {/* LEFT - CALL TO ACTION */}
  <div className="flex flex-wrap items-center gap-6">
  <Link
  to="/contact"
  className="group flex items-center gap-8 border border-black bg-black px-7 py-4 text-sm font-bold text-white transition-all duration-300 hover:bg-white hover:text-black"
>
  <span className="text-white transition-colors group-hover:text-black">
    Start a Project
  </span>

  <ArrowUpRight
    size={17}
    className="text-white transition-all duration-300 group-hover:text-black group-hover:translate-x-1 group-hover:-translate-y-1"
  />
</Link>

    <Link
      to="/projects"
      className="group flex items-center gap-3 text-sm font-medium text-neutral-600 transition hover:text-black"
    >
      View Our Work

      <ArrowRight
        size={16}
        className="transition-transform duration-300 group-hover:translate-x-1"
      />
    </Link>
  </div>

  {/* RIGHT - EXPERTISE */}
  <div className="lg:ml-auto lg:w-full lg:max-w-[520px]">
    <div className="mb-5 flex items-center justify-between">
      <p className="text-xs font-semibold uppercase tracking-[0.18em] text-neutral-400">
        Our Expertise
      </p>

      <span className="text-[10px] tracking-wider text-neutral-400">
        WHAT WE BUILD
      </span>
    </div>

    <div className="grid grid-cols-2 gap-x-8 gap-y-5">
      {[
        "Web Development",
        "E-commerce Development",
        "Custom Software",
        "UI/UX Design",
      ].map((service, index) => (
        <div
          key={service}
          className="group flex items-center gap-3"
        >
          <span className="text-[10px] font-medium text-neutral-400">
            0{index + 1}
          </span>

          <span className="text-sm font-medium text-neutral-700 transition-colors duration-300 group-hover:text-black">
            {service}
          </span>
        </div>
      ))}
    </div>
  </div>
</motion.div>

      </div>
    </section>
  );
};

export default Hero;