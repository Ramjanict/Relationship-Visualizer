# 🧠 Relationship Visualizer

Real-time interactive relationship graph generated from free-form text input.

**🔗 Live Demo:** https://relationship-visualizer.vercel.app  
**📦 GitHub Repo:** https://github.com/Ramjanict/Relationship-Visualizer

---

## 📌 Overview

Relationship Visualizer is an interactive simulation that transforms text-based **person objects** into a **real-time dynamic graph**.  
As you type anything in the input field, the system intelligently detects valid person objects and instantly renders them as nodes with age-based visual differentiation.

No refresh.  
No button click.  
Fully real-time.

If any person object becomes invalid, it is automatically removed from the graph — with no frontend errors shown.

---

## ✨ Features

### 🧍 Real-Time Person Object Detection

- You can type **anything** in the text field.
- Whenever your text contains a valid **person object**, it appears instantly on the graph.
- Modifying the text updates the graph in **real time**.

### 🔄 Live Graph Updates

- The graph updates **as you type**, without any button press.
- Removing or breaking an object immediately removes it from the visual graph.

### 🎨 Age-Based Visual Differentiation

- Younger and older persons are styled differently for easy visual recognition.

### ❌ No Errors Allowed

- The UI will never show an error message even if you type broken JSON, random text, or invalid objects.

### 🧩 State Flexibility

- You may use the included default `person` object.
- You can add your own formats — just include them in the default state so they can be tested.

---

## 🛠️ Tech Stack

- **React + Vite**
- **Tailwind CSS**
- **TypeScript**
- **Native browser APIs only** (no external visualization libraries)
- Optional: You may use any _pre-installed_ state management library

> ❗ No external packages or libraries other than state management (if already available).

---

## 🚀 Getting Started

### 1️⃣ Clone Repo

```bash
git clone https://github.com/Ramjanict/Relationship-Visualizer.git
cd Relationship-Visualizer
npm install
npm run dev
```
