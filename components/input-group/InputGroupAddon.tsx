import React from "react";
import classNames from "classnames";
import InputGroupText from "./InputGroupText";
import { INPUT_GROUP_ADDON_TYPES } from "../constants";
type InputGroupAddonProps = {
  className?: string,
  type: any,
  tag?: string
};
const InputGroupAddon: React.SFC<InputGroupAddonProps> = props => {
  const { className, children, tag: Tag, type, ...attrs } = props;
  const classes = classNames(className, `input-group-${type}`);
  if (typeof children === "string") {
    return (
      <Tag {...attrs} className={classes}>
        <InputGroupText>{children}</InputGroupText>
      </Tag>
    );
  }
  return (
    <Tag {...attrs} className={classes}>
      {children}
    </Tag>
  );
};
InputGroupAddon.defaultProps = {
  tag: "div"
};
export default InputGroupAddon;
