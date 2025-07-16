import { customAlphabet } from "nanoid";
import { createShortUrl, findShortcode, addClick } from "../services/urlService.js";
import { Log } from "../../logmid/log.js";

const nanoid = customAlphabet("0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ", 6);

export const generateShortUrl = async (req, res) => {
  try {
    const { url, shortcode, validity = 30 } = req.body;
    const code = shortcode || nanoid();

    const exists = await findShortcode(code);
    if (exists) {
      await Log("backend", "error", "controller", "Shortcode already exists");
      return res.status(409).json({ error: "Shortcode already in use" });
    }

    const expiry = new Date(Date.now() + validity * 60 * 1000);
    const newUrl = await createShortUrl(url, code, expiry);

    await Log("backend", "info", "controller", `Shortened URL created: ${code}`);

    res.status(201).json({
      shortLink: `http://localhost:5000/shorturls/go/${code}`,
      expiry: expiry.toISOString()
    });
  } catch (err) {
    await Log("backend", "fatal", "controller", "Failed to create short URL");
    res.status(500).json({ error: err.message });
  }
};

export const redirectToOriginal = async (req, res) => {
  try {
    const { shortcode } = req.params;
    const url = await findShortcode(shortcode);

    if (!url || url.expiry < new Date()) {
      await Log("backend", "warn", "controller", "Expired or invalid shortcode");
      return res.status(404).json({ error: "Shortcode expired or invalid" });
    }

    await addClick(url, req.get("Referrer"));

    res.redirect(url.originalUrl);
  } catch (err) {
    await Log("backend", "error", "controller", "Redirection failed");
    res.status(500).json({ error: err.message });
  }
};

export const getAnalytics = async (req, res) => {
  try {
    const { shortcode } = req.params;
    const url = await findShortcode(shortcode);

    if (!url) {
      await Log("backend", "error", "controller", "Shortcode not found for analytics");
      return res.status(404).json({ error: "Shortcode not found" });
    }

    res.json({
      originalUrl: url.originalUrl,
      createdAt: url.createdAt,
      expiry: url.expiry,
      clickCount: url.clicks.length,
      clickDetails: url.clicks
    });
  } catch (err) {
    await Log("backend", "fatal", "controller", "Failed to get analytics");
    res.status(500).json({ error: err.message });
  }
};
