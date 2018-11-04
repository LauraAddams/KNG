import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { View, TextInput } from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

import containers from '../styles/containers';
import { brandBlack } from '../constants/Colors';

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
        <MaterialCommunityIcons
          name="magnify"
          size={24}
          color={brandBlack}
          style={{ paddingRight: 20 }}
          onPress={() => this.props.onPressSearch(this.state.term)}
        />
      </View>
    );
  }
}

SearchBar.propTypes = {
  onPressSearch: PropTypes.func.isRequired,
};
