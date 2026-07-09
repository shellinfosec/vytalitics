<div align="center">
  <img src="https://via.placeholder.com/150x150.png?text=Vytalitics" alt="Vytalitics Logo" width="150" />
  <h1>Vytalitics</h1>
  <p><strong>Next-Generation Analytics Dashboard</strong></p>

  <p>
    <a href="#features">Features</a> •
    <a href="#deployment">Deployment</a> •
    <a href="#tech-stack">Tech Stack</a>
  </p>
</div>

---

## ✨ Features

- 📊 **Real-time Analytics:** Dive deep into your data with real-time tracking.
- 🎨 **Beautiful UI:** Graphical and intuitive user interface.
- 🚀 **Performant:** Built with modern web technologies for maximum speed.

---

## 🛠 Tech Stack

- **Framework:** React / Vite
- **Styling:** Tailwind CSS
- **Deployment:** cPanel ready

---

## 🚀 Deployment to cPanel

This project is pre-configured for deployment on cPanel.

### 1. Build the App
Run the build script to generate the production files:
```bash
npm run build
```
This will create a `dist` folder.

### 2. cPanel Git Version Control Setup
1. Log in to your cPanel dashboard.
2. Navigate to **Git™ Version Control** under the Files section.
3. Click **Create** to add a new repository.
4. Turn off "Clone a Repository" if you are pushing directly from your local machine, or turn it on and paste the GitHub URL: `https://github.com/shellinfosec/vytalitics`.
5. Specify the **Repository Path** (e.g., `public_html/vytalitics`).
6. Set the **Repository Name**.
7. Click **Create**.

*If pushing locally to cPanel, add the cPanel remote to your local git and push.*

### 3. Serving the App
The app includes an `.htaccess` file in the `public` directory which gets bundled into the `dist` folder. This ensures that client-side routing works perfectly on Apache servers. Upload the contents of the `dist` folder directly to your `public_html` or addon domain's root folder.

---

<div align="center">
  <p>Developed with ❤️ by <a href="mailto:syedhaseeb@shellinfosec.com">Syed Haseeb Rizvi</a></p>
</div>
