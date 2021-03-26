
import Button from './Button'
const TodoList = (props) => {
    const list = () => {
        console.log(props.items)
        return (<div className="todo-list">
            {props.items.map(item => (<ul>
                <li id="todo-list-items">
                    {item}
                    <Button text="del" />
                </li>
            </ul>))}

        </div>)
    }
    return (
        <div>
    { 
    list()
    }
        </div>
    )
}

export default TodoList
