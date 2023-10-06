import React from 'react'
import {useState} from 'react'

const ListRender = () => {
const [list] = useState(["Joao", "Pedro", "Augusto", "Mario"])

const [users] = useState([
    {id: 1, name: "Matheus", age: 31},
    {id: 2, name: "Pedro", age: 17},
    {id: 3, name: "Ramon", age: 21}
])
  return (
  <div>
        <ul>
            {list.map((item, i) => (
                <li key={i}>
                    {item}
                </li>
            ))}
        </ul>
        <ul>
            {users.map((user) => (
                <li key={user.id}>
                    {user.name} - {user.age}
                </li>
            ))}
        </ul>
  </div>
  )
}

export default ListRender