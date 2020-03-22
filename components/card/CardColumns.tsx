import React from "react";
import classNames from "classnames";
type CardColumnsProps = {
  className?: string,
  tag?: ((...args: any[]) => any) | string
};
const CardColumns: React.SFC<CardColumnsProps> = props => {
  const { className, tag: Tag, ...attrs } = props;
  const classes = classNames(className, "card-columns");
  return <Tag {...attrs} className={classes} />;
};
CardColumns.defaultProps = {
  tag: "div"
};
export default CardColumns;
