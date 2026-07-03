const express = require("express");
const { GoogleGenerativeAI } = require("@google/generative-ai");
const Job = require("../models/Job");
const User = require("../models/User");
const authMiddleware = require("../middleware/authMiddleware");

const router = express.Router();
router.use(authMiddleware);

const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);

router.post("/analyze/:jobId", async (req, res) => {
  try {
    const { jdText } = req.body;

    const user = await User.findById(req.userId);
    const job = await Job.findOne({ _id: req.params.jobId, userId: req.userId });

    if (!job) {
      return res.status(404).json({ message: "Job not found" });
    }

    if (!user.resumeText || user.resumeText.trim() === "") {
      return res.status(400).json({ message: "Please add your resume text in your profile first" });
    }

    if (!jdText || jdText.trim() === "") {
      return res.status(400).json({ message: "Please paste the job description" });
    }

    const model = genAI.getGenerativeModel({ model: "gemini-2.5-flash" });

    const prompt = `
You are a career advisor. Compare this resume against this job description.

RESUME:
${user.resumeText}

JOB DESCRIPTION:
${jdText}

Respond ONLY with valid JSON in this exact format, nothing else:
{
  "matchScore": <number between 0 and 100>,
  "missingSkills": ["skill1", "skill2", "skill3"]
}
`;

    const result = await model.generateContent(prompt);
    const responseText = result.response.text();

    const cleaned = responseText.replace(/```json|```/g, "").trim();
    const parsed = JSON.parse(cleaned);

    job.jdText = jdText;
    job.matchScore = parsed.matchScore;
    job.missingSkills = parsed.missingSkills;
    await job.save();

    res.status(200).json(job);
  } catch (err) {
    res.status(500).json({ message: "AI analysis failed", error: err.message });
  }
});

module.exports = router;