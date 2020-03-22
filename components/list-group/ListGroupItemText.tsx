import React from "react";
import classNames from "classnames";
type ListGroupItemTextProps = {
  className?: string,
  tag?: ((...args: any[]) => any) | string
};
const ListGroupItemText: React.SFC<ListGroupItemTextProps> = props => {
  const { className, tag: Tag, ...attrs } = props;
  const classes = classNames(className, "list-group-item-text");
  return <Tag {...attrs} className={classes} />;
};
ListGroupItemText.defaultProps = {
  tag: "p"
};
export default ListGroupItemText;
