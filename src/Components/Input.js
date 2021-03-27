// import Button from './Button'
import {useState} from "react"
import TodoList from './TodoList'
const Input = (props) =>{
const [title, setTitle] = useState("")

const onSubmit = (e) => {
    e.preventDefault()
   props.addTodo(title);
   setTitle("");
  

}
// setTitle(title);

return (
    <div>
        <form onSubmit={onSubmit}>
            <input type="text" value = {title} onChange ={e => setTitle(e.target.value)} />
            {/* <Button text="Add" onClick={onClick} /> */}
        </form>
        <TodoList items = {props.listItems}/>
    </div>

)}
export default Input;
