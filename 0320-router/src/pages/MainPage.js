import React from 'react'
import { useSearchParams } from 'react-router-dom'

export default function MainPage() {
  const [searchParams, setSearchParams] = useSearchParams();
  console.log(searchParams.get('mode'));
  // dark가 되기 전엔 null 상태
  return (
    // join()의 경우 null은 포함하지 않고 null 이 아니면 className에 자동으로 추가될 것이다.
    <div className={['Main', searchParams.get('mode')].join(' ')}>
      <h1>Home</h1>
      <button onClick={()=>{setSearchParams({mode : 'dark'})}}>Dark Mode</button>
    </div>
  )
}
