import React, { Dispatch, SetStateAction, useCallback, useEffect, useState } from 'react';
import { RefreshControl } from 'react-native';
import { Feather, MaterialIcons } from '@expo/vector-icons';
import { useSelector } from 'react-redux';
import Loader from '../../../components/Loader';
import { Plano } from '../../../interfaces/dashboard';
import api from '../../../services/api';
import { ApplicationStore } from '../../../store';
import RNPickerSelector from 'react-native-picker-select';
import { BorderlessButton, TextInput } from 'react-native-gesture-handler';
import { SafeAreaView, SafeAreaViewProps } from 'react-native-safe-area-context';
import { useNavigation } from '@react-navigation/native';

import {
  AddButton,
  CardTitle,
  CardType,
  CardUser,
  ContainerScroll,
  Container,
  ModalContainer,
  ModalContent,
  PlansCard,
  PlansContainer,
  PlusButton,
  SelectView,
  TitleText,
  ButtonText,
  Main,
  SpanTitle,
  DescriptionWrapper,
  DescriptionLabel,
  HeaderWrapper
} from './styles';

import Bottom from '../../../components/Bottom';
import ValidateCurrentToken from '../../../services/ValidateCurrentToken';
import updateStore from '../../../services/updateStore';
import User from '../../../components/User';

const Plans: React.FC = () => {
  const navigation = useNavigation();

  useEffect(() => {
    const GetAuth = async () => {
      await ValidateCurrentToken();
      const isLogged = await updateStore();

      if (!isLogged) navigation.navigate('Login');
    }

    GetAuth();
  }, []);

  const [plans, setPlans] = useState<Plano[]>();
  const [isAdding, setIsAdding] = useState(false);
  const [update, setUpdate] = useState(false);
  const [refreshing, setRefreshing] = useState(false);
  const user = useSelector((store: ApplicationStore) => store.user);

  //here its a way to update this page everytime when 
  //the navigation turn here
  navigation.addListener('focus', () => {
    setUpdate(!update);
  });

  useEffect(() => {
    getInfoPlans();
  }, [update]);

  const getInfoPlans = useCallback(() => {
    api.get<Plano[]>(`/lancamentos/planos-conta?login=${user?.login}`, {
      headers: {
        Authorization: user?.token
      }
    })
      .then(response => {
        setPlans(response.data);
      })
      .catch(err => console.log(err.response));
  }, [user]);

  const onRefresh = useCallback(() => {
    getInfoPlans();
  }, []);

  if (plans) return (
    <Main>
      {isAdding && <AddPlansModal closeModal={() => setIsAdding(false)} setPlans={setPlans} />}
      <ContainerScroll
        refreshControl={
          <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
        }
      >
        <SafeAreaView style={{ flex: 1 }} >
          <HeaderWrapper>
            {user && <User user={user} showCancel onCancel={() => navigation.navigate('Lancamentos')} />}
          </HeaderWrapper>

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

              <PlusButton
                onPress={() => setIsAdding(true)}
              >
                <Feather name="plus" size={24} color="#fff" />
              </PlusButton>
            </PlansContainer>
          </Container>
        </SafeAreaView>
      </ContainerScroll>
      <Bottom />
    </Main>
  );
  else return (
    <>
      <Main>
        <Container>
          <Loader marginTop={0} changeColor />
        </Container>
      </Main>
      <Bottom />
    </>
  )
}

interface AddPlansModalProps extends SafeAreaViewProps {
  setPlans: Dispatch<SetStateAction<Plano[] | undefined>>;
  closeModal: () => void;
}

const AddPlansModal: React.FC<AddPlansModalProps> = ({ closeModal, setPlans, ...props }) => {

  const [type, setType] = useState('');
  const [description, setDescription] = useState('');

  const user = useSelector((store: ApplicationStore) => store.user);

  const handleAddPlan = useCallback(async () => {

    // Validation TODO
    if (!type || !description) return;

    const data = {
      descricao: description,
      id: 0,
      login: user!.login,
      padrao: true,
      tipoMovimento: type
    }

    try {
      const { status } = await api.post('/lancamentos/planos-conta', data, {
        headers: {
          Authorization: user?.token
        }
      });

      if (status === 200 || status === 201) {
        setPlans(previewPlans => {
          if (previewPlans)
            return [...previewPlans, data];

          return undefined;
        });
      } else {
        alert('Something went wrong...');
      }

      closeModal();
    } catch (err) {
      console.log(err.response);
    }
  }, []);

  return (
    <ModalContainer {...props}>
      <ModalContent>

      <BorderlessButton
        style={{ position: 'absolute', top: 12, left: 12 }}
        onPress={closeModal}
      >
        <Feather name='x' size={18} />
      </BorderlessButton>

        <TitleText>
          <MaterialIcons name="event-note" color="#444444" size={24} style={{ marginRight: 8 }} />
          <SpanTitle >Adicionar um plano</SpanTitle>
        </TitleText>

        <SelectView>
          <RNPickerSelector

            onValueChange={(value) => setType(value)}

            items={[
              { label: 'Receita', value: 'R', color: '#000' },
              { label: 'Despesa', value: 'D', color: '#000' },
              { label: 'Transferências entre contas', value: 'TC', color: '#000' },
              { label: 'Transferências entre usuários', value: 'TU', color: '#000' },
            ]}

            style={{ inputAndroid: { color: '#000' }, inputIOS: { color: '#000' } }}

            placeholder={{ label: 'Escolha o tipo', value: '' }}
          />
        </SelectView>

        <DescriptionWrapper
          hasContent={!!description}
        >

          <TextInput
            onChangeText={text => setDescription(text)}
            placeholder="Descrição"
            maxLength={20}
          />

          <DescriptionLabel>Restante: {20 - description.length} </DescriptionLabel>
        </DescriptionWrapper>

        <AddButton
          onPress={handleAddPlan}
        >
          <Feather name="plus" size={14} color="#fff" />
          <ButtonText>Adicionar</ButtonText>
        </AddButton>

      </ModalContent>
    </ModalContainer>
  );
}

export default Plans;