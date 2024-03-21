import React from 'react'
import './styles/SassComponent.scss'

export default function SassComponent() {
  return (
    <div>
        <div className='container'>
          <div className='red box'></div>
          <div className='orange box'></div>
          <div className='yellow box'></div>
        </div>
        <button className='btn'>Button</button>
        <button className='btn-primary'>Button Pimary</button>
    </div>
  )
}
