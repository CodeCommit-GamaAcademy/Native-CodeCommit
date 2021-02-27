import { Feather } from '@expo/vector-icons';
import React, { useState } from 'react';
import { Platform, View } from 'react-native';
import RNPickerSelect from 'react-native-picker-select';

import User from '../../../components/User';
import { ContainerScrollView, Container, InputForm, ContainerForm, ButtonSubmit, ButtonSubmitText, TitleForm, SelectForm } from './style';

// import { Container } from './styles';

const Transfer: React.FC = () => {

  const [plano, setPlano] = useState('')
  const [transacao, setTransacao] = useState('')

  return (
    <ContainerScrollView>
      <Container enabled={Platform.OS === 'ios'} behavior="padding">
        <User showCancel={true} />

        <ContainerForm>
          <TitleForm>
            Transferências
          </TitleForm>

          <View>
            <InputForm placeholder="Destinatário" />
            <SelectForm>
              <RNPickerSelect
                placeholder={{label: "Plano de conta a debitar"}}
                onValueChange={(value) => setPlano(value)}
                value={plano}
                items={[
                  { label: 'Plano 1', value: 'plano1' },
                  { label: 'Plano 2', value: 'plano2' },
                  { label: 'Plano 3', value: 'plano3' },
                ]}
                Icon={() => {
                  return <Feather name="chevron-down" size={24} color="#878686" />;
                }}
              />
            </SelectForm>
            <SelectForm>
              <RNPickerSelect
                placeholder={{label: "Tipo de transação"}}
                onValueChange={(value) => setTransacao(value)}
                value={transacao}
                items={[
                  { label: 'Transação 1', value: 'transação1' },
                  { label: 'Transação 2', value: 'transação2' },
                  { label: 'Transação 3', value: 'transação3' },
                ]}
                Icon={() => {
                  return <Feather name="chevron-down" size={24} color="#878686" />;
                }}
              />
            </SelectForm>
            <InputForm placeholder="Valor da transferência" />

            <ButtonSubmit>
              <ButtonSubmitText>Realizar transferência</ButtonSubmitText>
              <Feather name="arrow-right" size={20} color="#fff" />
            </ButtonSubmit>
          </View>
        </ContainerForm>
      </Container>
    </ContainerScrollView>
  );
}

export default Transfer;