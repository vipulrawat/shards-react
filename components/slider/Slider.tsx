import React from "react";
import classNames from "classnames";
import nouislider from "nouislider";
interface ISliderProps extends React.HTMLAttributes<Element> {
  className?: string;
  theme?: string;
  animate?: boolean;
  behaviour?: string;
  cssPrefix?: string;
  disabled?: boolean;
  limit?: number;
  margin?: number;
  onChange?: (...args: any[]) => any;
  onEnd?: (...args: any[]) => any;
  onSet?: (...args: any[]) => any;
  onSlide?: (...args: any[]) => any;
  onStart?: (...args: any[]) => any;
  onUpdate?: (...args: any[]) => any;
  pips?: any;
  range: any;
  start: number[];
  step?: number;
  direction?: "ltr" | "rtl";
  orientation?: "horizontal" | "vertical";
  connect?: boolean[] | boolean;
  tooltips?:
    | boolean
    | {
        to?: (...args: any[]) => any
      }[];
}
/**
 * The slider component is powered behind the scenes by the [NoUiSlider](https://refreshless.com/nouislider/) library.
 */
class Slider extends React.Component<ISliderProps, {}> {
  slider: any;
  sliderContainer: any;
  componentDidMount() {
    if (this.props.disabled) {
      this.sliderContainer.setAttribute("disabled", true);
    } else {
      this.sliderContainer.removeAttribute("disabled");
    }
    this.createSlider();
  }
  componentDidUpdate() {
    if (this.props.disabled) {
      this.sliderContainer.setAttribute("disabled", true);
    } else {
      this.sliderContainer.removeAttribute("disabled");
    }
    this.slider.destroy();
    this.createSlider();
  }
  componentWillUnmount() {
    this.slider.destroy();
  }
  createSlider() {
    var slider = (this.slider = nouislider.create(this.sliderContainer, {
      ...this.props
    }));
    if (this.props.onUpdate) {
      slider.on("update", this.props.onUpdate);
    }
    if (this.props.onChange) {
      slider.on("change", this.props.onChange);
    }
    if (this.props.onSlide) {
      slider.on("slide", this.props.onSlide);
    }
    if (this.props.onStart) {
      slider.on("start", this.props.onStart);
    }
    if (this.props.onEnd) {
      slider.on("end", this.props.onEnd);
    }
    if (this.props.onSet) {
      slider.on("set", this.props.onSet);
    }
  }
  render() {
    const { className, theme } = this.props;
    const classes = classNames(className, theme && `slider-${theme}`);
    return (
      <div
        className={classes}
        ref={slider => {
          this.sliderContainer = slider;
        }}
      />
    );
  }
}
export default Slider;
