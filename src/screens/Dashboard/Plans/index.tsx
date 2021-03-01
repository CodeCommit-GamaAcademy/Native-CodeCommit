import React, { useEffect, useState } from 'react';
import { Feather, MaterialIcons } from '@expo/vector-icons';
import { useSelector } from 'react-redux';
import Loader from '../../../components/Loader';
import { Plano } from '../../../interfaces/dashboard';
import api from '../../../services/api';
import { ApplicationStore } from '../../../store';

import { Text } from 'react-native';

import RNPickerSelector from 'react-native-picker-select'

import { AddButton, 
  CardTitle, 
  CardType, 
  CardUser, 
  Container, 
  ModalContainer, 
  ModalContent, 
  ModalTitle, 
  PlansCard, 
  PlansContainer, 
  PlusButton, 
  SelectView, 
  TextArea, 
  TitleText, 
  ButtonText, 
  Main
} from './styles';

import Bottom from '../../../components/Bottom';

const Plans: React.FC = () => {
  const [plans, setPlans] = useState<Plano[]>();
  const [ isAdding, setIsAdding ] = useState(true);

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
    <Main>
      <Container>
        { isAdding && <AddPlansModal /> }

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
      <Bottom />
    </Main>
  );
  else return <Loader marginTop={0} />
}

const AddPlansModal: React.FC = () => {
  const [selectValue, setSelectValue] = useState('');
  const [description, setDescription] = useState('');

  return (
    <ModalContainer>
      <ModalContent>
        <Feather 
          name='x' 
          size={ 18 } 
          style={{ position: 'absolute', left: 8, top: 8 }}
        />
        <ModalTitle>
          <TitleText>
            <MaterialIcons name="event-note" size={18} style={{ marginRight: 12 }} />
            <Text >Adicionar um plano</Text>
          </TitleText>

          <SelectView>
            <RNPickerSelector 

              onValueChange={(value) => setSelectValue(value)}

              items={[
                {label: 'Receita', value: 'R', color: '#000'},
                {label: 'Despesa', value: 'D', color: '#000'},
                {label: 'Transferências entre contas', value: 'TC', color: '#000'},
                {label: 'Transferências entre usuários', value: 'TU', color: '#000'},
              ]}

              style={{ inputAndroid: { color: '#000' }, inputIOS: { color: '#000' } }}

              placeholder={{ label: 'Escolha o tipo', value: '' }}
            />

            <TextArea 
              onChangeText={ text => setDescription(text) }
              placeholder="Descrição"
            />

            <AddButton>
              <Feather name="plus" />
              <ButtonText>Adicionar</ButtonText>
            </AddButton>
          </SelectView>
        </ModalTitle>
      </ModalContent>
    </ModalContainer>
  );
}

export default Plans;