import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import api from "../api/axios";
import JobCard from "../components/JobCard";
import AddJobModal from "../components/AddJobModal";
import EditJobModal from "../components/EditJobModal";
import ProfileModal from "../components/ProfileModal";

function Dashboard() {
  const navigate = useNavigate();
  const user = JSON.parse(localStorage.getItem("user"));

  const [jobs, setJobs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [showModal, setShowModal] = useState(false);
  const [editingJob, setEditingJob] = useState(null);
  const [showProfile, setShowProfile] = useState(false);
  const [currentUser, setCurrentUser] = useState(user);

  useEffect(() => {
    fetchJobs();
  }, []);

  async function fetchJobs() {
    try {
      const res = await api.get("/jobs");
      setJobs(res.data);
    } catch (err) {
      console.error("Failed to fetch jobs", err);
    } finally {
      setLoading(false);
    }
  }

  function handleJobAdded(newJob) {
    setJobs([newJob, ...jobs]);
  }

  function handleJobUpdated(updatedJob) {
    setJobs(jobs.map((job) => (job._id === updatedJob._id ? updatedJob : job)));
  }

  async function handleAnalyze(jobId, jdText) {
    try {
      const res = await api.post(`/ai/analyze/${jobId}`, { jdText });
      setJobs(jobs.map((job) => (job._id === jobId ? res.data : job)));
    } catch (err) {
      alert(err.response?.data?.message || "Analysis failed");
    }
  }

  function handleResumeSaved(updatedUser) {
    setCurrentUser(updatedUser);
    localStorage.setItem("user", JSON.stringify(updatedUser));
  }

  async function handleDelete(jobId) {
    if (!confirm("Delete this job application?")) return;

    try {
      await api.delete(`/jobs/${jobId}`);
      setJobs(jobs.filter((job) => job._id !== jobId));
    } catch (err) {
      alert("Failed to delete job");
    }
  }

  function handleEdit(job) {
    setEditingJob(job);
  }

  function handleLogout() {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    navigate("/login");
  }

  const stats = {
    total: jobs.length,
    applied: jobs.filter((j) => j.status === "Applied").length,
    interview: jobs.filter((j) => j.status === "Interview").length,
    offer: jobs.filter((j) => j.status === "Offer").length,
  };

  return (
    <div className="min-h-screen bg-slate-900 px-6 py-8">
      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <div className="flex justify-between items-center mb-8">
          <div>
            <h1 className="text-2xl font-bold text-white">
              Welcome, {currentUser?.name || "there"} 👋
            </h1>
            <p className="text-slate-400 text-sm mt-1">Track your job applications</p>
          </div>
          <div className="flex gap-2">
            <button
              onClick={() => setShowProfile(true)}
              className="text-sm bg-slate-800 hover:bg-slate-700 text-white px-4 py-2 rounded-lg transition"
            >
              My Resume
            </button>
            <button
              onClick={handleLogout}
              className="text-sm bg-slate-800 hover:bg-slate-700 text-white px-4 py-2 rounded-lg transition"
            >
              Log Out
            </button>
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-8">
          <div className="bg-slate-800 rounded-xl p-4 border border-slate-700">
            <p className="text-slate-400 text-xs">Total</p>
            <p className="text-white text-2xl font-bold">{stats.total}</p>
          </div>
          <div className="bg-slate-800 rounded-xl p-4 border border-slate-700">
            <p className="text-slate-400 text-xs">Applied</p>
            <p className="text-blue-400 text-2xl font-bold">{stats.applied}</p>
          </div>
          <div className="bg-slate-800 rounded-xl p-4 border border-slate-700">
            <p className="text-slate-400 text-xs">Interview</p>
            <p className="text-yellow-400 text-2xl font-bold">{stats.interview}</p>
          </div>
          <div className="bg-slate-800 rounded-xl p-4 border border-slate-700">
            <p className="text-slate-400 text-xs">Offers</p>
            <p className="text-green-400 text-2xl font-bold">{stats.offer}</p>
          </div>
        </div>

        {/* Add Job button */}
        <button
          onClick={() => setShowModal(true)}
          className="bg-indigo-600 hover:bg-indigo-500 text-white font-semibold px-5 py-2.5 rounded-lg transition mb-6"
        >
          + Add Job
        </button>

        {/* Job list */}
        {loading ? (
          <p className="text-slate-400">Loading your jobs...</p>
        ) : jobs.length === 0 ? (
          <div className="text-center py-16 bg-slate-800 rounded-xl border border-slate-700">
  <div className="text-4xl mb-3">📋</div>
  <p className="text-slate-300 font-medium">No job applications yet</p>
  <p className="text-slate-500 text-sm mt-1">Click "+ Add Job" above to start tracking your applications</p>
</div>
        ) : (
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {jobs.map((job) => (
              <JobCard
                key={job._id}
                job={job}
                onDelete={handleDelete}
                onEdit={handleEdit}
                onAnalyze={handleAnalyze}
              />
            ))}
          </div>
        )}
      </div>

      {showModal && (
        <AddJobModal
          api={api}
          onClose={() => setShowModal(false)}
          onJobAdded={handleJobAdded}
        />
      )}

      {editingJob && (
        <EditJobModal
          job={editingJob}
          api={api}
          onClose={() => setEditingJob(null)}
          onJobUpdated={handleJobUpdated}
        />
      )}

      {showProfile && (
        <ProfileModal
          api={api}
          currentResume={currentUser?.resumeText}
          onClose={() => setShowProfile(false)}
          onSaved={handleResumeSaved}
        />
      )}
    </div>
  );
}

export default Dashboard;