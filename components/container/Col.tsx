import React from "react";
import classNames from "classnames";
import { BREAKPOINTS } from "../constants";
import { CustomPropTypes } from "../utils";
const makeColumnClass = function(isXs, breakpoint, colSize) {
  if (colSize === true || colSize === "") {
    return isXs ? "col" : `col-${breakpoint}`;
  } else if (colSize === "auto") {
    return isXs ? "col-auto" : `col-${breakpoint}-auto`;
  }
  return isXs ? `col-${colSize}` : `col-${breakpoint}-${colSize}`;
};
type ColProps = {
  xs?: any,
  sm?: any,
  md?: any,
  lg?: any,
  xl?: any,
  className?: string,
  breakpoints?: any[],
  tag?: ((...args: any[]) => any) | string
};
const Col: React.SFC<ColProps> = props => {
  const { className, breakpoints, tag: Tag, ...attrs } = props;
  const columnClasses = [];
  breakpoints.forEach((breakpoint, idx) => {
    let columnProp = props[breakpoint];
    delete attrs[breakpoint];
    if (!columnProp && columnProp !== "") {
      return;
    }
    const isXs = idx === 0;
    if (typeof columnProp !== "object") {
      const colClass = makeColumnClass(isXs, breakpoint, columnProp);
      columnClasses.push(colClass);
      return;
    }
    const colSizeInterfix = isXs ? "-" : `-${breakpoint}-`;
    const colClass = makeColumnClass(isXs, breakpoint, columnProp.size);
    columnClasses.push(
      classNames({
        [colClass]: columnProp.size || columnProp.size === "",
        [`order${colSizeInterfix}${columnProp.order}`]:
          columnProp.order || columnProp.order === 0,
        [`offset${colSizeInterfix}${columnProp.offset}`]:
          columnProp.offset || columnProp.offset === 0
      })
    );
  });
  if (!columnClasses.length) {
    columnClasses.push("col");
  }
  const classes = classNames(className, columnClasses);
  return <Tag {...attrs} className={classes} />;
};
Col.defaultProps = {
  tag: "div",
  breakpoints: BREAKPOINTS
};
export default Col;
