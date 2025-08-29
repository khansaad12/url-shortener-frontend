import { useEffect, useState } from "react";
import axios from "axios";

export const useAuth = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [loading, setLoading] = useState(true);
  const [user, setUser] = useState(null);
  const API_BASE_URL = import.meta.env.VITE_API_BASE_URL ;
  useEffect(() => {
    const checkAuth = async () => {
      try {
        const data = await axios.get(`${API_BASE_URL}/api/auth/me`, {
          withCredentials: true,
        });
        if (data.data.status === "success") {
          setIsAuthenticated(true);
          setUser(data.data.user);
        } else {
          setIsAuthenticated(false);
        }
      } catch {
        setIsAuthenticated(false);
      } finally {
        setLoading(false);
      }
    };
    checkAuth();
  }, []);

  return { isAuthenticated, loading, user, setIsAuthenticated };
};
