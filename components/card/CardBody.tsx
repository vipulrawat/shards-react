import React from "react";
import classNames from "classnames";
type CardBodyProps = {
  className?: string,
  tag?: ((...args: any[]) => any) | string
};
const CardBody: React.SFC<CardBodyProps> = props => {
  const { className, tag: Tag, children, ...attrs } = props;
  const classes = classNames(className, "card-body");
  return (
    <Tag {...attrs} className={classes}>
      {children}
    </Tag>
  );
};
CardBody.defaultProps = {
  tag: "div"
};
export default CardBody;
