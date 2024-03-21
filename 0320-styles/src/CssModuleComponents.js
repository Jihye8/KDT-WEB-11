import React from 'react'
import style from './styles/cssModule.module.css'

// css module
// - 클래스명 중복 방지
// - css 파일에 확장자 : .module.css
// - react 컴포넌트에서 동일한 css를 불러오더라도 고유한 css 파일을 적용할 수 있다. 
// - 고유한 css class 명이 만들어지는 과정에서 파일 경로, 파일 이름, 클래스 이름, 해시값 등이 쓰인다. 
export default function CssModuleComponents() {
    console.log([style.red, style.box].join(' '))
    return (
        <>
        <h2>CSS Module</h2>
        <h4>확장자 : module.css </h4>
        <div>객체 형태로 선언한 css가 import 된다.</div>
        <div className={style.container}>
            <div className={[style.red, style.box].join(' ')}></div>
            <div className={[style.orange, style.box].join(' ')}></div>
            <div className={[style.yellow, style.box].join(' ')}></div>
        </div>
        </>
    )
}
