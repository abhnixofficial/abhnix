import { useEffect } from "react";
import { BrowserRouter, useLocation } from "react-router-dom";

import Navbar from "./components/layout/Navbar";
import Footer from "./components/layout/Footer";
import AppRoutes from "./routes/AppRoutes";
import SmoothScroll from "./components/common/SmoothScroll";

const SEO_DATA: Record<
  string,
  { title: string; description: string }
> = {
  "/": {
    title: "ABHNIX | Web Development & Digital Solutions",
    description:
      "ABHNIX builds modern websites, e-commerce platforms and custom software solutions to help businesses grow. Based in India, working with businesses worldwide.",
  },

  "/about": {
    title: "About ABHNIX | Our Approach to Digital Development",
    description:
      "Discover ABHNIX, a digital development company focused on building purposeful websites, software solutions and meaningful digital experiences.",
  },

  "/services": {
    title: "Web Development & Software Services | ABHNIX",
    description:
      "Explore ABHNIX services including website development, e-commerce development, custom software development and UI/UX design.",
  },

  "/projects": {
    title: "Our Projects | Web Development Portfolio | ABHNIX",
    description:
      "Explore ABHNIX projects, including e-commerce platforms, grocery delivery applications and corporate website development.",
  },

  "/contact": {
    title: "Contact ABHNIX | Start Your Digital Project",
    description:
      "Contact ABHNIX to discuss your website, e-commerce or custom software development project. Let's build something meaningful.",
  },
};

const SEOManager = () => {
  const location = useLocation();

  useEffect(() => {
    const page = SEO_DATA[location.pathname] || SEO_DATA["/"];

    const fullUrl = `https://abhnix.com${location.pathname}`;

    document.title = page.title;

    const setMeta = (
      attribute: string,
      key: string,
      content: string
    ) => {
      let element = document.querySelector(
        `meta[${attribute}="${key}"]`
      ) as HTMLMetaElement | null;

      if (!element) {
        element = document.createElement("meta");
        element.setAttribute(attribute, key);
        document.head.appendChild(element);
      }

      element.content = content;
    };

    setMeta("name", "description", page.description);
    setMeta("name", "robots", "index, follow");
    setMeta("property", "og:title", page.title);
    setMeta("property", "og:description", page.description);
    setMeta("property", "og:url", fullUrl);
    setMeta("property", "og:type", "website");
    setMeta("property", "og:site_name", "ABHNIX");
    setMeta("name", "twitter:card", "summary");
    setMeta("name", "twitter:title", page.title);
    setMeta("name", "twitter:description", page.description);

    let canonical = document.querySelector(
      'link[rel="canonical"]'
    ) as HTMLLinkElement | null;

    if (!canonical) {
      canonical = document.createElement("link");
      canonical.rel = "canonical";
      document.head.appendChild(canonical);
    }

    canonical.href = fullUrl;
  }, [location.pathname]);

  return null;
};

function App() {
  return (
    <BrowserRouter>
      <SEOManager />
      <SmoothScroll />

      <Navbar />

      <main className="pt-[76px] md:pt-[86px]">
        <AppRoutes />
      </main>

      <Footer />
    </BrowserRouter>
  );
}

export default App;