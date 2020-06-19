import React from "react";
import { configure, shallow } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import MontyGameCard from "./MontyGameCard";
import { findByTestAtrr } from "../../../Core/Tests/Utilities";

configure({ adapter: new Adapter() });

const setUp = (props = {}) => {
  const wrapper = shallow(<MontyGameCard {...props} />);
  return wrapper;
};

describe("MontyGameCard Component", () => {
  let wrapper;
  beforeEach(() => {
    wrapper = setUp();
  });

  it("Should render MontyGameCard component without errors", () => {
    const component = findByTestAtrr(wrapper, "MontyGameCardComponent");
    expect(component.length).toBe(1);
  });
});

describe("MontyGameCard Component should render three doors", () => {
  let wrapper;
  let mockFunc;
  beforeEach(() => {
    mockFunc = jest.fn();
    const props = {
      cards: [0, 0, 0],
      handleUserSelection: mockFunc,
    };
    wrapper = setUp(props);
  });

  it("Should render a door images", () => {
    const door = findByTestAtrr(wrapper, "doorImg");
    expect(door.length).toBe(3);
  });

  it("handleClick method should get user selected door id", () => {
    // const selectedDoor = findByTestAtrr(wrapper, "selectDoorEvent0");
    // selectedDoor.simulate("click", mockFunc);
    // const callback = mockFunc.mock.calls.length;
    // expect(callback).toBe(1);
  });
});
