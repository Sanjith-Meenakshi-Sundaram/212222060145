import axios from "axios";
import { getAuthToken } from "./auth.js";

export async function Log(stack, level, pkg, message) {
  const validStacks = ["backend", "frontend"];
  const validLevels = ["debug", "info", "warn", "error", "fatal"];
  const validPackages = [
    "cache", "controller", "cron_job", "db", "domain", "handler", "repository", "route", "service",
    "auth", "config", "middleware", "utils",
    "api", "component", "hook", "page", "state", "style"
  ];

  if (!validStacks.includes(stack) || !validLevels.includes(level) || !validPackages.includes(pkg)) return;

  const token = await getAuthToken();

  await axios.post("http://20.244.56.144/evaluation-service/logs", {
    stack,
    level,
    package: pkg,
    message
  }, {
    headers: {
      Authorization: `Bearer ${token}`
    }
  });
}
