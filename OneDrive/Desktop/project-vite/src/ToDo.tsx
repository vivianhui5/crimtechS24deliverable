// In ToDo.js
function ToDo({ text, onDelete }) { // Receives the onDelete prop
    return (
      <li>
        {text}
        <button onClick={onDelete} style={{ marginLeft: '10px' }}>Delete</button>
      </li>
    );
  }
  
  export default ToDo;
  