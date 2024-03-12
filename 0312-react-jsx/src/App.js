import logo from './logo.svg';
import './App.css';


function App() {
  const name = '로이'
  const animal = '강아지'
  const a = 15;
  const b = 1;
  const title= 'Hello World'
  const styles = {
    color : "orange",
    fontSize : '48px',
    backgroundColor :'yellow'
  }
  return (
    <>
    <div className="App">
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Hello world
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}
      {/* JSX 문법 */}
      {/* 1. 하나로 감싸인 요소여야 한다.  */}
      {/* 2. html 안에서 JavaScript 표현식이 사용 가능하다. */}
      <div>{name} 안녕?</div>
      <div>반갑다</div>
    </div>
    <div>부모가 없다</div>
    {/* 참고) 삼항연산자 사용 가능! */}
    <div>{name==='Codee' ? "KDT 11기에요!" : "누구세요?"}</div>
    {/* 
    3. style 속성 
      - react에서는 dom 요소에 스타일 적용시 문자열이 아니라 객체를 사용
      - 스타일 이름 중 하이픈(-) 포함시 camelCase로 작성해야 함!
      - 직접 태그 안에 넣을 떄 첫번째 {}는 JSX 문법을 쓰겠단 의미 두번째 {}는 객체 사용의 의미
     */}
    <div style={styles}>하이!</div>
    <div style={{ color : "orange",
    fontSize : '48px',
    backgroundColor :'green'}}>하이하이</div>
    {/*
    4.  className사용
      -class 속성이 아닌 className 속성 사용
    5. 종료 태그가 없는 태그의 사용
      - 기존의 종료 태그가 없는 태그 사용하더라도 종료 태그를 작성해야 한다. or self-closing
      - ex. <br> -> <br / >or <br></br>
    
    6. 주석
     -// : jsx 외부주석
     - {**} : jsx 내부주석
    */}
    <h2> 내 반려동물의 이름은 {name}입니다.</h2>
    <h2>{name}은 {animal}입니다.</h2>
    <div>{3+5==8?'정답입니다!' :'오답입니다.'}</div>

    <div>{a>b && 'a가 b보다 큽니다'}</div>

    <div className='title'>{title}</div>
    <label>아이디 :</label>
    <input type="text" /><br />
    <label >비밀번호 :</label>
    <input type="password" />
    </>
  );
}

export default App;
