import React from 'react';
import { View,
         Text,
         StyleSheet,
         Alert
} from 'react-native';
import PropTypes from 'prop-types';
import GetButton from './GetButton'

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    padding: 20,
  },
  textShow: {
    fontSize: 30,
  }
})

export default class HttpScreen extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const {
      onPress,
    } = this.props;

    return (
      <View style={styles.container}>
        <GetButton
          onPress={onPress}
          style={styles.textShow}
        >
          取得
        </GetButton>
      </View>
    )
  }
}
