const http = require("http");

let server = http.createServer((req, res) => {
    res.setHeader("Content-Type", "text/html"); // Set content type first
    if(req.url==="/students"){

    res.write("<!DOCTYPE html>"); // Fixed DOCcc  TYPE
    res.write("<html lang='en'>");
    res.write("<head>");
    res.write("<title>Document</title>");
    res.write("</head>");
    res.write("<body>");
    res.write("<h1> THIS IS MY FIRST NODE JS PROJECT</h1>");
    res.write("<form action=''>");
    res.write("<label for='name'>username</label>");
    res.write("<input type='text' placeholder='enter your username'>"); // Fixed typo in placeholder
    res.write("<br><br>");
    res.write("<label for='password'>password</label>");
    res.write("<input type='password' placeholder='enter your password'>"); // Changed to password input
    res.write("<br><br>");
    res.write("<button type='submit'>submit</button>"); // Added type attribute
    res.write("</form>"); // Closing form tag
    // res.write("<iframe src='https://getbootstrap.com/' frameborder='1' height='100%' width='100%'></iframe>");
    res.write("</body>");
    res.write("</html>");
    
    res.end(); 
    }
    else{
       
    res.write("<!DOCTYPE html>"); // Fixed DOCcc  TYPE
    res.write("<html lang='en'>");
    res.write("<head>");
    res.write("<title>Document</title>");
    res.write("</head>");
    res.write("<body>");
    res.write("<h1> THIS IS MY FIRST NODE JS PROJECT</h1>");
    res.write("<ul><li>neera rhul chapke</li><li>neera rhul chapke</li><li>neera rhul chapke</li><li>neera rhul chapke</li><li>neera rhul chapke</li><li>neera rhul chapke</li><li>neera rhul chapke</li></ul>");
    res.write("<label for='name'>username</label>");
    res.write("<input type='text' placeholder='enter your username'>"); // Fixed typo in placeholder
    res.write("<br><br>");
    res.write("<label for='password'>password</label>");
    res.write("<input type='password' placeholder='enter your password'>"); // Changed to password input
    res.write("<br><br>");
    res.write("<button type='submit'>submit</button>"); // Added type attribute
    res.write("</form>"); // Closing form tag
    // res.write("<iframe src='https://getbootstrap.com/' frameborder='1' height='100%' width='100%'></iframe>");
    res.write("</body>");
    res.write("</html>"); 
    }
    // Ends the response
});

const port = 2314; // Make sure this matches the listening port
const address = "127.0.0.1";

server.listen(port, address, () => {
    console.log(`Server running at http://${address}:${port}/`); // Updated log message
});
