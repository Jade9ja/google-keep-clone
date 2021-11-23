import React from "react";

function Note(props) {
  function handleClick() {
    props.onDelete(props.id);
  }

  return (
    <div className="note">
      <h1>{props.title}</h1>
      <p>{props.content}</p>
      <button onClick={handleClick}><img src="https://img.icons8.com/external-kiranshastry-lineal-kiranshastry/32/000000/external-delete-miscellaneous-kiranshastry-lineal-kiranshastry.png"/></button>
    </div>
  );
}

export default Note;
