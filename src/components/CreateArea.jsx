import React, { useState } from "react";
import AddIcon from '@material-ui/icons/Add';
import Fab from '@material-ui/core/Fab';
import Zoom from '@material-ui/core/Zoom';


function CreateArea(props) {

    const [isNormal, setNormal] = useState(false);

    const [note, setNote] = useState({
      title: "",
      content: ""
    });

  function handleChange(event){
    const {name, value} = event.target;

    setNote(prevNote => {
      return {
        ...prevNote, 
        [name]: value
      };
    });
  }

  function handleClick(event){
    props.onAdd(note);
    
    setNote({
      title: "",
      content: ""
    });
    
    event.preventDefault();

  }

  function normalize(){
    setNormal(true);
  }

  return (
    <div>
      <form className="create-note">
        {isNormal ? <input onChange={handleChange} name="title" placeholder="Title" value={note.title}/> : null}
        <textarea onClick={normalize} onChange={handleChange} name="content" placeholder="Take a note..." rows={isNormal ? 3 : 1} value={note.content} />
        <Zoom in={isNormal} timeout={500}><Fab onClick={handleClick}><AddIcon /></Fab></Zoom>
      </form>
    </div>
  );
}

export default CreateArea;
