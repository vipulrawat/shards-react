import React from "react";
import classNames from "classnames";
interface IButtonProps extends React.HTMLAttributes<Element> {
  className?: string;
  theme?: string;
  size?: string;
  outline?: boolean;
  pill?: boolean;
  squared?: boolean;
  active?: boolean;
  block?: boolean;
  disabled?: boolean;
  tag?: ((...args: any[]) => any) | string;
  innerRef?: any | ((...args: any[]) => any) | string;
  attrs?: any;
  onClick?: any;
}
/**
 * Buttons are Bootstrap's core component for triggering various actions. In Shards, they're very flxible, support multiple sizes, styles, states and many more.
 */
class Button extends React.Component<IButtonProps, {}> {
  constructor(props) {
    super(props);
    this.onClick = this.onClick.bind(this);
  }
  onClick(e) {
    if (this.props.disabled) {
      e.preventDefault();
      return;
    }
    if (this.props.onClick) {
      this.props.onClick(e);
    }
  }
  render() {
    let {
      className,
      theme,
      size,
      pill,
      outline,
      squared,
      active,
      disabled,
      innerRef,
      tag: Tag,
      block,
      ...attrs
    } = this.props;
    const classes = classNames(
      className,
      "btn",
      theme && `btn-${outline ? "outline-" : ""}${theme}`,
      size && `btn-${size}`,
      pill && "btn-pill",
      squared && "btn-squared",
      block && "btn-block",
      active && "active"
    );
    Tag = attrs.href && Tag === "button" ? "a" : Tag;
    const tagType = Tag === "button" && attrs.onClick ? "button" : undefined;
    return (
      <Tag
        ref={innerRef}
        type={tagType}
        {...attrs}
        className={classes}
        disabled={disabled}
        onClick={this.onClick}
      />
    );
  }
}
Button.defaultProps = {
  theme: "primary",
  tag: "button"
};
export default Button;
