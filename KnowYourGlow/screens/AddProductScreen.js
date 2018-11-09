import React from 'react';
import { View, TextInput, Text } from 'react-native';
import { Button } from 'react-native-elements';

import { form } from '../styles/globalStyles';
import containers from '../styles/containers';
import fonts from '../styles/fonts';

export default class AddProductScreen extends React.Component {
  static navigationOptions = {
    title: 'ADD A NEW PRODUCT',
  };

  constructor(props) {
    super(props);

    this.state = {
      brand: '',
      name: '',
      ingredients: '',
      // isModalVisible: null,
      // id: '',
      // message: '',
    };
  }

  onBrandChange = (event) => {
    this.setState({ brand: event.nativeEvent.text });
  };

  onNameChange = (event) => {
    this.setState({ name: event.nativeEvent.text });
  };

  onIngredientsChange = (event) => {
    this.setState({ ingredients: event.nativeEvent.text });
  };

  onPressSubmit = () => {}

  render() {
    return (
      <View style={containers.centerFull}>
        <View style={form.wrapper}>
          <Text style={fonts.small}>BRAND</Text>
          <TextInput
            style={form.input}
            value={this.state.brand}
            onChange={this.onBrandChange}
            placeholder="Dr. Jart+"
          />
          <Text style={fonts.small}>NAME</Text>
          <TextInput
            style={form.input}
            value={this.state.name}
            onChange={this.onNameChange}
            placeholder="Essence serum"
          />
          <Text style={fonts.small}>INGREDIENTS</Text>
          <TextInput
            style={[form.input, { marginBottom: 45 }]}
            value={this.state.ingredients}
            onChange={this.onIngredientsChange}
            placeholder="Water, Dimethicone, Aloe, ..."
          />
          <Button
            containerViewStyle={form.buttonWrapper}
            buttonStyle={form.button}
            iconRight={{ name: 'keyboard-arrow-right', size: 24 }}
            title="Add product"
            onPress={this.onPressSubmit}
          />
        </View>
      </View>
    );
  }
}
