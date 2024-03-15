
export default function Drink(props){
    const {img, name, price, addList} =props;
    return(
        <tr>
        <td><img src={img} alt="" /></td>
        <td className="name">{name}</td>
        <td>{price}원</td>
        <td><button onClick={()=>addList(name)}>선택</button></td>
        </tr>
    )
}