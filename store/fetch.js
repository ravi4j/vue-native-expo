import axios from 'axios';
const baseURL = 'https://jsonplaceholder.typicode.com';

export function _fetch(path) {
    const url = `${baseURL}/${path}`;
    console.log("started : " + url);
    return axios.get(url)
        .then((response) => {
            console.log("Completed : " + url);
            return response;
        })
        .catch((error) =>
            console.log('There has been a problem with your fetch operation: ' + error.message)
        );
}

export function fetchPosts(type) {
    return _fetch(`${type}`);
}