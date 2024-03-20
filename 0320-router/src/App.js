import './styles/App.css';
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Header from './components/Header';
import MainPage from './pages/MainPage'
import ProductPage from'./pages/ProductPage';
import NotFound from './pages/NotFound';

// • 주요컴포넌트
//  • BrowserRouter
//  • Routes
//  • Route
//  • Link
//  • createBrowserRouter

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        {/* 경로에 따라서 다른 값을 보여줘야 한다. */}
        <Header /> 
        <Routes>
          <Route path='/' element={<MainPage />}></Route>
          <Route path='/products' element={<ProductPage />}></Route>
          <Route path='*' element={<NotFound />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
