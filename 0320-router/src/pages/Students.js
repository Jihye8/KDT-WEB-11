import React from 'react'
import { Link } from 'react-router-dom'

export const StudentsInfo = [{id : 1, name : '장금이'},{id : 2, name :'춘향이'}, {id :3, name : 'new'}]

export default function Students() {
  return (
    <div>
      <h1>Students</h1>
      {StudentsInfo.map((student)=>{
        return (<>
        <Link to={`/students/${student.id}`}>
        <ul>
            <li>이름 : {student.name}</li>
        </ul>
      </Link >
        </>)
      })}
    </div>
  )
}
