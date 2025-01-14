import React from 'react';
import { BrowserRouter as Router, Route, Routes, } from 'react-router-dom';
import Home from './Home';
import Counter from './Counter';
import Blog from './Blog';
import CountingStopper from './CountingStopper';
import Timer from './Timer';
import VehiclePage from './VehiclePage';
import ArrayMethod from './ArrayMethod';
import IfConditionRender from '../src/ConditionalRedering/IfConditionRender';
import IfArrayofObjectRender from '../src/ConditionalRedering/IfArrayofObjectRender';
import RenderList from '../src/ConditionalRedering/RenderList'
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <Router>
      <div>
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <h4>ReactBasic</h4>
          {/* <div className="collapse navbar-collapse">
            <ul className="navbar-nav">
              <li className="nav-item">
                <Link className="nav-link" to="/">Home</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/Counter">Counter</Link>
              </li>
              <li className="nav-item">
              <Link className="nav-link" to="/blog">Blog</Link>
             </li>
           </ul>
         </div> */}
       </nav>
       <div className="container mt-4">
         <Routes>
           <Route path="/" element={<Home />} />
           <Route path="/Counter" element={<Counter />} />
           <Route path="/blog" element={<Blog />} />
           <Route path="/CountingStopper" element={<CountingStopper/>} />
           <Route path="/Timer" element={<Timer/>} />
           <Route path="/VehiclePage" element={<VehiclePage/>} />
           <Route path="/ArrayMethod" element={<ArrayMethod/>} />
           <Route path="/IfConditionRender" element={<IfConditionRender/>} />
           <Route path="/IfArrayofObjectRender" element={<IfArrayofObjectRender/>} />
           <Route path="/RenderList" element={<RenderList/>}/>
         </Routes>
       </div>
     </div>
   </Router>
 );
}

export default App;
               
