import  getPosts  from "../api/getPosts"
import { useEffect, useState } from "react";

function Home() {
    const [post, setPost] = useState([]);

    console.log("post", post)
    
    useEffect(() => {
    getPosts().then(setPost)
    }, [])
    
    return (
        <div className='postsContainer'>
            {post.map((element, index) => (
            <div className='postContainer'>
                    <img src='https://source.unsplash.com/random' alt='background'></img>
                    <h4 className='postTitle'>{element.title}</h4>
                    <h4 className='postBody'>{element.body}</h4>
            </div>
            )   )}
        </div>
)
}

export default Home;