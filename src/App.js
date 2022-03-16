import logo from "./logo.svg";
import "./App.css";
import { useState } from "react";

function App() {
  const listItem = {
    title: "",
    time: "",
  };

  const style = {
    container: {
      color: "black",
    },
    heading: {
      color: "green",
    },
  };

  const [title, setTitle] = useState("");
  const [time, setTime] = useState("");
  const [todo, setTodo] = useState([listItem]);

  const addNewEvent = () => {
    let newItem = listItem;
    newItem.time = time;
    newItem.title = title;

    setTodo([...todo, newItem]);
  };

  const deleteItem = (id) => {
    let newTodo = todo;
    newTodo.splice(id, 1);
    setTodo([...newTodo]);
    // console.log(newTodo);
  };
  return (
    <div className="App">
      <header className="App-header">
        <h2>To-Do application</h2>
        <input
          placeholder="Enter title"
          value={title}
          onChange={(e) => {
            setTitle(e.currentTarget.value);
          }}
        />
        <input
          placeholder="Enter time"
          value={time}
          onChange={(e) => setTime(e.currentTarget.value)}
        />
        <button
          onClick={() => {
            addNewEvent();
          }}
        >
          +
        </button>

        {todo.map((item, ind) => {
          return (
            <div key={ind}>
              <p>{ind}</p>
              <p style={style.container}>{item.time}</p>
              <p style={style.container}>{item.title}</p>
              <button onClick={() => deleteItem(ind)}>Delete</button>
            </div>
          );
        })}
      </header>
    </div>
  );
}

export default App;
