import React, { useEffect, useState } from 'react';
import { View, Text } from 'react-native';
import { useSelector } from 'react-redux';
import Loader from '../../../components/Loader';
import { Plano } from '../../../interfaces/dashboard';
import api from '../../../services/api';

import { Container } from './styles';

const Plans: React.FC = () => {
  const [plans, setPlans] = useState<Plano[]>();

  

  useEffect(() => {
    api.get('')
  }, []);

  if (plans) return (
      <Container>
          <Text>Planos</Text>
      </Container>
  );
  else return <Loader />
}

export default Plans;