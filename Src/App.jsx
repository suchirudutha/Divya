
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        {/* These routes will be connected soon: */}
        {/* <Route path="/add" element={<AddMemory />} />
        <Route path="/memories" element={<MemoryList />} />
        <Route path="/chat" element={<ChatWithDivya />} /> */}
      </Routes>
    </BrowserRouter>
  );
}

export default App;