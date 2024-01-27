# TaskForge
TaskForge is a full-stack web application built using the MERN stack. It offers a comprehensive task management system with user authentication, allowing users to securely register, log in, and manage their tasks. The application provides seamless integration with Express.js on the backend for handling RESTful API requests. The React frontend, offers a user-friendly interface for creating, viewing, udpating, and deleting tasks. User authentication is implemented using JWT (JSON Web Tokens) for secure access control. With TaskForge, users can efficiently organize their tasks while benefiting from a sleek and responsive user interface.

## File Structure
```
TaskForge/
├── client/
│   ├── public/
│   └── src/
│       ├── components/
│       │   ├── Auth/
│       │   │   ├── Login.js
│       │   │   └── Register.js
│       │   └── TaskManager/
│       │       ├── TaskList.js
│       │       └── TaskForm.js
│       ├── App.js
│       ├── index.js
│       └── ...
└── server/
    ├── models/
    │   └── User.js
    ├── routes/
    │   ├── auth.js
    │   └── tasks.js
    ├── .env
    ├── .gitignore
    ├── index.js
    └── package.json
```
