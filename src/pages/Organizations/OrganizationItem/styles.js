import { StyleSheet } from 'react-native';
import { colors, metrics } from '../../../styles';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
    borderRadius: metrics.baseRadius,
    padding: metrics.basePadding,
    marginTop: metrics.baseMargin,
    alignItems: 'center',
    maxWidth: (metrics.screenWidth - 52) / 2,
  },

  title: {
    fontWeight: 'bold',
    fontSize: 12,
    color: colors.dark,
    marginTop: metrics.baseMargin,
  },

  avatar: {
    width: 50,
    height: 50,
  },
});

export default styles;
