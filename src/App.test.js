import React from "react";
import { configure, shallow } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import App from "./App";
import { findByTestAtrr } from "../src/Core/Tests/Utilities";

configure({ adapter: new Adapter() });

const setUp = () => {
  const wrapper = shallow(<App />);
  return wrapper;
};

describe("App Component", () => {
  let wrapper;
  beforeEach(() => {
    wrapper = setUp();
  });

  it("Should render App component without errors", () => {
    const component = findByTestAtrr(wrapper, "appComponent");
    expect(component.length).toBe(1);
  });
});
