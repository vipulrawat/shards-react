import React from "react";
import classNames from "classnames";
type ContainerProps = {
  className?: string,
  fluid?: boolean,
  tag?: ((...args: any[]) => any) | string
};
const Container: React.SFC<ContainerProps> = props => {
  const { className, fluid, tag: Tag, ...attrs } = props;
  const classes = classNames(
    className,
    fluid ? "container-fluid" : "container"
  );
  return <Tag {...attrs} className={classes} />;
};
Container.defaultProps = {
  tag: "div"
};
export default Container;
