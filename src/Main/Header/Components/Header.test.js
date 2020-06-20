import React from "react";
import { configure, shallow } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import Header from "./Header";
import { findByTestAtrr } from "../../../Core/Tests/Utilities";

configure({ adapter: new Adapter() });

const setUp = (props = {}) => {
  const wrapper = shallow(<Header {...props} />);
  return wrapper;
};

describe("Header Component", () => {
  let component;
  beforeEach(() => {
    component = setUp();
  });

  it("Should render Header component without errors", () => {
    const wrapper = findByTestAtrr(component, "headerComponent");
    expect(wrapper.length).toBe(1);
  });

  it("Should render a logo", () => {
    const logo = findByTestAtrr(component, "logoImg");
    expect(logo.length).toBe(1);
  });

  it("Should render ToolBar component without errors", () => {
    const wrapper = findByTestAtrr(component, "toolBarComponent");
    expect(wrapper.length).toBe(1);
  });
});
