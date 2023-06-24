const http=require('http');
const fs = require('fs')
const server = http.createServer((req, res)=>{
     if(req.url ='/'){
        // fs.readFile('data.txt',(err, data)=>{
        //     if(err){
        //         res.write("fail to read data!!!")
        //         res.end()
        //     }else{
        //         res.write(data)
        //         res.end()
        //     }
        // })
        fs.writeFile('NewData2.txt', "Hello New data Node js for write data",(err)=>{
            if(err){
                res.write("fail to write data!!!")
                res.end()
            }else{
                res.write('New data written successfully')
                res.end()
            }
        })
     }
})
const PORT = 5000;
server.listen(PORT);
console.log(`server is running at ${PORT}`);