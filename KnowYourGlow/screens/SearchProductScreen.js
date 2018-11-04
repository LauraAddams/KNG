import React from 'react';
import PropTypes from 'prop-types';
import { View, Button, Text, ActivityIndicator } from 'react-native';

import { searchProducts } from '../utilities/api/skincareHelper';
import SearchBar from '../components/SearchBar';
import List from '../components/List';
import { appBackgroundColor } from '../constants/Colors';

export default class SearchProductScreen extends React.Component {
  static navigationOptions = {
    title: 'SEARCH PRODUCTS',
  };

  constructor(props) {
    super(props);
    this.state = {
      isLoading: false,
      products: [],
      emptyState: true,
    };
  }

  onPressSearch = (query) => { this.apiQuery(searchProducts(query)); }

  onProductPress = (response) => {
    this.props.navigation.navigate('Product', response);
  }

  apiQuery = (query) => {
    this.setState({ isLoading: true });
    fetch(query)
      .then(response => response.json())
      .then(json => this.apiResponse(json))
      .catch(error =>
        this.setState({ isLoading: false }));
  }

  apiResponse = (response) => {
    this.setState({ isLoading: false });

    if (response.length) {
      this.setState({
        isLoading: false,
        products: response,
        emptyState: false,
      });
    }
  }

  renderEmptyState = () => {
    if (this.state.emptyState) {
      return (
        <View>
          <Text>I am the empty state ^-^</Text>
        </View>
      );
    }
    return null;
  }

  render() {
    const { navigate } = this.props.navigation;
    const spinner = this.state.isLoading ? <ActivityIndicator size="large" /> : null;

    return (
      <View style={{ flex: 1, backgroundColor: appBackgroundColor }}>
        <SearchBar onPressSearch={this.onPressSearch} />
        {spinner}
        {this.renderEmptyState()}

        <List
          products={this.state.products}
          onProductPress={this.onProductPress}
        />
      </View>
    );
  }
}

SearchProductScreen.propTypes = {
  navigation: PropTypes.shape({
    navigate: PropTypes.func.isRequired,
  }).isRequired,
};
