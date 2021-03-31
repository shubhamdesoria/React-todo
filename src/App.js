
import Header from './Components/Header'
import Input from './Components/Input'
import { useState } from 'react'
function App() {
  const [listItems, setListItems] = useState([])

  const addTodo = (list, eindex) => {
    
    if(eindex == null){
      let lists =[...listItems, list]
      setListItems(lists);
    }
    else{
      let newList =[...listItems];
      newList[eindex] = list;
      setListItems(newList)
    }
      
    } 
    const inputDelete = (eindex) => {
      let newList =[...listItems.filter((item)=>
        listItems.indexOf(item) !== eindex
      )];
      setListItems(newList)
    }
  

return (
  <div className="App">
    <Header />
    <Input addTodo={addTodo} listItems={listItems} inputDelete = {inputDelete} />
  </div>
);
  
}
export default App;
