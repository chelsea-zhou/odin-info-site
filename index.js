/*

server listens to http request
when backend receives a request: verb + uri 
it serves the right content

frontend should be able to send the right request when page is clicked
*/ 

const http = require("http");
const url = require("url");
const fs = require("fs");

const page404 = fs.readFileSync("404.html", "utf-8");

http.createServer((req, res) => {
    const q = url.parse(req.url, true);
    console.log(q);
    let filename ='./';
    if (q.pathname === '/') {
        filename += "index.html";
    } else {
        filename += q.pathname + '.html';
    }

    fs.readFile(filename, (err, data) => {
        if (err) {
            res.writeHead(404, {"Content-Tyle": "text/html"});
            res.write(page404);
            return res.end();
        } else {
            res.writeHead(200, {"Content-Tyle": "text/html"});
            res.write(data);
            return res.end();
        }
    });
}).listen(8000);