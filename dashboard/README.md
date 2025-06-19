# Zerodha Clone (Dashboard)

It's another part of Zerodha clone. After logging in, user can show the current stocks in the left side and can buy any stock, that is the watchlist. On the right part users can see their own stocks situation. This datas are coming from database. This datas can be dynamic by adding live data providing APIS. User can also see their stocks conditions by chart. Doughnut and bar chart has been used here. 


## Technologies

- React.js
- MongoDB


## Installation

1. To use this project in you local machine, you should set up the frontend and backend part also. Under a folder, create 3 seperate folders as dashboard, backend and frontend. And then start them individually.
- <a href="https://github.com/MdMahdiHasanTazelly/Zerodha_clone_frontend">See the installation of frontend</a>.
- <a href="https://github.com/MdMahdiHasanTazelly/Zerodha_clone_backend">See the installation of backend</a>.

> ⚠️ **Note:** Start frontend server first, to avoid conflict with port numbers.

2. Clone the dashborad repo into your local machine under dashboard folder (as described in step 1).
   ```git bash
   git clone https://github.com/MdMahdiHasanTazelly/Zerodha_clone_dashboard

3. Navigate to the dashborad folder & install all the dependencies.
   ```git bash
   cd basdboard_directory_name
   npm install

4. Create a .env file and set up all environemtal variables in it.
   ```git bash
    REACT_APP_BACKEND_URL=http://localhost:3002
    REACT_APP_FRONTEND_URL=http://localhost:3000 

5. Now, you can start the server.
   ```git bash
   npm start


 ## Screenshots

 ### Dashborad Home
 <img alt="Dashboard home page" src="./screenshots/dashboard_home.png" width="60%"/>  

 ### Holdings Chart
 <img alt="Holdings chart" src="./screenshots/Holdings_chart.png" width="60%"/>

 ### Holdings Data
 <img alt="Holdings data" src="./screenshots/holdings_data.png" width="60%"/>

### Buy Window
<img alt="Action window" src="./screenshots/buy-window.png" width="60%"/>
