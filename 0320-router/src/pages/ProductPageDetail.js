import React from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { productInfos } from '../components/ProductList';

export default function ProductPageDetail({products}) {
    // products/:productId 일때 여기에 값 할당
    const {productId} = useParams();
    console.log('useParams',useParams());
    console.log('productId',productId);
    // 뒤로 가기
    const navigate = useNavigate();
    const targetProduct = products[Number(productId-1)];
    console.log(targetProduct);
    const {id, name, email, body} = targetProduct;
    return (
        <div>
            <h1>Product Detail Page</h1>
            <ul>
                <li>상품번호 : {id}</li>
                <li>이름 : {name}</li>
                <li>이메일 : {email}</li>
                <li>상세설명<br />{body}</li>
            </ul>
            <button onClick={()=>{navigate(-1)}}>뒤로 가기</button>
            <button onClick={()=>{navigate('/')}}>홈으로 가기</button>
            {/* <button onClick={()=>{navigate(+1)}}>앞으로 가기</button> */}
        </div>
    )
}
