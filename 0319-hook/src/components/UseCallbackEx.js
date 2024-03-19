import React, { useCallback, useEffect, useState } from 'react'
import axios from 'axios'

// useCallback
// -매번 함수를 새성하지 않고, 함수를 기억해두었다가 필요할 때마다 함수를 재사용
export default function UseCallbackEx({postId}) {
    const [post, setPost] = useState({})
    // // [before]
    // const getPost = async() => {
    //     console.log('data fetching');
    //     const res = await axios.get(`https://jsonplaceholder.typicode.com/posts/${postId}`)

    //     setPost(res.data);
    // };
    // [after]
    // useCallback 훅으로 기억 -> 의존생 배열에 postId가 변경되지 않는 한 getPost 다시 호출하지 않는다. 
    // -> 필요한 순간에만 api 요청을 날림 (jsonplaceholder)
    // 많이 사용할 경우 메모리 사용량이 많아지므로 꼭 필요할 때만
    const getPost = useCallback(async() => {
        console.log('data fetching');
        const res = await axios.get(`https://jsonplaceholder.typicode.com/posts/${postId}`)

        setPost(res.data);}, [postId]

    )
    // useEffect 의존성 배열에 "함수"
    // 컴포넌트가 리렌더링 된다 -> 함수가 재생성된다.(주소값 변경) -> getPost 재호출
    useEffect(()=>{
        getPost()
    },[getPost])
    return (
        <div>
            <h1>useCallback EX</h1>
            {post.id ? `NO.${post.id}-${post.title}`: '로딩중...'} 
        </div>
    )
}
