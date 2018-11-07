import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { View, Text, TouchableHighlight, StyleSheet } from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

import font from '../styles/fonts';
import containers from '../styles/containers';
import { listItems } from '../styles/globalStyles';
import { brandGray } from '../constants/Colors';

const styles = StyleSheet.create({
  addIcon: {
    color: brandGray,
    width: 20,
    height: 20,
    borderWidth: 2,
    borderRadius: 20 / 2,
    borderColor: brandGray,
    marginTop: -20,
    marginRight: -12,
  },
});

export default class ListItem extends Component {
  state = { isModalVisible: false }

  onPress = () => {
    this.props.onPressItem(this.props.item.id);
  }

  onPressAdd = () => {
    this.setState({ isModalVisible: true });
  }

  resetModal() {
    this.setState({ isModalVisible: false });
  }

  render() {
    const { brand, name } = this.props.item;

    return (
      <View>
        <TouchableHighlight onPress={this.onPress} underlayColor="#f9f9f9">
          <View style={[listItems.queryProduct, { borderColor: this.props.borderColor }]}>

            <View style={[containers.details, { marginBottom: 5 }]}>
              <Text style={font.smallBold}>{brand}</Text>
              <MaterialCommunityIcons
                name="plus"
                size={16}
                style={styles.addIcon}
              />
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
