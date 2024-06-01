

const checkStatus = response => {
    if (response.ok) {
    return response;
    }
//    if error it will return error
    const error  = new Error(response.statusText) ;
    error. response = response;
    return Promise.reject(error);
}    

export const createUser = user =>
    fetch ( "/api/v1/users",  {
    headers: {
    'Content-Type': 'application/json',
    method: 'POST'} ,
    body: JSON. stringify (user),
    }
    ).then(checkStatus) ;
    