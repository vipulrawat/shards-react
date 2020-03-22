import React from "react";
import classNames from "classnames";
type CardGroupProps = {
  className?: string,
  tag?: ((...args: any[]) => any) | string
};
const CardGroup: React.SFC<CardGroupProps> = props => {
  const { className, tag: Tag, ...attrs } = props;
  const classes = classNames(className, "card-group");
  return <Tag {...attrs} className={classes} />;
};
CardGroup.defaultProps = {
  tag: "div"
};
export default CardGroup;
