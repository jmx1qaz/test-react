export const get = async (url, query) => {
    return fetch(url, {
        cache: 'no-cache',
        credentials: 'same-origin',
        method: 'GET',
        mode: 'cors',
        redirect: 'follow',
        referrer: 'no-referrer',
      })
    .then((response) => {
        if (response.status === 200) {
            return response.json()
        }
    })
    .then(json => ({
        status: true,
        data: json
    }))
    .catch(err => {
        console.error('err:', err)
        return {
            status: false,
            msg: err
        }
    })
}

