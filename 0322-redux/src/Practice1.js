import React, { useState } from 'react'
import { plus, minus} from './store/bankAccout';
import { useDispatch, useSelector } from 'react-redux';

export default function Practice1() {
    const [money, setMoney] = useState(0);
    const dispatch =useDispatch();

    // bank라는 router에 선언한 state에 myMoney의 값을 저장 
    const myMoney = useSelector((state)=>state.bank);

  return (
    <div>
        <h1>코딩온 은행</h1>
        <h2>잔액 : {myMoney}</h2>
        <br />
        <input type="number"value={money} onChange={(e)=>setMoney(e.target.value)}/>
        <br />
        <button onClick={() => dispatch(plus(money))}>입금</button>
        <button onClick={() =>dispatch(minus(money))}>출금</button>
    </div>
  )
}