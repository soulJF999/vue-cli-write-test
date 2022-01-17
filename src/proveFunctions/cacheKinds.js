import http from 'http'

let server = http.createServer((req, res) => {
    console.log(req.url, req.headers['if-none-match'])
    if (req.headers['if-none-match']) {
        /** 检查文件版本 */
        res.statusCode = 304
        res.end()
    } else {
        res.setHeader('Etag', '000000')
        res.end('soul.land')
    }
})

/** last-modified 与 if-modified-since */

server.listen(3333)