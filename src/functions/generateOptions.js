import { Buffer } from 'buffer'

export const generateOptions = ({method, authType, password, username, token, contentType='', url, body='' }) => {
    const apiBody = (method === 'POST') && { body: body }
    let apiHeaders = {}

    if (authType === 'bearerToken' && token)
        apiHeaders.Authorization = `Bearer ${token.trim()}`
    else if (authType === 'basicAuth' && password && username)
        apiHeaders.Authorization = `Basic ${Buffer.from((username+':'+password), 'utf8').toString('base64')}`
    
    switch(method){
        case 'GET': {
            apiHeaders.Accept = '*/*'
            break;
        }
        case 'POST': {
            apiHeaders['Content-Type'] = contentType
            apiHeaders['Content-Length'] = body.length
            break;
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
                headers: apiHeaders,
                ...apiBody
            }
        })
    }

    return options
}