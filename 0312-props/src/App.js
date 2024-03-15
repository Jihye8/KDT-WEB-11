import "./App.css"
import ClassComponent from "./ClassComponent";
import FunctionComponent from "./FunctionComponent";
import Button from "./Button";
import Food from "./Food"
import BestSeller from "./BestSeller";
import ClassPractice from "./ClassPractice"

function App() {
  const name  = '코딩온'
  const title = "나의 하루는 4시 40분에 시작된다."
  const author = "김유진"
  const price = 13500;
  const type = '자기개발서'
  const valid = ()=>{
    console.log('콘솔 띄우기 성공!');
  }
  return (
    <div className="App">
      <FunctionComponent name={name} color='red'/>
      <FunctionComponent time = '14시'>자식내용</FunctionComponent>

      <hr />
      <ClassComponent name= {name} />
      <ClassComponent/>
      <hr />
      {/* Google props.children 값, 주소는 props.link */}
      {/* <Button link="http://www.google.com">Google</Button> */}
      {/* 만약 태그를 포함하도록 children 값을 넣어준다면 태그 포함해서 모든 내용이 props로 넘어간다. */}
      <Button link="http://www.google.com"><span>Google</span></Button>
      <hr />
      <Food></Food>
      <hr />
      <BestSeller title = {title} author={author} price={price} type={type} ></BestSeller>
      <hr />
      <ClassPractice text='App 컴포넌트에서 넘겨준 text props 입니다' valid={valid}></ClassPractice>
      <hr />
    </div>

    
  );
}

export default App;