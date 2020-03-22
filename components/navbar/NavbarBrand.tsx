import React from "react";
import classNames from "classnames";
type NavbarBrandProps = {
  className?: string,
  tag?: ((...args: any[]) => any) | string
};
const NavbarBrand: React.SFC<NavbarBrandProps> = props => {
  const { className, tag: Tag, ...attrs } = props;
  const classes = classNames(className, "navbar-brand");
  return <Tag {...attrs} className={classes} />;
};
NavbarBrand.defaultProps = {
  tag: "a"
};
export default NavbarBrand;
