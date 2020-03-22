import React from "react";
import classNames from "classnames";
interface IFormTextareaProps extends React.HTMLAttributes<Element> {
  className?: string;
  size?: string;
  plaintext?: boolean;
  valid?: boolean;
  invalid?: boolean;
  innerRef?: any | ((...args: any[]) => any) | string;
  attrs?: any;
}
/**
 * The `FormTextarea` component allows you to easily create multi-line text inputs.
 */
class FormTextarea extends React.Component<IFormTextareaProps, {}> {
  ref: any;
  constructor(props) {
    super(props);
    this.getRef = this.getRef.bind(this);
  }
  getRef(ref) {
    if (this.props.innerRef) {
      this.props.innerRef(ref);
    }
    this.ref = ref;
  }
  render() {
    const {
      className,
      children,
      innerRef,
      plaintext,
      size,
      valid,
      invalid,
      ...attrs
    } = this.props;
    const classes = classNames(
      className,
      children,
      plaintext ? "form-control-plaintext" : "form-control",
      plaintext && "w-100",
      size && `form-control-${size}`,
      valid && "is-valid",
      invalid && "is-invalid"
    );
    return <textarea {...attrs} className={classes} ref={innerRef} />;
  }
}
export default FormTextarea;
