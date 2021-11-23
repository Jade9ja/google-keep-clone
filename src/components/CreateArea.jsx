import React, { useState } from "react";

function CreateArea(props) {
  const [isActive, setActive] = useState(false);
  const [note, setNote] = useState({
    title: "",
    content: ""
  });

  function activityChange() {
    setActive(true);
  }
  function handleChange(event) {
    const { name, value } = event.target;

    setNote(prevNote => {
      return {
        ...prevNote,
        [name]: value
      };
    });
  }

  function submitNote(event) {
    props.onAdd(note);
    setNote({
      title: "",
      content: ""
    });
    event.preventDefault();
    setActive(false);
  }

  return (
    <div>
      <form>
        { isActive && 
        <input
          name="title"
          onChange={handleChange}
          value={note.title}
          placeholder="Title"
        /> }
        <textarea
          name="content"
          onClick={activityChange}
          onChange={handleChange}
          value={note.content}
          placeholder="Take a note..."
          rows={isActive ? 3 : 1}
        />
        {isActive && <button onClick={submitNote}>+</button>}
      </form>
    </div>
  );
}

export default CreateArea;
