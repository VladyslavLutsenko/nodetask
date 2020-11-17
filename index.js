const http =require('http');

const server = http.createServer((req, res) => {
    if (req.url =='/') {
        res.writeHead(200, {
            "Content-type": "text/html"
        })
        res.end('<h1>Hello</h1>')
    }
    else if(req.url =='/users'){
        res.writeHead(200, {
            "Content-type": "text/json"
        })
        const users=[
            {name: "Name1", age: 19},
            {name: "Name2", age: 18}
        ]
        res.end(JSON.stringify(users));
    }
})

server.listen(3000, ()=>{
    console.log("Server running");
})