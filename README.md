# ⚡ Crypto Dashboard

A lightweight **React-based cryptocurrency dashboard** built using **plain HTML, CSS, and React Hooks** — without any UI framework (no MUI or Tailwind).  
It fetches live crypto data from the [CoinGecko API](https://www.coingecko.com/en/api), displays it in a **sortable, searchable, and paginated table**, and supports a modern **light/dark theme toggle**.

---

## ✨ Features

- 🔍 **Search inside table header** – instantly filters cryptocurrencies by name or symbol  
- ↕️ **Column sorting** – click any column header to sort ascending/descending  
- 📄 **Pagination** – shows 10 items per page with navigation controls  
- 🌗 **Theme toggle** – switch between light and dark modes with an icon in the top-right corner  
- 💾 **Live data fetching** – loads data from the CoinGecko API when component renders  
- 🎨 **Pure HTML & CSS** – no external UI library used  
- 📱 **Responsive** – adapts to various screen sizes smoothly  

---

## 🧰 Tech Stack

| Technology | Purpose |
|-------------|----------|
| **React (Hooks)** | UI rendering and state management |
| **HTML5 / CSS3** | Layout, responsiveness, and theme design |
| **CoinGecko API** | Real-time cryptocurrency data |
| **JavaScript (ES6+)** | Core logic for sort, search, and pagination |

---

## ⚙️ Installation & Setup

### 1️⃣ Clone the repository
```bash
git clone https://github.com/Niks345/crypto-dashboard-assignment.git
cd crypto-dashboard

2️⃣ Install dependencies
npm install

3️⃣ Start the development server
npm start

➡️ The app will be available at http://localhost:3000

🧠 How It Works

On initial render, the dashboard calls the CoinGecko /search API to fetch live crypto data.

Data is transformed into a simplified structure containing id, name, symbol, rank, and thumb.

The table:

Displays the top crypto results

Supports sorting by column headers

Includes a search bar embedded in the top-right corner of the table

Paginates results for better readability

The theme toggle switches between light and dark modes using CSS variables and is stored in localStorage.

🖼️ UI Overview

| Element          | Description                                  |
| ---------------- | -------------------------------------------- |
| **Header**       | App title + theme toggle icon                |
| **Search Bar**   | Inside the table header (top-right)          |
| **Table**        | Displays crypto rank, logo, name, and symbol |
| **Pagination**   | Below table for navigation                   |
| **Theme Toggle** | 🌞 / 🌙 icon in the top-right corner          |


🧱 Folder Structure
crypto-dashboard/
├── src/
│   ├── App.jsx              # Main application component
│   ├── App.css              # Table styles + light/dark theme
│   ├── components/
│   │   ├── CryptoTable.jsx  # Table with sort, search, pagination
│   │   ├── Header.jsx       # Title + theme toggle
│   │   └── ThemeContext.js  # Light/Dark mode context
│   ├── api/
│   │   └── apiClient.js     # API call logic
│   └── index.js             # React DOM entry point
├── public/
│   └── index.html
└── README.md


🧪 Running Tests

This project uses Jest and React Testing Library.

🧰 Setup

Tests are preconfigured if you used create-react-app. Otherwise, install:

npm install --save-dev jest @testing-library/react @testing-library/jest-dom

▶️ Run All Tests
npm test

📄 Sample Test Output
 PASS  src/__tests__/CryptoTable.test.js
  ✓ Renders table headers correctly (42 ms)
  ✓ Filters coins based on search input (17 ms)
  ✓ Sorts table by name on header click (23 ms)
