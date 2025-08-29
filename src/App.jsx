import './css/style.css';

import { Navigate, Route, Routes } from 'react-router-dom';

import { ToastContainer } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";

import Dashboard from './Pages/Dashboard';
import LandingPage from './Pages/LandingPage';
import { Signup } from './Components/Signup';
import { Login } from './Components/Login';
import {useAuth} from './hooks/useAuth'
const ProtectedRoute = ({ children }) => {
  const { isAuthenticated, loading } = useAuth();
  if (loading) return <p>Loading...</p>;
  if (!isAuthenticated) return <Navigate to="/login" replace />;
  return children;
};
function App() {
  return (
    <>
      <ToastContainer theme="dark" />
      <Routes>
        <Route path="/" element = {<LandingPage />}/>
        <Route path="/signup" element = {<Signup />}/>
        <Route path="/login" element = {<Login />}/>
        <Route path="/dashboard/*" element = {<ProtectedRoute>
              <Dashboard />
            </ProtectedRoute>}>
          
            </Route>

            <Route path="*" element={<Navigate to="/" replace />} />
      </Routes> 
    </>
  );
}

export default App;
