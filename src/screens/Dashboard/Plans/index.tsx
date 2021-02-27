import React, { useEffect, useState } from 'react';
import { Feather } from '@expo/vector-icons';
import { useSelector } from 'react-redux';
import Loader from '../../../components/Loader';
import { Plano } from '../../../interfaces/dashboard';
import api from '../../../services/api';
import { ApplicationStore } from '../../../store';

import { CardTitle, CardType, CardUser, Container, PlansCard, PlansContainer, PlusButton } from './styles';

const Plans: React.FC = () => {
  const [plans, setPlans] = useState<Plano[]>();

  const user = useSelector(( store: ApplicationStore ) => store.user);

  useEffect(() => {
    api.get<Plano[]>(`/lancamentos/planos-conta?login=${ user?.login }`, {
      headers: {
        Authorization: user?.token
      }
    })
    .then(response => {
      setPlans(response.data);
    })
    .catch(err => console.log(err.response));
  }, [user]);

  if (plans) return (
      <Container>
        <PlansContainer>
          {plans.map((plan, index) => (
            <PlansCard
              key={index}
            >
              <CardTitle>{plan.descricao}</CardTitle>
              <CardUser>{plan.login}</CardUser>
              <CardType>Movimentação do tipo: {plan.tipoMovimento}</CardType>
            </PlansCard>
          ))}

          <PlusButton>
            <Feather name="plus" size={24} color="#fff"  />
          </PlusButton>
        </PlansContainer>
      </Container>
  );
  else return <Loader marginTop={0} />
}

export default Plans;