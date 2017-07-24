const http = require("http");
const server = http.createServer();
server.listen(8200);
const users = [];

server.on("request", (req, res) => {
    switch (req.method){
        case 'GET':
            console.log(req.method);
            console.log('getting user');
            res.statusCode = 200;
	    res.end(JSON.stringify(users));
        break
        case 'POST':
            console.log('creating user');
            req.on('data', (err, data) => {
                console.log(err);
                console.log(data);
            })
         break
    }
})
