import { StyleSheet } from 'react-native';
import * as brand from '../constants/GlobalStyles';
import * as colors from '../constants/Colors';
import { fontMedium } from '../constants/Fonts';

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
