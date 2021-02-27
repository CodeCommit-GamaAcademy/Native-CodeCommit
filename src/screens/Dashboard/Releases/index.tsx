import React from 'react';
import { Text, View } from 'react-native';
import Balance from '../../../components/Balance';
import User from '../../../components/User';
import Plans from '../../../components/Plans';
import { Container } from './style';
import { ScrollView } from 'react-native-gesture-handler';
import Launchs from '../../../components/Launchs';

// import { Container } from './styles';

const Releases: React.FC = () => {
  return (
    <ScrollView>
      <Container>
        <User />
        <Balance />
        <Plans />
        <Launchs />
      </Container>
    </ScrollView>
    
  );
}

export default Releases;