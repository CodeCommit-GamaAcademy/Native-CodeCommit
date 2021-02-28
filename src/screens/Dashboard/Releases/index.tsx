import React, { useCallback, useEffect, useRef, useState } from 'react';
import { useSelector } from 'react-redux';
import Balance from '../../../components/Balance';
import User from '../../../components/User';
import Plans from '../../../components/Plans';
import { Container, Main, MenuContainer, MenuLeft } from './style';
import { ScrollView } from 'react-native-gesture-handler';
import Launchs from '../../../components/Launchs';
import { Contas, Lancamentos } from '../../../interfaces/dashboard';
import api from '../../../services/api';
import { ApplicationStore } from '../../../store';
import { Animated, View } from 'react-native';
import Bottom from '../../../components/Bottom';

const Releases: React.FC = () => {
  //setting store, and some states
  const fadeAnim = useRef(new Animated.Value(0)).current;
  const store = useSelector( (store: ApplicationStore) => store );
  const [ allLaunchs, setAllLaunchs ] = useState<Lancamentos[]>();
  const [ accountInfo, setAccountInfo ] = useState<Contas>();
  const [ loading, setLoading ] = useState(false);
  const [ hideOrShow, setHideOrShow ] = useState(false);

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
    setLoading(false);
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
      // console.log(username, password);
    }
  };
  //hook to call loadDashInformations everytime that it
  //has rendered
  useEffect( () => {
    loadDashInformations();
  }, [])


  const show = () => {
    // Will change fadeAnim value to 1 in 5 seconds
    Animated.timing(fadeAnim, {
      toValue: 1,
      duration: 5000,
      useNativeDriver: true,
    }).start();
  };

  const hide = () => {
    // Will change fadeAnim value to 0 in 5 seconds
    Animated.timing(fadeAnim, {
      toValue: 0,
      duration: 5000,
      useNativeDriver: true,
    }).start();
  };


  const showMenuLeft = () => {
    setHideOrShow(!hideOrShow);
  }

  return (
    <Main>
      {
        hideOrShow &&
        <>
          <MenuContainer>
              
          </MenuContainer>
          <MenuLeft>
            {
              store.user ? <User hide={showMenuLeft} showCancel={true} hideName={true} fromRealeases={true} user={store.user} /> : <View></View>
            }
          </MenuLeft>
        </>
      }
      <ScrollView>
        <Container>
          {
            loading && store.user ? <User show={showMenuLeft} user={store.user} /> : <View></View>
          }
          {
            loading && accountInfo ? <Balance conta={accountInfo?.contaBanco}/> : <View></View>
          }
          {
            loading && allLaunchs ? <Plans lancamentos={allLaunchs}/> : <View></View>
          }
          {
            loading && allLaunchs ? <Launchs launchs={allLaunchs}/> : <View></View>
          }
          
        </Container>
      </ScrollView>
      <Bottom />
    </Main>
    
  );
}

export default Releases;