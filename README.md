# Setup
## Initialize the repository for node.js
<code>npm init -y</code><br>
This will create a package.json file. Change the name of the file in the <code>main</code> param if it is something else than the file which you want to run for starting the server. Add a <code>serve</code> param in the <code>scripts</code> param and write <code>node \<filename\></code> in it to run it by the command <code>npm run serve</code>. The server started by this is not a live server so it won't start again if any change is made to the files.
### Live Server
<code>npm i nodemon -D</code><br>
This will install nodemon for the folder. Then add <code>"dev": "nodemon \<filename>"</code> in the <code>scripts</code> param. When you run the command <code>npm run dev</code>, this will start the server and restart it whenever the files are changed.
## Initialize Express.js
<code>npm i express</code>
This will setup all the node modules required for express
## API Testing Software
Postman<br>
Insomnia<br>
Bruno<br>
REST Client
### VS Code Extensions
Thunder Client<br>
Postman

### Tip
Make a folder for each API testing and add the tests for the API into that folder.<br>
Also <a href="https://npmjs.com">npmjs</a> is a great resource for syntax and basic stuff.

# Working
## Preparing models using mongoDB
Create a folder called <code>models</code> to store all the models. Model is made by first preparing a schema (a systematic representation of the model) and then converting that schema into a model. Then export this model.
