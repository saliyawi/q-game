import React from "react";
import { configure, shallow } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import MontyGame from "./MontyGame";
import { findByTestAtrr } from "../../../Core/Tests/Utilities";

configure({ adapter: new Adapter() });

const setUp = () => {
  const wrapper = shallow(<MontyGame />);
  return wrapper;
};

describe("Header Component", () => {
  let component;
  beforeEach(() => {
    component = setUp();
  });

  it("Should render MontyGame component without errors", () => {
    const wrapper = findByTestAtrr(component, "MontyGameComponent");
    expect(wrapper.length).toBe(1);
  });
});
