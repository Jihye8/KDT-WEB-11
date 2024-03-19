import React, { useMemo, useState } from 'react'

// useMemo
// - 메모리제이션으로 수행한 연산값을 기억함으로써 불필요한 연산 최소화
// - Rendering 과정에서 특정값이 바뀌었을 때만 연산을 실행한다.

export default function UseMemoEx() {
    const [count, setCount] = useState(0);
    const [input, setInput] = useState('');

    // 가정) 임의의 큰 연산을 하는 함수가 있다. 
    // [before]
    // const calc = () =>{
    //     console.log('열심히 계산 중 ')
    //     // 뭔가 복잡한 계산을 한다.. 가정..
    //     for( let i = 0 ; i<10000000 ; i++){}
    //     return count **2 ;
    // }
    // [after] 
    // count의 값이 바뀔때만 함수를 실행
    // input의 상태가 바뀌면 컴포넌트는 리렌더링, 이때 calc 연산되지 않게
    const calc = useMemo(()=>{
            for( let i = 0 ; i<10000000 ; i++){}
            return count **2 ;
        },[count])
    return (
        <div>
            <h1>useMemo EX</h1>
            <button onClick={() =>{setCount(count+1)}}>plus</button><br />
            <div>버튼을 누를 떄에도, input입력할 때에도 연산이 이뤄짐(calc)
                <br />➡️ count의 값 즉, calc()에서 사용하는 변수의 값이 바뀔때만 다시 실행하도록 useMemo를 사용하자!</div>
            <input type="text" value={input} onChange={(e)=>setInput(e.target.value)} />
            <div>count : {count}</div>
            {/* before */}
            {/* <div>calc : {calc()}</div> */}
            {/* after */}
            <div>calc : {calc}</div>
        </div>
    )
}
