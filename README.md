To run This code on local environment just download the zip code. 
Then within same directory run 'npm install' this will install all the dependencies needed. 
Once the environment is ready run 'node server.js' this will start the server.
To access the API  test them just simply hit 'http://localhost:5000/api/supplier/query' for local environment.

I have deployed my backend on live server so can just simply hit my API from postman or any other tool to test.
API URL : https://makersharks-assignment-backend.onrender.com/api/supplier/query
Request body :
{
   "manufacturing_processes":"coating",
   "location":"Pune",
   "nature_of_business":"small_scale"
  
}
