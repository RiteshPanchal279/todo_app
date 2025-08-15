import axios from "axios";
import { toast } from "sonner";
import { useState, useEffect } from "react";

export const useListing = () => {
  const [listings, setListings] = useState([]);

  const fetchListings = async () => {
    try {
      const res = await axios.get(`${import.meta.env.VITE_API_BASE_URL}/todo`);
      if (res.data.success) {
        setListings(res.data.todos);
      }
    } catch (error) {
      console.error("Error fetching listings:", error);
      toast.error("Failed to load listings");
      setListings([]);
    }
  };

  useEffect(() => {
    fetchListings();
  }, []);

  return { listings, setListings, fetchListings };
};
