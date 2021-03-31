
import {useState} from "react"
const TodoList = (props) => {

    const [complete, setcomplete] = useState(false)

    const onClickEdit = (item, index) =>{
        props.inputEdit(item, index);
    }
    const onClickDel = (index) =>{
    props.inputDel(index)
    }
    const onCheck = () =>{
        let newComplete = complete;
        setcomplete(!newComplete);

    //     if(!newComplete){
    //         setcomplete(true);
    //  }
    //  else{
    //      setcomplete(false);
    //  }
    }
   let checkStyle =  {
            textDecoration : complete?'line-through': 'none'
    }
        // return(
        //     checkStyle()
        // )
    
    
    
    const list = () => {
        return (<div className="todo-list">
            <ul>
                {props.items.map((item, index) => (<li key={index} style = {checkStyle}>
                    <label>
                    <input type= "checkbox"  checked = {complete} onChange = {() =>
                        onCheck()
                    } />
                    {item}
                    </label>
                    <button onClick = {() => onClickEdit(item, index)}> Edit </button> 
                    <button onClick = {() => onClickDel(index)}> Delete </button> 
                    
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

export default TodoList;
