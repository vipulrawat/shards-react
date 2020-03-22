import React from "react";
import classNames from "classnames";
type PopoverHeaderProps = {
  className?: string,
  tag?: ((...args: any[]) => any) | string
};
const PopoverHeader: React.SFC<PopoverHeaderProps> = props => {
  const { className, tag: Tag, ...attrs } = props;
  const classes = classNames(className, "popover-header");
  return <Tag {...attrs} className={classes} />;
};
PopoverHeader.defaultProps = {
  tag: "h3"
};
export default PopoverHeader;
