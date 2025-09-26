let http = require('http');
let url = require('url');
let { getDate } = require('./modules/utils');

const PORT = process.env.PORT || 3000;

http.createServer(function (req, res) {

    let parsedUrl = url.parse(req.url, true);
    let pathname = parsedUrl.pathname; // Get the path
    let query = parsedUrl.query; // Get query parameters

    if (req.method === 'GET' && pathname === '/COMP4537/labs/3/getDate') {

        let name = query.name;

        let currentDate = getDate();

        let message = `Hello, ${name}, What a beautiful day. Server current date and time is ${currentDate}`;
    
        res.writeHead(200, {'Content-Type': 'text/html'});
        res.end(`
            <!DOCTYPE html>
            <html>
            <head>
                <title>Lab3 Part B</title>
                <meta charset="UTF-8">
                </head>
                <body>
                <p style="color: blue; font-size: 16px;">${message}</p>
                </body>
                </html>
            `)
    }





}).listen(PORT, () => {

    console.log(`Server is running on port ${PORT}`);
    
});