
// i am creating server on my local machine ,bss niche ke itne se cdoe se hmara laptop ek server bnn chuka h

let http = require("http") //http is a package which provides createServer() method that is used to make Server
let server = http.createServer((req,res)=>{
    console.log("hello i am server")
    res.end("ok mein yaani serever ne tmhari baat sun li")
}) // createServer accepts a callback fun , jiske andar req and res aati h

// listen() is used to on the server so that we can use it send request and receive response
server.listen(3000,()=>{
    console.log("server is running on port 3000 ")
}) // inside listen we have to pass port and a callback function(in fn we tell ki server is running)