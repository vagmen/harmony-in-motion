"use client";
import { motion, AnimatePresence } from "framer-motion";
import styles from "./style.module.css";
import { usePathname } from "next/navigation";

const variants = {
  in: {
    opacity: 1,
    scale: 1,
    y: 0,
    transition: {
      duration: 0.75,
      //   delay: 0.5,
    },
  },
  out: {
    opacity: 0,
    scale: 1,
    y: 40,
    transition: {
      duration: 0.75,
    },
  },
};

const Transition = ({ children }: { children: any }) => {
  const pathName = usePathname();

  return (
    <div className={styles.effect1}>
      <AnimatePresence initial={false} mode="wait">
        <motion.div
          key={pathName}
          variants={variants}
          animate="in"
          initial="out"
          exit="out"
        >
          {children}
        </motion.div>
      </AnimatePresence>
    </div>
  );
};

export default Transition;
