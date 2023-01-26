/**
 * @format
 */

import 'react-native';
import React from 'react';
import HomePage from '../src/screens/HomePage/HomePage';

// Note: test renderer must be required after react-native.
import renderer from 'react-test-renderer';

it('renders correctly', () => {
  const home = renderer.create(<HomePage />).toJSON();
  expect(home).toMatchSnapshot();
});

