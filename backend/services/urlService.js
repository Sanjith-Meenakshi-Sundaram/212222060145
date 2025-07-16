import Url from "../models/url.js";

export const findShortcode = async (code) => {
  return await Url.findOne({ shortcode: code });
};

export const createShortUrl = async (originalUrl, shortcode, expiry) => {
  return await Url.create({ originalUrl, shortcode, expiry });
};

export const addClick = async (url, referrer = "unknown") => {
  url.clicks.push({
    timestamp: new Date(),
    referrer,
    geo: "India"
  });
  return await url.save();
};
