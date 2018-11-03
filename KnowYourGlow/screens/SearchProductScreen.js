import React from 'react';
import { ScrollView, Button } from 'react-native';

export default class SearchProductScreen extends React.Component {
  static navigationOptions = {
    title: 'SearchProducts',
  };

  render() {
    const { navigate } = this.props.navigation;

    return (
      <ScrollView>
        <Button
          title="Product"
          onPress={() => navigate('Product')}
        />
      </ScrollView>
    );
  }
}
