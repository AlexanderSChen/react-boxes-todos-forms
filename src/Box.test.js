import React from 'react';
import { render } from '@testing-library/react';
import Box from './Box';

test("Smoke Test: It renders without crashing", function() {
    render(<Box />);
});

test("Snapshot Test: Matches", function() {
    const { asFragment } = render(<Box />);
    expect(asFragment()).toMatchSnapshot();
});