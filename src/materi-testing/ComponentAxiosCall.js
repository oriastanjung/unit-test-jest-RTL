import React, { useState } from 'react'
import axios from 'axios'

function ComponentAxiosCall() {
    const [users, setUsers] = useState([])
    const getUsersData = async () => {
        const res = await axios.get("https://jsonplaceholder.typicode.com/users")
        setUsers(res.data)
    }
  return (
    <div>
        <p>List member team : </p>
        <button data-testid="get-users" onClick={getUsersData}>Get Member</button>
        {users && users.map((user,i) => {
            return (
                <p data-testid="user-name" key={i}>{user.name}</p>
            )
        })}
    </div>
  )
}

export default ComponentAxiosCall