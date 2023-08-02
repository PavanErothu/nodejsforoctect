import mongoose from "mongoose";

const jobSchema = new mongoose.Schema({
  name: String,
  location: String,
  posted: String,
  status: String,
  applied: Number,
  jobViews: Number,
  daysLeft: Number,
  premium: Boolean,
  dateFormat: String,
});

const Job = mongoose.model("pavan", jobSchema);

export default Job;
