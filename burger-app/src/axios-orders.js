import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://react-my-burger12.firebaseio.com/'
});

export default instance;