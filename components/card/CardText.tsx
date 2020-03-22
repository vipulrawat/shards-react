import React from "react";
import classNames from "classnames";
type CardTextProps = {
  className?: string,
  tag?: ((...args: any[]) => any) | string
};
const CardText: React.SFC<CardTextProps> = props => {
  const { className, tag: Tag, ...attrs } = props;
  const classes = classNames(className, "card-text");
  return <Tag {...attrs} className={classes} />;
};
CardText.defaultProps = {
  tag: "p"
};
export default CardText;
