
# Pass.me 
Pass.me is an Authentication App, it makes API calls to **[Backend Server](https://github.com/kulsumansari/User-API)** for Registration of new user and Logging of registered users.

**[Live Link](https://613e46b502574d000784de7d--mystifying-benz-c28358.netlify.app/)**

## Introduction

A simple frontend Application for login and registration, created with React JS . This Application supports functionalities for user Registeration and Login via API call to backend server. User login state (whether user is logged in or not) is maintained through React Context API. Upons successful login user will be able to access Home Page .

## Getting Started

To set up your project locally and run the application follow these simple steps.

### Installation

From your terminal/command line:

1. Clone the repo : To clone and run this application, you'll need Git and Node.js in your machine.

   ```sh
   $ git clone https://github.com/kulsumansari/Authentication-App.git
   ```
2. Install the Dependencies
   ```sh
   $ npm install
   ```
3. To start the App
    ```sh
    $ npm run start
    ```
## Features

* User Registeration

* User Login

* Redirect User to protected Home page upon successful Login

* Maintain uses's login state


## Application View

* `/` Route

    ![](https://kulsumansari.github.io/webpage-data/userFrontendImages/landingPage.png)

* `/register` Route

    ![](https://kulsumansari.github.io/webpage-data/userFrontendImages/registraion.png)

* `/login` Route

    ![](https://kulsumansari.github.io/webpage-data/userFrontendImages/login-route.png)

* `/home` Route

    ![](https://kulsumansari.github.io/webpage-data/userFrontendImages/home.png)


## Folder Structure
```
.
├── public 
|    ├── favicon.ico
|    ├── icon.ico
|    ├── index.html
|    ├── logo192.png
|    ├── logo512.png
|    └── manifest.json
├── README.md
├── src
|    ├── App.css
|    ├── App.js
|    ├── App.test.js
|    ├── components
|    │   ├── Logout
|    │   │   └── Logout.jsx
|    │   ├── Button
|    │   │   ├── Button.jsx
|    │   │   └── Button.module.css
|    │   ├── Modal
|    │   │   ├── Modal.jsx
|    │   │   └── Modal.module.scss
|    │   ├── Form
|    │   │   ├── Form.jsx
|    │   │   └── Form.module.css
|    │   ├── Footer
|    │   │   ├── Footer.jsx
|    │   │   └── Footer.module.css
|    │   └── Navigation
|    │       ├── NavBar.jsx
|    │       └── NavBar.module.css
|    ├── pages
|    │   ├── Home
|    │   │   ├── Home.jsx
|    │   │   └── Home.module.css
|    │   ├── LandingPage
|    │   │   ├── LandingPage.jsx
|    │   │   └── LandingPage.module.css
|    │   ├── Login
|    │   │   └── Login.jsx
|    │   └── Register
|    │       └── Register.jsx
|    ├── data
|    │   └── data.js
|    ├── Router
|    │   ├── AppRouter.js
|    │   └── ProtectedRoute.js
|    ├── utils
|    │   ├── LoginContext.js
|    │   └── userAPI.js
|    ├── index.css
|    ├── index.js
|    ├── logo.svg
|    ├── reportWebVitals.js
|    └── setupTests.js
├── .gitignore
├── package-lock.json
└── package.json


```


## Resources
* [React](https://reactjs.org/docs/getting-started.html)
* [React Component & Props](https://reactjs.org/docs/components-and-props.html)
* [React Routing](https://reactrouter.com/web/guides/quick-start)
* [React Hooks](https://reactjs.org/docs/hooks-overview.html)
* [React Context API](https://reactjs.org/docs/context.html)

