import axios from 'axios'

export default axios.create({
    baseURL:'https://api.unsplash.com',
    headers:{
        Authorization: 'Client-ID RzBd-iTMNSWmWeDkKyfGSTQya68CYnbHRBFyvwJ2nP4'
    }
})