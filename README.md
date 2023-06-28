# mern_auth060223

Basic register - login - logout form with backend i mongoDb Compass.
Simple validation added, both Frontend and Backend side.
There is a tiny little fail which is annoying and requires refactor. I installed frontend inside backend folder, 
so it's not s it should be actually. But whole thing works pretty well.

### Tech stack used in project:
Backend:
NODE JS
1. Express - Fast, unopinionated, minimalist web framework for Node.js.
2. Mongoose - MongoDB ODM
3. cors - Node.js middleware
4. bcrypt - A bcrypt library for NodeJS
5. Cookie-parser - Parse HTTP request cookies
6. Jsonwebtoken - Web Token implementation 
7. Helmet -  helps you secure your Express apps by setting various HTTP headers. 
8. Morgan - request logger middleware for node.js.

### Frontend:
1. React - library for building user interfaces
2. React-router-dom - routing for React web applications
3. React-toastify - notification made easy
4. React-cookie - Universal cookies for React
5. Axios - Promise based HTTP client for the browser and node.js

Other:
1. Eslint
2. Postman / Insomia to test the endpoints


### To run the app:
start frontend
npm run start - react-scripts start

start backend
npm run dev - nodemon index.js

in some cases you have install mongoDB compass on your device and
use mongo db start script in your backend. I dont know the reason why it occurs but it helps.

npm run start-mongo   

start-mongo:": "cd /d D:/MongoDb/bin/ && mongod.exe" - path to mongod.exe file on your device

### KNOWN ISSUES. During login process react toastify renders notification twice. Reason unknown. Other toast work as they should

08.02.23 code in js
Further upgrades: - rewrite to typescript:

Example screens



![Zrzut ekranu (6)](https://user-images.githubusercontent.com/110019733/218253976-92e57648-3fee-45d8-af4d-4a9699bf602c.png)
![Zrzut ekranu (7)](https://user-images.githubusercontent.com/110019733/218253977-f3d38eb2-ce7e-4852-9c09-c74c23512a57.png)
![Zrzut ekranu (8)](https://user-images.githubusercontent.com/110019733/218253978-f12f005b-d612-4343-868c-ad3e6514f608.png)
![Zrzut ekranu (12)](https://user-images.githubusercontent.com/110019733/218253980-03c54eb1-78d8-4e9b-af62-473e0ceffe8b.png)
![Zrzut ekranu (5)](https://user-images.githubusercontent.com/110019733/218253981-24bc88db-6562-46f2-bb9b-80003c85ef49.png)
