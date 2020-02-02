import styled from 'styled-components/native';
import Colors from '../../themes/dark';

export const Container = styled.View`
  flex: 1;
  padding: 30px;
  background: ${Colors.background};
`;

export const Header = styled.View`
  align-items: center;
  padding-bottom: 20px;
  border-bottom-width: 1px;
  border-color: ${Colors.card};
`;

export const Avatar = styled.Image`
  width: 100px;
  height: 100px;
  border-radius: 50px;
  background: ${Colors.image};
`;

export const Name = styled.Text`
  font-size: 20px;
  color: ${Colors.white};
  font-weight: bold;
  margin-top: 10px;
  text-align: center;
`;

export const Bio = styled.Text`
  color: ${Colors.text};
  text-align: center;
  font-size: 14px;
  line-height: 18px;
  margin-top: 5px;
`;

export const Stars = styled.FlatList.attrs({
  showsVerticalScrollIndicator: false,
})`
  margin-top: 20px;
`;

export const Starred = styled.View`
  align-items: center;
  margin-bottom: 20px;
  background: ${Colors.secondaryGray};
  padding: 10px 15px;
  border-radius: 10px;
  flex-direction: row;
`;

export const OwnerAvatar = styled.Image`
  width: 42px;
  height: 42px;
  border-radius: 21px;
  background: ${Colors.image};
`;

export const Info = styled.View`
  margin-left: 10px;
  flex: 1;
`;

export const Title = styled.Text.attrs({
  numberOfLines: 1,
})`
  font-size: 15px;
  font-weight: bold;
  color: ${Colors.white};
`;

export const Author = styled.Text`
  font-size: 13px;
  color: ${Colors.text};
  margin-top: 2px;
`;

export const Loading = styled.View`
  margin-top: 20px;
`;
