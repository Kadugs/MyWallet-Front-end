import axios from 'axios';

const BASE_URL = "http://localhost:4000";

function createHeaders(token) {
    const config = {
        headers: {
            Authorization: `Bearer ${token}` 
        }
    }
    return config;
}

function signUp(body) {
    return axios.post(`${BASE_URL}/sign-up`, body);
}
function signIn(body) {
    return axios.post(`${BASE_URL}/sign-in`, body);
}

function getTransactions(token) {
    const config = createHeaders(token);
    return axios.get(`${BASE_URL}/transactions`, config);
}
function postTransaction(body, token) {
    const config = createHeaders(token);
    return axios.post(`${BASE_URL}/transactions`, body, config);
}
function signOut(token) {
    const config = createHeaders(token);
    return axios.delete(`${BASE_URL}/sign-out`, config);
}

export {
    signUp,
    signIn,
    getTransactions,
    postTransaction,
    signOut,
}