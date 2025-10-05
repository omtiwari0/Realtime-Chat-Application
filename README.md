# 💬 Live Chat App

![Chat App Logo](public/assets/msg.svg)

A **real-time group chat application** built using **Node.js**, **Express**, and **Socket.IO**, featuring a **clean responsive UI** and **PWA installability** (via manifest).  
This project allows multiple users to chat live, see when others join or leave, and even install the app like a native one on desktop or mobile.  

---

## 🚀 Live Demo

👉 **Try it here:** [https://chat-app-c5jx.onrender.com/](https://chat-app-c5jx.onrender.com/)

---

## 🌟 Features

- ⚡ Real-time chat powered by **Socket.IO**
- 👥 Join/leave notifications for users
- 🔊 Sound alert on new messages
- 📱 **PWA-ready** (installable via manifest)
- 💻 Responsive, minimal, and modern UI
- 🧠 Built entirely from scratch using **vanilla JS**, no frameworks

---

## 🛠 Tech Stack

| Layer | Technology |
|-------|-------------|
| **Frontend** | HTML, CSS, JavaScript |
| **Backend** | Node.js, Express |
| **Real-time Engine** | Socket.IO |
| **PWA** | Web App Manifest |
| **Hosting** | Render |

---

## 📁 Folder Structure
chat-app/
├── src/
│ └── index.js # Express + Socket.IO server
├── public/
│ ├── index.html # Frontend UI
│ ├── style.css # Styling
│ ├── manifest.json # PWA installability
│ ├── assets/
│ │ ├── msg.svg # App logo
│ │ └── ding.mp3 # Notification sound
│ └── js/
│ └── client.js # Socket.IO frontend logic
├── package.json
└── .gitignore

---

## ⚙️ Installation & Setup (Local)

  1. **Clone the repository**
     ```bash
    1. git clone https://github.com/<your-username>/chat-app.git
    2. cd chat-app
    3. npm install
    4. npm start
    5. ** Open in browser **
     http://localhost:5000

💡 How It Works
When a user joins, they enter their name (via form overlay).
Their presence is broadcast to all other users.
Messages are instantly delivered across all connected clients.
A sound notification plays when a new message arrives.
You can install the app using the PWA “Add to Home Screen” feature.



🔮 Future Enhancements

🕶️ Dark / Light mode toggle
💬 Multiple chat rooms or private chats
📷 Media and file sharing
🔒 User authentication system
🌐 Add service worker for offline mode


👨‍💻 Author
Ome Tiwari
💼 2nd Year CSE Student | 💻 Web Developer | ⚙️ DSA Enthusiast
🌐 LinkedIn(https://www.linkedin.com/in/ome-tiwari-9080a9314/)

🧾 License
This project is open-source and available under the MIT License.
