import React from 'react';
import PropTypes from 'prop-types';
import { CheckBox } from 'react-native-elements';

import fonts from '../styles/fonts';
import { brandBlack } from '../constants/Colors';

export default class CheckForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      checked: this.props.checked,
    };
  }

  componentWillReceiveProps(nextProps) {
    this.setState({ checked: nextProps.checked });
  }

  handlePress = (name, checked) => {
    this.setState({ checked: !checked });
    this.props.onPress(name);
  }

  render() {
    const { name, tagColor } = this.props;
    return (
      <CheckBox
        key={name}
        right
        title={name}
        iconRight
        iconType="material-community"
        checkedIcon="check-box"
        uncheckedIcon="check-box-outline-blank"
        checkedColor={brandBlack}
        textStyle={[fonts.smallBold, { flex: 1, fontWeight: '200', fontStyle: 'normal' }]}
        containerStyle={{
          borderWidth: 0,
          width: 300,
          justifyContent: 'space-between',
          backgroundColor: tagColor,
          padding: 5,
          borderRadius: 0,
        }}
        checked={this.state.checked}
        onPress={() => this.handlePress(name, this.state.checked)}
      />
    );
  }
}

CheckForm.propTypes = {
  name: PropTypes.string.isRequired,
  checked: PropTypes.bool.isRequired,
  tagColor: PropTypes.string.isRequired,
  onPress: PropTypes.func.isRequired,
};
