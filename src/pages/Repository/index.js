import React from 'react';
import PropTypes from 'prop-types';

import {Browser} from './styles';

export function repositoryOptions({navigation}) {
  return {
    title: navigation.getParam('repository').name,
  };
}

function Repository({navigation}) {
  const repository = navigation.getParam('repository');

  return <Browser source={{uri: repository.html_url}} />;
}

Repository.propTypes = {
  navigation: PropTypes.shape({
    getParam: PropTypes.func,
  }).isRequired,
};

export default Repository;
