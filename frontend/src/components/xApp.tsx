import { useState, useEffect, useRef } from 'react'
import { ITodo } from '../types/data'
import { TodoList } from './xTodoList'

const App: React.FC = () => {

    const [value, setValue] = useState('');
    const [todos, setTodos] = useState<ITodo[]>([]);

    const inputRef = useRef<HTMLInputElement>(null);

    const handleChange: React.ChangeEventHandler<HTMLInputElement> = (e) => {
        setValue(e.target.value)
    }

    const handleKeyDown: React.KeyboardEventHandler<HTMLInputElement> = (e) => {
        if (e.key === 'Enter') addTodo();
    }

    const addTodo = () => {
        if (value) {
            setTodos([...todos, {
                id: Date.now(),
                title: value,
                complete: false
            }])
            setValue('')
        }
    }

    useEffect( () => {
        if (inputRef.current) {
            inputRef.current.focus(); 
        }
    })


    return <div> 
        <div>
            <input value={value} onChange={ handleChange } onKeyDown={ handleKeyDown } ref={ inputRef }/>
            <button onClick={addTodo}>Add</button>
        </div>

        <TodoList items={todos} />
    </div>
}

export { App }