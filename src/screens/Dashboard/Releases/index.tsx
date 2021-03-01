import React, { useCallback, useEffect, useRef, useState } from 'react';
import { useSelector } from 'react-redux';
import Balance from '../../../components/Balance';
import User from '../../../components/User';
import Plans from '../../../components/Plans';
import { Container, Main, MenuLeft, Paragraph, Value, Line, MenuContainer } from './style';
import { ScrollView } from 'react-native-gesture-handler';
import Launchs from '../../../components/Launchs';
import { Contas, Lancamentos, Plano } from '../../../interfaces/dashboard';
import api from '../../../services/api';
import { ApplicationStore } from '../../../store';
import { Animated, View, StyleSheet, Dimensions } from 'react-native';
import Bottom from '../../../components/Bottom';
import { useNavigation } from '@react-navigation/native';
import Loader from '../../../components/Loader';
import useChangeIfNotAuth from '../../../services/useChangeIfNotAuth';

const Releases: React.FC = () => {
  const navigator = useNavigation();
  const fadeAnim = useRef(new Animated.Value(0)).current;
  const store = useSelector( (store: ApplicationStore) => store );
  const [ allLaunchs, setAllLaunchs ] = useState<Lancamentos[]>();
  const [ accountInfo, setAccountInfo ] = useState<Contas>();
  const [ loading, setLoading ] = useState(false);
  const [ hideOrShow, setHideOrShow ] = useState(false);
  const [ plans, setPlans ] = useState(0);
  const [ update, setUpdate ] = useState(false);

  //here its a way to update this page everytime when 
  //the navigation turn here
  navigator.addListener('focus', () => {
    setUpdate(!update);
  });

  //function to get all users plans
  useEffect(() => {
    api.get<Plano[]>(`/lancamentos/planos-conta?login=${ store.user?.login }`, {
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
  }, []);

  //function to make month data get a 0 in position [0]
  //if your length is less than 2. 
  const formatDate = useCallback((date:string) => {
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
    useChangeIfNotAuth();
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
        return Number(new Date(a.data)) - Number(new Date(b.data));
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
  useEffect( () => {
    loadDashInformations();
  }, [ update ])


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
  
  const showMenuLeft = (action:string) => {

    setHideOrShow(!hideOrShow);
    if (action === 'hide') hide();
    if (action === 'show') show();
  }

  return (
    <Main>
      {
        <>
          <Animated.View style={[
            styles.fadingContainer,
            {
              left: fadeAnim,
            }
          ]}>
            <MenuLeft>
              {
                store.user && <User hide={showMenuLeft} showCancel={true} hideName={true} fromRealeases={true} user={store.user} />
              }
              <MenuContainer>
                <Paragraph>Seu nome:</Paragraph>
                <Value>{store.user?.name}</Value>
                <Paragraph>Email:</Paragraph>
                <Value>email@email.com</Value>
                <Paragraph>Username:</Paragraph>
                <Value>{store.user?.login}</Value>
                <Paragraph>CPF:</Paragraph>
                <Value>000.000.000-00</Value>
                <Line></Line>
                <Paragraph>Você tem:</Paragraph>
                <Value>{plans} planos de conta</Value>
              </MenuContainer>
            </MenuLeft> 
          </Animated.View>
        </>
      }
      <ScrollView>
        <Container>
          {
            !loading && <Loader changeColor={true} marginTop={34} />
          }
          {
            loading && store.user && <User show={showMenuLeft} user={store.user} />
          }
          {
            loading && accountInfo && <Balance conta={accountInfo?.contaBanco}/>
          }
          {
            loading && allLaunchs && <Plans lancamentos={allLaunchs}/>
          }
          {
            loading && allLaunchs && <Launchs launchs={allLaunchs}/>
          }
        </Container>
      </ScrollView>
      <Bottom />
    </Main>
    
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