

const TodoItem: React.FC<{text:string}> = (props)=> {
    // theoretisch hätte man auch id als key prop weitergeben können-reicht aber durch spezial key prop so auch aus
    return (
        <li>
        {props.text}
        </li>
    )
}

export default TodoItem;