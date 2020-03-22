import React from "react";
import classNames from "classnames";
import { INPUT_TYPES } from "../constants";
interface IFormInputProps extends React.HTMLAttributes<Element> {
  className?: string;
  inline?: boolean;
  type?: any;
  plaintext?: boolean;
  size?: string;
  valid?: boolean;
  invalid?: boolean;
  innerRef?: any | ((...args: any[]) => any) | string;
  attrs?: any;
}
/**
 * The form input allows you to create various text style inputs such as `text`, `password`, `email`, `number`, `url`, `search` and more.
 */
class FormInput extends React.Component<IFormInputProps, {}> {
  ref: any;
  constructor(props) {
    super(props);
    this.ref = null;
    this.getRef = this.getRef.bind(this);
    this.focus = this.focus.bind(this);
  }
  getRef(ref) {
    if (this.props.innerRef) {
      this.props.innerRef(ref);
    }
    this.ref = ref;
  }
  focus() {
    if (this.ref) {
      this.ref.focus();
    }
  }
  render() {
    const {
      className,
      plaintext,
      size,
      invalid,
      valid,
      innerRef,
      ...attrs
    } = this.props;
    const classes = classNames(
      className,
      plaintext ? "form-control-plaintext" : "form-control",
      plaintext && "w-100",
      size && `form-control-${size}`,
      valid && "is-valid",
      invalid && "is-invalid"
    );
    return <input {...attrs} ref={innerRef} className={classes} />;
  }
}
export default FormInput;
