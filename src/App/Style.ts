import {StyleSheet} from 'react-native';

const Spacing = StyleSheet.create({
  textPadding: {
    paddingVertical: 15,
  },
  hPadding: {
    paddingHorizontal: 20,
  },
});

const Style = StyleSheet.create({
  largeText: {
    fontSize: 33,
  },
  h1: {
    fontSize: 27,
  },
  h2: {
    fontSize: 21,
  },
  h3: {
    fontSize: 19,
  },
  headline: {
    fontSize: 16,
  },
  text: {
    fontSize: 16,
    ...Spacing.textPadding,
  },
  callout: {
    fontSize: 15,
  },
  subhead: {
    fontSize: 14,
    ...Spacing.hPadding,
    ...Spacing.textPadding,
    paddingBottom: 10,
    color: '#999',
  },
  footnote: {
    fontSize: 12,
  },
  caption: {
    fontSize: 11,
  },
  listItem: {
    backgroundColor: '#fff',
    borderBottomColor: '#eee',
    borderBottomWidth: 1,
    ...Spacing.hPadding,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
});

export default Style;
