// import Button from './Button'
import { useState, useEffect } from "react"
import TodoList from './TodoList'
const Input = (props) =>{
const [title, setTitle] = useState("")

const onSubmit = (e) => {
    e.preventDefault()
   props.addTodo(title)
  

}
const onChange = (e) =>{
setTitle(previousState => {
    previousState = previousState + e.target.value
})


}
return (
    <div>
        <form onSubmit={onSubmit}>
            <input type="text" value = {title} onChange = {onChange} />
            {/* <Button text="Add" onClick={onClick} /> */}
        </form>
        <TodoList items = {props.listItems}/>
    </div>

)}
export default Input;
