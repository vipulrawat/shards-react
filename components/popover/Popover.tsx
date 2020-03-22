import React from "react";
import classNames from "classnames";
import PopperManager from "../../utils/PopperManager";
import { CustomPropTypes, getTarget } from "../utils";
import { EVENTS, TIMEOUT } from "../constants";
interface IPopoverProps extends React.HTMLAttributes<Element> {
  className?: string;
  target: any;
  container?: any;
  modifiers?: any;
  open?: boolean;
  innerClassName?: string;
  disabled?: boolean;
  noArrow?: boolean;
  arrowClassName?: string;
  boundariesElement?: string | JSX.Element;
  placement?: string;
  placementPrefix?: string;
  offset?: string | number;
  toggle: (...args: any[]) => any;
  delay?:
    | number
    | {
        show?: number,
        hide?: number
      };
  attrs?: any;
}
/**
 * Popovers are powerful elements similar to tooltips and powered by Popper.js that can be applies to any interactive element.
 */
class Popover extends React.Component<IPopoverProps, {}> {
  _hideTimeout: any;
  _popover: any;
  _showTimeout: any;
  _target: any;
  constructor(props) {
    super(props);
    this.show = this.show.bind(this);
    this.hide = this.hide.bind(this);
    this.maybeShow = this.maybeShow.bind(this);
    this.toggle = this.toggle.bind(this);
    this.addListeners = this.addListeners.bind(this);
    this.removeListeners = this.removeListeners.bind(this);
    this.handleClick = this.handleClick.bind(this);
    this.getDelay = this.getDelay.bind(this);
    this._target = null;
    this._hideTimeout = null;
    this._showTimeout = null;
  }
  componentDidMount() {
    this._target = getTarget(this.props.target);
    this.maybeShow();
  }
  componentDidUpdate() {
    this.maybeShow();
  }
  componentWillUnmount() {
    clearTimeout(this._showTimeout);
    clearTimeout(this._hideTimeout);
    this.removeListeners();
  }
  show() {
    clearTimeout(this._hideTimeout);
    this.addListeners();
    if (!this.props.open) {
      clearTimeout(this._showTimeout);
      this._showTimeout = setTimeout(this.toggle, this.getDelay("show"));
    }
  }
  hide() {
    clearTimeout(this._showTimeout);
    this.removeListeners();
    if (this.props.open) {
      clearTimeout(this._hideTimeout);
      this._hideTimeout = setTimeout(this.toggle, this.getDelay("hide"));
    }
  }
  maybeShow() {
    if (this.props.open) {
      this.show();
      return;
    }
    this.hide();
  }
  toggle(event) {
    if (this.props.disabled) {
      event.preventDefault();
      return;
    }
    return this.props.toggle(event);
  }
  addListeners() {
    EVENTS.CLICK.forEach(event =>
      document.addEventListener(event, this.handleClick, true)
    );
  }
  removeListeners() {
    EVENTS.CLICK.forEach(event => {
      document.removeEventListener(event, this.handleClick, true);
    });
  }
  handleClick(event) {
    if (!this._target) {
      return;
    }
    if (
      event.target !== this._target &&
      !this._target.contains(event.target) &&
      event.target !== this._popover &&
      !(this._popover && this._popover.contains(event.target))
    ) {
      if (this._hideTimeout) {
        clearTimeout(this._hideTimeout);
      }
      if (this.props.open) {
        this.toggle(event);
      }
    }
  }
  getDelay(key) {
    key = key.toUpperCase();
    if (typeof this.props.delay === "object") {
      return isNaN(this.props.delay[key])
        ? TIMEOUT[key]
        : this.props.delay[key];
    }
    return this.props.delay;
  }
  render() {
    const {
      className,
      target,
      container,
      modifiers,
      open,
      innerClassName,
      noArrow,
      arrowClassName,
      placement,
      placementPrefix,
      boundariesElement,
      offset,
      ...attrs
    } = this.props; // disabled, toggle, delay
    if (!open) {
      return null;
    }
    const classes = classNames("popover-inner", innerClassName);
    const popperClasses = classNames("popover", "show", className);
    return (
      <PopperManager
        className={popperClasses}
        target={target}
        container={container}
        modifiers={modifiers}
        offset={offset}
        open={open}
        noArrow={noArrow}
        arrowClassName={arrowClassName}
        placement={placement}
        placementPrefix={placementPrefix}
        boundariesElement={boundariesElement}
      >
        <div {...attrs} className={classes} />
      </PopperManager>
    );
  }
}
Popover.defaultProps = {
  open: false,
  noArrow: false,
  placement: "top",
  placementPrefix: "bs-popover",
  delay: {
    show: 0,
    hide: 0
  },
  toggle: function() {}
};
export default Popover;
