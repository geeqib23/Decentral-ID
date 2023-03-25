import { io } from 'socket.io-client';
console.log(process.env.REACT_APP_RT_SERVER_URL)

export const socket = io(process.env.REACT_APP_RT_SERVER_URL, {
    autoConnect: false
});