const http = require("http")
const url = require('url')
// console.log("I am trying to print http object")
// console.log(http)
// const homeApi = function(request , response){
//     console.log("Hey I am homeApi and I got called by the client")
//     response.write("Hey I am Home API, and I am the response from the backend")
//     response.end()
// }

const server=http.createServer((request,response) => {

if(request.method=='GET'){
    response.write("Gotcha.. you did a get request")
    response.end()
 }
 if(request.method=='POST'){
    response.write("Gotcha.. you did a post request")
    response.end()
 }
 if(request.method=='DELETE'){
    response.write("Gotcha.. you did a delete request")
    response.end()
 }
 if(request.method=='PUT'){
    response.write("Gotcha.. you did a put request")
    response.end()
 }
 if(request.method=='PATCH'){
    response.write("Gotcha.. you did a patch request")
    response.end()
 }
 
} ) //http://localhost:8080/
server.listen(8080)  

