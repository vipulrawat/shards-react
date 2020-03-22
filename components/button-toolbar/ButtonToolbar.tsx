import React from "react";
import classNames from "classnames";
type ButtonToolbarProps = {
  className?: string
};
const ButtonToolbar: React.SFC<ButtonToolbarProps> = props => {
  const { className, ...attrs } = props;
  const classes = classNames(className, "btn-toolbar");
  return <div className={classes} {...attrs} />;
};
export default ButtonToolbar;
