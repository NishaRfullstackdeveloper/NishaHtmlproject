// IMPOPRTING HTTP  MODULE
const http =  require("http");
// create server

let server = http.createServer((request, response) => {
response.write("<h1> hello world</h1>");
response.end();
});

// specify address and port
const address =  "127.0.0.1";
const port = 4000;

// listening to port 
server.listen(port, address, ()=> {
    console.log("server is runnig at http://" + address + ":" + port);
} );