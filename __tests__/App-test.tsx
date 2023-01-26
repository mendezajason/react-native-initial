/**
 * @format
 */

import 'react-native';
import React from 'react';
import {describe, expect, test} from '@jest/globals';
import App from '../App';

// Note: test renderer must be required after react-native.
import renderer from 'react-test-renderer';

it('renders correctly', () => {
  const app = renderer.create(<App />).toJSON();
  expect(app).toMatchSnapshot();
});