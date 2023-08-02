import mongoose from "mongoose";

const jobCountsSchema = new mongoose.Schema({
  type: String,
  countPerDay: {
    Received: [Number],
    Applied: [Number],
  },
});

const JobCounts = mongoose.model("JobCounts", jobCountsSchema);

export default JobCounts;
