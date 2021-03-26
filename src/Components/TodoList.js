
import Button from './Button'
const TodoList = (props) => {
    const list = () => {
        return (<div className="todo-list">
            <ul>
            {props.items.map((item, index) => (<li key = {index}>
                    {item}
                    <Button text="del" />
                </li>
            ))}
            </ul>

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
