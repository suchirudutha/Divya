
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import AddMemory from './pages/AddMemory';
import MemoryList from './pages/MemoryList';
import ChatWithDivya from './pages/ChatWithDivya';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/add" element={<AddMemory />} />
        <Route path="/memories" element={<MemoryList />} />
        <Route path="/chat" element={<ChatWithDivya />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;