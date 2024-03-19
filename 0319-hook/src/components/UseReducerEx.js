import React, { useReducer } from 'react'
// 다른 파일에서 선언해도 된다.
const initState = {value : 0}
const reducer = (prevState, action) =>{
    console.log(prevState);
    switch(action.type){
        case 'INCREMENT' :
            return {value : prevState.value + 1}
            
        case 'DECREMENT' :
            return {value : prevState.value - 1}
           
        case 'RESET' :
            return {value : 0}
        default:
        break ;
    }
}

export default function UseReducerEx() {
    // reducer : state 상태를 업데이트 하는 함수
    // dispatch : 액션을 발생시키는 함수 (액션: state가 어떻게 변경되어야 하는지에 대한 힌트)
    // state : 현재 상태
    // initState : 초기값
    // useReducer : [state, dispatch]를 리턴함
    const [state, dispatch] = useReducer(reducer, initState);
    // 액션에 대한 힌트는 대문자로!
    const increment = () => dispatch({type : 'INCREMENT'});
    const decrement = () => dispatch({type : 'DECREMENT'});
    const reset = () => dispatch({type : 'RESET'});
    return (
        <div>
            <h1>UseReducerEx</h1>
            <h2>{state.value}</h2>
            <button onClick={increment}>plus</button>
            <button onClick={decrement}>minus</button>
            <button onClick={reset}>reset</button>
        </div>
    )
}
