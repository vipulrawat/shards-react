import React from "react";
import classNames from "classnames";
type InputGroupTextProps = {
  className?: string,
  tag?: ((...args: any[]) => any) | string
};
const InputGroupText: React.SFC<InputGroupTextProps> = props => {
  const { className, tag: Tag, ...attrs } = props;
  const classes = classNames(className, "input-group-text");
  return <Tag {...attrs} className={classes} />;
};
InputGroupText.defaultProps = {
  tag: "span"
};
export default InputGroupText;
