import React, { useEffect } from 'react';
import { View } from 'react-native';
import { SafeAreaView } from 'react-navigation';
import { useDispatch, useSelector } from 'react-redux';
import Loading from '~/components/Loading';
import { startup } from '~/redux/actions/startupActions';
import NavigationService from '~/services/NavigationService';
import Colors from '~/Theme/Colors';
import AppContainer from './rootNavigator';

const RootScreen = () => {
  const { loading } = useSelector(state => state.api);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(startup());
  }, []);

  return (
    <SafeAreaView
      style={{ flex: 1, backgroundColor: Colors.defaultBackground }}
    >
      <View style={{ flex: 1 }}>
        <Loading visible={loading} animation="fade" />
        <AppContainer
          ref={(navigatorRef) => {
            NavigationService.setTopLevelNavigator(navigatorRef);
          }}
        />
      </View>
    </SafeAreaView>
  );
};

export default RootScreen;
