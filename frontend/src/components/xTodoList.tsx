import {TodoItem} from './xTodoItem'
import {ITodo} from '../types/data'

interface ITodoListProps {
    items: ITodo[];
}

const TodoList: React.FC<ITodoListProps> = (props) => {
    return <div> 
        {
            props.items.map(todo => <TodoItem key={todo.id} {...todo}/>)
        }
    </div>
}

export { TodoList }