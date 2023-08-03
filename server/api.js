import express from "express";
const router = express.Router();

// Import the sample data
import jobs from "./jobs.js";
import applicants from "./applicants.js";

// Get all jobs
router.get("/jobs", (req, res) => {
  res.json(jobs);
});

// Get a specific job by ID
router.get("/jobs/:jobId", (req, res) => {
  const jobId = parseInt(req.params.jobId);
  const job = jobs.find((job) => job.id === jobId);
  if (job) {
    res.json(job);
  } else {
    res.status(404).json({ error: "Job not found" });
  }
});

// Create a new job
router.post("/jobs", (req, res) => {
  // Implementation to create a new job
});

// Update an existing job by ID
router.put("/jobs/:jobId", (req, res) => {
  // Implementation to update an existing job
});

// Delete a job by ID
router.delete("/jobs/:jobId", (req, res) => {
  // Implementation to delete a job
});

// Get all applicants
router.get("/applicants", (req, res) => {
  res.json(applicants);
});

// Get applicants for a specific job by ID
router.get("/applicants/:jobId", (req, res) => {
  const jobId = parseInt(req.params.jobId);
  const jobApplicants = applicants.filter(
    (applicant) => applicant.jobId === jobId
  );
  res.json(jobApplicants);
});

// Apply for a job (create a new applicant)
router.post("/applicants/:jobId", (req, res) => {
  // Implementation to apply for a job (create a new applicant)
});

// Delete an applicant by ID
router.delete("/applicants/:applicantId", (req, res) => {
  // Implementation to delete an applicant
});

export default router;
