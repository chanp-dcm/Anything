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
    this.state = {
      price: 0
    }
  }

  getFxPrice = () => {
    return fetch('https://api.bitflyer.jp/v1/board?product_code=FX_BTC_JPY')
      .then((response) => response.json() )
        .then((responseJson) => {
          this.setState({
            price: responseJson['mid_price']
          });
        })
      .catch((error) => {
        Alert.alert("通信エラーが発生しました");
        console.error(error);
      });
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.textShow}>
          {this.state.price}
        </Text>
        <GetButton
          onPress={this.getFxPrice}
          style={styles.textShow}
        >
          取得
        </GetButton>
      </View>
    )
  }
}
