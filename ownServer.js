const http=require('http');

// console.log(http);
const server = http.createServer((req, res)=>{
    if(req.url=='/'){
        // sent data json formate
        res.writeHead(200,{'Content-Type':'application/json'});
        res.end(JSON.stringify({course:"Javascript"}));
    }else if(req.url=='/about'){
        res.writeHead(200,{'Content-Type':'Text/html'});
        res.write("<h1> This is About Page</h1>")
        res.end();
    }else if(req.url=='/contact'){
        res.writeHead(200,{'Content-Type':'Text/html'});
        res.write('<h1>This is contact page</h1>')
        res.end();
    }
})
const PORT = 5000;
server.listen(PORT);
console.log(`server is running at ${PORT}`);

