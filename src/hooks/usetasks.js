import React, {useEffect, useState}from "react";
import data from "../tasks.json";

const lastId = tasks => Math.max(...tasks.map(task => task.id));

export const useTasks = () => {

  const PageSize = 10;
  const [totaltasks, setTotalTasks] = React.useState(data.tasks);
  const [newTotalTasks, setNewTotalTasks] = React.useState("");
  const [page, setPage] = React.useState(0);
  const [search, setSearch] = React.useState("");
  const [id, setID] = React.useState(lastId(data.tasks)+1);
  const filteredTasks = totaltasks.filter((task) =>
    task.title.toLowerCase().includes(search.toLowerCase())
  );
  const notDone = totaltasks.filter(x=> !x.completed);
  const [taskLeft, setTaskLeft] = useState('');
  const filterPageTasks = filteredTasks.slice(
    page * PageSize,
    (page + 1) * PageSize
  );
  const lastPage = Math.ceil(filteredTasks.length / PageSize);
  const Clean = () => {
    const newTotalTask = totaltasks.filter(task => !task.completed);
    setTotalTasks(newTotalTask);
  }
  const addTask = title => {
    const task = {id:id, title, completed: false};
    setTotalTasks([task, ...totaltasks]);
    setID(id+1);
        
  }
  const checkTask = id =>{
    const task = totaltasks.find(x => x.id === id);
    task.completed = !task.completed;
    setTotalTasks([...totaltasks]);
  }
  const deleteTask = id =>{
    const finalTask = totaltasks.filter(task => task.id !== id);
    setTotalTasks(finalTask);
  }
  useEffect(() => {
    const leftTasks = totaltasks.filter(x=> !x.completed).length;
    setTaskLeft(leftTasks);
    document.title = `${taskLeft} tasks left`;

  },[notDone]);

  async function RequestTasks(url){
    const response = await fetch(url);
    const data = await response.json();
    return data;

  }
  async function JsonTasks(){
    return RequestTasks("https://jsonplaceholder.typicode.com/todos");
        
  }
  useEffect(() =>{
    JsonTasks().then((newData) => {
      setNewTotalTasks(newData);
      
    });

  },[]);
  const newTasks = () =>{

    const newTT = newTotalTasks.slice(0, 10);     
    console.log(newTT);
    setTotalTasks(newTT);

  }
 
  return {
    search: {
      value: search,
      setSearch,
    },
    tasks: {
      taskList: totaltasks,
      setTotalTasks,
      filteredTasks,
      filterPageTasks,
      Clean,
      addTask,
      checkTask,
      deleteTask,
      newTasks
      
      
    },
    pagination: {
      page,
      isLastPage: page === lastPage,
      isFirstPage: page === 0,
      PageSize,
      lastPage,

      nextPage: () => {
        if (page + 1 < lastPage) {
          setPage(page + 1);
        }
      },
      prevPage: () => {
        if (page > 0) {
          setPage(page - 1);
        }
      },
      reset: () => setPage(0),
    },
  };
};
