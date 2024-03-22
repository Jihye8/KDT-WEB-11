import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { minus, plus } from './store/counterReducer';

export default function App2() {
    // [after]
    // store 상태를 가져와야한다. store의 상태를 가져와 안에 있는 number를 사용하겠다. 
    // counter는 store/index.js에서 묶어준 router
    const number = useSelector((state)=>state.counter.number);

  return (
    <div>
      <h1>react redux Ex</h1>
      <h2>number : {number}</h2>
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
        <button onClick={()=>dispatch(plus())}>plus</button>
        <button onClick={()=>dispatch(minus())}>minus</button>
      </div>
    )
  }
