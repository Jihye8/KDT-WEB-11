import './styles/App.css';
import CssModuleComponents from './CssModuleComponents';
import SassComponent from './SassComponent';
import StyledComponent from './StyledComponent';
import Practice1 from './Practice1';
import Practice2  from './Practice2';
import Practice3 from './Practice3'

function App() {
  return (
    <div className="App">
      <h1>React Styling</h1>
      <hr />
      <CssModuleComponents />
      <hr />
      <SassComponent />
      <hr />
      <StyledComponent />
      {/* <hr />
      <Practice1 /> */}
      <hr />
      {/* <Practice2 /> */}
      <hr />
      <Practice3 />
    </div>
  );
}

export default App;
