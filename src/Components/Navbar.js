import React from "react";
import { motion, AnimatePresence, useCycle, animate } from "framer-motion";

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
  return (
    <main>
      <AnimatePresence>
        // AnimatePresence-aniamtsiyalar hosil bo'lishi u/n masul tag
        {open && (
          <motion.aside
            // motion-orqali animatsiyalar harakatini nazorat qilish mumkin
            initial={{ width: 0 }}
            animate={{
              width: 230,
            }}
            exit={{
              width: 0,
              transition: { delay: 0.7, duration: 0.3 },
            }}
          >
            <motion.div
              className="container"
              initial="closed"
              variants={animProperties}
              animate="open"
              exit="closed"
            >
              {AnimLink.map(({ link, to, id }) => (
                <motion.a
                  key={id}
                  href={to}
                  whileHover={{ scale: 1.1 }}
                  variants={navbarSituation}
                >
                  {link}
                </motion.a>
              ))}
            </motion.div>
          </motion.aside>
        )}
      </AnimatePresence>
    </main>
  );
};

export default Navbar;
