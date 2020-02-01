import styled from 'styled-components/native';
import {RectButton} from 'react-native-gesture-handler';

export const Container = styled.View`
  flex: 1;
  padding: 30px;
  background: #222;
`;

export const Form = styled.View`
  flex-direction: row;
  padding-bottom: 20px;
  border-bottom-width: 1px;
  border-color: #666;
`;

export const Input = styled.TextInput.attrs({
  placeholderTextColor: '#fff',
})`
  flex: 1;
  height: 40px;
  background: #333;
  border-radius: 4px;
  padding: 0 15px;
  border: ${props => (props.error ? '1px solid red' : '1px solid #333')};
  color: ${props => (props.error ? 'red' : '#fff')};
`;

export const SubmitButton = styled(RectButton)`
  justify-content: center;
  align-items: center;
  background: #7159c1;
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
  background: #333;
  padding: 15px;
  border-radius: 10px;
  position: relative;
`;

export const Avatar = styled.Image`
  width: 64px;
  height: 64px;
  border-radius: 32px;
  background: #555;
`;

export const Name = styled.Text`
  font-size: 14px;
  color: #fff;
  font-weight: bold;
  margin-top: 4px;
  text-align: center;
`;

export const Bio = styled.Text.attrs({
  numberOfLines: 2,
})`
  color: #ddd;
  text-align: center;
  font-size: 13px;
  line-height: 18px;
  margin-top: 5px;
`;

export const ProfileButton = styled(RectButton)`
  margin-top: 10px;
  background: #7159c1;
  border-radius: 4px;
  align-self: stretch;
  justify-content: center;
  align-items: center;
  height: 36px;
`;

export const ProfileButtonText = styled.Text`
  color: #fff;
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
