import { Routes,Route, BrowserRouter} from 'react-router-dom';
import './App.css';
import Header from './component/common/Header';
import ProductDetails from './component/pages/ProductDetails';
import ProductListing from './component/pages/ProductListing';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Header/> 
      <Routes>
        <Route path='/' exact element={<ProductListing/>}/>
        <Route path='/product/:product_id' element={<ProductDetails/>}/>
        <Route>404 Not Found</Route>
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
