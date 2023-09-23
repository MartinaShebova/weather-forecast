import axios from 'axios';

export function getRequest(endpointUrl) {

    return new Promise((resolve, reject) => {
        axios({
            method: 'get',
            url: endpointUrl,
        })
            .then((data) => {
                resolve(data.data);
            })
            .catch((error) => {
                reject(error);
            })
    });
}

export function postRequest(endpointUrl, dataToSend) {
    return new Promise((resolve, reject) => {
        axios({
            method: 'post',
            url: endpointUrl,
            data: dataToSend
        })
            .then((data) => {
                resolve(data.data);
            })
            .catch((error) => {
                reject(error);
            })
    });
}