The best delivery is a food delivery app, where you can order burgers, pizza, or fresh food to suit every taste.
The project consists of server and client parts. 
The server part was built on the following technologies: Node.js, Express, Mongoose. Database - MongoDB.
For the client side, I used the following technology stack: React, Redux Toolkit, Axios, Sass.

========================= To run the application you need: ==================== Connect DB

Go to the MongoDB website and create a classter there.
After create user. The default login is admin, and specify the password yourself.
Back up your IP address by clicking on the button below.
Press the button "Browse Collections" and press "Create Database".
Database name "organic" and collection name - "products".
Then go to the folder with the project and copy the contents in the file "products.json".
Go to our collection of "products" and click on the "Insert Document" button and paste all the products there.
Then press the "Connect" button and after press "Connect your application".
Сopy the link and go to the server folder in our project.
In the "server" folder and the "index.js" file on the 7th line we are looking for a "mongoose.connect" and replace the line with yours.
She'll be something like this 'mongodb+srv://:@cluster0.estzqnq.mongodb.net/?retryWrites=true&w=majority'
Change the login and password to the one you did during registration and add the name of our database "organic".
The link should look like this 'mongodb+srv://admin:1q2w3e@cluster0.estzqnq.mongodb.net/organic?retryWrites=true&w=majority'
Server

Open a terminal in the server folder. You can also go there with the "cd server" command.
Enter the command "npm i".
After loading the data, enter the command "npm start".
Should be displayed in the console "Server ok" and "DB ok"
Client

Open the terminal and do the same in the client folder.
when you are in the client folder, enter the command "npm i".
And after loading - "npm start"
After that the application should work!
