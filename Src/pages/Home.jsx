import { Link } from "react-router-dom";

function Home() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-pink-50 text-center px-4">
      <h1 className="text-4xl font-bold text-pink-700 mb-4">Divya – Memory Vault 💖</h1>
      <p className="text-md text-gray-700 mb-6">Saving the love story of Suchir & Divya... forever 💞</p>
      
      <div className="flex flex-col gap-3">
        <Link to="/add" className="bg-pink-500 hover:bg-pink-600 text-white px-6 py-2 rounded-full shadow">Add a Memory</Link>
        <Link to="/memories" className="bg-pink-400 hover:bg-pink-500 text-white px-6 py-2 rounded-full shadow">View Memories</Link>
        <Link to="/chat" className="bg-pink-300 hover:bg-pink-400 text-white px-6 py-2 rounded-full shadow">Chat with Divya</Link>
      </div>
    </div>
  );
}

export default Home;