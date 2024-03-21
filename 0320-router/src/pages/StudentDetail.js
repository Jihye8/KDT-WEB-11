import React from 'react'
import { StudentsInfo } from './Students'
import { useParams } from 'react-router-dom';

export default function StudentDetail() {
    const {studentId} = useParams();
    const targetStudent = StudentsInfo[Number(studentId-1)];
  return (
    <div>
      <h1>Studenet : <span style={{color:'green'}}>{targetStudent.name}</span></h1>
    </div>
  )
}
