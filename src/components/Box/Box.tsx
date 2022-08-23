import "./Box.css";

type BoxProps = {
  children: React.ReactNode;
  className: string;
};

export const Box = ({ children, className }: BoxProps) => {
  return <div className={`box ${className}`}>{children}</div>;
};
