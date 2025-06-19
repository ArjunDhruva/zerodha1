# Zerodha Clone (Backend)
This is the backend of the zerodha clone. As, a practice, I've build this project. This backend API manages CRUD(Create, Read, Update, Delete) operation for the both frontend and dashboard. It handles the interactions of dashborad and frontend with datadase. It looks after the user authentication by JSON Webtoken and handles user sigup and login.

## Technologies
- Express.js
- MongoDB


## API Endpoints
- `GET   /allHoldings`
- `GET   /allPositions`
- `GET   /watchlist`
- `POST  /newOrder`
- `POST  /signUp`
- `POST  /logIn`


## Installation
1. Clone this repository.
   ```bash
   git clone https://github.com/MdMahdiHasanTazelly/Zerodha_clone_backend

2. Navigate to this backend directory and install all the dependencies.
   ```bash
   cd backend_directory
   npm install

3. Create a .env file in the root backend directory and set it up.
   ```bash
   MONGO_URL=put_your_mongoDB_URL
   TOKEN_KEY=set_as_your_wish_or_generate_from_any_JWT_token_generator   

4. It's all done! Now, start the server.
   ```bash
   npm start