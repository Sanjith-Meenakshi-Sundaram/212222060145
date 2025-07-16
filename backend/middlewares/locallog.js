import { Log } from "../../logmid/log.js";

const localLogger = async (req, res, next) => {
  await Log("backend", "info", "middleware", `${req.method} ${req.originalUrl}`);
  next();
};

export default localLogger;
