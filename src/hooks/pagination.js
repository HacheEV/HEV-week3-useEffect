import React, {useEffect, useState}from "react";
import data from "../tasks.json";

const lastId = tasks => Math.max(...tasks.map(task => task.id));

export const usePagination = () => {

  const PageSize = 10;
  const [totaltasks, setTotalTasks] = React.useState(data.tasks);
  const [page, setPage] = React.useState(0);
  const [search, setSearch] = React.useState("");
  const [id, setID] = React.useState(lastId(data.tasks)+1);
  const filteredTasks = totaltasks.filter((task) =>
    task.title.toLowerCase().includes(search.toLowerCase())
  );
  const [taskLeft, setTaskLeft] = useState('');
  const filterPageTasks = filteredTasks.slice(
    page * PageSize,
    (page + 1) * PageSize
  );
  const lastPage = Math.ceil(filteredTasks.length / PageSize);
  const Clean = () => {
    const newTotalTask = totaltasks.filter(task => !task.done);
    setTotalTasks(newTotalTask);
  }
  const addTask = title => {
    const task = {id:id, title, done: false};
    setTotalTasks([task, ...totaltasks]);
    setID(id+1);
    
  }
  const checkTask = id =>{
    const task = totaltasks.find(x => x.id === id);
    task.done = !task.done;
    setTotalTasks([...totaltasks]);
  }
  const deleteTask = id =>{
    const finalTask = totaltasks.filter(task => task.id !== id);
    setTotalTasks(finalTask);
  }
  useEffect(() => {
    const leftTasks = totaltasks.filter(x=> !x.done).length;
    setTaskLeft(leftTasks);
    document.title = `${taskLeft} tasks left`;

  },[totaltasks.filter(x=> !x.done)]);
 
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
