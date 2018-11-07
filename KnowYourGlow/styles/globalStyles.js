import { StyleSheet } from 'react-native';
import { fontLight, fontBold } from '../constants/Fonts';
import { brandWhite, brandShadow, brandGray, brandTransparent, brandBlack } from '../constants/Colors';

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

export const form = StyleSheet.create({
  wrapper: {
    flexDirection: 'column',
    alignSelf: 'stretch',
    backgroundColor: 'white',
    padding: 20,
    margin: 20,
    shadowColor: brandShadow,
    shadowOffset: { width: 2, height: 4 },
    shadowOpacity: 0.1,
    shadowRadius: 5,
  },
  input: {
    fontSize: 16,
    fontWeight: fontLight,
    paddingBottom: 7,
    paddingTop: 10,
    marginBottom: 15,
    borderBottomWidth: 1,
    borderBottomColor: brandGray,
    backgroundColor: brandTransparent,
  },
  buttonWrapper: {
    position: 'absolute',
    bottom: 0,
    left: -15,
    right: -15,
  },
  button: {
    padding: 7,
    fontWeight: fontBold,
    backgroundColor: brandBlack,
  },
});
