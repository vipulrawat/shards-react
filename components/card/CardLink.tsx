import React from "react";
import classNames from "classnames";
type CardLinkProps = {
  className?: string,
  tag?: ((...args: any[]) => any) | string,
  innerRef?: any | ((...args: any[]) => any) | string
};
const CardLink: React.SFC<CardLinkProps> = props => {
  const { className, tag: Tag, innerRef, ...attrs } = props;
  const classes = classNames(className, "card-link");
  return <Tag {...attrs} ref={innerRef} className={classes} />;
};
CardLink.defaultProps = {
  tag: "a"
};
export default CardLink;
