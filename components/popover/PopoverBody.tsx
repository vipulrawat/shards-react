import React from "react";
import classNames from "classnames";
type PopoverBodyProps = {
  className?: string,
  tag?: ((...args: any[]) => any) | string
};
const PopoverBody: React.SFC<PopoverBodyProps> = props => {
  const { className, tag: Tag, ...attrs } = props;
  const classes = classNames(className, "popover-body");
  return <Tag {...attrs} className={classes} />;
};
PopoverBody.defaultProps = {
  tag: "div"
};
export default PopoverBody;
