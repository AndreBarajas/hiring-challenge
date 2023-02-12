
function EditModal({clickEdit, handleModal}) {

    return (
        <>{clickEdit && 
            <div className="overlay">
                <div className="modalContainer">
                    <p>Title</p>
                    <input type='text'className="input"></input>
                    <p>Description</p>
                    <input type='text' className="input"></input>
                    <p>Categorie</p>
                    <input type='text' className="input"></input>
                    <p>Image</p>
                    <input className="input"></input>     
                    <button onClick={()=> handleModal(false)}>Cerrar</button>
                </div>
            </div>
        }
        </>
    )
}
export default EditModal;


