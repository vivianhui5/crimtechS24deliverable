import { useState } from "react";
import Modal from "./components/Modal";
import ToDo from "./ToDo"; // Adapt the location to your strategy

function App() {
  const [todos, setTodos] = useState(['Do the dishes.', 'Finish this project.']); // Minor variable name standardization
  const [inputText, setInputText] = useState('');

  const handleInputChange = (event) => {
    setInputText(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (inputText.trim() !== '') {
      setTodos([...todos, inputText]);
      setInputText('');
    } else {
      alert("Can't add an empty task, let's be productive! 😄");
    }
  };

  // Match index and filter by index
  const handleDelete = (indexToDelete) => {
    setTodos(todos.filter((_todo, index) => index !== indexToDelete));
  };

  return (
    <>
      <ul>
        {todos.map((todo, index) => (
          <ToDo key={index} text={todo} onDelete={() => handleDelete(index)} />
        ))}
      </ul>
      <form onSubmit={handleSubmit} style={{marginTop: '10px'}}>
        <input value={inputText} onChange={handleInputChange} />
        <button type="submit">Create Task</button>
      </form>
      <Modal />
    </>
  );
}

export default App;
