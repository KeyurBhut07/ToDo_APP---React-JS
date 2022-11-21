import { useState } from "react";
import "./App.css";
import ToDoList from "./ToDoList";

const App = () => {
  const [inputList, setInputList] = useState("");
  const [Iteams, setIteams] = useState([]);

  const iteamEvents = (event) => {
    setInputList(event.target.value);
  };

  const listOfiteamadd = () => {
    setIteams((oldval) => {
      return [...oldval, inputList];
    });
    setInputList("");
  };

  const deleteIteams = (id) => {
    setIteams((oldItem) => {
      return oldItem.filter((arrEle, index) => {
        return id !== index;
      });
    });
  };

  return (
    <>
      <div className="main_div">
        <div className="center_div">
          <br />
          <h1>ToDo List</h1>
          <br />
          <input
            type="text"
            placeholder="Add a Iteams"
            value={inputList}
            onChange={iteamEvents}
          />
          <button onClick={listOfiteamadd}> + </button>

          <ol>
            {/* <li>{inputList}</li> */}
            {Iteams.map((itemval, index) => {
              return (
                <ToDoList
                  key={index}
                  id={index}
                  text={itemval}
                  onSelect={deleteIteams}
                />
              );
            })}
          </ol>
        </div>
      </div>
    </>
  );
};

export default App;
