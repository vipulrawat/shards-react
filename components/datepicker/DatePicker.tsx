import React from "react";
import ReactDatePicker from "react-datepicker";
import classNames from "classnames";
import "react-datepicker/dist/react-datepicker.css";
import "./DatePicker.css";
const DatePicker: React.SFC<{}> = props => {
  const { className, size, ...attrs } = props;
  const classes = classNames(
    className,
    "form-control",
    size && `form-control-${size}`
  );
  if (!attrs.dropdownMode) {
    attrs.dropdownMode = "select";
  }
  return <ReactDatePicker {...props} className={classes} />;
};
export default DatePicker;
