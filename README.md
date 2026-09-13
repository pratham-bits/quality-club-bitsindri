# Quality Club — BIT Sindri

Official website of the **Quality Club, BIT Sindri**.

The website presents the club's vision, faculty leadership, student executive committee, events, FAQs, contact information, and opportunities to connect with the club.

The project is designed so that future club members can update content and maintain the website without needing to modify the core layout unnecessarily.

**Live Site:** `https://quality-club-bitsindri.vercel.app/`

---

## ✨ Features

- **Home** — landing page introducing the club and its mission
- **About** — club vision and core quality concepts
- **Team** — faculty leadership and student executive committee, with photos
- **Events** — showcase of past and upcoming club events with image galleries
- **FAQs** — answers to common questions about the club
- **Contact** — ways to reach out and connect with the club

---

## 🛠 Tech Stack

- React
- Vite
- React Router
- Framer Motion
- Lucide React
- Plain CSS
- Vercel (deployment)
- GitHub (version control)

---

## 📁 Project Structure

```text
quality-club-bitsindri/
│
├── public/
│   └── images/
│       ├── events/
│       │   ├── upcoming/
│       │   ├── event-1/
│       │   ├── event-2/
│       │   ├── event-3/
│       │   ├── event-4/
│       │   ├── event-5/
│       │   ├── event-6/
│       │   ├── event-7/
│       │   └── event-8/
│       │
│       ├── team/
│       │   ├── faculty/
│       │   ├── students/
│       │   └── core-members/
│       │
│       ├── quality-club-logo.png
│       ├── ifqm-logo-header.svg
│       ├── ifqm-logo-footer.svg
│       ├── team-placeholder.svg
│       └── event-placeholder.svg
│
├── src/
│   ├── components/
│   │   ├── FacultyLeaderCard.jsx
│   │   ├── FAQItem.jsx
│   │   ├── Footer.jsx
│   │   ├── Navbar.jsx
│   │   ├── QualityCard.jsx
│   │   ├── Reveal.jsx
│   │   ├── SectionHeading.jsx
│   │   └── TeamMemberCard.jsx
│   │
│   ├── data/
│   │   ├── events.js
│   │   ├── faculty.js
│   │   ├── faqs.js
│   │   ├── qualityConcepts.js
│   │   ├── site.js
│   │   ├── team.js
│   │   └── coreMembers.js
│   │
│   ├── layouts/
│   │   └── MainLayout.jsx
│   │
│   ├── pages/
│   │   ├── About.jsx
│   │   ├── Contact.jsx
│   │   ├── Events.jsx
│   │   ├── FAQs.jsx
│   │   ├── Home.jsx
│   │   └── Team.jsx
│   │
│   ├── App.jsx
│   ├── index.css
│   └── main.jsx
│
├── index.html
├── package.json
├── package-lock.json
├── README.md
├── vercel.json
└── vite.config.js
```

---

## 🚀 Getting Started

### 1. Prerequisites

Make sure you have installed:

- [Node.js](https://nodejs.org/) (LTS version recommended)
- [Git](https://git-scm.com/)
- A code editor — [VS Code](https://code.visualstudio.com/) recommended

### 2. Clone the Repository

Open **Git Bash**, **PowerShell**, **Command Prompt**, or the **VS Code terminal**, navigate to where you want the project stored, and run:

```bash
git clone https://github.com/pratham-bits/quality-club-bitsindri.git
```

### 3. Enter the Project Directory

```bash
cd quality-club-bitsindri
```

### 4. Install Dependencies

The repository does not include the `node_modules` folder. Install all required dependencies:

```bash
npm install
```

- `npm install` reads `package.json` and `package-lock.json` to install packages.
- Run this only during initial setup or when dependencies change.

### 5. Open the Project in VS Code

If VS Code is installed and the `code` command is available:

```bash
code .
```

Alternatively:

1. Open Visual Studio Code.
2. Go to **File → Open Folder**.
3. Select the `quality-club-bitsindri` folder.

### 6. Run the Website Locally

Start the Vite development server:

```bash
npm run dev
```

The terminal will display a local URL, usually:

```
http://localhost:5173/
```

Open the URL in your browser to view the site.

---

## 🛠 Local Development Workflow

Whenever you start working on the project:

**Step 1 — Navigate to the project directory**

```bash
cd quality-club-bitsindri
```

**Step 2 — Update your local `main` branch**

```bash
git checkout main
git pull origin main
```

**Step 3 — Create a feature branch**

Do not develop directly on `main`. Create a feature branch:

```bash
git checkout -b feature/your-change
```

Examples:

```bash
git checkout -b feature/update-team
git checkout -b feature/add-event
git checkout -b feature/update-faqs
git checkout -b feature/improve-mobile-layout
```

**Step 4 — Start the development server**

```bash
npm run dev
```

Make your changes and test them locally.

---

## ✅ Testing Before Commit

Check project status:

```bash
git status
```

Run a production build:

```bash
npm run build
```

- Ensure the build completes successfully.
- Fix any errors before committing.

---

## 💾 Committing Changes

Stage changes:

```bash
git add .
```

Commit with a meaningful message:

```bash
git commit -m "Update team information"
```

Examples of good commit messages:

- `Update team information`
- `Add new Quality Club event`
- `Update FAQ content`
- `Fix mobile navigation`
- `Improve team card layout`
- `Update faculty leadership`
- `Fix event image gallery`

❌ Avoid vague messages like: `changes`, `update`, `final`, `new`, `testing`.

---

## 📤 Push Changes to GitHub

Push your feature branch:

```bash
git push -u origin feature/your-change
```

Example:

```bash
git push -u origin feature/update-team
```

---

## 🔀 Pull Requests

1. Open the repository on GitHub.
2. Create a Pull Request from your feature branch into `main`.
3. Clearly describe your changes.
4. Request a review from maintainers.
5. Resolve feedback and merge after approval.

---

## 📌 Recommended Workflow

```text
Clone Repository
       ↓
Pull latest main
       ↓
Create Feature Branch
       ↓
Make Changes
       ↓
Test Locally
       ↓
npm run build
       ↓
Commit
       ↓
Push Branch
       ↓
Pull Request
       ↓
Review
       ↓
Merge into main
       ↓
Vercel Deployment
```

---

## 🔒 Main Branch Policy

- The `main` branch represents the stable production version.
- Normal development should not be performed directly on `main`.
- Always create a feature branch and submit a Pull Request for review.

```bash
git checkout main
git pull origin main
git checkout -b feature/your-change
```

After completing work:

```bash
git add .
git commit -m "Describe your change"
git push -u origin feature/your-change
```

---

## 📄 License

No license has been specified for this project yet.
