import React from "react";
import classNames from "classnames";
type CardFooterProps = {
  tag?: ((...args: any[]) => any) | string,
  className?: string
};
const CardFooter: React.SFC<CardFooterProps> = props => {
  const { className, tag: Tag, ...attrs } = props;
  const classes = classNames(className, "card-footer");
  return <Tag {...attrs} className={classes} />;
};
CardFooter.defaultProps = {
  tag: "div"
};
export default CardFooter;
