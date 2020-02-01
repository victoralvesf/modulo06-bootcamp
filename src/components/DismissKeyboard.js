import React from 'react';
import {TouchableWithoutFeedback, Keyboard} from 'react-native';

// eslint-disable-next-line react/prop-types
export default function DismissKeyboard({children}) {
  return (
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
      {children}
    </TouchableWithoutFeedback>
  );
}
