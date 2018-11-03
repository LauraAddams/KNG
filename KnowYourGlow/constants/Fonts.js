import { StyleSheet } from 'react-native';
import { brandBlack, brandWhite } from './Colors';

const smallBoldSize = 14;
const smallSize = 11;
const mediumSize = 16;
const paragraphSize = 15;
const navSize = 12;

export const fontLight = '300';
export const fontMedium = '500';
export const fontBold = '900';

export const futura = 'Futura-Medium';
export const helvetica = 'Helvetica-Light';
export const georgia = 'Georgia';
export const georgiaItalic = 'Georgia-Italic';

export const font = StyleSheet.create({
  smallBold: {
    fontSize: smallBoldSize,
    fontFamily: georgiaItalic,
    color: brandBlack,
  },
  small: {
    fontSize: smallSize,
    fontWeight: fontBold,
    fontFamily: futura,
    letterSpacing: 1,
    color: brandBlack,
  },
  medium: {
    fontSize: mediumSize,
    letterSpacing: 2,
    fontFamily: futura,
    color: brandBlack,
  },
  p: {
    fontSize: paragraphSize,
    fontFamily: georgia,
    color: brandBlack,
  },
  button: {
    fontSize: smallSize,
    letterSpacing: 3,
    fontFamily: futura,
    fontWeight: fontBold,
    textAlign: 'center',
    color: brandWhite,
  },
  navHeader: {
    fontSize: navSize,
    letterSpacing: 4,
    fontFamily: futura,
    color: brandBlack,
  },
});
