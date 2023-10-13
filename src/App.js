//  import Search from '../src/Search';
// import Shows from './Shows';
// import { useEffect, useState } from 'react';
// import { BrowserRouter,Routes,Route} from 'react-router-dom';
// import Home from './Home';
// import Shorts from './Shorts';
// import Products from './Products';

/*function App() {
  let [count,setCount]=useState(1);
  useEffect(()=>{console.log("hello world")},[count]);
  return(
 
    <>
  
       { <div>
      <div className='row'>
      <BrowserRouter>
      <Sidebar/>
        <Search/>
        <Shows/>
        
  <Routes>
    <Route path='/Home' element={<Home/>}/>
    <Route path='/Shorts' element={<Shorts/>}/>
    <Route path='/Products' element={<Products/>}/>
    </Routes>
      </BrowserRouter>
       
      </div>
     </div> }  
     <h1>{count}</h1>

 <button onClick={()=>setCount(count+1)} className='btn btn-danger'>Click</button>  


    </>
   )
}
export default App;*/

import './App.css';
import Second from '../src/Second';
import 'bootstrap/dist/css/bootstrap.min.css';
 import Sidebar from '../src/Sidebar';
 import Forms from './Forms';
 import Catog from './Catog';
 import Banner from './Banner';
 import Header from './Header';
export default function App()
{
  return(
  
    <>
    <div className='container-fluid'>
      <div className='row head'>
       <Header/>
      </div>
      <Catog/>
      <Forms/>
      <Banner/>
    </div>
    </>
  
  );
}

 
 