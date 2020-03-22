import React from "react";
import classNames from "classnames";
type CardProps = {
  className?: string,
  theme?: string,
  outline?: boolean,
  tag?: ((...args: any[]) => any) | string,
  small?: boolean,
  innerRef?: string | any | ((...args: any[]) => any)
};
const Card: React.SFC<CardProps> = props => {
  const {
    className,
    innerRef,
    tag: Tag,
    theme,
    outline,
    small,
    ...attrs
  } = props;
  const classes = classNames(
    className,
    "card",
    small && "card-small",
    theme && `${outline ? "border" : "bg"}-${theme}`
  );
  return <Tag {...attrs} className={classes} ref={innerRef} />;
};
Card.defaultProps = {
  tag: "div"
};
export default Card;
