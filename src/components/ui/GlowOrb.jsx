import { motion } from "framer-motion";

export default function GlowOrb({ className = "" }) {
  return (
    <motion.div
      className={
        "pointer-events-none absolute rounded-full blur-3xl opacity-40 bg-purple-500 " +
        className
      }
      animate={{ scale: [1, 1.2, 1] }}
      transition={{ repeat: Infinity, duration: 6, ease: "easeInOut" }}
    />
  );
}
