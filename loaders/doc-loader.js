module.exports = function (source, map) {
    this.callback(null, `export default function (Component) { Component.options__docs = ${JSON.stringify(source)}}`, map)
}