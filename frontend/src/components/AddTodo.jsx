import axios from "axios";
import { useState } from "react";
import { toast } from "sonner";

const AddTodo = ({ onAdd }) => {
  const [title, setTitle] = useState("");

  const handleAdd = async () => {
    try {
      if (title.trim() === "") return toast.error("Please enter a todo");
      const res = await axios.post(
        `${import.meta.env.VITE_API_BASE_URL}/todo`,
        { title }
      );
      if (res.data.success) {
        setTitle("");
        if (onAdd) onAdd();
        toast.success(res.data.message);
      }
    } catch (error) {
      console.log("Error in AddTodo : ", error);
    }
  };

  return (
    <div className="w-full max-w-lg mx-auto bg-white rounded-xl shadow-md p-4 flex flex-col sm:flex-row gap-3">
      <input
        type="text"
        name="title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        className="flex-1 border border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 px-4 py-2 rounded-lg outline-none text-gray-700"
        placeholder="Enter todo ..."
        onKeyDown={(e) => e.key === "Enter" && handleAdd()}
      />
      <button
        className="bg-blue-500 hover:bg-blue-600 text-white font-medium px-5 py-2 rounded-lg shadow transition-all duration-200"
        onClick={handleAdd}
      >
        Add
      </button>
    </div>
  );
};

export default AddTodo;
