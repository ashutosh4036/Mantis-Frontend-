# Mantis - Frontend

## Overview

The **Mantis Frontend** is a user-friendly web interface built using **React**. It enables users to interact seamlessly with the **Mantis Backend**, providing functionalities for creating, viewing, and downloading photo albums. This frontend communicates with the backend to authenticate users and manage their data efficiently.

## Project Setup Guide

This guide provides step-by-step instructions for setting up and running the Mantis frontend. It covers essential tools and configurations required for smooth development.

## Technology Stack

- **React**: A powerful JavaScript library for building dynamic user interfaces.
- **Material UI**: A component library for a modern and responsive design.
- **Redux Toolkit**: Simplified state management solution.
- **React Router**: Navigation and routing for seamless user experience.
- **Axios**: HTTP client for API requests and data fetching.

## Prerequisites

Before setting up the project, ensure you have the following installed:

- **Node.js**: Download and install from [Node.js Official Site](https://nodejs.org/).
- **Git**: Version control system for cloning the repository.
- **VS Code** (or any preferred IDE) for code development.

## Setting up the Frontend

Follow these steps to configure and run the frontend:

### Installation & Running

1. **Clone the repository:**
   ```sh
   git clone https://github.com/ashutosh4036/Mantis-Frontend.git
   ```
2. **Navigate to the project directory:**
   ```sh
   cd Mantis-Frontend
   ```
3. **Install dependencies:**
   ```sh
   npm install
   ```
4. **Start the development server:**
   ```sh
   npm start
   ```
5. **Access the application in the browser:**
   ```
   http://localhost:3000
   ```

## Features

- **User Authentication**: Users can register, log in, and authenticate using JWT tokens.
- **Album Management**: Create, view, update, and delete photo albums seamlessly.
- **Photo Upload & Download**: Securely upload and download images.
- **Modern UI Design**: Responsive and intuitive interface powered by Material UI.

## API Integration

The frontend interacts with the backend through RESTful API endpoints:

- **Base API URL:** `http://localhost:8080/api/v1`
- **Authentication:** Token-based authentication via `/auth/token`
- **Albums Management:** CRUD operations on albums via `/albums`

## Folder Structure

```
Mantis-Frontend/
│── public/             # Static assets
│── src/
│   ├── components/     # Reusable UI components
│   ├── pages/          # Application pages
│   ├── redux/          # State management setup
│   ├── services/       # API request handling
│   ├── App.js          # Main application entry
│   ├── index.js        # React DOM rendering
│── package.json
│── README.md
```

## Deployment

To create an optimized production build:

```sh
npm run build
```

This generates a `build/` directory that can be deployed to any web server.

## License

**Apache 2.0**

## Author

**Ashutosh Tripathi**

- [Portfolio](https://ashutosh-portfolio14.netlify.app/)
- [Email](mailto:ashutosh4036@gmail.com)

