import React, { useEffect } from 'react'

export default function LifeCycleFunctionChild({number}) {
    // mount 시점에 실행 - 화면에 처음 나올 때만 실행
    useEffect(()=>{
        console.log('컴포넌트 마운트!');
    }, []);
    useEffect(()=>{
        console.log('컴포넌트 언마운트 코드 전!');
        return()=>{
            console.log('컴포넌트 언마운트')
        }
    },[]);
    useEffect(()=>{
        console.log('number',number)
    },[number])
    return (
        <div>현재 number 값은 {number}입니다.</div>
    )
}
