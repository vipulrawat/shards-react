import React from "react";
import classNames from "classnames";
type CardHeaderProps = {
  className?: string,
  tag?: ((...args: any[]) => any) | string
};
const CardHeader: React.SFC<CardHeaderProps> = props => {
  const { className, tag: Tag, ...attrs } = props;
  const classes = classNames(className, "card-header");
  return <Tag {...attrs} className={classes} />;
};
CardHeader.defaultProps = {
  tag: "div"
};
export default CardHeader;
