import { View, Text, TextInput } from 'react-native';
import { Container, TopTitle, BoxContent , InputForm, CardTitle, Main} from './style';
import AsyncStorage from '@react-native-async-storage/async-storage';
import React, { useEffect } from 'react';
import Bottom from '../../../components/Bottom';

// import { Container } from './styles';

const Transfer: React.FC = () => {
  return (
    <Main>
      <Container>
        <TopTitle> 
          Olá, (nome do usuário)
        </TopTitle>
        <BoxContent>
          <CardTitle> Transferências </CardTitle>
          <InputForm placeholder="Destinatário"></InputForm>
          <InputForm placeholder="teste"></InputForm>
          <InputForm placeholder="Valor da Transferência"></InputForm>

        </BoxContent>
      </Container>
      <Bottom />
    </Main>
  );
}

export default Transfer;