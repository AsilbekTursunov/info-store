import React from 'react'

const Input = ({label, type = 'text', state, setState} ) => {
    return (
        <div className="form-floating my-2">
            <input type={type} className="form-control" id="floatingInput" placeholder={label} value={state} onChange={(e) => setState({...state, state:e.target.value})}/>
            <label htmlFor="floatingInput">{label}</label>
        </div>
    )
}

export default Input