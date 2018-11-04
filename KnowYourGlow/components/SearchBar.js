import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { View, TextInput, Button } from 'react-native';

import { containers } from '../constants/Containers';
import { brandTransparent } from '../constants/Colors';

export default class SearchBar extends Component {
  state = { term: '' };

  render() {
    return (
      <View style={[containers.search]}>
        <TextInput
          style={containers.input}
          onChangeText={term => this.setState({ term })}
          value={this.state.term}
          autoCorrect={false}
          placeholder="Search"
        />
        <Button
          title="Search"
          backgroundColor={brandTransparent}
          onPress={() => this.props.onPressSearch(this.state.term)}
        />
      </View>
    );
  }
}

SearchBar.propTypes = {
  onPressSearch: PropTypes.func.isRequired,
};
