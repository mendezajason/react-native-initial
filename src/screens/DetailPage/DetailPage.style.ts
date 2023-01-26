import {StyleSheet, ViewStyle, TextStyle} from 'react-native';

interface Style {
  container: ViewStyle;
  h1: TextStyle;
  h2: TextStyle;
  h3: TextStyle;
  content: TextStyle;
}

export default StyleSheet.create<Style>({
  container: {
    flex: 1,
    paddingVertical: 20,
    paddingHorizontal: 15,
  },
  h1: {
    color: '#282c44',
    fontSize: 27,
    fontWeight: '700',
    textAlign: 'center',
    paddingVertical: 5,
  },
  h2: {
    fontSize: 21,
    textAlign: 'center',
  },
  h3: {
    fontSize: 23,
    fontWeight: '700',
    paddingTop: 25,
    paddingBottom: 15,
    textAlign: 'center',
    color: '#282c44',
  },
  content: {
    fontSize: 17,
    color: '#333',
  },
});
