
function EditModal({clickEdit, handleModal}) {

    return (
        <>{clickEdit && 
            <div className="overlay">
                <div className="modalContainer">
                    <button onClick={()=> handleModal(false)}>Cerrar</button>
                </div>
            </div>
        }
        </>
    )
}
export default EditModal;


