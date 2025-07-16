import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import cors from "cors";
import urlRoutes from "./routes/urlRoute.js";
import localLogger from "./middlewares/locallog.js";

dotenv.config();

const app = express();

app.use(cors());
app.use(express.json());
app.use(localLogger);

app.use("/shorturls", urlRoutes);

mongoose.connect(process.env.MONGO_URL)
  .then(() => {
    app.listen(process.env.PORT, () => {
      console.log("Server started on port", process.env.PORT);
    });
  })
  .catch(err => console.error(err));
