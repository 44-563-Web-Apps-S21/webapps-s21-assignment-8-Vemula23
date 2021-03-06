const http = require('http')    //Pull in a useful node package
                                
const hostname = process.env.hostname || '127.0.0.1'    //get our ip address from the environment
const port = process.env.port || 3001               //and the port

const server =
  http.createServer(            //Creates the response loop
    (req,res)=> {               //Anonymous function to handle the request
      res.statusCode = 200      //code for OK
      res.setHeader('Content-Type', 'text/html') //Set the mime type HTML

      res.write('<html> <head> <title> Served </title> </head>')
      res.write('<body>')
      res.write('<table>\n')
      res.write('<tr>')
      res.write('<th>Location</th>')
      res.write('<th>Number of hours to be spent</th>')
      res.write('<th>Amount</th>')
      res.write('</tr> \n')
      res.write('<tr>') 
      res.write('<td>Amaravati</td>')
      res.write('<td>2 hrs</td>')
      res.write(' <td>6000</td>')
      res.write('</tr> \n')
      res.write('<tr>')
      res.write('<td> PVR Mall</td>')
      res.write('<td>3 hrs</td>')
      res.write(' <td>20000</td>')
      res.write('</tr> \n')
      res.write('<tr>')
      res.write('<td>Nagarjuna Sagar</td>')
      res.write('<td>3 hrs</td>')
      res.write(' <td>5000</td>')
      res.write('</tr> \n')
      res.write('<tr>')
      res.write('<td>Prakasam Barriage</td>')
      res.write('<td>1 hr</td>')
      res.write(' <td>2000</td>')
      res.write('</tr> \n')
      res.write('</table>')
      
      res.end('</body></html>')
      //Close the response
    }                           
)

server.listen(port, hostname, () => {   //Start the server
  console.log(`Server running at http://${hostname}:${port}/`)  //Log the request
})