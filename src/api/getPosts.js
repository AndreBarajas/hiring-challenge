
const getPosts = async () => {
    return await fetch('https://jsonplaceholder.typicode.com/posts/')
        .then(response => response.json())
        .catch(error => console.log(error))
    
};

console.log(getPosts())


export default getPosts;

