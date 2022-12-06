import React from "react";
import { render } from "@testing-library/react";
import NewBoxForm from "./NewBoxForm";

test("Smoke Test: Renders without crashing", function() {
    render(<NewBoxForm />);
});

test("Snapshot Test: Matches", function() {
    const { asFragment } = render(<NewBoxForm />);
    expect(asFragment()).toMatchSnapshot();
});