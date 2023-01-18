import { ReactNode } from "react";

interface Props {
  children: ReactNode;
}

const Footer = ({ children }: Props) => {
  return <div>{children} </div>;
};

export default Footer;
