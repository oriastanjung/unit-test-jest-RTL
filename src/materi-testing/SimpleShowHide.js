import React, { useState } from 'react'

function SimpleShowHide() {
    const [show, setShow] = useState(false);

    const onClick = () => {
        setShow(!show)
    }
  return (
    <div>
        <p>
            saya sedang {show ? "muncul" : "sembunyi "}
        </p>
        <button onClick={onClick}>{show ? "sembunyikan" : "munculkan "}</button>
    </div>
  )
}

export default SimpleShowHide