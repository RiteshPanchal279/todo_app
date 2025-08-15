import { useState } from "react";
import AddTodo from "./components/AddTodo";
import { useListing } from "./components/useListing";
import { toast, Toaster } from "sonner";
import axios from "axios";

function App() {
  const [checkedItems, setCheckedItems] = useState(new Set());
  const [searchTerm, setSearchTerm] = useState("");
  let { listings, fetchListings } = useListing();

  const toggleCheck = (id) => {
    const updated = new Set(checkedItems);
    updated.has(id) ? updated.delete(id) : updated.add(id);
    setCheckedItems(updated);
  };

  const handleDelete = async (id) => {
    try {
      const res = await axios.delete(
        `${import.meta.env.VITE_API_BASE_URL}/todo/${id}`
      );
      if (res.data.success) {
        toast.success(res.data.message);
      }
    } catch (error) {
      console.log("Error in todo delete : ", error);
    } finally {
      fetchListings();
    }
  };

  const filteredTodos = listings.filter((item) =>
    item.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="flex flex-col items-center min-h-screen p-4 bg-gray-100">
      <h1 className="text-2xl font-bold">My Todo</h1>
      {/* Add Todo Input */}
      <div className="w-full max-w-lg mb-4">
        <AddTodo onAdd={fetchListings} />
      </div>

      {/* Search Bar */}
      <div className="w-full max-w-lg mb-6">
        <input
          type="text"
          placeholder="Search todos..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="w-full px-3 py-1 border rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-400"
        />
      </div>

      {/* Todo List */}
      <div className="w-full max-w-lg space-y-3">
        {filteredTodos.map((item) => (
          <div
            key={item._id}
            className="flex items-center justify-between p-3 bg-white border rounded-lg shadow-sm hover:shadow-md transition-all duration-200"
          >
            <div className="flex items-center gap-3">
              <input
                type="checkbox"
                checked={checkedItems.has(item._id)}
                onChange={() => toggleCheck(item._id)}
                className="w-5 h-5 text-blue-500 border-gray-300 rounded focus:ring-blue-400"
              />
              <p
                className={`text-gray-800 font-medium break-words ${
                  checkedItems.has(item._id) ? "line-through text-gray-500" : ""
                }`}
              >
                {item.title}
              </p>
            </div>
            <button
              className="px-3 py-1 text-sm font-medium text-white bg-red-500 rounded hover:bg-red-600 transition-all duration-200"
              onClick={() => handleDelete(item._id)}
            >
              Delete
            </button>
          </div>
        ))}
        {filteredTodos.length === 0 && (
          <p className="text-gray-500 text-center">No todos found</p>
        )}
      </div>
      <Toaster position="top-right" richColors />
    </div>
  );
}

export default App;
