import React from 'react';

import { LoaderContainer } from './styles';

interface LoaderProps {
  marginTop: number;
  changeColor?: boolean;
  children?: React.ReactNode;
}

const Loader: React.FC<LoaderProps> = ({ marginTop, changeColor=false }) => {
  return (
    <LoaderContainer color={changeColor ? "#FFFFFF": "#8c52e5"} size="large" marginTop={marginTop}></LoaderContainer>
  );
}

export default Loader; 