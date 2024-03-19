import { useState } from 'react'

export default function useToggle(initValue = false) {
    // 토글 기능을 만들어줌..
    // value : 토글 상태 / setValue : 토글 상태를 변화 시키는 setter
    const [value, setValue ] = useState(initValue);

    const toggleValue = () =>{
        setValue(!value);
    }
  return [value, toggleValue] ;
}
