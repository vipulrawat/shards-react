import React from "react";
import classNames from "classnames";
type BadgeProps = {
  className?: string,
  theme?: string,
  outline?: boolean,
  pill?: boolean,
  tag?: ((...args: any[]) => any) | string
};
const Badge: React.SFC<BadgeProps> = props => {
  let { tag: Tag, className, theme, pill, outline, ...attrs } = props;
  const classes = classNames(
    className,
    "badge",
    theme && !outline && `badge-${theme}`,
    outline && `badge-outline-${theme}`,
    pill && "badge-pill"
  );
  Tag = attrs.href && Tag === "span" ? "a" : Tag;
  return <Tag {...attrs} className={classes} />;
};
Badge.defaultProps = {
  theme: "primary",
  pill: false,
  outline: false,
  tag: "span"
};
export default Badge;
