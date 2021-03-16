const http = require('http')    //Pull in a useful node package
                                
const hostname = process.env.hostname || '127.0.0.1'    //get our ip address from the environment
const port = process.env.port || 3001               //and the port

const server =
  http.createServer(            //Creates the response loop
    (req,res)=> {               //Anonymous function to handle the request

        var ArrayStrings = ["good","fortune","jokes","naughty","smart","innocent"];
var LowValue = 0;

var HighestValue = Array.length;
var value=Math.floor(Math.random()*( HighestValue-LowValue)+LowValue)
      res.statusCode = 200      //code for OK
      res.setHeader('Content-Type', 'text/html') //Set the mime type HTML
      res.write('<html> <head> <title> Bonus page </title> </head>')
      res.write('<body>')
      res.write('<h1 random number usage from bonus page</h1><br>')  
      res.write(`<p>${ArrayStrings[value]}</p>`)
      res.end('</body></html>') 
    }                           
)
server.listen(port, hostname, () => {   //Start the server
  console.log(`Server running at http://${hostname}:${port}/`)  //Log the request
})