import React from "react";
import { configure, shallow } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import Home from "./Home";
import { findByTestAtrr } from "../../../Core/Tests/Utilities";

configure({ adapter: new Adapter() });

const setUp = () => {
  const wrapper = shallow(<Home />);
  return wrapper;
};

describe("Home Component", () => {
  let wrapper;
  beforeEach(() => {
    wrapper = setUp();
  });

  it("Should render Home component without errors", () => {
    const component = findByTestAtrr(wrapper, "homeComponent");
    expect(component.length).toBe(1);
  });

  it("Should render PlayAgain button without errors", () => {
    const component = findByTestAtrr(wrapper, "playAgainButton");
    expect(component.length).toBe(1);
  });

  it("handleUserStatus Method should update winCount state as expected", () => {
    const classInstance = wrapper.instance();
    classInstance.handleUserStatus(true);
    const winCount = classInstance.state.winCount;
    const resetGame = classInstance.state.resetGame;
    expect(winCount).toBe(1);
    expect(resetGame).toBe(false);
  });

  it("handleUserStatus Method should update lossCount state as expected", () => {
    const classInstance = wrapper.instance();
    classInstance.handleUserStatus(false);
    const lossCount = classInstance.state.lossCount;
    const resetGame = classInstance.state.resetGame;
    expect(lossCount).toBe(1);
    expect(resetGame).toBe(false);
  });

  it("handlePlayBtnClick Method should update resetGame state as expected", () => {
    const classInstance = wrapper.instance();
    classInstance.handlePlayBtnClick();
    const resetGame = classInstance.state.resetGame;
    expect(resetGame).toBe(true);
  });

  describe("Header Component", () => {
    it("Should render Header component without errors", () => {
      const component = findByTestAtrr(wrapper, "headerComponent");
      expect(component.length).toBe(1);
    });
  });

  describe("MontyGame Component", () => {
    it("Should render MontyGame component without errors", () => {
      const component = findByTestAtrr(wrapper, "montyGameComponent");
      expect(component.length).toBe(1);
    });
  });
});
