import { PtagProps } from "./Ptag.props";

import styles from "./Ptag.module.css";
import cn from "classnames";

export const Ptag = ({
  size = "p16",
  children,
  className,
  ...props
}: PtagProps): JSX.Element => {
  return (
    <p
      className={cn(className, {
        [styles.p14]: size == "p14",
        [styles.p16]: size == "p16",
        [styles.p18]: size == "p18",
      })}
      {...props}
    >
      {children}
    </p>
  );
};
