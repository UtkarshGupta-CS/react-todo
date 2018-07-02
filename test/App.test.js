import React from 'react';
import renderer from "react-test-renderer";
import App from "../src/components/App";
describe("Todo component renders the todo correctly", () => {
  it("renders correctly", () => {
    const rendered = renderer.create(<App />);
    expect(rendered.toJSON()).toMatchSnapshot();
  });
});
