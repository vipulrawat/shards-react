import React from "react";
import classNames from "classnames";
interface INavLinkProps extends React.HTMLAttributes<Element> {
  disabled?: boolean;
  active?: boolean;
  className?: string;
  onClick?: (...args: any[]) => any;
  href?: any;
  tag?: ((...args: any[]) => any) | string;
  innerRef?: any | ((...args: any[]) => any) | string;
  attrs?: any;
}
class NavLink extends React.Component<INavLinkProps, {}> {
  constructor(props) {
    super(props);
    this.handleOnClick = this.handleOnClick.bind(this);
  }
  handleOnClick(e) {
    if (this.props.disabled) {
      e.preventDefault();
      return;
    }
    if (this.props.href === "#") {
      e.preventDefault();
    }
    if (this.props.onClick) {
      this.props.onClick(e);
    }
  }
  render() {
    let {
      className,
      active,
      disabled,
      tag: Tag,
      innerRef,
      ...attrs
    } = this.props;
    const classes = classNames(
      className,
      "nav-link",
      disabled && "disabled",
      active && "active"
    );
    return (
      <Tag
        {...attrs}
        ref={innerRef}
        onClick={this.handleOnClick}
        className={classes}
      />
    );
  }
}
NavLink.defaultProps = {
  tag: "a"
};
export default NavLink;
