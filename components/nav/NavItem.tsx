import React from "react";
import classNames from "classnames";
type NavItemProps = {
  active?: boolean,
  disabled?: boolean,
  className?: string,
  tag?: ((...args: any[]) => any) | string
};
const NavItem: React.SFC<NavItemProps> = props => {
  const { className, active, disabled, tag: Tag, ...attrs } = props;
  const classes = classNames(
    className,
    "nav-item",
    active && "active",
    disabled && "disabled"
  );
  return <Tag {...attrs} className={classes} />;
};
NavItem.defaultProps = {
  tag: "li"
};
export default NavItem;
