import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { View, Text, TouchableHighlight, StyleSheet } from 'react-native';

import containers from '../styles/containers';
import font from '../styles/fonts';
import { brandGray, brandShadow, brandWhite } from '../constants/Colors';

const styles = StyleSheet.create({
  container: {
    backgroundColor: brandWhite,
    padding: 20,
    margin: 15,
    borderLeftWidth: 5,
    borderBottomWidth: 5,
    shadowColor: brandShadow,
    shadowOffset: { width: 2, height: 4 },
    shadowOpacity: 0.1,
    shadowRadius: 5,
  },
  addIcon: {
    color: brandGray,
    borderWidth: 2,
    borderRadius: 10,
    borderColor: brandGray,
    marginTop: -20,
    marginRight: -12,
  },
});

export default class ListItem extends Component {
  state = { visibleModal: false }

  _onPress = () => {
    this.props.onPressItem(this.props.item.id);
  }

  _onPressAdd = () => {
    this.setState({ visibleModal: true });
  }

  resetModal() {
    this.setState({ visibleModal: false });
  }

  render() {
    const { brand, name } = this.props.item;

    return (
      <View>
        <TouchableHighlight onPress={this._onPress} underlayColor="#f9f9f9">
          <View style={[styles.container, { borderColor: this.props.borderColor }]}>

            <View style={[containers.details, { marginBottom: 5 }]}>
              <Text style={font.smallBold}>{brand}</Text>
            </View>

            <Text style={[font.medium, { fontSize: 13 }]} >{name}</Text>

          </View>
        </TouchableHighlight>
      </View>
    );
  }
}

ListItem.propTypes = {
  item: PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    brand: PropTypes.string.isRequired,
    ingredient_list: PropTypes.arrayOf(PropTypes.string),
  }).isRequired,
  borderColor: PropTypes.string.isRequired,
  onPressItem: PropTypes.func.isRequired,
};
