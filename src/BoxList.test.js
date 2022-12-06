import React from 'react';
import { render, fireEvent, wait } from "@testing-library/react";
import BoxList from "./BoxList";

// function creates box
function addBox(boxList, height = "2", width = "2", color = "peachpuff") {
    // Select height, width, and color from DOM
    const heightInput = boxList.getByLabelText("Height");
    const widthInput = boxList.getByLabelText("Width");
    const backgroundInput = boxList.getByLabelText("Background Color");
    // listen for event triggers on selected DOM
    fireEvent.change(backgroundInput, { target: {value: color } });
    fireEvent.change(widthInput, { target: { value: width } });
    fireEvent.change(heightInput, { target: { value: height } });
    const button = boxList.getByText("Add a new box!");
    fireEvent.click(button);
}

test("Smoke Test: It renders without crashing", function() {
    render(<BoxList />);
});

test("Snapshot Test: Matches", function() {
    const { asFragment } = render(<BoxList />);
    expect(asFragment()).toMatchSnapshot();
});

test("It adds a new box", function() {
    const boxList = render(<BoxList />);

    //no boxes in current state
    expect(boxList.queryByText("Remove The Box!")).not.toBeInTheDocument();

    addBox(boxList);

    // expect to see a box by checking if the remove button is in state
    const removeButton = boxList.getByText("Remove The Box!");
    expect(removeButton).toBeInTheDocument();
    expect(removeButton.previousSibling).toHaveStyle(`
        width: 2em;
        height: 2em;
        background-color: peachpuff;
    `);
    // expect form(width, color, height) to be empty
    expect(boxList.getAllByDisplayValue("")).toHaveLength(3);

    // expect(asFragment()).toMatchSnapshot();
});

test("handleRemove properly removes a box", function() {
    const boxList = render(<BoxList />);
    addBox(boxList);

    const removeButton = boxList.getByText("Remove The Box!");

    // click the remove button and the box should be gone
    fireEvent.click(removeButton);
    expect(removeButton).not.toBeInTheDocument();
});