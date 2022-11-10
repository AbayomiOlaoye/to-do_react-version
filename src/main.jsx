import React from 'react';
import ReactDOM from 'react-dom/client';
import './css/index.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import TodoContainer from './functionBased/components/TodoContainer';
import About from './pages/About';
import Layout from './pages/Layout';
import NotMatch from './pages/NotMatch';

// ReactDOM.createRoot(document.getElementById('root')).render(
//   <React.StrictMode>
//     <BrowserRouter>
//       <TodoContainer />
//     </BrowserRouter>
//   </React.StrictMode>,
// );

const App = () => (
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<TodoContainer />} />
        <Route path="about" element={<About />} />
        <Route path="*" element={<NotMatch />} />
      </Route>
    </Routes>
  </BrowserRouter>
);

export default App;

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);
