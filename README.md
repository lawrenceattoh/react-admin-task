
# 📚 React Admin Interface – Books & Authors Management

This project implements a fully functional CRUD admin interface using [React Admin](https://marmelab.com/react-admin/), powered by a mock backend via `json-server`. It satisfies all task requirements and demonstrates modular, type-safe frontend architecture.

---

## 🚀 Features

### ✅ Book Management

* 📋 List all books with:

  * Title, Author (resolved via reference), Published Year, Genre, Description
  * Search by Title
  * Filter by Author
  * Sortable & paginated table
  * Bulk delete action

* ✏️ Edit books:

  * Editable fields: `title`, `authorId`, `publishedYear`, `genre`, `description`
  * Reusable `<AuthorReferenceInput />` component used

* ➕ Create books:

  * Add new books with all required fields

* 🔍 Show book details (read-only view)

---

### ✅ Author Management (Bonus)

* 📋 List all authors with:

  * Name, Birth Year, Bio
* ✏️ Edit and ➕ Create authors with validation-ready fields
* 🔍 Show author details

---

## 📁 Project Structure

```
src/
├── components/
│   └── AuthorReferenceInput.tsx
├── pages/
│   ├── Books/
│   │   ├── BookList.tsx
│   │   ├── BookEdit.tsx
│   │   ├── BookCreate.tsx
│   │   └── BookShow.tsx
│   └── Authors/
│       ├── AuthorList.tsx
│       ├── AuthorEdit.tsx
│       ├── AuthorCreate.tsx
│       └── AuthorShow.tsx
├── dataProvider.ts
├── App.tsx
└── main.tsx
```

---

## ⚙️ Getting Started

### 1️⃣ Install dependencies

```bash
npm install
```

### 2️⃣ Start the full project (API + React Admin UI)

```bash
npm run start
```

> This script runs:
>
> * `json-server` on [http://localhost:3001](http://localhost:3001)
> * React Admin (Vite) UI on [http://localhost:5173](http://localhost:5173)

---

## 📦 Available Scripts

```json
"scripts": {
  "dev": "vite",
  "build": "tsc -b && vite build",
  "api": "node server.cjs",
  "start": "concurrently \"node server.cjs\" \"npm run dev\"",
  "lint": "eslint .",
  "preview": "vite preview"
}
```

| Command           | Description                          |
| ----------------- | ------------------------------------ |
| `npm run dev`     | Start React Admin UI only            |
| `npm run api`     | Start mock API only (`json-server`)  |
| `npm run start`   | Start both API and UI concurrently ✅ |
| `npm run build`   | Build project for production         |
| `npm run lint`    | Lint all source files                |
| `npm run preview` | Preview the production build         |

---

## 🧠 Author 

**Lawrence Attoh**
Frontend Developer | MSc AI (University of Surrey)
🔗 [LinkedIn](https://www.linkedin.com/in/lawrenceattoh/)
