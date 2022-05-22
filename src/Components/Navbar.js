import React from "react";
import { motion, AnimatePresence, useCycle } from "framer-motion";

const AnimLink = [
  // Linklar uchun array ichida object
  { link: "Home", to: "#", id: 1 },
  { link: "About", to: "#", id: 2 },
  { link: "Servisec", to: "#", id: 3 },
  { link: "Blog", to: "#", id: 4 },
  { link: "News", to: "#", id: 5 },
  { link: "Cotact", to: "#", id: 6 },
];

const navbarSituation = {
  closed: {
    opacity: 0,
  },
  open: {
    opacity: 1,
  },
};

const animProperties = {
  closed: {
    transition: {
      staggerChildren: 0.2, // Animatsiya davomiyligi
      staggerDirection: -1, // Animatsiya joylashuvi
    },
  },
  open: {
    transition: {
      staggerChildren: 0.2, // Animatsiya davomiyligi
      staggerDirection: 1, // Animatsiya joylashuvi
    },
  },
};

const Navbar = () => {
  const [open, cycleOpen] = useCycle(false, true);
  return <div>Navbar</div>;
};

export default Navbar;
