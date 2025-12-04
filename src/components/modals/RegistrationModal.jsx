import React from "react";
import { motion } from "framer-motion";
import GradientButton from "../ui/GradientButton";

export default function RegistrationModal({
  open,
  onClose,
  selectedProblem,
  onSubmit,
}) {
  const [formData, setFormData] = React.useState({
    name: "",
    email: "",
    team: "",
  });

  React.useEffect(() => {
    if (open) {
      setFormData({ name: "", email: "", team: "" });
    }
  }, [open]);

  if (!open || !selectedProblem) return null;

  const handleSubmit = () => {
    if (!formData.name || !formData.email || !formData.team) {
      alert("Please fill all fields.");
      return;
    }
    onSubmit(formData);
  };

  return (
    <div className="fixed inset-0 bg-black/70 z-50 flex items-center justify-center px-4">
      <motion.div
        className="bg-gradient-to-br from-purple-900 to-blue-900 rounded-2xl p-6 w-full max-w-md border border-purple-400/50 shadow-xl"
        initial={{ opacity: 0, scale: 0.9, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
      >
        <h3 className="text-2xl font-bold text-white mb-2">
          Register for Problem #{selectedProblem.id}
        </h3>
        <p className="text-white/80 text-sm mb-4">{selectedProblem.title}</p>

        <div className="space-y-3">
          <input
            type="text"
            placeholder="Your Name"
            className="w-full px-4 py-2 rounded-lg bg-white/10 border borderWhite/30 text-white placeholder-white/50 text-sm"
            value={formData.name}
            onChange={(e) =>
              setFormData((f) => ({ ...f, name: e.target.value }))
            }
          />
          <input
            type="email"
            placeholder="Your Email"
            className="w-full px-4 py-2 rounded-lg bg-white/10 border borderWhite/30 text-white placeholder-white/50 text-sm"
            value={formData.email}
            onChange={(e) =>
              setFormData((f) => ({ ...f, email: e.target.value }))
            }
          />
          <input
            type="text"
            placeholder="Team Name (Individual)"
            className="w-full px-4 py-2 rounded-lg bg-white/10 border borderWhite/30 text-white placeholder-white/50 text-sm"
            value={formData.team}
            onChange={(e) =>
              setFormData((f) => ({ ...f, team: e.target.value }))
            }
          />
        </div>

        <div className="flex gap-3 mt-5">
          <GradientButton className="flex-1" onClick={handleSubmit}>
            Submit
          </GradientButton>
          <button
            onClick={onClose}
            className="flex-1 px-4 py-2 rounded-xl border border-white/40 text-white/80 hover:bg-white/10 text-sm"
          >
            Cancel
          </button>
        </div>
      </motion.div>
    </div>
  );
}
