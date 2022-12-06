import React from "react";
import { render } from '@testing-library/react';
import App from './App';

test('Smoke Test: Renders without Crashing', () => {
  render(<App />);
});

test("Snapshot Test: Matches", function() {
  const { asFragment } = render(<App />);
  expect(asFragment()).toMatchSnapshot();
});
