import clsx from "clsx";

export const Input = ({ className, placeholder, ...props }) => {
  return (
    <input
      className={clsx("input", className)}
      placeholder={placeholder}
      {...props}
    />
  );
};
