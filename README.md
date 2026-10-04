# 🕸️ NodeLink — Real-Time Relationship Graph Visualizer

> Transform plain-text person objects into a live, interactive relationship graph — instantly, as you type.

**🔗 Live Demo:** https://relationship-visualizer.vercel.app  
**📦 GitHub:** https://github.com/Ramjanict/Relationship-Visualizer

---

## 📌 Overview

**NodeLink** is a browser-based relationship graph tool that parses free-form text input and renders a dynamic SVG graph in real time. Type (or paste) any number of `person` objects into the editor — the graph updates instantly with nodes and labeled relationship edges. Delete or break an object, and it disappears from the graph without any error messages.

No refresh. No button click. Just live, reactive visualization.

---

## ✨ Features

| Feature | Description |
|---|---|
| ⚡ **Real-Time Parsing** | Graph updates on every keystroke — no submit button required |
| 🧩 **Forgiving Parser** | Handles loose JSON (unquoted keys, trailing commas, mixed quotes) |
| 🔗 **Directed Edges** | Relationship labels are rendered along the connecting edges between nodes |
| 📐 **Age-Scaled Nodes** | Node radius scales proportionally with each person's age |
| 🛡️ **Error-Free UI** | Invalid, partial, or broken text never crashes or shows errors |
| 🔄 **Auto Cleanup** | Removing a valid object instantly removes the corresponding node and edges |
| 🌐 **Unicode Support** | Fully supports multilingual names and relation labels (e.g., Bengali, Arabic) |
| 🏗️ **Zero External Charts** | Built entirely with native SVG — no D3, no Chart.js, no third-party render libs |

---

## 🏗️ Architecture

```
src/
├── App.tsx                  # Root layout — split-pane (editor | graph)
├── main.tsx                 # React entry point
├── index.css                # Global styles
├── usePersonStore.ts        # Zustand store — text parsing & person state
└── components/
    ├── TextEditor.tsx       # Controlled textarea with live onChange dispatch
    └── GraphView.tsx        # SVG graph renderer (nodes + edges + labels)
```

### Data Flow

```
User Types Text
      │
      ▼
TextEditor.onChange
      │
      ▼
usePersonStore.setPersons(text)
  ├── Extract brace-delimited blocks
  ├── Normalize loose JSON syntax
  ├── Validate Person schema (id, name, age, relations[])
  └── Set valid persons[] in Zustand store
      │
      ▼
GraphView (re-renders reactively)
  ├── Arrange nodes in circular layout
  ├── Draw SVG <line> edges per relation
  └── Render <circle> nodes scaled by age
```

---

## 🛠️ Tech Stack

| Technology | Role |
|---|---|
| **React 19** | UI framework |
| **TypeScript** | Static typing across all components |
| **Vite 7** | Lightning-fast dev server & bundler |
| **Zustand** | Minimal global state management |
| **Tailwind CSS 4** | Utility-first styling |
| **Native SVG** | Graph rendering — no external chart libraries |

---

## 📐 Person Object Schema

The parser accepts objects with the following shape (quoted or unquoted keys):

```js
{
  id: 1,
  name: "Alice",
  age: 30,
  relations: [
    { id: 2, relation: "friend" },
    { id: 3, relation: "colleague" }
  ]
}
```

> You can paste **multiple objects** one after another — no commas or array brackets needed between them.

---

## 🚀 Getting Started

### Prerequisites

- Node.js ≥ 18
- npm, pnpm, or yarn

### Installation

```bash
# Clone the repository
git clone https://github.com/Ramjanict/Relationship-Visualizer.git
cd Relationship-Visualizer

# Install dependencies
npm install

# Start the development server
npm run dev
```

Open your browser at **http://localhost:4321**

### Available Scripts

| Command | Description |
|---|---|
| `npm run dev` | Start dev server on port 4321 |
| `npm run build` | TypeScript check + production build |
| `npm run preview` | Preview the production build |
| `npm run lint` | Run ESLint |

---

## 🎮 Usage

1. The left panel contains a live **text editor** pre-loaded with sample Bengali family data.
2. The right panel renders the **relationship graph** as an SVG.
3. Edit, add, or remove person objects in the text area — the graph updates in real time.
4. Any malformed or partial text is silently ignored; only valid person objects appear on the graph.

---

## 📸 Preview

```
┌─────────────────────┬──────────────────────────────────┐
│                     │                                  │
│   Text Editor       │        Relationship Graph        │
│   (free-form)       │                                  │
│                     │      ●─────────────────●         │
│  { id: 1, ...}      │   (Alice)  friend   (Bob)        │
│  { id: 2, ...}      │      \                           │
│  { id: 3, ...}      │       ●  (Carol)                 │
│                     │                                  │
└─────────────────────┴──────────────────────────────────┘
```

---

## 🤝 Contributing

Contributions are welcome! Please open an issue or submit a pull request.

1. Fork the repository
2. Create your feature branch: `git checkout -b feature/your-feature`
3. Commit your changes: `git commit -m 'feat: add your feature'`
4. Push to the branch: `git push origin feature/your-feature`
5. Open a Pull Request

---

## 📄 License

This project is open-source and available under the [MIT License](LICENSE).

---

<div align="center">
  Built with ❤️ using React, TypeScript, and SVG
</div>
