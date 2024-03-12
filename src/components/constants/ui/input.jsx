import React from 'react'

const Input = ({label, type = 'text', state, setState} ) => {
    return (
        <div class="form-floating my-2">
            <input type={type} class="form-control" id="floatingInput" placeholder={label} value={state} onChange={(e) => setState({...state, state:e.target.value})}/>
            <label for="floatingInput">{label}</label>
        </div>
    )
}

export default Input