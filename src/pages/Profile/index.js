import React from 'react';
import {View} from 'react-native';
import PropTypes from 'prop-types';
import api from '../../services/api';

// import { Container } from './styles';

export function navigationOptions({navigation}) {
  return {
    title: navigation.getParam('user').name,
  };
}

function User({navigation}) {
  User.propTypes = {
    navigation: PropTypes.shape({
      getParam: PropTypes.func,
    }).isRequired,
  };

  return <View />;
}

export default User;
