import React, { useCallback, useEffect, useRef, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Balance from '../../../components/Balance';
import User from '../../../components/User';
import Plans from '../../../components/Plans';
import { Container, Main, MainContainer, MenuLeft, Paragraph, Value, Line, MenuContainer, LogoutButton, LogoutText } from './style';
import { ScrollView } from 'react-native-gesture-handler';
import Launchs from '../../../components/Launchs';
import { Contas, Lancamentos, Plano } from '../../../interfaces/dashboard';
import api from '../../../services/api';
import { ApplicationStore } from '../../../store';
import { Animated, StyleSheet, Dimensions, RefreshControl, Platform } from 'react-native';
import Bottom from '../../../components/Bottom';
import { useNavigation } from '@react-navigation/native';
import Loader from '../../../components/Loader';
import ValidateCurrentToken from '../../../services/ValidateCurrentToken';
import updateStore from '../../../services/updateStore';
import { Feather } from '@expo/vector-icons';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { sign_out } from '../../../store/user/actions';
import maskCPF from '../../../utils/maskCpf';
import LogoutModal from '../../../components/LogoutModal';

const Releases: React.FC = () => {
  const navigator = useNavigation();
  const fadeAnim = useRef(new Animated.Value(0)).current;
  const store = useSelector((store: ApplicationStore) => store);
  const dispatch = useDispatch();

  const [allLaunchs, setAllLaunchs] = useState<Lancamentos[]>();
  const [accountInfo, setAccountInfo] = useState<Contas>();
  const [loading, setLoading] = useState(false);
  const [plans, setPlans] = useState(0);
  const [update, setUpdate] = useState(false);
  const [isExiting, setIsExiting] = useState(false);

  //here its a way to update this page everytime when 
  //the navigation turn here
  navigator.addListener('focus', () => {
    setUpdate(!update);
  });

  useEffect(() => {
    const GetAuth = async () => {
      await ValidateCurrentToken();
      const isLogged = await updateStore();

      if (!isLogged) navigator.navigate('Login');
    }

    GetAuth();
  }, []);

  const handleLogout = useCallback(async () => {
    await AsyncStorage.removeItem('@token_user');
    await AsyncStorage.removeItem('@user_data');
    dispatch(sign_out());
    navigator.navigate('Login');
    setIsExiting(false);
    showMenuLeft('hide');
  }, [dispatch, navigator]);

  //function to make month data get a 0 in position [0]
  //if your length is less than 2. 
  const formatDate = useCallback((date: string) => {
    var d = new Date(date),
      month = '' + (d.getMonth() + 1),
      day = '' + d.getDate(),
      year = d.getFullYear();

    if (month.length < 2)
      month = '0' + month;
    if (day.length < 2)
      day = '0' + day;
    return [year, month, day].join('-');
  }, []);

  //function to load informations about user, like
  //accountBank, accountCredit etc.
  const loadDashInformations = async () => {
    const today = new Date();
    const date = new Date();
    const referenceDate = new Date(date.setDate(date.getMonth() - 365));

    try {
      const response = await api.get<Contas>(`dashboard?fim=${formatDate(today.toDateString())}&inicio=${formatDate(referenceDate.toDateString())}&login=${store.user?.login}`, {
        headers: {
          Authorization: store.user?.token
        }
      });
      //make launchs ordered
      const initLaunchs = [...response.data.contaBanco.lancamentos,
        ...response.data.contaCredito.lancamentos];
        
      const orderedLauchs = initLaunchs.slice().sort((a, b) => {
        return new Date(a.data).getTime() - new Date(b.data).getTime();
      }).reverse();
      setAllLaunchs(orderedLauchs);
      setAccountInfo(response.data);
      setLoading(true);
    } catch (err) {
      console.log(err);
    }
  };
  //hook to call loadDashInformations everytime that it
  //has rendered
  useEffect(() => {
    loadDashInformations();
  }, [update])

  //function to get all users plans
  useEffect(() => {
    api.get<Plano[]>(`/lancamentos/planos-conta?login=${store.user?.login}`, {
      headers: {
        Authorization: store.user?.token
      }
    })
      .then(response => {
        let count = 0
        response.data.forEach(() => {
          count += 1;
        })
        setPlans(count);
      })
      .catch(err => console.log(err.response));
  }, [update]);


  const show = () => {
    // Will change fadeAnim value to 0 in 0.7 seconds
    Animated.timing(fadeAnim, {
      toValue: - Dimensions.get('window').width + 80,
      duration: 700,
      useNativeDriver: false,
    }).start();
  };

  const hide = () => {
    // Will change fadeAnim value to 0 in 0.7 seconds
    Animated.timing(fadeAnim, {
      toValue: 0,
      duration: 700,
      useNativeDriver: false,
    }).start();
  };

  const showMenuLeft = (action: 'hide' | 'show') => {
    if (action === 'hide') hide();
    else if (action === 'show') show();
  }

  const [refreshing, setRefreshing] = useState(false);
  const onRefresh = () => {
    setRefreshing(true);
    loadDashInformations();
    setRefreshing(false);
  }

  return (
    <>
      <Main>
        {isExiting && <LogoutModal accept={handleLogout} decline={() => setIsExiting(false)} />}
        <MainContainer
          refreshControl={
            <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
          }
        >
          <ScrollView>
            <Container>
              {
                !loading && <Loader changeColor={true} marginTop={34} />
              }
              {
                loading && store.user && <User onAction={() => showMenuLeft('show')} user={store.user} />
              }
              {
                loading && accountInfo && <Balance update={ update } conta={accountInfo?.contaBanco} />
              }
              {
                loading && allLaunchs && <Plans update={ update } lancamentos={allLaunchs} />
              }
              {
                loading && allLaunchs && <Launchs launchs={allLaunchs} />
              }
            </Container>
          </ScrollView>
        </MainContainer>
        <Animated.View style={{
          ...styles.fadingContainer,
          left: fadeAnim,
        }}>
          <MenuLeft>
            {
              store.user && <User showCancel={true} onCancel={() => showMenuLeft('hide')} hideName={true} fromRealeases={true} user={store.user} />
            }
            <MenuContainer>
              <Paragraph>Seu nome:</Paragraph>
              <Value>{store.user?.name}</Value>
              <Paragraph>Username:</Paragraph>
              <Value>{store.user?.login}</Value>
              <Paragraph>CPF:</Paragraph>
              <Value>{store.user && maskCPF(store.user.cpf)}</Value>
              <Line />
              <Paragraph>Você tem:</Paragraph>
              <Value>{plans} planos de conta</Value>
              <Line />
              <LogoutButton onPress={() => setIsExiting(true)}>
                <Feather size={14} color="#8C52E5" name="log-out" />
                <LogoutText>Sair</LogoutText>
              </LogoutButton>
            </MenuContainer>
          </MenuLeft>
        </Animated.View>
        <Bottom />
      </Main>
    </>
  );
}

const styles = StyleSheet.create({
  fadingContainer: {
    position: 'absolute',
    backgroundColor: "white",
    height: Dimensions.get('window').height,
    width: Dimensions.get('window').width - 80,
    zIndex: 100,
    top: 0,
    right: 0,
    marginLeft: Dimensions.get('window').width,
    display: 'flex',
    alignItems: 'center',
  },
});

export default Releases;