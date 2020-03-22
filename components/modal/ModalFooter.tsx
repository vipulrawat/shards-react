import React from "react";
import classNames from "classnames";
type ModalFooterProps = {
  className?: string
};
const ModalFooter: React.SFC<ModalFooterProps> = props => {
  const { className, children, ...attrs } = props;
  const classes = classNames("modal-footer", className);
  return (
    <div className={classes} {...attrs}>
      {children}
    </div>
  );
};
export default ModalFooter;
