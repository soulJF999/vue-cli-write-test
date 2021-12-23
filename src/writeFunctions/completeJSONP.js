export const jsonp = ({ url, params, callback}) => {
    const generateUrl = () => {
        let dataSrc = ''
        for (let key in params) {
            if (Object.prototype.hasOwnProperty.call(params, key)) {
                dataSrc += `${key}=${params[key]}&`
            }
        }
        dataSrc += `callback=${callback}`
        return url + `?${dataSrc}`
    }

    return new Promise((resolve) => {
        const scriptEle = document.createElement('script')
        scriptEle.src = generateUrl()
        document.body.append(scriptEle)
        window[callback] = data => {
            resolve(data)
            document.removeChild(scriptEle)
        }
    })
}