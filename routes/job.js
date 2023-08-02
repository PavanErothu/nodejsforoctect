// import express from "express";
// const router = express.Router();
// import Job from "../models/job.js";

// //Route to post all jobs
// router.post("/jobdatas",async(req,res)=>{
//     const
// })

// // Route to get all jobs
// router.get("/getjobdata", async (req, res) => {
//   try {
//     const jobs = await Job.find({});
//     res.json(jobs);
//   } catch (error) {
//     res.status(500).json({ error: "Internal Server Error" });
//   }
// });

// export default router;

import express from "express";
const router = express.Router();
import Job from "../models/job.js";

// Route to post all jobs
router.post("/jobdata", async (req, res) => {
  try {
    // Extract the job data from the request body
    const {
      name,
      location,
      posted,
      status,
      applied,
      jobViews,
      daysLeft,
      premium,
      dateFormat,
    } = req.body;

    // Create a new instance of the Job model with the extracted data
    const newJob = new Job({
      name,
      location,
      posted,
      status,
      applied,
      jobViews,
      daysLeft,
      premium,
      dateFormat,
    });

    // Save the new job to the database using the save() method
    const savedJob = await newJob.save();

    res.json(savedJob);
  } catch (error) {
    res.status(500).json({ error: "Internal Server Error" });
  }
});

// Route to get all jobs
// router.get("/getjobdata", async (req, res) => {
//   try {
//     const jobs = await Job.find({});
//     res.json(jobs);
//   } catch (error) {
//     res.status(500).json({ error: "Internal Server Error" });
//   }
// });
export default router;
