# 🔗 URL Shortener App

This is a full-stack **URL Shortener** web application built as part of the AffordMed Full Stack Evaluation. It allows users to shorten long URLs with optional custom codes and expiry durations. Users can also view detailed analytics for each shortened link.

---

## 🚀 Features

### 🌐 URL Shortening
- Input long URLs and get back a short version.
- Optionally set:
  - ⏰ Validity in minutes
  - 🧾 Custom shortcode
- Supports up to **5 URLs at once** (frontend ready for extension).

### 📊 Analytics Dashboard
- View original link, short link, creation & expiry dates.
- Shows number of clicks and detailed logs:
  - ⏱ Click timestamp
  - 🌍 Referrer/source

### 🛠 Logging Middleware
- Reusable logging function to send meaningful logs to AffordMed's Test Server.
- Captures errors, warnings, and debug messages across backend services.

---

## 🧱 Tech Stack

| Layer     | Technology                     |
|-----------|--------------------------------|
| Frontend  | React, Vite, Material UI       |
| Backend   | Node.js, Express, MongoDB      |
| Logging   | Custom Logger → API Middleware |
| Routing   | React Router DOM               |

---
### Screenshots
<img width="1902" height="927" alt="image" src="https://github.com/user-attachments/assets/15325b4d-0a22-48ac-a2ef-db7a1d23ca6d" />
<img width="1896" height="897" alt="image" src="https://github.com/user-attachments/assets/eedc6554-e913-465d-8ee1-0489499e506b" />


