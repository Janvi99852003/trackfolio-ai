const mongoose = require("mongoose");

const jobSchema = new mongoose.Schema({
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },
  company: { type: String, required: true },
  role: { type: String, required: true },
  status: {
    type: String,
    enum: ["Applied", "Interview", "Offer", "Rejected"],
    default: "Applied",
  },
  jdText: { type: String, default: "" },
  matchScore: { type: Number, default: null },
  missingSkills: { type: [String], default: [] },
  link: { type: String, default: "" },
  date: { type: Date, default: Date.now },
}, { timestamps: true });

module.exports = mongoose.model("Job", jobSchema);