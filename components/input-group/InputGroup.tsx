import React from "react";
import classNames from "classnames";
type InputGroupProps = {
  className?: string,
  size?: string,
  seamless?: boolean,
  tag?: ((...args: any[]) => any) | string
};
const InputGroup: React.SFC<InputGroupProps> = props => {
  const { className, tag: Tag, size, seamless, ...attrs } = props;
  const classes = classNames(
    className,
    "input-group",
    seamless && "input-group-seamless",
    size && `input-group-${size}`
  );
  return <Tag {...attrs} className={classes} />;
};
InputGroup.defaultProps = {
  tag: "div"
};
export default InputGroup;
