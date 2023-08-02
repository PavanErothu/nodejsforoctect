import express from "express";
const router = express.Router();
import JobCounts from "../models/jobCounts.js";

// Route to get all job counts
router.get("/", async (req, res) => {
  try {
    const jobCounts = await JobCounts.find({});
    res.json(jobCounts);
  } catch (error) {
    res.status(500).json({ error: "Internal Server Error" });
  }
});

export default router;
