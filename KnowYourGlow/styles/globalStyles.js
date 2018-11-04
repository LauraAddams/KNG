import { StyleSheet } from 'react-native';
import { brandWhite, brandShadow } from '../constants/Colors';

export const listItems = StyleSheet.create({
  queryProduct: {
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
});
