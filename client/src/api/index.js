import axios from 'axios';

const API = axios.create({
    baseURL: 'http://localhost:3030'
});

export const login = (walletHash) => API.post('/user/login', { hash_id: walletHash });
export const getVerifierHash = (name) => API.post('/verifier/getVerifierHash', { name: name });
export const getVerifierName = (hash_id) => API.post('/verifier/getVerifierHash', { hash_id : hash_id});