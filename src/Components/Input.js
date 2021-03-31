// import Button from './Button'
import {useState} from "react"
import TodoList from './TodoList'
const Input = (props) =>{
const [title, setTitle] = useState("")
const [eindex, setIndex] = useState(null)

const onSubmit = (e) => {
    e.preventDefault()
    if(title !== "" && title.trim().length !== 0){

        props.addTodo(title, eindex);
    }
    setTitle("");
  

}
const InputEdit = (item, index) =>{
setTitle(item);
setIndex(index);
}
// setTitle(title);

return (
    <div>
        <form onSubmit={onSubmit}>
            <input type="text" value = {title} onChange ={e => setTitle(e.target.value)} />
            <input type="submit" value = "Submit" />
           
        </form>
        <TodoList items = {props.listItems} inputEdit = {InputEdit} inputDel = {props.inputDelete}/>
    </div>

)}
export default Input;
