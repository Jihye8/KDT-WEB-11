import logo from './logo.svg';
import './App.css';
import UseMemoEx from './components/UseMemoEx';
import UseCallbackEx from './components/UseCallbackEx';
import UseReducerEx from './components/UseReducerEx';
import Faq from './components/Faq';

function App() {
  return (
    <div className="App">
      <UseMemoEx />
      <hr />
      <UseCallbackEx postId={9}/>
      <hr />
      < UseReducerEx/>
      <hr />
      <Faq />
    </div>
  );
}

export default App;
