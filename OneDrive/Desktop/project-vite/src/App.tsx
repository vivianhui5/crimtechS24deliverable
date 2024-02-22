import { useState } from "react";
import Modal from "./components/Modal";
import ToDo from "./ToDo"; 

function App() {
  const [todos, setTodos] = useState(['do the dishes.', 'finish this project.']); 
  const [inputText, setInputText] = useState('');

  // event handler to display text as user types in form
  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputText(event.target.value);
  };

  // adds new item to todos list
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (inputText.trim() !== '') {
      setTodos([...todos, inputText]);
      setInputText('');
    } else {
      alert("please add a task");
    }
  };

  // filter by index
  const handleDelete = (indexToDelete: number) => {
    setTodos(todos.filter((_todo, index) => index !== indexToDelete));
  };

  return (
    <>
      {/* maps all todos to a ToDo component and displays */}
      <ul>
        {todos.map((todo, index) => (
          <ToDo key={index} text={todo} onDelete={() => handleDelete(index)} />
        ))}
      </ul>

      {/* form for adding new todos */}
      <form onSubmit={handleSubmit} style={{marginTop: '10px'}}>
        <input value={inputText} onChange={handleInputChange} />
        <button type="submit">create task</button>
      </form>
      <Modal />
    </>
  );
}

export default App;
