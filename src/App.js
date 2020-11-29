import "./App.css";
import React from "react";
import TaskList from "./components/TaskList";
import TaskCounter from "./components/TaskCounter";
import NewToDo from "./components/NewToDo";
import OverWork from "./components/OverWork";
import Footer from "./components/Footer";
import { useTasks } from "./hooks/usetasks";
import NewTasks from "./components/newJasonTasks";

function App() {
  <useTasks />;

  const { tasks, pagination, search } = useTasks();

  return (
    <div className="App">
      <h1 className="title">What do you want to do today?</h1>

      <NewToDo tasks={tasks} />

      <h3>Search Bar</h3>
      <input
        className="searchBar"
        placeholder="What do you want to search? "
        onKeyPress={(e) => {
          if (e.code === "Enter") {
            search.setSearch(e.target.value);
            pagination.reset();
            
                        
          }
        }}
      />
      
      <NewTasks tasks={tasks}/>  
      <TaskCounter tasks={tasks} />
      <OverWork tasks={tasks} />

      <TaskList tasks={tasks} />

      <Footer tasks={tasks} pagination={pagination} />
    </div>
  );
}
export default App;
