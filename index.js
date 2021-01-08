const http=require('http')
const server=http.createServer((req,res)=>{
      console.log(req.headers)
      res.setHeader('Content-Type',"text/html")
      res.end("Successfully started")
})
server.listen(3000)