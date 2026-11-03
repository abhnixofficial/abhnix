// import { useState } from "react";
// import { Link, NavLink } from "react-router-dom";
// import { ArrowUpRight, Menu, X } from "lucide-react";
// import { motion, AnimatePresence } from "framer-motion";

// const navigation = [
//   { name: "Home", href: "/" },
//   { name: "About", href: "/about" },
//   { name: "Services", href: "/services" },
//   { name: "Projects", href: "/projects" },
//   { name: "Contact", href: "/contact" },
// ];

// const Navbar = () => {
//   const [menuOpen, setMenuOpen] = useState(false);

//   return (
//     <header className="fixed left-0 right-0 top-0 z-50 h-[72px] border-b border-neutral-200 bg-white/90 backdrop-blur-xl md:h-[82px]">
//       <div className="mx-auto flex h-full max-w-[1600px] items-center justify-between px-6 md:px-12 lg:px-20">

//         {/* Logo */}
//         <Link
//           to="/"
//           onClick={() => setMenuOpen(false)}
//           className="group flex items-center gap-2"
//         >
//           <span className="text-[27px] font-black tracking-[-2px] text-black">
//             ABHNIX<span className="text-neutral-400">.</span>
//           </span>
//         </Link>

//         {/* Desktop Navigation */}
//         <nav className="hidden items-center gap-9 lg:flex">
//           {navigation.map((item) => (
//             <NavLink
//               key={item.name}
//               to={item.href}
//               className={({ isActive }) =>
//                 `relative text-[13px] font-medium transition-colors ${
//                   isActive
//                     ? "text-black"
//                     : "text-neutral-500 hover:text-black"
//                 }`
//               }
//             >
//               {({ isActive }) => (
//                 <>
//                   {item.name}
//                   {isActive && (
//                     <span className="absolute -bottom-2 left-0 h-[2px] w-full bg-black" />
//                   )}
//                 </>
//               )}
//             </NavLink>
//           ))}
//         </nav>

//         {/* Desktop CTA */}
//         <Link
//           to="/contact"
//           className="group hidden items-center gap-3 rounded-full bg-black px-6 py-3 text-xs font-medium text-white transition hover:bg-neutral-700 md:flex"
//         >
//           Let's Talk
//           <ArrowUpRight
//             size={15}
//             className="transition-transform group-hover:translate-x-1 group-hover:-translate-y-1"
//           />
//         </Link>

//         {/* Mobile Menu Button */}
//         <button
//           onClick={() => setMenuOpen(!menuOpen)}
//           className="flex h-10 w-10 items-center justify-center rounded-full border border-neutral-200 text-black lg:hidden"
//           aria-label={menuOpen ? "Close menu" : "Open menu"}
//           aria-expanded={menuOpen}
//         >
//           {menuOpen ? <X size={20} /> : <Menu size={20} />}
//         </button>
//       </div>

//       {/* Mobile Navigation */}
//       <AnimatePresence>
//         {menuOpen && (
//           <motion.div
//             initial={{ opacity: 0, y: -10 }}
//             animate={{ opacity: 1, y: 0 }}
//             exit={{ opacity: 0, y: -10 }}
//             transition={{ duration: 0.2 }}
//             className="absolute left-0 right-0 top-full border-b border-neutral-200 bg-white px-6 py-8 shadow-xl lg:hidden"
//           >
//             <nav className="flex flex-col">
//               {navigation.map((item, index) => (
//                 <motion.div
//                   key={item.name}
//                   initial={{ opacity: 0, x: -10 }}
//                   animate={{ opacity: 1, x: 0 }}
//                   transition={{ delay: index * 0.05 }}
//                 >
//                   <NavLink
//                     to={item.href}
//                     onClick={() => setMenuOpen(false)}
//                     className={({ isActive }) =>
//                       `block border-b border-neutral-100 py-4 text-lg font-medium ${
//                         isActive ? "text-black" : "text-neutral-400"
//                       }`
//                     }
//                   >
//                     {item.name}
//                   </NavLink>
//                 </motion.div>
//               ))}
//             </nav>

//             <Link
//               to="/contact"
//               onClick={() => setMenuOpen(false)}
//               className="mt-7 flex items-center justify-between rounded-full bg-black px-6 py-4 text-sm font-medium text-white"
//             >
//               Start a project
//               <ArrowUpRight size={18} />
//             </Link>
//           </motion.div>
//         )}
//       </AnimatePresence>
//     </header>
//   );
// };

// export default Navbar;

// import { useState } from "react";
// import { Link, NavLink } from "react-router-dom";
// import { ArrowUpRight, Menu, X } from "lucide-react";
// import { motion, AnimatePresence } from "framer-motion";

// const navigation = [
//   { name: "Home", href: "/" },
//   { name: "About", href: "/about" },
//   { name: "Services", href: "/services" },
//   { name: "Projects", href: "/projects" },
//   { name: "Contact", href: "/contact" },
// ];

// const Navbar = () => {
//   const [menuOpen, setMenuOpen] = useState(false);

//   return (
//     <header className="fixed left-0 right-0 top-0 z-50 h-[72px] border-b border-neutral-200 bg-white/90 backdrop-blur-xl md:h-[82px]">
//       <div className="mx-auto flex h-full max-w-[1600px] items-center justify-between px-6 md:px-12 lg:px-20">

//         {/* LOGO */}
//         <Link
//           to="/"
//           onClick={() => setMenuOpen(false)}
//           className="group flex items-center"
//         >
//           <span className="text-[27px] font-black tracking-[-2px] text-black">
//             ABHNIX<span className="text-neutral-400">.</span>
//           </span>
//         </Link>

//         {/* DESKTOP NAVIGATION */}
//         <nav className="hidden items-center gap-9 lg:flex">
//           {navigation.map((item) => (
//             <NavLink
//               key={item.name}
//               to={item.href}
//               className="group relative overflow-hidden py-2 text-[13px] font-medium"
//             >
//               {({ isActive }) => (
//                 <span className="block h-[20px] overflow-hidden">
//                   <span
//                     className={`flex flex-col transition-transform duration-500 ease-[cubic-bezier(0.76,0,0.24,1)] group-hover:-translate-y-1/2 ${
//                       isActive ? "text-black" : "text-neutral-500"
//                     }`}
//                   >
//                     {/* FIRST TEXT */}
//                     <span className="flex h-[20px] items-center whitespace-nowrap">
//                       {item.name}
//                     </span>

//                     {/* SECOND TEXT */}
//                     <span className="flex h-[20px] items-center whitespace-nowrap text-black">
//                       {item.name}
//                     </span>
//                   </span>
//                 </span>
//               )}
//             </NavLink>
//           ))}
//         </nav>

//         {/* DESKTOP CONTACT BUTTON */}
//         <Link
//           to="/contact"
//           className="group hidden items-center gap-3 rounded-full bg-black px-6 py-3 text-xs font-medium text-white transition-all duration-300 hover:bg-neutral-700 md:flex"
//         >
//           <span>Let's Talk</span>
//           <ArrowUpRight
//             size={15}
//             className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
//           />
//         </Link>

//         {/* MOBILE MENU BUTTON */}
//         <button
//           type="button"
//           onClick={() => setMenuOpen(!menuOpen)}
//           className="flex h-10 w-10 items-center justify-center rounded-full border border-neutral-200 text-black lg:hidden"
//           aria-label={menuOpen ? "Close menu" : "Open menu"}
//           aria-expanded={menuOpen}
//         >
//           {menuOpen ? <X size={20} /> : <Menu size={20} />}
//         </button>
//       </div>

//       {/* MOBILE MENU */}
//       <AnimatePresence>
//         {menuOpen && (
//           <motion.div
//             initial={{ opacity: 0, y: -15 }}
//             animate={{ opacity: 1, y: 0 }}
//             exit={{ opacity: 0, y: -15 }}
//             transition={{ duration: 0.25 }}
//             className="absolute left-0 right-0 top-full border-b border-neutral-200 bg-white px-6 py-8 shadow-xl lg:hidden"
//           >
//             <nav className="flex flex-col">
//               {navigation.map((item, index) => (
//                 <motion.div
//                   key={item.name}
//                   initial={{ opacity: 0, x: -15 }}
//                   animate={{ opacity: 1, x: 0 }}
//                   transition={{ delay: index * 0.06 }}
//                 >
//                   <NavLink
//                     to={item.href}
//                     onClick={() => setMenuOpen(false)}
//                     className={({ isActive }) =>
//                       `block border-b border-neutral-100 py-5 text-2xl font-semibold ${
//                         isActive ? "text-black" : "text-neutral-400"
//                       }`
//                     }
//                   >
//                     {item.name}
//                   </NavLink>
//                 </motion.div>
//               ))}
//             </nav>

//             <Link
//               to="/contact"
//               onClick={() => setMenuOpen(false)}
//               className="mt-8 flex items-center justify-between rounded-full bg-black px-6 py-4 text-sm font-medium text-white"
//             >
//               Start a project
//               <ArrowUpRight size={18} />
//             </Link>
//           </motion.div>
//         )}
//       </AnimatePresence>
//     </header>
//   );
// };

// export default Navbar;

import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { ArrowUpRight, Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const navigation = [
{ name: "Home", href: "/" },
{ name: "About", href: "/about" },
{ name: "Services", href: "/services" },
{ name: "Projects", href: "/projects" },
{ name: "Contact", href: "/contact" },
];

const Navbar = () => {
const [menuOpen, setMenuOpen] = useState(false);

return (
<header className="fixed left-0 right-0 top-0 z-50 h-[76px] border-b border-neutral-200 bg-white md:h-[86px]">
<div className="mx-auto flex h-full max-w-[1600px] items-center justify-between px-6 md:px-12 lg:px-20">

    {/* LOGO */}
    <Link
      to="/"
      onClick={() => setMenuOpen(false)}
      className="flex items-center"
    >
      <span className="text-[30px] font-black tracking-[-2px] text-black md:text-[34px]">
        ABHNIX<span className="text-neutral-400">.</span>
      </span>
    </Link>

    {/* DESKTOP NAVIGATION */}
    <nav className="hidden items-center gap-10 lg:flex">
      {navigation.map((item) => (
        <NavLink
          key={item.name}
          to={item.href}
          className="group relative overflow-hidden py-2 text-[15px] font-bold"
        >
          {({ isActive }) => (
            <span className="block h-[24px] overflow-hidden">
              <span
                className={`flex flex-col transition-transform duration-500 ease-[cubic-bezier(0.76,0,0.24,1)] group-hover:-translate-y-1/2 ${
                  isActive ? "text-black" : "text-neutral-600"
                }`}
              >
                <span className="flex h-[24px] items-center whitespace-nowrap">
                  {item.name}
                </span>

                <span className="flex h-[24px] items-center whitespace-nowrap text-black">
                  {item.name}
                </span>
              </span>
            </span>
          )}
        </NavLink>
      ))}
    </nav>

    {/* DESKTOP CONTACT BUTTON */}
 <Link
  to="/contact"
  className="group hidden items-center gap-3 rounded-full border-2 border-black bg-black px-7 py-3.5 text-sm font-bold !text-white transition-all duration-300 hover:!bg-white hover:!text-black lg:inline-flex"
>
  <span className="text-white transition-colors group-hover:!text-black">
    Let's Talk
  </span>

  <ArrowUpRight
    size={17}
    strokeWidth={2.5}
    className="text-white transition-all duration-300 group-hover:!text-black group-hover:translate-x-1 group-hover:-translate-y-1"
  />
</Link>

    {/* MOBILE MENU BUTTON */}
    <button
      type="button"
      onClick={() => setMenuOpen(!menuOpen)}
      className="flex h-11 w-11 items-center justify-center rounded-full border border-neutral-300 text-black transition hover:bg-black hover:text-white lg:hidden"
      aria-label={menuOpen ? "Close menu" : "Open menu"}
      aria-expanded={menuOpen}
    >
      {menuOpen ? <X size={21} /> : <Menu size={21} />}
    </button>
  </div>

  {/* MOBILE MENU */}
  <AnimatePresence>
    {menuOpen && (
      <motion.div
        initial={{ opacity: 0, y: -15 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -15 }}
        transition={{ duration: 0.25 }}
        className="absolute left-0 right-0 top-full border-b border-neutral-200 bg-white px-6 py-8 shadow-xl lg:hidden"
      >
        <nav className="flex flex-col">
          {navigation.map((item, index) => (
            <motion.div
              key={item.name}
              initial={{ opacity: 0, x: -15 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.06 }}
            >
              <NavLink
                to={item.href}
                onClick={() => setMenuOpen(false)}
                className={({ isActive }) =>
                  `block border-b border-neutral-100 py-5 text-[25px] font-bold ${
                    isActive ? "text-black" : "text-neutral-500"
                  }`
                }
              >
                {item.name}
              </NavLink>
            </motion.div>
          ))}
        </nav>

        <Link
          to="/contact"
          onClick={() => setMenuOpen(false)}
          className="mt-8 flex items-center justify-between rounded-full border-2 border-black bg-white px-6 py-4 text-sm font-bold text-black transition hover:bg-black hover:text-white"
        >
          Start a Project
          <ArrowUpRight size={19} strokeWidth={2.5} />
        </Link>
      </motion.div>
    )}
  </AnimatePresence>
</header>

);
};

export default Navbar;