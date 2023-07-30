import React, { useEffect, useState } from 'react'

const data =[
    "Senin",
    "Selasa",
    "Rabu",
    "Kamis",
    "Jumat",
    "Sabtu",
    "Minggu"
]


function ComponentVariant() {
    const [user,setUser] = useState("")
    const [clicked, setClicked] = useState(false);

    useEffect(() => {
        setTimeout(() => {
            setUser("Orias")
        },1000)
    
    },[])
  return (
    <div>
        {user ? <p>Selamat datang {user}</p> : ""}
        <p>
            Hari- hari yang ada : 
        </p>
        {
            data.map((hari, i) => {
                return (
                    <p data-testid="hari" key={i} onClick={() => {
                        if(i == 2){
                            return setClicked(!clicked)
                        }
                    }}>{hari}</p>
                )
            })
        }
        {
            clicked && <p>DIKLIK</p>
        }
    </div>
  )
}

export default ComponentVariant