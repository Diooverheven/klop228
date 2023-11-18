import http from 'node:http'

const port = 3000;

function mainHandler(request, response) {
    console.log(request.url);
    response.end('Request ${request.url} was handled')
}

const server = http.createServer(mainHandler)
server.listen(port)

