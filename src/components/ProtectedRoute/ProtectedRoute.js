import { useAuthState } from 'react-firebase-hooks/auth';
import { Navigate } from 'react-router-dom';

import { auth } from '../../config/Firebase';

const ProtectedRoute = ({ children, loginOnly = true }) => {
  const [user] = useAuthState(auth);

  if (!user && loginOnly) {
    return <Navigate to="/Login"/>;
  }

  if(user && !loginOnly) {
    return <Navigate to="/"/>;
  }
  
  return children;
};

export default ProtectedRoute;