const http = require('http')
const data = require('./data.json')
const PORT = process.env.PORT || 5000

const server = http.createServer(async (req, res) => {
  if(req.url === '/api/data' && req.method === 'GET') {
    const headers = {
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'GET',
      'Content-Type': 'application/json'
    }

    res.writeHead(200, headers)
    res.end(JSON.stringify(data))
    return
  }

  res.writeHead(401)
  res.end('Error')
})

server.listen(PORT, () => {
  console.log(`server started on port: ${PORT}`)
})
