# edTakeTechnicalTest
Thank you for the opportunity you gave me to show you what I can do with NodeJS !
<h2>Before you run the script</h2>
Please run <b>npm i</b> in order to install dependencies needed to run the scripts : express and axios.
<h3>Defining the endpoint</h3>
The server will be running on port 3000, and the route will be triggered with some queries in the route such as :<br>
localhost:3000/api?startDate<\your date in YYYY-MM-DD format>&endDate=<\your date in the same format than previously>&period=<\any integer starting from 1 and ending at (endDate-startDate)*48><br>
<h4>Structure</h4>
As it was a simple route, I did not export routes in a separate route.js file, as I did not create a src folder. I still operate the controller of the routes on a separate controller.js file to keep index.js as clean as it should be. Same thing for the request to the API itself, I isolated it on a model.js file : the manipulation of the responded data on the controller is complex enough to try to keep it a bit cleaner when possible.<br><br>
I hope I will have performed well ! I had fun, though !
