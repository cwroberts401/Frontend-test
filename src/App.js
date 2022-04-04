import Header from './Header';
import List from './List';
import Title from './Edit_title';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { useState } from 'react';
import './index.css';

function App() {
  const [lists, setLists] = useState([]);

  return (
    <div className="App">
        <Routes>
          <Route path="/" element={<><Header/><List lists={lists} setLists={setLists}/></>}/>
          <Route path="/new" element={<><Header/><Title lists={lists} setLists={setLists}/></>}/>
          <Route path="/edit/:list_id" element={<><Header/><Title lists={lists} setLists={setLists}/></>}/>
        </Routes>
    </div>
  );
}

export default App;