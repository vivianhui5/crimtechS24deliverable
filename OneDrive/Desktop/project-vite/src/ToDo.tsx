// In ToDo.js
// takes 2 props, text = what text to display and onDelete = reference to function for deleting specific key
export default function ToDo({text,onDelete,}: {text: string; onDelete: () => void;}) {
    return (
      <li>
        {text}
        <button onClick={onDelete} style={{ marginLeft: '10px' }}>delete</button>
      </li>
    );
  }
  

  