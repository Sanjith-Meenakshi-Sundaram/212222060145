import axios from "axios";
import { config } from "./config.js";

let cachedToken = null;

export async function getAuthToken() {
  if (cachedToken) return cachedToken;

  const response = await axios.post("http://20.244.56.144/evaluation-service/auth", {
    email: config.email,
    name: config.name,
    rollNo: config.rollNo,
    accessCode: config.accessCode,
    clientId: config.clientId,
    clientSecret: config.clientSecret
  });

  const token = response.data.access_token;
  cachedToken = token;
  return token;
}
