# 🎓 Apex TM & EM School Website

A modern, responsive school website for **Apex TM & EM School**, Kothapeta, Vijayawada, Andhra Pradesh.

## 🌐 Pages

| Page | Route | Description |
|---|---|---|
| Home | `/` | Hero, stats, highlights, testimonials |
| About | `/about` | History, vision/mission, principal's message, infrastructure |
| Academics | `/academics` | TM/EM mediums, grade levels, co-curricular activities |
| Admissions | `/admissions` | Process, enquiry form, fee structure, documents |
| Gallery | `/gallery` | Filterable photo grid by category |
| Contact | `/contact` | Google Maps embed, contact form, contact details |

## 🛠 Tech Stack

- **Frontend:** React 18 + Vite + Tailwind CSS
- **Routing:** React Router v6
- **Icons:** Lucide React
- **Fonts:** Playfair Display (display) + DM Sans (body) via Google Fonts
- **Backend (recommended):** Node.js + Express + MongoDB (for form submissions)

## 🚀 Getting Started

### Prerequisites
- Node.js 18+ and npm

### Installation

```bash
# Clone the repository
git clone <repo-url>
cd apex-school

# Install dependencies
npm install

# Start development server
npm run dev
```

Open [http://localhost:5173](http://localhost:5173) in your browser.

### Build for Production

```bash
npm run build
npm run preview   # Preview production build locally
```

## 📁 Folder Structure

```
apex-school/
├── index.html
├── vite.config.js
├── tailwind.config.js
├── postcss.config.js
├── .env.example
├── package.json
├── README.md
└── src/
    ├── main.jsx          # App entry point
    ├── App.jsx           # Router setup
    ├── index.css         # Global styles + Tailwind
    ├── components/
    │   ├── Navbar.jsx    # Sticky responsive navbar
    │   ├── Footer.jsx    # Footer with links and info
    │   ├── PageHero.jsx  # Reusable page hero banner
    │   └── WhatsAppBtn.jsx  # Floating WhatsApp CTA
    └── pages/
        ├── Home.jsx
        ├── About.jsx
        ├── Academics.jsx
        ├── Admissions.jsx
        ├── Gallery.jsx
        └── Contact.jsx
```

## 🎨 Design System

| Token | Value |
|---|---|
| Primary Blue | `#1E3A8A` |
| Accent Orange | `#F97316` |
| Display Font | Playfair Display (serif) |
| Body Font | DM Sans (sans-serif) |

## 🔧 Backend Integration (Node.js + MongoDB)

To store form submissions, set up a simple Express API:

```bash
mkdir apex-backend && cd apex-backend
npm init -y
npm install express mongoose cors dotenv
```

Create `server.js`:

```js
const express = require('express');
const mongoose = require('mongoose');
require('dotenv').config();

const app = express();
app.use(express.json());
app.use(require('cors')());

mongoose.connect(process.env.MONGODB_URI);

const Enquiry = mongoose.model('Enquiry', {
  name: String, parentName: String, grade: String,
  medium: String, phone: String, email: String,
  message: String, createdAt: { type: Date, default: Date.now }
});

app.post('/api/enquiry', async (req, res) => {
  try {
    const doc = await Enquiry.create(req.body);
    res.json({ success: true, id: doc._id });
  } catch (e) {
    res.status(500).json({ error: e.message });
  }
});

app.listen(process.env.PORT || 5000);
```

Then update the `Admissions.jsx` `handleSubmit` function to POST to your API.

## 🗺 Google Maps

The Contact page uses a Google Maps embed. Replace the `src` in the `<iframe>` in `Contact.jsx` with your own embed URL from [Google Maps Embed API](https://developers.google.com/maps/documentation/embed/get-started).

The school's Plus Code is: **GJC6+X97, Yadavapuram Vari Street, Kothapeta, Vijayawada 520001**

## 📞 School Details

- **Name:** Apex TM & EM School
- **Location:** Behind Nehru Statue, Kothapeta, Vijayawada, AP 520001
- **Phone:** 093939 99674
- **WhatsApp:** +91 93939 99674
- **Hours:** Monday–Saturday, 8:00 AM – 6:00 PM
