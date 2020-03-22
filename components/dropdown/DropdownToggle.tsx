import React from "react";
import { Reference } from "react-popper";
import classNames from "classnames";
import Button from "../button";
import { DropdownContext } from "./DropdownContext";
interface IDropdownToggleProps extends React.HTMLAttributes<Element> {
  caret?: boolean;
  theme?: string;
  className?: string;
  disabled?: boolean;
  onClick?: (...args: any[]) => any;
  "aria-haspopup"?: boolean;
  split?: boolean;
  nav?: boolean;
  tag?: ((...args: any[]) => any) | string;
  attrs?: any;
}
class DropdownToggle extends React.Component<IDropdownToggleProps, {}> {
  context: any;
  constructor(props) {
    super(props);
    this.onClick = this.onClick.bind(this);
  }
  onClick(e) {
    if (this.props.disabled) {
      e.preventDefault();
      return;
    }
    if (this.props.nav && !this.props.tag) {
      e.preventDefault();
    }
    if (this.props.onClick) {
      this.props.onClick(e);
    }
    this.context.toggle(e);
  }
  render() {
    const { className, theme, caret, split, nav, tag, ...attrs } = this.props;
    const ariaLabel = attrs["aria-label"] || "Toggle Dropdown";
    const classes = classNames(
      className,
      (caret || split) && "dropdown-toggle",
      split && "dropdown-toggle-split",
      nav && "nav-link"
    );
    const children = attrs.children || (
      <span className="sr-only">{ariaLabel}</span>
    );
    let Tag;
    if (nav && !tag) {
      Tag = "a";
      attrs.href = "#";
    } else if (!tag) {
      Tag = Button;
      attrs.theme = theme;
    } else {
      Tag = tag;
    }
    if (this.context.inNavbar) {
      return (
        <Reference>
          {() => (
            <Tag
              {...attrs}
              className={classes}
              onClick={this.onClick}
              aria-expanded={this.context.isOpen}
            >
              {children}
            </Tag>
          )}
        </Reference>
      );
    }
    return (
      <Reference>
        {() => (
          <Tag
            {...attrs}
            className={classes}
            onClick={this.onClick}
            aria-expanded={this.context.isOpen}
          >
            {children}
          </Tag>
        )}
      </Reference>
    );
  }
}
DropdownToggle.defaultProps = {
  "aria-haspopup": true,
  theme: "primary"
};
DropdownToggle.contextType = DropdownContext;
export default DropdownToggle;
