import React, { useCallback } from 'react'

const Validation = ({ error }) => {
    const errorBag = useCallback(() => { 
        const leter = Object.keys(error).map(item => {
            const msg = error[item].join(', ')
            return `${item} ${msg} `
        }, [error]);
        return leter
    }) 
    const result = error !== null && errorBag()
    console.log(result);
    return (
        <>
            <div className="alert alert-danger d-flex align-items-center py-1" role="alert">  
                <div>
                    {result}
                </div>
            </div>
        </>
    )
}

export default Validation