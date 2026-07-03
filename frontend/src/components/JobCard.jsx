import { useState } from "react";
import { statusStyles } from "../utils/statusColors";

function JobCard({ job, onDelete, onEdit, onAnalyze }) {
  const [jdText, setJdText] = useState(job.jdText || "");
  const [showAnalyze, setShowAnalyze] = useState(false);
  const [analyzing, setAnalyzing] = useState(false);

  async function handleAnalyzeClick() {
    setAnalyzing(true);
    await onAnalyze(job._id, jdText);
    setAnalyzing(false);
    setShowAnalyze(false);
  }

  return (
    <div className="bg-slate-800 rounded-xl p-5 border border-slate-700 hover:border-slate-600 transition">
      <div className="flex justify-between items-start mb-3">
        <div>
          <h3 className="text-white font-semibold text-lg">{job.company}</h3>
          <p className="text-slate-400 text-sm">{job.role}</p>
        </div>
        <span className={`text-xs font-medium px-3 py-1 rounded-full border ${statusStyles[job.status]}`}>
          {job.status}
        </span>
      </div>

      {job.link ? (
        <a href={job.link} target="_blank" rel="noopener noreferrer" className="text-indigo-400 text-sm hover:underline block mb-3">
          View job posting
        </a>
      ) : null}

      {job.matchScore !== null && job.matchScore !== undefined && (
        <div className="bg-slate-900 rounded-lg p-3 mb-3">
          <div className="flex items-center justify-between mb-1">
            <span className="text-slate-400 text-xs">Resume Match</span>
            <span className="text-white font-bold text-sm">{job.matchScore}%</span>
          </div>
          {job.missingSkills?.length > 0 && (
            <div className="flex flex-wrap gap-1 mt-2">
              {job.missingSkills.map((skill, i) => (
                <span key={i} className="text-xs bg-orange-500/10 text-orange-400 px-2 py-0.5 rounded-full border border-orange-500/30">
                  {skill}
                </span>
              ))}
            </div>
          )}
        </div>
      )}

      {showAnalyze ? (
        <div className="mb-3">
          <textarea
            value={jdText}
            onChange={(e) => setJdText(e.target.value)}
            rows={4}
            className="w-full bg-slate-700 text-white text-sm rounded-lg px-3 py-2 outline-none focus:ring-2 focus:ring-indigo-500 resize-none mb-2"
            placeholder="Paste the job description here..."
          />
          <div className="flex gap-2">
            <button
              onClick={handleAnalyzeClick}
              disabled={analyzing}
              className="text-xs bg-indigo-600 hover:bg-indigo-500 text-white px-3 py-1.5 rounded-lg transition disabled:opacity-50"
            >
              {analyzing ? "Analyzing..." : "Analyze Fit"}
            </button>
            <button
              onClick={() => setShowAnalyze(false)}
              className="text-xs bg-slate-700 hover:bg-slate-600 text-white px-3 py-1.5 rounded-lg transition"
            >
              Cancel
            </button>
          </div>
        </div>
      ) : (
        <button
          onClick={() => setShowAnalyze(true)}
          className="text-xs bg-indigo-600/20 hover:bg-indigo-600/40 text-indigo-400 px-3 py-1.5 rounded-lg transition mb-3"
        >
          {job.matchScore !== null && job.matchScore !== undefined ? "Re-analyze Fit" : "Analyze Fit"}
        </button>
      )}

      <div className="flex gap-2 mt-2">
        <button onClick={() => onEdit(job)} className="text-xs bg-slate-700 hover:bg-slate-600 text-white px-3 py-1.5 rounded-lg transition">
          Edit
        </button>
        <button onClick={() => onDelete(job._id)} className="text-xs bg-red-600/20 hover:bg-red-600/40 text-red-400 px-3 py-1.5 rounded-lg transition">
          Delete
        </button>
      </div>
    </div>
  );
}

export default JobCard;