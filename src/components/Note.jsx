//to diplay the note card with edit and delete buttons
function Note({ note, index, deleteNote, editNote }) {

    return (

        <div className="note-card">

            <p>{note}</p>

            <div className="buttons">

                <button
                    className="edit-btn"
                    onClick={() => editNote(index)}
                >
                    ✏ Edit
                </button>

                <button
                    className="delete-btn"
                    onClick={() => deleteNote(index)}
                >
                    🗑 Delete
                </button>

            </div>

        </div>

    );

}
// Export the Note component for use in other parts of the application
export default Note;