import React from "react";
import classNames from "classnames";
type ModalHeaderProps = {
  className?: string,
  toggle?: (...args: any[]) => any,
  tag?: string,
  closeAriaLabel?: string,
  titleClass?: string
};
const ModalHeader: React.SFC<ModalHeaderProps> = props => {
  const {
    className,
    children,
    toggle,
    tag: Tag,
    closeAriaLabel,
    titleClass,
    ...attrs
  } = props;
  const classes = classNames("modal-header", className);
  const titleClasses = classNames("modal-title", titleClass);
  let closeButton = null;
  if (toggle) {
    closeButton = (
      <button
        type="button"
        onClick={toggle}
        className="close"
        aria-label={closeAriaLabel}
      >
        <span aria-hidden="true">{String.fromCharCode(215)}</span>
      </button>
    );
  }
  return (
    <div className={classes} {...attrs}>
      <Tag className={titleClasses}>{children}</Tag>
      {closeButton}
    </div>
  );
};
ModalHeader.defaultProps = {
  tag: "h5",
  closeAriaLabel: "Close"
};
export default ModalHeader;
