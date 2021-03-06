import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View} from 'react-native';
import HttpScreen from './src/component/HttpScreenPrice';
import AutoScreen from './src/component/AutoScreenPrice';

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu',
  android:
    'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});

type Props = {};
export default class App extends Component<Props> {
  constructor(props) {
    super(props);
    this.state = {
      price: 0
    }
  }

  getFxPrice = () => {
    console.log('get');
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

  sleep = (waitMsec) => {
    var startMsec = new Date();
    while (new Date() - startMsec < waitMsec);
  }

  getFxPriceAuto = () => {
    setInterval(this.getFxPrice(), 1000)
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>Bitcoin Fx JPY：現在の価格</Text>
        <Text style={styles.textShow}>
          {this.state.price}
        </Text>
        <HttpScreen onPress={this.getFxPrice}/>
        <AutoScreen onPress={this.getFxPriceAuto}/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  textShow: {
    fontSize: 30,
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});
