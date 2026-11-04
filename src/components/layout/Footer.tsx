import { Link } from "react-router-dom";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import {
  faArrowUpRightFromSquare,
  faArrowUp,
} from "@fortawesome/free-solid-svg-icons";

import {
  faInstagram,
  faLinkedinIn,
  faGithub,
} from "@fortawesome/free-brands-svg-icons";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const footerLinks = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Services", path: "/services" },
    { name: "Projects", path: "/projects" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <footer className="bg-[#111111] text-white">
      <div className="mx-auto max-w-360 px-6 md:px-12 lg:px-20">

        {/* TOP CTA */}
        <div className="border-b border-white/15 py-20 md:py-28">
          <div className="flex flex-col justify-between gap-10 md:flex-row md:items-end">

            <div>
              <span className="text-xs font-semibold uppercase tracking-[0.2em] text-white/40">
                Have a project in mind?
              </span>

              <h2 className="mt-7 max-w-212.5 text-[clamp(42px,7vw,85px)] font-semibold leading-[1.02] tracking-[-0.07em]">
                Let's create
                <span className="block text-white/40">
                  something great.
                </span>
              </h2>
            </div>

            <Link
              to="/contact"
              className="group flex w-fit items-center gap-8 border border-white bg-white px-7 py-5 text-sm font-bold text-black transition-all duration-300 hover:bg-transparent hover:text-white"
            >
              <span className="text-black transition-colors group-hover:text-white">
                Start a Project
              </span>

              <FontAwesomeIcon
                icon={faArrowUpRightFromSquare}
                className="text-black transition-all duration-300 group-hover:translate-x-1 group-hover:-translate-y-1 group-hover:text-white"
              />
            </Link>

          </div>
        </div>

        {/* MAIN FOOTER */}
        <div className="grid gap-16 py-16 md:grid-cols-2 lg:grid-cols-[1.5fr_1fr_1fr] lg:gap-20">

          {/* BRAND */}
          <div>
            <Link
              to="/"
              className="inline-block text-3xl font-black tracking-[-0.08em]"
            >
              ABHNIX<span className="text-white/40">.</span>
            </Link>

            <p className="mt-7 max-w-87.5 text-sm leading-8 text-white/50">
              We build modern digital experiences and software solutions
              that help businesses move forward.
            </p>

            <p className="mt-8 text-xs font-medium uppercase tracking-[0.15em] text-white/70">
              Engineering Digital Excellence.
            </p>
          </div>

          {/* NAVIGATION */}
          <div>
            <h3 className="text-xs font-semibold uppercase tracking-[0.2em] text-white/40">
              Explore
            </h3>

            <div className="mt-8 flex flex-col items-start gap-5">
              {footerLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.path}
                  className="group flex items-center gap-2 text-sm text-white/70 transition-colors duration-300 hover:text-white"
                >
                  {link.name}

                  <FontAwesomeIcon
                    icon={faArrowUpRightFromSquare}
                    className="text-xs opacity-0 transition-all duration-300 group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:opacity-100"
                  />
                </Link>
              ))}
            </div>
          </div>

          {/* CONTACT */}
          <div>
            <h3 className="text-xs font-semibold uppercase tracking-[0.2em] text-white/40">
              Get in Touch
            </h3>

            <div className="mt-8 space-y-6">
              <div>
                <p className="text-xs text-white/40">Location</p>
                <p className="mt-2 text-sm text-white/80">
                  Odisha, India
                </p>
              </div>

              <div>
                <p className="text-xs text-white/40">Project Enquiries</p>
                <Link
                  to="/contact"
                  className="mt-2 inline-flex items-center gap-2 text-sm text-white/80 transition-colors hover:text-white"
                >
                  Let's talk
                  <FontAwesomeIcon icon={faArrowUpRightFromSquare} />
                </Link>
              </div>
            </div>

            {/* SOCIAL ICONS */}
            <div className="mt-9 flex items-center gap-3">

              <a
                href="https://www.linkedin.com/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="flex h-10 w-10 items-center justify-center border border-white/20 transition-all duration-300 hover:border-white hover:bg-white hover:text-black"
              >
                <FontAwesomeIcon icon={faLinkedinIn} />
              </a>

              <a
                href="https://www.instagram.com/abhnix.in/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="flex h-10 w-10 items-center justify-center border border-white/20 transition-all duration-300 hover:border-white hover:bg-white hover:text-black"
              >
                <FontAwesomeIcon icon={faInstagram} />
              </a>

              <a
                href="https://github.com/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
                className="flex h-10 w-10 items-center justify-center border border-white/20 transition-all duration-300 hover:border-white hover:bg-white hover:text-black"
              >
                <FontAwesomeIcon icon={faGithub} />
              </a>

            </div>
          </div>
        </div>

        {/* BOTTOM BAR */}
        <div className="flex flex-col justify-between gap-5 border-t border-white/15 py-7 md:flex-row md:items-center">

          <p className="text-xs text-white/40">
            © {currentYear} ABHNIX. All rights reserved.
          </p>

          <div className="flex flex-wrap items-center gap-6">
            <span className="text-xs text-white/40">
              Designed & Developed with Purpose.
            </span>

            <button
              onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
              className="group flex items-center gap-2 text-xs text-white/70 transition-colors hover:text-white"
            >
              Back to Top

              <FontAwesomeIcon
                icon={faArrowUp}
                className="transition-transform duration-300 group-hover:-translate-y-1"
              />
            </button>
          </div>

        </div>

      </div>
    </footer>
  );
};

export default Footer;