import axios from "axios";

const BASE_URL = "http://localhost:5000";

function createHeaders() {
    const auth = JSON.parse(localStorage.getItem("myWallet"));

    if(!auth) return;

    const config = {
        headers: {
            Authorization: `Bearer ${auth.token}`
        }
    };
    return config;
};

function registerApi(body) {
    const promise = axios.post(`${BASE_URL}/register`, body);
    return promise;
};

function logInApi(body) {
    const promise = axios.post(`${BASE_URL}/session`, body);
    return promise;
};

function logOutApi() {
    const config = createHeaders();
    const promise = axios.delete(`${BASE_URL}/session`, config);
    return promise;
};

function readDataApi() {
    const config = createHeaders();
    const promise = axios.get(`${BASE_URL}/data`, config);
    return promise;
};

function newEntryApi(body) {
    const config = createHeaders();
    const promise = axios.post(`${BASE_URL}/data`, body, config);
    return promise;
};

function deleteEntryApi(id) {
    const config = createHeaders();
    const promise = axios.delete(`${BASE_URL}/data/${id}`, config);
    return promise;
}

export {registerApi, logInApi, logOutApi, newEntryApi, readDataApi, deleteEntryApi};