import React from "react";
import renderer from "react-test-renderer";
import AppButton from "../components/AppButton";
import AppCoverImage from "../components/AppCoverImage";
import AppTextInput from "../components/AppTextInput";
import RegisterScreen from "./RegisterScreen";

describe("Elements in RegisterScreen render properly", () => {
  test("The correct Cover image is displayed", () => {
    const navigation = jest.fn();
    const getTheProps = RegisterScreen({ navigation });
    //get the source url from props
    const propImgsrc =
      getTheProps.props.children[0].props.children.props.source;
    //the correct source url
    const imgSource = require("../assets/welcome.png");
    //compare urls
    expect(propImgsrc).toBe(imgSource);
  });

  test("The cover image has the right dimensions", () => {
    const tree = renderer.create(<AppCoverImage />).toJSON();
    expect(tree.props.style.resizeMode).toBe("cover");
    expect(tree.props.style.width).toBe(390);
    expect(tree.props.style.height).toBe(390);
  });

  test("<AppTextInput /> renders correctly", () => {
    const tree = renderer.create(<AppTextInput />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  test("Placeholder texts are correct", () => {
    const tree = renderer.create(<RegisterScreen />).toJSON();
    const namePlaceholder =
      tree.children[0].children[1].children[0].children[0].props.placeholder;
    const emailPlaceholder =
      tree.children[0].children[1].children[1].children[0].props.placeholder;
    const passPlaceholder =
      tree.children[0].children[1].children[2].children[0].props.placeholder;
    //check name placeholder
    expect(namePlaceholder).toBe("Your name");
    //check email placeholder
    expect(emailPlaceholder).toBe("Email");
    //check password placeholder
    expect(passPlaceholder).toBe("Password");
  });

  test("<AppButton /> renders correctly", () => {
    const tree = renderer.create(<AppButton />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  test("the label for the submit button is SIGN UP", () => {
    const tree = renderer.create(<RegisterScreen />).toJSON();
    const theProps =
      tree.children[0].children[2].children[0].children[0].children[0]
        .children[0];
    expect(theProps).toBe("SIGN UP");
  });
});
