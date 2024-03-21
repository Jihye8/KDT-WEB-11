import React from 'react'
import { Link } from 'react-router-dom'

// productInfo의 객체 하나 -> product라는 props 안에 할당
export default function ProductItem({product}) {
    // product : {id, name, email, body}
    return (
        <>
        {/* id 별 경로 잡기.  */}
       <Link to={`/products/${product.id}`}>
         <ul>
             <li>상품명 : {product.name}</li>
             <li>상세 설명 : {product.body}</li>
         </ul>
       </Link >
       <hr />
        </>
    )
}
