const http = require('http');

const server = http.createServer((req, res) => {
    // console.log(req);
    if (req.url === '/') {  // if req.url === homepage
        res.end('Welcome to our homepage')
    }
    else if (req.url === '/about') {
        res.end('Here is the about page')
    }
    else {
        res.end(
            `<h1>Oops! THe page you are requesting does not exist.</h1>
            <p>We can't seem to find the page you are looking for</p>
            <a href="/">back home</a>`
        )
    }
});

server.listen(5000);

