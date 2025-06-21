
import { useState } from "react";
import { supabase } from "../supabaseClient";

function AddMemory() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [mood, setMood] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    const { data, error } = await supabase.from("memories").insert([
      { title, description, mood }
    ]);

    if (error) {
      console.error(error);
      setMessage("Something went wrong 😢");
    } else {
      setMessage("Memory saved successfully! 💖");
      setTitle("");
      setDescription("");
      setMood("");
    }
  };

  return (
    <div className="min-h-screen bg-pink-50 flex items-center justify-center px-4">
      <form onSubmit={handleSubmit} className="bg-white p-6 rounded-xl shadow-md w-full max-w-md">
        <h2 className="text-2xl font-bold text-pink-700 mb-4">Add a Memory 📝</h2>

        <input
          type="text"
          placeholder="Memory Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className="w-full p-2 border rounded mb-3"
          required
        />

        <textarea
          placeholder="What happened?"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          className="w-full p-2 border rounded mb-3"
          required
        />

        <input
          type="text"
          placeholder="Mood (e.g., happy, emotional)"
          value={mood}
          onChange={(e) => setMood(e.target.value)}
          className="w-full p-2 border rounded mb-4"
        />

        <button type="submit" className="bg-pink-500 text-white px-4 py-2 rounded hover:bg-pink-600">
          Save Memory
        </button>

        {message && <p className="mt-4 text-green-600">{message}</p>}
      </form>
    </div>
  );
}

export default AddMemory;