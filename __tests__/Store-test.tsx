/**
 * @format
 */

import 'react-native';
import React from 'react';
import store from '../src/app/store';

// Note: test renderer must be required after react-native.
import renderer from 'react-test-renderer';

it('renders correctly', () => {
  const app = store;
  expect(app).toBeDefined();
});

