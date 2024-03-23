import React from 'react'

const TextArea = ({label, type, state, setState, height='100px'} ) => { 
    return (
        <div className="form-floating my-2">
            <textarea key={type} type={type} className="form-control" id="floatingInput" style={{height:height}} placeholder={label} value={state} required onChange={(e) => setState(e.target.value)}></textarea>
            <label htmlFor="floatingInput" >{label}</label>
        </div>
    )
}

export default TextArea