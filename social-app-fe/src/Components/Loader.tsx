import React, { ReactNode } from "react";
import ReactLoader from "react-loaders";

interface IProps {
  active: boolean;
  rest: ReactNode;
  // any other props that come into the component
}

const Loader = ({ active, rest }: IProps) => {
  return <ReactLoader active={active} type="ball-spin-fade-loader" {...rest} />;
};

export default Loader;
