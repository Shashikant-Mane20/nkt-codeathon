import { useEffect, useState } from "react";
import SectionHeader from "../ui/SectionHeader";

const emptyProblem = {
  _id: null,
  title: "",
  code: "",
  track: "",
  level: "Medium",
  shortDescription: "",
  problemStatement: "",
  inputFormat: "",
  outputFormat: "",
  constraints: "",
  sampleInput: "",
  sampleOutput: "",
  evaluationCriteria: "",
  resources: "",
  tags: ""
};

export default function AdminDashboard({ apiBaseUrl, onDataChange }) {
  const [problems, setProblems] = useState([]);
  const [form, setForm] = useState(emptyProblem);
  const [loading, setLoading] = useState(false);

  const fetchProblems = async () => {
    setLoading(true);
    try {
      const res = await fetch(`${apiBaseUrl}/api/problems`);
      const data = await res.json();
      setProblems(data);
      onDataChange && onDataChange();
    } catch (err) {
      console.error("Error fetching problems:", err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchProblems();
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleEdit = (p) => {
    setForm({
      _id: p._id,
      title: p.title || "",
      code: p.code || "",
      track: p.track || "",
      level: p.level || "Medium",
      shortDescription: p.shortDescription || "",
      problemStatement: p.problemStatement || "",
      inputFormat: p.inputFormat || "",
      outputFormat: p.outputFormat || "",
      constraints: p.constraints || "",
      sampleInput: p.sampleInput || "",
      sampleOutput: p.sampleOutput || "",
      evaluationCriteria: p.evaluationCriteria || "",
      resources: p.resources || "",
      tags: Array.isArray(p.tags) ? p.tags.join(", ") : ""
    });
  };

  const handleDelete = async (id) => {
    if (!confirm("Delete this problem?")) return;
    try {
      await fetch(`${apiBaseUrl}/api/problems/${id}`, {
        method: "DELETE"
      });
      fetchProblems();
      alert("Deleted");
    } catch (err) {
      console.error("Error deleting problem:", err);
      alert("Error deleting problem");
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const payload = {
      title: form.title,
      code: form.code,
      track: form.track,
      level: form.level,
      shortDescription: form.shortDescription,
      problemStatement: form.problemStatement,
      inputFormat: form.inputFormat,
      outputFormat: form.outputFormat,
      constraints: form.constraints,
      sampleInput: form.sampleInput,
      sampleOutput: form.sampleOutput,
      evaluationCriteria: form.evaluationCriteria,
      resources: form.resources,
      tags: form.tags
        .split(",")
        .map((t) => t.trim())
        .filter(Boolean)
    };

    try {
      if (form._id) {
        await fetch(`${apiBaseUrl}/api/problems/${form._id}`, {
          method: "PUT",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(payload)
        });
        alert("Updated problem");
      } else {
        await fetch(`${apiBaseUrl}/api/problems`, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(payload)
        });
        alert("Created new problem");
      }
      setForm(emptyProblem);
      fetchProblems();
    } catch (err) {
      console.error("Error saving problem:", err);
      alert("Error saving problem");
    }
  };

  const handleCancelEdit = () => {
    setForm(emptyProblem);
  };

  return (
    <div className="max-w-6xl mx-auto px-4 py-10">
      <SectionHeader
        title="Admin Dashboard"
        subtitle="Add, edit, and delete Code-a-thon problem statements."
      />

      <div className="grid md:grid-cols-2 gap-8">
        {/* Form */}
        <form
          onSubmit={handleSubmit}
          className="bg-white/10 border border-white/20 rounded-2xl p-5 space-y-3"
        >
          <h3 className="text-lg font-semibold mb-1 text-white">
            {form._id ? "Edit Problem" : "Create Problem"}
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
            <Input
              label="Title"
              name="title"
              value={form.title}
              onChange={handleChange}
              required
            />
            <Input
              label="Code (e.g. PS001 – must be unique)"
              name="code"
              value={form.code}
              onChange={handleChange}
              required
              disabled={!!form._id}
            />
            <Input
              label="Track"
              name="track"
              value={form.track}
              onChange={handleChange}
              required
            />
            <Select
              label="Level"
              name="level"
              value={form.level}
              onChange={handleChange}
              options={["Easy", "Medium", "Hard", "Beginner", "Intermediate", "Advanced"]}
            />
          </div>

          <Textarea
            label="Short Description"
            name="shortDescription"
            value={form.shortDescription}
            onChange={handleChange}
            rows={2}
            required
          />

          <Textarea
            label="Problem Statement"
            name="problemStatement"
            value={form.problemStatement}
            onChange={handleChange}
            rows={3}
          />

          <Textarea
            label="Input Format"
            name="inputFormat"
            value={form.inputFormat}
            onChange={handleChange}
            rows={2}
          />

          <Textarea
            label="Output Format"
            name="outputFormat"
            value={form.outputFormat}
            onChange={handleChange}
            rows={2}
          />

          <Textarea
            label="Constraints"
            name="constraints"
            value={form.constraints}
            onChange={handleChange}
            rows={2}
          />

          <Textarea
            label="Sample Input"
            name="sampleInput"
            value={form.sampleInput}
            onChange={handleChange}
            rows={2}
          />

          <Textarea
            label="Sample Output"
            name="sampleOutput"
            value={form.sampleOutput}
            onChange={handleChange}
            rows={2}
          />

          <Textarea
            label="Evaluation Criteria"
            name="evaluationCriteria"
            value={form.evaluationCriteria}
            onChange={handleChange}
            rows={2}
          />

          <Textarea
            label="Resources / Notes"
            name="resources"
            value={form.resources}
            onChange={handleChange}
            rows={2}
          />

          <Input
            label="Tags (comma separated)"
            name="tags"
            value={form.tags}
            onChange={handleChange}
            placeholder="AI, Web, Mobile"
          />

          <div className="flex justify-end gap-3 pt-2">
            {form._id && (
              <button
                type="button"
                onClick={handleCancelEdit}
                className="px-4 py-2 rounded-xl border border-white/30 text-xs text-white/80 hover:bg-white/10"
              >
                Cancel
              </button>
            )}
            <button
              type="submit"
              className="px-5 py-2 rounded-xl bg-gradient-to-r from-purple-500 to-blue-500 text-xs font-semibold text-white hover:from-purple-600 hover:to-blue-600"
            >
              {form._id ? "Save Changes" : "Create Problem"}
            </button>
          </div>
        </form>

        {/* Table */}
        <div className="bg-white/10 border border-white/20 rounded-2xl p-5">
          <div className="flex justify-between items-center mb-3">
            <h3 className="text-lg font-semibold text-white">
              Existing Problems
            </h3>
            {loading && (
              <span className="text-xs text-white/60">Loading…</span>
            )}
          </div>
          <div className="overflow-x-auto max-h-[480px]">
            <table className="w-full text-xs text-white/80">
              <thead className="bg-white/10">
                <tr>
                  <th className="px-2 py-2 text-left">Code</th>
                  <th className="px-2 py-2 text-left">Title</th>
                  <th className="px-2 py-2 text-left">Track</th>
                  <th className="px-2 py-2 text-left">Level</th>
                  <th className="px-2 py-2 text-right">Actions</th>
                </tr>
              </thead>
              <tbody>
                {problems.map((p) => (
                  <tr key={p._id} className="border-b border-white/10">
                    <td className="px-2 py-2 font-mono text-purple-200">
                      {p.code}
                    </td>
                    <td className="px-2 py-2">
                      <div className="font-semibold text-white truncate max-w-[160px]">
                        {p.title}
                      </div>
                      <div className="text-[11px] text-white/60 truncate max-w-[200px]">
                        {p.shortDescription}
                      </div>
                    </td>
                    <td className="px-2 py-2">{p.track}</td>
                    <td className="px-2 py-2">{p.level}</td>
                    <td className="px-2 py-2 text-right space-x-2">
                      <button
                        onClick={() => handleEdit(p)}
                        className="px-3 py-1 rounded-full border border-purple-400 text-[11px] hover:bg-purple-500 hover:text-white"
                      >
                        Edit
                      </button>
                      <button
                        onClick={() => handleDelete(p._id)}
                        className="px-3 py-1 rounded-full border border-red-400 text-[11px] hover:bg-red-500 hover:text-white"
                      >
                        Delete
                      </button>
                    </td>
                  </tr>
                ))}
                {problems.length === 0 && !loading && (
                  <tr>
                    <td
                      colSpan="5"
                      className="px-2 py-4 text-center text-white/60"
                    >
                      No problems yet. Add one using the form.
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}

function Input({ label, ...props }) {
  return (
    <div className="space-y-1">
      <label className="text-xs text-white/80">{label}</label>
      <input
        {...props}
        className={
          "w-full px-3 py-2 rounded-xl bg-black/30 border border-white/30 text-xs text-white outline-none focus:border-purple-400 " +
          (props.className || "")
        }
      />
    </div>
  );
}

function Textarea({ label, rows = 3, ...props }) {
  return (
    <div className="space-y-1">
      <label className="text-xs text-white/80">{label}</label>
      <textarea
        {...props}
        rows={rows}
        className={
          "w-full px-3 py-2 rounded-xl bg-black/30 border border-white/30 text-xs text-white outline-none focus:border-purple-400 resize-y " +
          (props.className || "")
        }
      />
    </div>
  );
}

function Select({ label, options, ...props }) {
  return (
    <div className="space-y-1">
      <label className="text-xs text-white/80">{label}</label>
      <select
        {...props}
        className="w-full px-3 py-2 rounded-xl bg-black/30 border border-white/30 text-xs text-white outline-none focus:border-purple-400"
      >
        {options.map((opt) => (
          <option key={opt} value={opt}>
            {opt}
          </option>
        ))}
      </select>
    </div>
  );
}
