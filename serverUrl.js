const http=require('http');
const url=require('url');
// console.log(http);
const server = http.createServer((req, res)=>{
       const address_url= 'http://localhost:5000/contact?name=ranjit&country=bangladesh';
       const parsed_url = url.parse(address_url,true)
    //    console.log(parsed_url);
    const queryObject = parsed_url.query
    console.log(queryObject);
    res.end()
})
const PORT = 5000;
server.listen(PORT);
console.log(`server is running at ${PORT}`);