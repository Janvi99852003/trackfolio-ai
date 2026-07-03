import { useState } from "react";

function ProfileModal({ currentResume, onClose, onSaved, api }) {
  const [resumeText, setResumeText] = useState(currentResume || "");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  async function handleSave() {
    setError("");
    setLoading(true);
    try {
      const res = await api.put("/auth/profile", { resumeText });
      onSaved(res.data.user);
      onClose();
    } catch (err) {
      if (!err.response) {
        setError("Cannot reach the server. Please try again later.");
      } else {
        setError(err.response?.data?.message || "Failed to save resume");
      }
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="fixed inset-0 bg-black/60 flex items-center justify-center px-4 z-50">
      <div className="bg-slate-800 rounded-2xl shadow-xl p-8 w-full max-w-2xl">
        <h2 className="text-2xl font-bold text-white mb-2">Your Resume</h2>
        <p className="text-slate-400 text-sm mb-4">
          Paste your resume text here once — it'll be used for AI job matching.
        </p>

        {error && (
          <div className="bg-red-500/10 border border-red-500 text-red-400 text-sm rounded-lg p-3 mb-4">
            {error}
          </div>
        )}

        <textarea
          value={resumeText}
          onChange={(e) => setResumeText(e.target.value)}
          rows={12}
          className="w-full bg-slate-700 text-white rounded-lg px-4 py-3 outline-none focus:ring-2 focus:ring-indigo-500 resize-none"
          placeholder="Paste your full resume text here..."
        />

        <div className="flex gap-3 pt-4">
          <button
            onClick={onClose}
            className="flex-1 bg-slate-700 hover:bg-slate-600 text-white font-semibold rounded-lg py-2.5 transition"
          >
            Cancel
          </button>
          <button
            onClick={handleSave}
            disabled={loading}
            className="flex-1 bg-indigo-600 hover:bg-indigo-500 text-white font-semibold rounded-lg py-2.5 transition disabled:opacity-50"
          >
            {loading ? "Saving..." : "Save Resume"}
          </button>
        </div>
      </div>
    </div>
  );
}

export default ProfileModal;