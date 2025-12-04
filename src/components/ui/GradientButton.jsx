import { motion } from "framer-motion";

export default function GradientButton({ children, className = "", ...rest }) {
  return (
    <motion.button
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.97 }}
      className={
        "relative inline-flex items-center justify-center px-6 py-3 rounded-xl font-semibold bg-gradient-to-r from-purple-500 to-blue-500 hover:from-purple-600 hover:to-blue-600 text-white shadow-lg shadow-purple-500/30 " +
        className
      }
      {...rest}
    >
      {children}
    </motion.button>
  );
}
