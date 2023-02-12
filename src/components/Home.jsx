import  getPosts  from "../api/getPosts"
import { useEffect, useState } from "react";
import EditModal from "./EditModal";
import { click } from "@testing-library/user-event/dist/click";

function Home() {
    const [post, setPost] = useState([]);
    const [clickEdit, setClickEdit] = useState(false)
    console.log("boton editar", clickEdit)

    const handleModal = (state) => {
        setClickEdit(state)
    }; 
    
    useEffect(() => {
    getPosts().then(setPost)
    }, [])
    
    return (
     <div>
        <div className='containerEdit'>
            <button className='editIcon' onClick={() => handleModal(true)}>Editar</button>
        </div> 

        <div className='postsContainer'>

                <EditModal clickEdit={clickEdit} handleModal={handleModal} />
                {post.map((element, index) => (
                    <div className='postContainer'>
                        <img src='https://source.unsplash.com/random' alt='background'></img>
                        <h4 className='postTitle'>{element.title}</h4>
                        <h4 className='postBody'>{element.body}</h4>
                    </div>
                ))
                }

        </div> 
     </div>   
         
   
)
}

export default Home;