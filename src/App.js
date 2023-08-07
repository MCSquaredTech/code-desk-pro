import { BrowserRouter, Route, Routes } from 'react-router-dom';

// import './App.css';
import Layout from './pages/Layout';

import Home from './pages/Home';
import Code from './pages/Code';
import Database from './pages/Database';
import Snippets from './pages/Snippets';
import OSCmd from './pages/OSCmd';


function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout /> }>
          <Route path="/" element={<Home />} />
          <Route path="/Code" element={<Code />} />
          <Route path="/Database" element={<Database />} /> 
          <Route path="/Snippets" element={<Snippets />} /> 
          <Route path="/OSCmd" element={<OSCmd />} />
        </Route>
      </Routes>
    </BrowserRouter>

    // <div id="app">
    //   <LeftSidebar />
    // </div>
  );
}

export default App;
