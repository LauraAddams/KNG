import React from 'react';
import { View, ScrollView, Text, StyleSheet } from 'react-native';

import { appBackgroundColor } from '../constants/Colors';
import { containers } from '../constants/Containers';
import { font } from '../constants/Fonts';

export default class ProductScreen extends React.Component {
  static navigationOptions = {
    title: null,
  };

  constructor() {
    super();

    this.state = { selectedIndex: 0 };
    this.updateIndex = this.updateIndex.bind(this);
  }

  updateIndex(selectedIndex) {
    this.setState({ selectedIndex });
  }

  goBack() {
    this.props.navigation.goBack();
  }

  renderIngredients() {
    const { ingredient_list } = this.props.navigation.state.params;
    const list = ingredient_list.map((ingredient) => {
      return (
        <Text key={`${ingredient}`}>{ingredient}, </Text>
      )
    });
    return list;
  }

  render() {
    const { selectedIndex } = this.state;
    const { brand, name } = this.props.navigation.state.params;
    return (
      <View style={{ flex: 1, backgroundColor: appBackgroundColor }}>
        <View style={{ marginTop: 30, marginBottom: 30 }}>
          <Text style={[font.medium, { textAlign: 'center', margin: 8 }]}>{name}</Text>
          <Text style={[font.smallBold, { textAlign: 'center' }]}>{brand}</Text>
        </View>

        <View style={[containers.details, { marginLeft: 20, marginRight: 3 }]}>
          <Text style={font.small}>INGREDIENTS:</Text>
        </View>

        <ScrollView style={{ paddingLeft: 30, paddingRight: 30, paddingTop: 0 }}>
          <Text style={[font.p, { lineHeight: 26, textAlign: 'justify' }]}>{this.renderIngredients()}</Text>
        </ScrollView>
      </View>
    );
  }
}
