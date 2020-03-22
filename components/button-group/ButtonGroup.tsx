import React from "react";
import classNames from "classnames";
type ButtonGroupProps = {
  className?: string,
  size?: string,
  vertical?: boolean
};
const ButtonGroup: React.SFC<ButtonGroupProps> = props => {
  const { className, vertical, size, ...attrs } = props;
  const classes = classNames(
    className,
    size && `btn-group-${size}`,
    vertical ? "btn-group-vertical" : "btn-group"
  );
  return <div className={classes} {...attrs} />;
};
export default ButtonGroup;
