/* eslint no-underscore-dangle: 0 */
import React from 'react';
import PropTypes from 'prop-types';
import { View, Button, Text, ActivityIndicator } from 'react-native';

import { searchProducts } from '../Utilities/api/skincareHelper';
import SearchBar from '../components/SearchBar';

export default class SearchProductScreen extends React.Component {
  static navigationOptions = {
    title: 'SearchProducts',
  };

  constructor(props) {
    super(props);
    this.state = {
      isLoading: false,
      products: [],
      emptyState: true,
    };
  }

  onPressSearch = (query) => {
    this._query(searchProducts(query));
  }

  _query = (query) => {
    this.setState({ isLoading: true });
    fetch(query)
      .then(response => response.json())
      .then(json => this._response(json))
      .catch(error =>
        this.setState({ isLoading: false }));
  }

  _response = (response) => {
    this.setState({ isLoading: false });

    if (response.length) {
      this.setState({
        isLoading: false,
        products: response,
        emptyState: false,
      });
    }
  }

  _renderEmptyState = () => {
    if (this.state.emptyState) {
      return (
        <View>
          <Text>Hi</Text>
        </View>
      );
    }
    return null;
  }

  render() {
    const { navigate } = this.props.navigation;
    const spinner = this.state.loading ? <ActivityIndicator size="large" /> : null;

    return (
      <View>
        <SearchBar onPressSearch={this.onPressSearch} />
        {spinner}
        {this._renderEmptyState()}

        <Button
          title="Product"
          onPress={() => navigate('Product')}
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
