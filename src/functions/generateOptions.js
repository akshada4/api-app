export const generateOptions = ({method, authType, password, username, token, contentType, url }) => {
    let apiHeaders = {}

    if (authType === 'bearerToken' && token)
        apiHeaders.Authorization = `Bearer ${token.trim()}`
    else if (authType === 'basicAuth' && password && username)
        apiHeaders.Authorization = `Basic ${Base64.btoa(username+':'+password)}`

    switch(method){
        case 'GET': {
            apiHeaders.Accept = '*/*'
        }
    }
    
    const options = {
        method: 'POST',
        mode: 'cors',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            url: url,
            options: {
                method: method,
                headers: apiHeaders
            }
        })
    }

    return options
}