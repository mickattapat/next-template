import { ReactNode } from "react";

interface Props {
  text?: string;
  children: ReactNode;
}

const DefaultButton = (props: Props) => {
  return (
    <button className=" bg-[white] text-black border rounded-md cursor text-base m-4 px-3 py-1 hover:text-white hover:bg-black duration-300">
      {props.children}
    </button>
  );
};

export default DefaultButton;
