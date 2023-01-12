import React, { usestate } from 'react';

export default function TodoForm(props) {

    const [input, setInput] = useState('');

    const handleChange = e => {
        setInput(e.target.value)
    }


    const handleSubmit = (e) => {
        e.preventDefault();
        props.addTask({
            id: Math.floor(Math.random()* 1000000),
            text:input,
            isComplete:false
        })
       setInput('')
    }

    return (
        <form className="todo-form">
            <input type="text" placeholder='Add a todo' onchange={handleChange} className="todo-input" value={input} name="text" />
            <button type="submit" onClick={handleSubmit} className="todo-btn">ADD TODO</button>
        </form>
    );

}
