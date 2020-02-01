import React, {useState, useEffect} from 'react';
import PropTypes from 'prop-types';
import {Keyboard, ActivityIndicator} from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';
import Icon from 'react-native-vector-icons/MaterialIcons';
import api from '../../services/api';

import {
  Container,
  Form,
  Input,
  SubmitButton,
  List,
  User,
  Avatar,
  Name,
  Bio,
  ProfileButton,
  ProfileButtonText,
  RemoveUser,
  RemoveUserButton,
} from './styles';

export default function Main({navigation}) {
  Main.propTypes = {
    navigation: PropTypes.shape({
      navigate: PropTypes.func,
    }).isRequired,
  };

  const [newUser, setNewUser] = useState('');
  const [users, setUsers] = useState([]);
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setError(false);
  }, [newUser]);

  useEffect(() => {
    async function loadUsers() {
      const savedUsers = await AsyncStorage.getItem('users');
      if (savedUsers) setUsers(JSON.parse(savedUsers));
    }
    loadUsers();
  }, []);

  useEffect(() => {
    AsyncStorage.setItem('users', JSON.stringify(users));
  }, [users]);

  async function handleAddUser() {
    setLoading(true);
    await api
      .get(`/users/${newUser}`)
      .then(response => {
        const data = {
          name: response.data.name,
          login: response.data.login,
          bio: response.data.bio,
          avatar: response.data.avatar_url,
        };

        setUsers([...users, data]);
        setNewUser('');
        setLoading(false);
        Keyboard.dismiss();
      })
      .catch(() => {
        setLoading(false);
        setError(true);
      });
  }

  function handleRemoveAnUser(i) {
    const newUsers = users.filter(function remove(_value, index) {
      return index !== i;
    });
    setUsers(newUsers);
  }

  function handleNavigate(user) {
    navigation.navigate('Profile', {user});
  }

  return (
    <Container>
      <Form>
        <Input
          autoCorrect={false}
          autoCapitalize="none"
          placeholder="Adicionar usuário"
          value={newUser}
          onChangeText={text => setNewUser(text)}
          returnKeyType="send"
          onSubmitEditing={handleAddUser}
          error={error}
        />
        <SubmitButton loading={loading} onPress={handleAddUser}>
          {loading ? (
            <ActivityIndicator color="#fff" />
          ) : (
            <Icon name="add" size={20} color="#fff" />
          )}
        </SubmitButton>
      </Form>

      <List
        data={users}
        keyExtractor={user => user.login}
        renderItem={({item, index}) => (
          <User>
            <RemoveUser>
              <RemoveUserButton onPress={() => handleRemoveAnUser(index)}>
                <Icon name="close" size={20} color="#f00" />
              </RemoveUserButton>
            </RemoveUser>
            <Avatar source={{uri: item.avatar}} />
            <Name>{item.name}</Name>
            {item.bio && <Bio>{item.bio}</Bio>}
            <ProfileButton onPress={() => handleNavigate(item)}>
              <ProfileButtonText>Ver perfil</ProfileButtonText>
            </ProfileButton>
          </User>
        )}
      />
    </Container>
  );
}
