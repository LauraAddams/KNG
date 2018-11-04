import { StyleSheet } from 'react-native';
import * as brand from '../constants/Fonts';
import { brandBlack, brandWhite } from '../constants/Colors';

const font = StyleSheet.create({
  smallBold: {
    fontSize: brand.smallBoldSize,
    fontFamily: brand.serifItalic,
    color: brandBlack,
  },
  small: {
    fontSize: brand.smallSize,
    fontWeight: brand.fontBold,
    fontFamily: brand.sansSerif,
    letterSpacing: 1,
    color: brandBlack,
  },
  medium: {
    fontSize: brand.mediumSize,
    letterSpacing: 2,
    fontFamily: brand.sansSerif,
    color: brandBlack,
  },
  p: {
    fontSize: brand.paragraphSize,
    fontFamily: brand.serif,
    color: brandBlack,
  },
  button: {
    fontSize: brand.smallSize,
    letterSpacing: 3,
    fontFamily: brand.sansSerif,
    fontWeight: brand.fontBold,
    textAlign: 'center',
    color: brandWhite,
  },
  navHeader: {
    fontSize: brand.navSize,
    letterSpacing: 4,
    fontFamily: brand.sansSerif,
    color: brandBlack,
  },
});

export default font;
