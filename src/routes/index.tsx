import React from 'react';

import { useAuth } from '../contexts/auth';

import LogoffRoutes from './logoff.routes';

const Routes: React.FC = () => {
  const { signed, loading } = useAuth();

  if (loading) {
    return <p>Loading...</p>;
  }

  return signed ? <p>Em Breve</p> : <LogoffRoutes />;
};

export default Routes;
