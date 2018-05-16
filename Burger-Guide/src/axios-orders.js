import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://burger-guide-7289f.firebaseio.com/'
});

export default instance;