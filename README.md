<div class="hero-icon" align="center">
  <img src="https://raw.githubusercontent.com/PKief/vscode-material-icon-theme/ec559a9f6bfd399b82bb44393651661b08aaf7ba/icons/folder-markdown-open.svg" width="100" />
</div>

<h1 align="center">
fitness-goals-web-app
</h1>
<h4 align="center">A web application that empowers fitness enthusiasts to track their progress, set goals, and connect with others.</h4>
<h4 align="center">Developed with the software and tools below.</h4>
<div class="badges" align="center">
  <img src="https://img.shields.io/badge/Framework-React-blue" alt="Framework used">
  <img src="https://img.shields.io/badge/Frontend-Javascript,_Html,_Css-red" alt="Frontend technologies used">
  <img src="https://img.shields.io/badge/Backend-Node.js-blue" alt="Backend technology used">
  <img src="https://img.shields.io/badge/LLMs-Custom,_Gemini,_OpenAI-black" alt="LLMs used for development">
</div>
<div class="badges" align="center">
  <img src="https://img.shields.io/github/last-commit/coslynx/fitness-goals-web-app?style=flat-square&color=5D6D7E" alt="git-last-commit" />
  <img src="https://img.shields.io/github/commit-activity/m/coslynx/fitness-goals-web-app?style=flat-square&color=5D6D7E" alt="GitHub commit activity" />
  <img src="https://img.shields.io/github/languages/top/coslynx/fitness-goals-web-app?style=flat-square&color=5D6D7E" alt="GitHub top language" />
</div>


## 📑 Table of Contents
- 📍 Overview
- 📦 Features
- 📂 Structure
- 💻 Installation
- 🏗️ Usage
- 🌐 Hosting
- 📄 License
- 👏 Authors

## 📍 Overview
The repository contains a Minimum Viable Product (MVP) called "fitness-goals-web-app" that provides a comprehensive solution for fitness enthusiasts.  This application utilizes a robust technology stack including React, Next.js, TypeScript, Tailwind CSS, Supabase, and custom LLMs like Gemini and OpenAI.

## 📦 Features
|    | Feature            | Description                                                                                                        |
|----|--------------------|--------------------------------------------------------------------------------------------------------------------|
| ⚙️ | **Architecture**   | The codebase follows a modular architectural pattern, separating functionalities into distinct directories for easier maintenance and scalability.             |
| 📄 | **Documentation**  |  This README file provides a comprehensive overview of the MVP, including installation instructions, usage guides, and detailed explanations. |
| 🔗 | **Dependencies**   | The application leverages various external libraries and packages, such as React, Next.js, Zustand, and Tailwind CSS, to provide a seamless user experience.  |
| 🧩 | **Modularity**     |  The code is structured with separate components, pages, and utilities, promoting code reusability and simplifying future development.       |
| 🧪 | **Testing**        |  The codebase includes unit tests to ensure the reliability and robustness of the application's core functionalities.       |
| ⚡️  | **Performance**    |  The application prioritizes performance, utilizing caching strategies and optimized code to deliver a fast and responsive user experience.      |
| 🔐 | **Security**       |  Security is a top priority, with measures like input validation, data encryption, and secure authentication implemented to protect user data.    |
| 🔀 | **Version Control**| Git is used for version control, while GitHub Actions automate build and release processes, ensuring a streamlined development workflow.    |
| 🔌 | **Integrations**   | The application integrates with various external services like Supabase for database management, Google OAuth for authentication, and fitness trackers via APIs.  |
| 📶 | **Scalability**    | The application is designed for scalability, using a serverless backend and cloud-based database to handle increasing user traffic and data storage. |

## 📂 Structure
```text
fitness-goals-web-app
├── public
│   └── favicon.ico
├── src
│   ├── components
│   │   ├── Button.tsx
│   │   ├── Header.tsx
│   │   ├── Layout.tsx
│   │   ├── GoalInput.tsx
│   │   ├── ProgressChart.tsx
│   │   └── SocialShareButton.tsx
│   ├── pages
│   │   ├── api
│   │   │   ├── auth.ts
│   │   │   ├── goals.ts
│   │   │   └── progress.ts
│   │   ├── _app.tsx
│   │   ├── index.tsx
│   │   ├── dashboard.tsx
│   │   └── login.tsx
│   ├── styles
│   │   └── global.css
│   ├── utils
│   │   ├── helpers.ts
│   │   ├── api.ts
│   │   ├── auth.ts
│   │   └── validation.ts
│   ├── config
│   │   └── next-auth.config.ts
│   ├── middleware
│   │   └── authentication.ts
│   ├── .env
│   ├── package.json
│   ├── README.md
│   ├── tailwind.config.ts
│   └── tsconfig.json
└── vite.config.js
```

## 💻 Installation
### 🔧 Prerequisites
- Node.js
- npm
- Docker

### 🚀 Setup Instructions
1. Clone the repository:
   - `git clone https://github.com/coslynx/fitness-goals-web-app.git`
2. Navigate to the project directory:
   - `cd fitness-goals-web-app`
3. Install dependencies:
   - `npm install`

## 🏗️ Usage
### 🏃‍♂️ Running the Application
1. Start the development server:
   - `npm start`
2. Open your browser and navigate to [http://localhost:3000](http://localhost:3000).

### ⚙️ Configuration
Adjust configuration settings in `.env` or `next.config.js` as needed.

### 📚 Examples
- **📝 Example 1**: How to Set a Fitness Goal:
    -  Navigate to the "Goals" section.
    -  Click the "Add Goal" button.
    -  Enter the details of your goal, including the type (weight loss, distance running, etc.), target date, and any additional information.
    -  Click "Save Goal" to create the goal.
- **📝 Example 2**: How to Record a Workout:
    -  Navigate to the "Progress" section.
    -  Click the "Log Workout" button.
    -  Select the type of workout (cardio, strength training, etc.).
    -  Enter the duration and intensity of your workout.
    -  Click "Save Workout" to record your activity.
- **📝 Example 3**: How to Connect with Others:
    -  Navigate to the "Social" section.
    -  Search for other users to follow.
    -  Share your progress updates and achievements.
    -  Leave comments and provide encouragement to other users.

## 🌐 Hosting
### 🚀 Deployment Instructions
#### Vercel
1. Log in to your Vercel account.
2. Click "New Project" and select "Import from Git".
3. Enter the repository URL: `https://github.com/coslynx/fitness-goals-web-app.git`.
4. Select the branch you want to deploy.
5. Click "Deploy".

#### Netlify
1. Log in to your Netlify account.
2. Click "New site from Git".
3. Enter the repository URL: `https://github.com/coslynx/fitness-goals-web-app.git`.
4. Select the branch you want to deploy.
5. Click "Deploy".

#### GitHub Pages
1. Navigate to the repository's settings page on GitHub.
2. Select "Pages" from the left-hand menu.
3. Choose the source branch and directory.
4. Click "Save".

#### Other Hosting Services
Refer to the specific documentation for your chosen hosting service to deploy the application.

### 🔑 Environment Variables
- `NEXT_PUBLIC_SUPABASE_URL`: Your Supabase URL (obtain from Supabase project settings).
- `NEXT_PUBLIC_SUPABASE_ANON_KEY`: Your Supabase Anonymous Key (obtain from Supabase project settings).

## 📜 API Documentation
### 🔍 Endpoints
- **GET /api/auth/session**:  Retrieves the current user session information.
- **POST /api/auth/signin**:  Initiates the sign-in process using Google OAuth.
- **POST /api/auth/signout**:  Logs out the current user.
- **GET /api/goals**:  Retrieves a list of user goals.
- **POST /api/goals**:  Creates a new goal for the user.
- **PUT /api/goals/:id**:  Updates an existing goal.
- **DELETE /api/goals/:id**:  Deletes a goal.
- **GET /api/progress**:  Retrieves the user's workout progress.
- **POST /api/progress**:  Records a new workout.

### 🔒 Authentication
The application uses Google OAuth for user authentication.  After successfully signing in, a session token is issued and used to secure subsequent API requests.

### 📝 Examples
- `curl -X GET http://localhost:3000/api/goals`

## 📜 License
This project is licensed under the [MIT](https://choosealicense.com/licenses/mit/) License.

## 👥 Authors
- **CosLynxAI** - [https://github.com/coslynx](https://github.com/coslynx)

<p align="center">
  <h1 align="center">🌐 CosLynx.com</h1>
</p>
<p align="center">
  <em>Create Your Custom MVP in Minutes With CosLynxAI!</em>
</p>
<div class="badges" align="center">
  <img src="https://img.shields.io/badge/Developers-Drix10,_Kais_Radwan-red" alt="">
  <img src="https://img.shields.io/badge/Website-CosLynx.com-blue" alt="">
  <img src="https://img.shields.io/badge/Backed_by-Google,_Microsoft_&_Amazon_for_Startups-red" alt="">
  <img src="https://img.shields.io/badge/Finalist-Backdrop_Build_v4-black" alt="">
</div>