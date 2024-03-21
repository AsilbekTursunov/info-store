import React from 'react'

const Input = ({label, type, state, setState} ) => { 
    return (
        <div className="form-floating my-2">
            <input key={type} type={type} className="form-control" id="floatingInput" placeholder={label} value={state} required onChange={(e) => setState(e.target.value)}/>
            <label htmlFor="floatingInput" >{label}</label>
        </div>
    )
}

export default Input