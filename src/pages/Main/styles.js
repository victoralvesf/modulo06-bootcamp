import styled from 'styled-components/native';
import {RectButton} from 'react-native-gesture-handler';

import Colors from '../../themes/dark';

export const Container = styled.View`
  flex: 1;
  padding: 30px;
  background: ${Colors.background};
`;

export const Form = styled.View`
  flex-direction: row;
  padding-bottom: 20px;
  border-bottom-width: 1px;
  border-color: ${Colors.card};
`;

export const Input = styled.TextInput.attrs({
  placeholderTextColor: Colors.white,
})`
  flex: 1;
  height: 40px;
  background: ${Colors.secondaryGray};
  border-radius: 4px;
  padding: 0 15px;
  border: ${props =>
    props.error ? '1px solid red' : `1px solid ${Colors.secondaryGray}`};
  color: ${props => (props.error ? 'red' : Colors.white)};
`;

export const SubmitButton = styled(RectButton)`
  justify-content: center;
  align-items: center;
  background: ${Colors.primary};
  border-radius: 4px;
  margin-left: 10px;
  padding: 0 12px;
  opacity: ${props => (props.loading ? 0.7 : 1)};
`;

export const List = styled.FlatList.attrs({
  showVerticalScrollIndicator: false,
})`
  margin-top: 20px;
`;

export const User = styled.View`
  align-items: center;
  margin: 0 15px 30px;
  background: ${Colors.secondaryGray};
  padding: 15px;
  border-radius: 10px;
  position: relative;
`;

export const Avatar = styled.Image`
  width: 64px;
  height: 64px;
  border-radius: 32px;
  background: ${Colors.image};
`;

export const Name = styled.Text`
  font-size: 14px;
  color: ${Colors.white};
  font-weight: bold;
  margin-top: 4px;
  text-align: center;
`;

export const Bio = styled.Text.attrs({
  numberOfLines: 2,
})`
  color: ${Colors.text};
  text-align: center;
  font-size: 13px;
  line-height: 18px;
  margin-top: 5px;
`;

export const ProfileButton = styled(RectButton)`
  margin-top: 10px;
  background: ${Colors.primary};
  border-radius: 4px;
  align-self: stretch;
  justify-content: center;
  align-items: center;
  height: 36px;
`;

export const ProfileButtonText = styled.Text`
  color: ${Colors.white};
  font-size: 14px;
  font-weight: bold;
  text-transform: uppercase;
`;

export const RemoveUser = styled.View`
  width: 30px;
  height: 30px;
  position: absolute;
  right: 10px;
  top: 10px;
`;

export const RemoveUserButton = styled.TouchableOpacity`
  width: 30px;
  height: 30px;
  justify-content: center;
  align-items: center;
  border-radius: 15px;
`;
