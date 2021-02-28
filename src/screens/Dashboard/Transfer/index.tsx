import { Feather } from '@expo/vector-icons';
import React, { useState } from 'react';
import { Platform, View } from 'react-native';
import RNPickerSelect from 'react-native-picker-select';
import Bottom from '../../../components/Bottom';

import User from '../../../components/User';
import { ContainerScrollView, Container, InputForm, ContainerForm, ButtonSubmit, ButtonSubmitText, TitleForm, SelectForm, Main } from './style';

// import { Container } from './styles';

const Transfer: React.FC = () => {

  const [plano, setPlano] = useState('')
  const [transacao, setTransacao] = useState('')

  return (
    <Main>
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
                    { label: 'Receita', value: 'R', color: '#000' },
                    { label: 'Despesa', value: 'D', color: '#000' },
                    { label: 'Transferências entre contas', value: 'TC', color: '#000' },
                    { label: 'Transferências entre usuários', value: 'TU', color: '#000' },
                  ]}
                  style={{ inputAndroid:{ color: '#000' }}}
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
                    { label: 'Conta Banco', value: 'CB', color: '#000' },
                    { label: 'Conta Crédito', value: 'CC', color: '#000' }
                  ]}
                  style={{ inputAndroid:{ color: '#000' }}}
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
      <Bottom />
    </Main>
  );
}

export default Transfer;