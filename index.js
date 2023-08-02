import express from "express";
import mongoose from "mongoose";

// Import route handlers for job counts and jobs
// import jobCountsRoutes from './routes/jobCounts.js';
import jobRoutes from './routes/job.js';

// Create the Express app
const app = express();

// Connect to MongoDB
mongoose
  .connect("mongodb://localhost:27017/db_hire", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("Connected to MongoDB"))
  .catch((err) => console.error("Error connecting to MongoDB:", err));

// Middleware to parse JSON data
app.use(express.json());

app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origi', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
    res.setHeader('Access-Control-Allow-Credentials', true);
    next()
});

// Middleware to handle CORS (if needed)
// app.use(cors());

// Route middleware for job counts and jobs
// app.use('/job-counts', jobCountsRoutes);
app.use('/jobdata', jobRoutes);

// app.get("/jobdatas", async (req, res) => {
//   try {
//     const JobData = mongoose.model("jobdatas");
//     const data = await JobData.find();
//     res.json(data);
//   } catch (error) {
//     res.status(500).json({ error: "Internal Server Error cant read data" });
//   }
// });

// Start the server
const port = 8000;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
