import React from "react";
import classNames from "classnames";
type BreadcrumbProps = {
  listClassName?: string,
  className?: string,
  "aria-label"?: string,
  tag?: ((...args: any[]) => any) | string,
  listTag?: ((...args: any[]) => any) | string
};
const Breadcrumb: React.SFC<BreadcrumbProps> = props => {
  const {
    className,
    listClassName,
    children,
    tag: Tag,
    listTag: ListTag,
    "aria-label": label,
    ...attrs
  } = props;
  const classes = classNames(className);
  const listClasses = classNames("breadcrumb", listClassName);
  return (
    <Tag {...attrs} className={classes} aria-label={label}>
      <ListTag className={listClasses}>{children}</ListTag>
    </Tag>
  );
};
Breadcrumb.defaultProps = {
  "aria-label": "breadcrumb",
  tag: "nav",
  listTag: "ol"
};
export default Breadcrumb;
