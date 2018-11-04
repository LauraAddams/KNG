import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { FlatList } from 'react-native';

import ListItemProduct from './ListItemProduct';
import { colorList } from '../constants/Colors';

import { fetchProduct } from '../Utilities/api/skincareHelper';

export default class List extends Component {
  onPressItem = (id) => { this.apiQuery(fetchProduct(id)); };

  apiQuery = (query) => {
    fetch(query)
      .then(response => response.json())
      .then(json => this.apiResponse(json))
      .catch(error => console.log(error));
  };

  apiResponse = (response) => {
    if (response) { this.props.onProductPress(response); }
  };

  renderListItem = ({ item, index }) => (
    <ListItemProduct
      item={item}
      index={index}
      borderColor={colorList[index % colorList.length]}
      onPressItem={this.onPressItem}
    />
  );

  render() {
    return (
      <FlatList
        style={{ alignSelf: 'stretch' }}
        data={this.props.products}
        keyExtractor={(item, index) => `${item.toString()}${index}`}
        renderItem={this.renderListItem}
      />
    );
  }
}

List.propTypes = {
  products: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    brand: PropTypes.string.isRequired,
    ingredient_list: PropTypes.arrayOf(PropTypes.string).isRequired,
  })).isRequired,
  onProductPress: PropTypes.func.isRequired,
};
