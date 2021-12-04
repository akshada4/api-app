export const generateFetchOptions = ({method, authType, password, username, token, contentType }) => {
    let headers = new Headers

    if (authType === 'bearerToken' && token)
        headers.append('Authorization', `Bearer ${token.trim()}`)
    else if (authType === 'basicAuth')
        headers.append('Authorization', `Basic ${Base64.btoa(username+':'+password)}`)

    const options = {
        method: method,
        mode: 'cors'
    }

    switch(method){
        case 'GET': {
            headers.append('Accept', '*/*')
        }
    }
    options.headers = headers
    return options
}