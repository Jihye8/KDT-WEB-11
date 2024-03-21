// import './styles/App.css';
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import { useEffect, useState } from 'react';
import axios from 'axios';

import Header from './components/Header';
import MainPage from './pages/MainPage'
import ProductPage from'./pages/ProductPage';
import NotFound from './pages/NotFound';
import ProductPageDetail from './pages/ProductPageDetail';
import Students from './pages/Students';
import StudentDetail from './pages/StudentDetail';


// • 주요컴포넌트
//  • BrowserRouter
//  • Routes
//  • Route
//  • Link
//  • createBrowserRouter

function App() {
  const [products,setProducts] = useState([]);

  const getProps = async ()=>{
    const res = await axios.get('https://jsonplaceholder.typicode.com/comments');
    console.log(res);
    setProducts(res.data.slice(0,10));
    console.log(products);
  };
  useEffect(()=>{
    getProps();
  },[]);

  return (
    <div className="App">
      <BrowserRouter>
        {/* 경로에 따라서 다른 값을 보여줘야 한다. */}
        <Header /> 
        <Routes>
          <Route path='/' element={<MainPage />}></Route>
          <Route path='/products' element={<ProductPage  products={products}/>}></Route>
          {/* :productId 에서 ':'는 변수가 뒤에 온다는 의미! */}
          <Route path='/products/:productId' element={<ProductPageDetail products={products}/>}></Route>
          <Route path='*' element={<NotFound />}></Route>
          <Route path='/students' element={<Students/>}></Route>
          <Route path='/students/:studentId' element={<StudentDetail/>}></Route>
        </Routes>

      </BrowserRouter>
    </div>
  )
}

export default App;
