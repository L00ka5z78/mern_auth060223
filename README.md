# mern_auth060223

Basic register - login - logout form with backend i mongoDb Compass.
Simple validation added, both Frontend and Backend side.
There is a tiny little fail. I installed frontend inside backend folder, 
so it's not s it should be actually. But whole thing works pretty well.

Tech stack used in project:
Backend:
NODE JS
1.Express - Fast, unopinionated, minimalist web framework for Node.js.
2.Mongoose - MongoDB ODM
3.cors - Node.js middleware
4.bcrypt - A bcrypt library for NodeJS
5.Cookie-parser - Parse HTTP request cookies
6.Jsonwebtoken - Web Token implementation 
7.Helmet -  helps you secure your Express apps by setting various HTTP headers. 
8.Morgan - request logger middleware for node.js.

Frontend:
1. React - library for building user interfaces
2. React-router-dom - routing for React web applications
3. React-toastify - notification made easy
4. React-cookie - Universal cookies for React
5. Axios - Promise based HTTP client for the browser and node.js

Other:
1. Eslint
2. Postman / Insomia to test the endpoints


To run the app:
start frontend
npm run start - react-scripts start

start backend
npm run dev - nodemon index.js

in some cases you have install mongoDB compass on your device and
use mongo db start script in your backend. I dont know the reason why it occurs but it helps.

npm run start-mongo   

start-mongo:": "cd /d D:/MongoDb/bin/ && mongod.exe" - path to mongod.exe file on your device

KNOWN ISSUES. During login process react toastify renders notification twice. Reason unknown. Other toast work as they should

08.02.23 code in js
Further upgrades: - rewrite to typescript:
