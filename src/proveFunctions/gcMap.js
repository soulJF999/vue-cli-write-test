global.gc()

function usedSize () {
    const used = process.memoryUsage().heapUsed
    return Math.round((used / 1024 / 1024) * 100) / 100 + 'M'
}

console.log(usedSize())

var map = new Map()
var b = new Array(5 * 1024 * 1024)

map.set(b, 1)
global.gc()
console.log(usedSize())

b = null
global.gc()
console.log(usedSize())