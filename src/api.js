import axios from 'axios'

const baseUrl = 'http://127.0.0.1:8000/'

export const getToken = ({ auth, username, password }) => {
    axios.post(`${baseUrl}/token/`, {
        username,
        password,
    }) .then(response => {
        auth.setAccessToken(response.data.access)
    })
    .catch(error => console.log('Error: ', error))
}

