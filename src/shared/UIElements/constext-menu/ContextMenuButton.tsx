import { FC } from "react";
import './ContextMenu.styles.scss';

const ContextMenuButton: FC<{
  text: string;
  handleClick: () => void;
}> = ({ text, handleClick }) => {
  return <button className="context__menu__btn" onClick={() => handleClick()}>{text}</button>;
};

export default ContextMenuButton;
