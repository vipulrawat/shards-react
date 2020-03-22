import React from "react";
import classNames from "classnames";
type CardImgProps = {
  top?: boolean,
  bottom?: boolean,
  className?: string,
  tag?: ((...args: any[]) => any) | string
};
const CardImg: React.SFC<CardImgProps> = props => {
  const { className, top, bottom, tag: Tag, ...attrs } = props;
  let cardImgClass = "";
  if (top) {
    cardImgClass = "card-img-top";
  }
  if (bottom) {
    cardImgClass = "card-img-bottom";
  }
  cardImgClass = classNames(className, cardImgClass);
  return <Tag {...attrs} className={cardImgClass} />;
};
CardImg.defaultProps = {
  tag: "img"
};
export default CardImg;
