import  {useState} from 'react';

const StatePrac2 = ()=>{
    const [number, setNumber] = useState(0);
    const decrease = () =>{
        setNumber(number-2);
    }
    const increase = () =>{
        setNumber(number+1);
    }
    return(
        <>
        <h2>{number}</h2>
        <button onClick={decrease}>-2</button>
        <button onClick={increase}>+1</button>
        </>
    )
}

export default StatePrac2;