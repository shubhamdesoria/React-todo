

import Header from './Components/Header'
import Input from './Components/Input'
import { useState, useEffect } from 'react'
import "./App.css"
function App() {
  const [listItems, setListItems] = useState([])

  useEffect(() => {
    const todoListItems = JSON.parse(localStorage.getItem('todolist'));
    if (todoListItems) {
      setListItems(todoListItems);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('todolist', JSON.stringify(listItems));
  }, [listItems]);

  const addTodo = (list, eindex, boolValue) => {
    if (boolValue === true) {
      let newList = [...listItems];
      newList.map(i => {
        if (newList.indexOf(i) === eindex) {
          i.item= list;
        }
        return (i)
  
      })
      setListItems(newList)
    }

    else {
      const li = {
        item: list,
        complete: false
      }
      let lists = [...listItems, li]
      setListItems(lists);
    }

  }
  const inputDelete = (eindex) => {
    let newList = [...listItems.filter((item) =>
      listItems.indexOf(item) !== eindex
    )];
    setListItems(newList)
  }
  const markComplete = (eindex) => {
    let newList = [...listItems];
    newList.map(i => {
      if (newList.indexOf(i) === eindex) {
        i.complete = !i.complete;
      }
      return (i)

    })

    setListItems(newList)
  }


  return (
    <div className="App">
      <Header />
      <Input addTodo={addTodo} listItems={listItems} inputDelete={inputDelete} markComplete={markComplete} />
    </div>
  );

}
export default App;
