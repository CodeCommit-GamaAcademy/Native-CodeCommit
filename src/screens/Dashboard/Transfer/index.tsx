import React from 'react';
import { View, Text, TextInput } from 'react-native';
import { Container, TopTitle, BoxContent , InputForm, CardTitle} from './style';

// import { Container } from './styles';

const Transfer: React.FC = () => {
  return (
    <Container>
      <TopTitle> 
        Olá, (nome do usuário)
      </TopTitle>
      <BoxContent>
<CardTitle> Transferências </CardTitle>
        <InputForm name="teste" placeholder="Destinatário"></InputForm>
        <InputForm name="teste" placeholder="teste"></InputForm>
        <InputForm name="teste" placeholder="Valor da Transferência"></InputForm>

      </BoxContent>
    </Container>
  );
}

export default Transfer;