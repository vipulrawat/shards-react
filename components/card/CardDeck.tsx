import React from "react";
import classNames from "classnames";
type CardDeckProps = {
  tag?: ((...args: any[]) => any) | string,
  className?: string
};
const CardDeck: React.SFC<CardDeckProps> = props => {
  const { className, tag: Tag, ...attrs } = props;
  const classes = classNames(className, "card-deck");
  return <Tag {...attrs} className={classes} />;
};
CardDeck.defaultProps = {
  tag: "div"
};
export default CardDeck;
