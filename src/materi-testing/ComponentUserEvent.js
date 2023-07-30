import React, { useState } from 'react'

function ComponentUserEvent({onSubmit}) {
    const [value,setValue] = useState("")
    
    

  return (
    <div>
        <input data-testid="input-value" placeholder='input value' value={value} onChange={(e) => setValue(e.target.value)} />
        <p>Anda mengetik {value}</p>
        <button data-testid="submit-btn" onClick={onSubmit}>Submit</button>
    </div>
  )
}

export default ComponentUserEvent