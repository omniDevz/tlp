import React from 'react';

import { useAuth } from '../contexts/auth';

import LogoffRoutes from './logoff.routes';
import AuthRoutes from './auth.routes';

const Routes: React.FC = () => {
  const { signed, loading } = useAuth();

  if (loading) {
    return <p>Loading...</p>;
  }

  return signed ? <AuthRoutes /> : <LogoffRoutes />;
};

export default Routes;
