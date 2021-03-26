
import Header from './Components/Header'
import Input from './Components/Input'
import { useState } from 'react'
function App() {
  const [listItems, setListItems] = useState([])

  const addTodo = (list) => {
    
    let lists =[...listItems, list]
    setListItems(lists);
      
    } 
  

return (
  <div className="App">
    <Header />
    <Input addTodo={addTodo} listItems={listItems} />
  </div>
);
  
}
export default App;
