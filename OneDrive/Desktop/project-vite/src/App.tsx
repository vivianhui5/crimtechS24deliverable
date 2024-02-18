import { useState } from "react";

function App() {

    const [todos, setToDos] = useState(['Do the dishes.', 'Finish this project.']);

    // State for the input text
    const [inputText, setInputText] = useState('');

    // Handle input text change
    const handleInputChange = (event) => {
      setInputText(event.target.value);
    };

  const handleSubmit = (event) => {
    event.preventDefault(); // Prevents form from refreshing the page
    // Adds the new task if inputText is not empty
    if (inputText.trim() !== '') {
      setToDos([...todos, inputText]);
      setInputText(''); // Clear the input after adding
    } else {
      alert("Can't add an empty task, let's be productive! 😄");
    }
  };


    // TODO: make components needed for TODO
  return (
    <>
      <ul>
        {todos.map((todo, index) => (
          <li key={index}>{todo}</li> 
        ))}
      </ul>


      <form onSubmit={handleSubmit}
       style={{
         marginTop: '10px',
       }}>
        <input value={inputText} onChange={handleInputChange} />
        <button type="submit">Create Task</button>
      </form>

      
    </>
  )
}

export default App
