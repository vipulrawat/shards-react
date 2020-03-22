import React from "react";
import classNames from "classnames";
type CardImgOverlayProps = {
  className?: string,
  tag?: ((...args: any[]) => any) | string
};
const CardImgOverlay: React.SFC<CardImgOverlayProps> = props => {
  const { className, tag: Tag, ...attrs } = props;
  const classes = classNames(className, "card-img-overlay");
  return <Tag {...attrs} className={classes} />;
};
CardImgOverlay.defaultProps = {
  tag: "div"
};
export default CardImgOverlay;
