import {StyleSheet, ViewStyle, TextStyle} from 'react-native';

interface Style {
  container: ViewStyle;
  item: ViewStyle;
  name: TextStyle;
  email: TextStyle;
}

export default StyleSheet.create<Style>({
  container: {
    flex: 1,
    padding: 10,
  },
  item: {
    paddingHorizontal: 15,
    paddingVertical: 7,
  },
  name: {
    color: '#282c44',
    fontSize: 19,
    fontWeight: '700',
  },
  email: {
    color: '#444444',
    fontSize: 15,
  },
});
