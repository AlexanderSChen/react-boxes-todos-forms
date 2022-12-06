import React from "react";
import { render, fireEvent } from "@testing-library/react";
import NewTodoForm from "./NewTodoForm";

test("Smoke Test: Renders without crashing", function() {
    render(<NewTodoForm />);
});

test("Snapshot Test", function() {
    const { asFragment } = render(<NewTodoForm />);
    expect(asFragment()).toMatchSnapshot();
});

test("runs the create function on form submit", function() {
    const createMock = jest.fn();
    const { getByText } = render(<NewTodoForm createTodo={createMock} />);
    const createButton = getByText("Add a todo!");
    fireEvent.click(createButton);
    expect(createMock).toHaveBeenCalled();
});