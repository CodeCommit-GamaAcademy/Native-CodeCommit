import React from 'react';

import { LoaderContainer } from './styles';

interface LoaderProps {
  marginTop: number;
  children?: React.ReactNode;
}

const Loader: React.FC<LoaderProps> = ({ marginTop }) => {
  return (
    <LoaderContainer color="#8c52e5" size="large" marginTop={marginTop}></LoaderContainer>
  );
}

export default Loader; 