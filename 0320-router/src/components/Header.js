import React from 'react'
import { Link } from 'react-router-dom'

export default function header() {
  return (
   <header>
        <span>Router Tutorial</span>
        <ul>
            {/* Link - 컴포넌트 경로를 바꿔준다. */}
            <li><Link to="/">Home</Link></li>
            <li><Link to="/products">Products</Link></li>
            <li><Link to='/students'>Students</Link></li>
        </ul>
   </header>
  )
}
