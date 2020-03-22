import React from "react";
import classNames from "classnames";
type RowProps = {
  className?: string,
  noGutters?: boolean,
  form?: boolean,
  tag?: ((...args: any[]) => any) | string
};
const Row: React.SFC<RowProps> = props => {
  const { noGutters, form, className, tag: Tag, ...attrs } = props;
  const classes = classNames(
    className,
    noGutters ? "no-gutters" : null,
    form ? "form-row" : "row"
  );
  return <Tag {...attrs} className={classes} />;
};
Row.defaultProps = {
  tag: "div"
};
export default Row;
