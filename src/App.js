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
import RenderList from '../src/ConditionalRedering/RenderList';
import UseStateEffect from '../src/Hooks/UseStateEffect';
import CalculateSquare from '../src/Hooks/CalculateSquare';
import SquareCalculate from '../src/Hooks/SquareCalculate';
import ColorEffect from '../src/Hooks/ColorEffect';
import CommonPrefix from '../src/Hooks/CommonPrefix';
import EvenNumber from '../src/JSquestion/EvenNumber';
import EvenNumberForEach from '../src/JSquestion/EvenNumberForEach';
import EvenNumberReduce from '../src/JSquestion/EvenNumberReduce';
import EvenNumberFor from '../src/JSquestion/EvenNumberFor';
import WordCountForEach from '../src/JSquestion/WordCountForEach';
import WordCountReduce from '../src/JSquestion/WordCountReduce';
import WordCountFor from '../src/JSquestion/WordCountFor';
import MaxnumberFor from '../src/JSquestion/MaxnumberFor';
import ReverseString from '../src/JSquestion/ReverseString';
import RemoveDuplicateFor from '../src/JSquestion/RemoveDuplicateFor';
import RemoveDuplicateSet from '../src/JSquestion/RemoveDuplicateSet';
import FlattenArray from '../src/JSquestion/FlattenArray';
import MergeSortArrayWhile from '../src/JSquestion/MergeSortArrayWhile';
import UniqueChar from '../src/JSquestion/UniqueChar';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <Router>
      <div>
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <h4>ReactBasic</h4>
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
           <Route path="/UseStateEffect" element={<UseStateEffect/>}/>
           <Route path ="/CalculateSquare" element={<CalculateSquare/>}/>
           <Route path ="/SquareCalculate" element={<SquareCalculate/>}/>
           <Route path ="/ColorEffect" element={<ColorEffect/>}/>
           <Route path = "/CommonPrefix" element={<CommonPrefix/>}/>
           <Route path= "/EvenNumber" element={<EvenNumber/>}/>
           <Route path= "/EvenNumberForEach" element={<EvenNumberForEach/>}/>
           <Route path= "/EvenNumberReduce" element={<EvenNumberReduce/>}/>
           <Route path= "/EvenNumberFor" element={<EvenNumberFor/>}/>
           <Route path= "/WordCountForEach" element={<WordCountForEach/>}/>
           <Route path= "/WordCountReduce" element={<WordCountReduce/>}/>
           <Route path= "/WordCountFor" element={<WordCountFor/>}/>
           <Route path= "/MaxnumberFor" element={<MaxnumberFor/>}/>
           <Route path= "/ReverseString" element={<ReverseString/>}/>
           <Route path= "/RemoveDuplicateFor" element={<RemoveDuplicateFor/>}/>
           <Route path= "/RemoveDuplicateSet" element={<RemoveDuplicateSet/>}/>
           <Route path= "/FlattenArray" element={<FlattenArray/>}/>
           <Route path= "/MergeSortArrayWhile" element={<MergeSortArrayWhile/>}/>
           <Route path= "/UniqueChar" element={<UniqueChar/>}/>
         </Routes>
       </div>
     </div>
   </Router>
 );
}

export default App;
               
