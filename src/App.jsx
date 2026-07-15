import { useState, useEffect } from "react";
import "./App.css";
import Note from "./components/Note";

function App() {
// State variables for notes, text input, and edit index
  const [notes, setNotes] = useState([]);
  const [text, setText] = useState("");
  const [editIndex, setEditIndex] = useState(null);
// Load notes from localStorage on component mount
  useEffect(() => {
    const savedNotes = JSON.parse(localStorage.getItem("notes"));

    if (savedNotes) {
      setNotes(savedNotes);
    }
  }, []);
// Save notes to localStorage whenever the notes state changes
  useEffect(() => {
    localStorage.setItem("notes", JSON.stringify(notes));
  }, [notes]);
// Function to add or update a note
  function addNote() {

    if (text === "") {
      alert("Please enter a note");
      return;
    }

    if (editIndex !== null) {

      let updatedNotes = [...notes];
      updatedNotes[editIndex] = text;

      setNotes(updatedNotes);
      setEditIndex(null);

    } else {

      setNotes([...notes, text]);

    }

    setText("");
  }

  function deleteNote(index) {

    let updatedNotes = notes.filter((note, i) => i !== index);

    setNotes(updatedNotes);
  }

  function editNote(index) {

    setText(notes[index]);

    setEditIndex(index);
  }

  return (

    <div className="container">

      <h1> Notes App</h1>

      <textarea
        placeholder="Write your note..."
        value={text}
        onChange={(e) => setText(e.target.value)}
      />

      <br />

      <button onClick={addNote}>
        {editIndex !== null ? "Update Note" : "Add Note"}
      </button>

      <div className="notes">

        {notes.map((note, index) => (

          <Note
            key={index}
            note={note}
            index={index}
            deleteNote={deleteNote}
            editNote={editNote}
          />

        ))}

      </div>

    </div>

  );

}

export default App;
