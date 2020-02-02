import React, {useState, useEffect} from 'react';
import {ActivityIndicator} from 'react-native';
import PropTypes from 'prop-types';
import api from '../../services/api';

import {
  Container,
  Header,
  Avatar,
  Name,
  Bio,
  Stars,
  Starred,
  OwnerAvatar,
  Info,
  Title,
  Author,
  Loading,
} from './styles';

export function navigationOptions({navigation}) {
  return {
    title: navigation.getParam('user').name,
  };
}

function User({navigation}) {
  const [stars, setStars] = useState([]);
  const [user, setUser] = useState({});
  const [loading, setLoading] = useState(false);
  const [page, setPage] = useState(1);
  const [refreshing, setRefreshing] = useState(false);

  const load = async (pageNumber = 1, gitUser) => {
    const response = await api.get(`/users/${gitUser}/starred`, {
      params: {page: pageNumber},
    });

    const data = pageNumber >= 2 ? [...stars, ...response.data] : response.data;

    setStars(data);
    setPage(pageNumber);
    setRefreshing(false);
    setLoading(false);
  };

  useEffect(() => {
    async function getStars() {
      setLoading(true);
      const propUser = navigation.getParam('user');
      setUser(propUser);

      load(page, propUser.login);
    }

    getStars();
  }, []);

  const loadMore = () => {
    const nextPage = page + 1;

    load(nextPage, user.login);
  };

  const refreshList = () => {
    setLoading(true);
    setRefreshing(true);
    load(1, user.login);
  };

  function handleNavigate(repository) {
    navigation.navigate('Repository', {repository});
  }

  return (
    <Container>
      <Header>
        <Avatar source={{uri: user.avatar}} />
        <Name>{user.name}</Name>
        <Bio>{user.bio}</Bio>
      </Header>

      {loading ? (
        <Loading>
          <ActivityIndicator color="#fff" />
        </Loading>
      ) : (
        <Stars
          data={stars}
          onRefresh={refreshList}
          refreshing={refreshing}
          onEndReachedThreshold={0.2}
          onEndReached={() => loadMore()}
          keyExtractor={star => String(star.id)}
          renderItem={({item}) => (
            <Starred onPress={() => handleNavigate(item)}>
              <OwnerAvatar source={{uri: item.owner.avatar_url}} />
              <Info>
                <Title>{item.name}</Title>
                <Author>{item.owner.login}</Author>
              </Info>
            </Starred>
          )}
        />
      )}
    </Container>
  );
}

User.propTypes = {
  navigation: PropTypes.shape({
    getParam: PropTypes.func,
    navigate: PropTypes.func,
  }).isRequired,
};

export default User;
