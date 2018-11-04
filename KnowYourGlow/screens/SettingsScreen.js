import React from 'react';
import { Text, View, StyleSheet } from 'react-native';

import { appBackgroundColor, brandBlack, brandPink, brandRed, brandYellow, brandBlue } from '../constants/Colors';
import font from '../styles/fonts';

const styles = StyleSheet.create({
  select: {
    width: 40,
    height: 40,
    margin: 10,
  },
  block: {
    marginBottom: 30,
    backgroundColor: brandBlack,
    height: 20,
    alignSelf: 'stretch',
  },
  highlight: {
    marginBottom: 30,
    height: 20,
    alignSelf: 'stretch',
  },
});

export default class SettingsScreen extends React.Component {
  static navigationOptions = {
    title: 'SETTINGS',
  };

  state = { highlight: brandYellow };

  onButtonPress = (value) => {
    this.setState({ highlight: value });
  }

  render() {
    return (
      <View style={{
          flex: 1,
          justifyContent: 'center',
          padding: 15,
          backgroundColor: appBackgroundColor,
        }}
      >

        <View style={{ flex: 1, justifyContent: 'center' }}>
          <Text style={[font.smallBold, { textAlign: 'center' }]}>PICK YOUR HIGHLIGHT</Text>
          <View style={{ flexDirection: 'row', justifyContent: 'center', marginTop: 20 }}>
            <Text
              style={[styles.select, { backgroundColor: brandPink }]}
              onPress={() => this.onButtonPress(brandPink)}
            />
            <Text
              style={[styles.select, { backgroundColor: brandRed }]}
              onPress={() => this.onButtonPress(brandRed)}
            />
            <Text
              style={[styles.select, { backgroundColor: brandYellow }]}
              onPress={() => this.onButtonPress(brandYellow)}
            />
            <Text
              style={[styles.select, { backgroundColor: brandBlue }]}
              onPress={() => this.onButtonPress(brandBlue)}
            />
          </View>
        </View>

        <View style={{
            flex: 2,
            paddingLeft: 30,
            paddingRight: 30,
            justifyContent: 'center',
          }}
        >
          <Text style={styles.block} />
          <Text style={styles.block} />
          <Text style={[styles.highlight, { backgroundColor: this.state.highlight }]} />
          <Text style={styles.block} />
        </View>
      </View>
    );
  }
}
