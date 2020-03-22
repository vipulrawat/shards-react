import React from "react";
import classNames from "classnames";
type BreadcrumbItemProps = {
  active?: boolean,
  className?: string,
  tag?: ((...args: any[]) => any) | string
};
const BreadcrumbItem: React.SFC<BreadcrumbItemProps> = props => {
  const { className, active, tag: Tag, ...attrs } = props;
  const classes = classNames(className, active && "active", "breadcrumb-item");
  return (
    <Tag
      {...attrs}
      className={classes}
      aria-current={active ? "page" : undefined}
    />
  );
};
BreadcrumbItem.defaultProps = {
  tag: "li"
};
export default BreadcrumbItem;
