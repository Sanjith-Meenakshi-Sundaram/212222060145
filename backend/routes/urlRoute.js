import express from "express";
import { generateShortUrl, redirectToOriginal, getAnalytics } from "../controllers/urlController.js";

const router = express.Router();

router.post("/", generateShortUrl);
router.get("/go/:shortcode", redirectToOriginal);
router.get("/:shortcode", getAnalytics);

export default router;
