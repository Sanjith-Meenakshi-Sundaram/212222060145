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
<img width="1920" height="1080" alt="image" src="https://github.com/user-attachments/assets/ad5dcd6e-f9dc-4f36-b93f-4bf61df3b6a0" />
<img width="1920" height="1080" alt="image" src="https://github.com/user-attachments/assets/9baeb7e9-1700-41e3-a248-830176da9ddb" />


