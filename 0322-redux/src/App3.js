import React from 'react'
import { useDispatch, useSelector } from 'react-redux';

export default function App2() {
   const isVisible = useSelector((state)=> state.isVisible)

  return (
    <div>
      <h1>react redux Ex</h1>
      <h2>isVisible 값은 "{isVisible ? '참' : '거짓'}"</h2>
      <Box1 />
    </div>
  )
}

const Box1 =() =>{
    return(
      <div className='Box'>
        <h2>Box1 : </h2>
        <Box2 />
      </div>
    )
  }
  const Box2 =() =>{
    return(
      <div className='Box'>
        <h2>Box1 : </h2>
        <Box3 />
      </div>
    )
  }
  const Box3 =() =>{
    return(
      <div className='Box'>
        <h2>Box1 : </h2>
        <Box4 />
      </div>
    )
  }
  
  const Box4 =() =>{
    const dispatch = useDispatch();
    return(
      <div className='Box'>
        <h2>Box1 : </h2>
        <button onClick={()=>dispatch({type : 'CHANGE'})}>change</button>
      </div>
    )
  }
