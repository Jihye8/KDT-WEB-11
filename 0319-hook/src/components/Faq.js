// Faq : 자주 묻는 질문
import React from 'react'
import useToggle from '../hooks/useToggle';

export default function Faq() {
    const [isFaqOpen, setIsFaqOpen]=useToggle();
    return (
        <div>
        <h1>custom hook (useToggle) ex</h1>
        <div onClick={setIsFaqOpen}>Q.리액트에서 커스텀 훅을 만들 수 있나요?</div>
        {isFaqOpen && <div>A. 네 그럼요!</div>}
        </div>
    )
}
