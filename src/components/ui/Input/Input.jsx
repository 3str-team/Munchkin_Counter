import clsx from "clsx";
import { forwardRef } from "react";

export const Input = forwardRef(({ className, placeholder, ...props }, ref) => {
  return (
    <input
      className={clsx("input", className)}
      placeholder={placeholder}
      ref={ref}
      {...props}
    />
  );
});
