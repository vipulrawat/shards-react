import React from "react";
import classNames from "classnames";
type CardSubtitleProps = {
  className?: string,
  tag?: ((...args: any[]) => any) | string
};
const CardSubtitle: React.SFC<CardSubtitleProps> = props => {
  const { className, tag: Tag, ...attrs } = props;
  const classes = classNames(className, "card-subtitle", "text-muted");
  return <Tag {...attrs} className={classes} />;
};
CardSubtitle.defaultProps = {
  tag: "h6"
};
export default CardSubtitle;
