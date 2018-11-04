import { StyleSheet } from 'react-native';
import * as brand from '../constants/GlobalStyles';
import * as colors from '../constants/Colors';
import { fontLight, fontMedium } from '../constants/Fonts';

const containers = StyleSheet.create({
  centerFull: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: brand.paddingDefault,
    backgroundColor: colors.appBackgroundColor,
  },
  search: {
    flexDirection: 'row',
    alignItems: 'center',
    alignSelf: 'stretch',
    marginLeft: 30,
    marginRight: 30,
    marginBottom: 20,
    marginTop: 20,
    height: 40,
    borderColor: colors.brandGray,
    borderWidth: 1,
    borderRadius: brand.brandBorderRadius,
    backgroundColor: colors.brandWhite,
  },
  input: {
    flexGrow: 1,
    marginLeft: 25,
    fontSize: 16,
    fontWeight: fontMedium,
  },
  inputForm: {
    fontSize: 16,
    fontWeight: fontLight,
    paddingBottom: 7,
    paddingTop: 10,
    marginBottom: 15,
    borderBottomWidth: 1,
    borderBottomColor: colors.brandGray,
    backgroundColor: colors.brandTransparent,
  },
  form: {
    flexDirection: 'column',
    alignSelf: 'stretch',
    backgroundColor: 'white',
    padding: 20,
    margin: 20,
    shadowColor: colors.brandShadow,
    shadowOffset: { width: 2, height: 4 },
    shadowOpacity: 0.1,
    shadowRadius: 5,
  },
  taggedContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    width: 365,
  },
  details: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  landing: {
    position: 'absolute',
    top: 50,
    left: 0,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default containers;
