import { StyleSheet } from 'react-native';
import * as fonts from '../constants/Fonts';
import { brandBlack, brandWhite } from '../constants/Colors';

const font = StyleSheet.create({
  smallBold: {
    fontSize: fonts.smallBoldSize,
    fontFamily: fonts.serifItalic,
    color: brandBlack,
  },
  small: {
    fontSize: fonts.smallSize,
    fontWeight: fonts.fontBold,
    fontFamily: fonts.sansSerif,
    letterSpacing: 1,
    color: brandBlack,
  },
  medium: {
    fontSize: fonts.mediumSize,
    letterSpacing: 2,
    fontFamily: fonts.sansSerif,
    color: brandBlack,
  },
  p: {
    fontSize: fonts.paragraphSize,
    fontFamily: fonts.serif,
    color: brandBlack,
  },
  button: {
    fontSize: fonts.smallSize,
    letterSpacing: 3,
    fontFamily: fonts.sansSerif,
    fontWeight: fonts.fontBold,
    textAlign: 'center',
    color: brandWhite,
  },
  navHeader: {
    fontSize: fonts.navSize,
    letterSpacing: 4,
    fontFamily: fonts.sansSerif,
    color: brandBlack,
  },
});

export default font;
