import React from "react";
import classNames from "classnames";
type ListGroupProps = {
  className?: string,
  flush?: boolean,
  small?: boolean,
  tag?: ((...args: any[]) => any) | string
};
const ListGroup: React.SFC<ListGroupProps> = props => {
  const { className, tag: Tag, flush, small, ...attrs } = props;
  const classes = classNames(
    className,
    "list-group",
    small && "list-group-sm",
    flush && "list-group-flush"
  );
  return <Tag {...attrs} className={classes} />;
};
ListGroup.defaultProps = {
  tag: "ul"
};
export default ListGroup;
