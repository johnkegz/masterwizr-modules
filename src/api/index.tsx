export const getImages = async () => {
    return fetch('https://jsonplaceholder.typicode.com/photos')
        .then(response => response.json())
        .then(data => data);
}
