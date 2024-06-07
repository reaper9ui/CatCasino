

const checkStatus = response => {
    if (response.ok) {
        console.log("we r  in" );
    console.log("returned nicely" );
    return response;
    }
//    if error it will return error
    const error  = new Error(response.statusText) ;
    error. response = response;
    return Promise.reject(error);
}    

export const createUser = user => {
    console.log("createUser called with:", user);
    return fetch ( "/api/v1/users",  {/*  options part of fetch method {}  */
    method: 'POST',  
    headers: {
    'Content-Type': 'application/json'
    },
    body: JSON.stringify(user),
    }
    ).then(checkStatus);
}

export const checkUser = user => {
    console.log("Stringifeid: ", user.username);
    return fetch(`/api/v1/users/${user.username}`, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json'
        }
    })
};

