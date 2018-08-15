import React from 'react';
import {
  TouchableOpacity,
  Text,
  StyleSheet,
} from 'react-native';

const styles = StyleSheet.create({
  button: {
    paddingTop: 5,
    paddingBottom: 5,
    paddingLeft: 10,
    paddingRight: 10,
    backgroundColor: '#008080',
    marginLeft: 5,
    marginRight: 5,
  },
  textStyle: {
    color: 'white',
    fontSize: 20,
    padding: 5,
  },
});

const GetButton = (props) => {
  const {
    onPress,
    children,
    textShow
  } = props;

  return (
    <TouchableOpacity
      onPress={onPress}
      style={styles.button}
    >
      <Text style={styles.textStyle}>
        {children}
      </Text>
    </TouchableOpacity>
  );
};

export default GetButton;
