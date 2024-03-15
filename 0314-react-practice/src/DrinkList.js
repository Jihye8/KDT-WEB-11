import { useState } from "react"
import Drink from "./Drink";
import americano from './img/americano.jpg';
import latte from './img/latte.jpg';
import berry from './img/berry.jpg';
import choco from './img/choco.jpg';
import mango from './img/mango.jpg';
import yuja from './img/yuja.jpg';
import './DrinkList.css'

export default function DrinkList(props){
    const [list, setList] = useState([])
    const addList = (name)=>{
        if(!list.includes(name)){
            setList([...list, name])
        }else{
            alert('중복!')
        }
    }
    
    return(
        <div className="container">
        <h4>{list.length===0?"음료를 골라주세요":list.join(', ')+'를 골라주셨군요'}</h4>
        <table>
        <tr>
          <th>음료</th>
          <th>음료명</th>
          <th>가격</th>
          <th>선택</th>
        </tr>
       <Drink img={americano} name='americano' price='4000' addList={addList}/>
       <Drink img={latte} name='latte' price='4000' addList={addList}/>
       <Drink img={berry} name='berry' price='4000' addList={addList}/>
       <Drink img={choco} name='choco' price='4000' addList={addList}/>
       <Drink img={mango} name='mango' price='4000' addList={addList}/>
       <Drink img={yuja} name='yuja' price='4000' addList={addList}/>
        </table>
        </div>
    )
}