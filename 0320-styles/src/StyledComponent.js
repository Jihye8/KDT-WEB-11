// css와 js 가 한파일 안에 모두 모아져 있는 형태

import React from 'react'
import styled from 'styled-components'

// CSS in JS : js 파일 안에 css를 작성한다. 
// styled-component, emotion, styles-jsx, ...
// 각각의 컴포넌트마다 격리된 스타일 적용이 가능하다. 

const StyledContainer = styled.div`
    display : flex;
`;
const StyledBox = styled.div`
    width : 100px;
    height : 100px;
    background-color : ${(props)=> props.bgColor};

    &:hover{
        transform : translateY(20px);
    }
`

export default function StyledComponent() {
  return (
    <StyledContainer>
        <StyledBox bgColor='red'/>
        <StyledBox bgColor='orange'/>
        <StyledBox bgColor='yellow'/>
    </StyledContainer>
  )
}
