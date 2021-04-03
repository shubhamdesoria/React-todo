
const TodoList = (props) => {

    // const [complete, setcomplete] = useState(false)
    // console.log(props.items);
    const onClickEdit = (item, index) =>{
        props.inputEdit(item, index);
    }
    const onClickDel = (index) =>{
    props.inputDel(index)
    }
    const onCheck = (index) =>{
        props.markComplete(index)
    } 
    // const onCheck = () =>{
        // let newComplete = complete;
        // setcomplete(!newComplete);

    //     if(!newComplete){
    //         setcomplete(true);
    //  }
    //  else{
    //      setcomplete(false);
    //  }
    // }
   const checkStyle = (e) =>  {
            return{textDecoration : e.complete ? 'line-through': 'none'}
    }
        // return(
        //     checkStyle()
        // )
    
    
    
    const list = () => {
        return (<div className="todo-list">
            <ul>
                {props.items.map((titem, index) => (<li key={index}  >
                    <label style = {checkStyle(titem)}>
                    <input type= "checkbox"  checked = {titem.complete} onChange = {() =>
                        onCheck(index)
                    } />
                    <span>
                    {titem.item}
                    </span>
                    </label>
                    <button onClick = {() => onClickEdit(titem.item, index)}> Edit </button> 
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
