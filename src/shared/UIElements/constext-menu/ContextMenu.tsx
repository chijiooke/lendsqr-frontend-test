import { FC, ReactElement, useRef } from "react";
import "./ContextMenu.styles.scss";

const ContextMenu: FC<{
  open: boolean;
  anchorEl: null | (EventTarget & HTMLButtonElement);
  handleClose: () => void;

  children: ReactElement;
}> = ({ anchorEl, children, open, handleClose }) => {
  const wrapper = useRef(null);
  if (!!anchorEl) {
    window.addEventListener("click", (e) => {
      e.stopPropagation();
      if (
        (e.currentTarget && e.currentTarget !== anchorEl) ||
        e.currentTarget !== wrapper.current
      ) {
        handleClose();
      }
    });
  }

  return (
    <div
      onClick={(e) => e.stopPropagation()}
      ref={wrapper}
      className="context__menu__wrapper"
      style={{
        display: anchorEl && open ? "block" : "none",
        top: `${anchorEl?.offsetTop && anchorEl?.offsetTop + 25}px`,
        left: `${anchorEl?.offsetLeft && anchorEl?.offsetLeft - 50}px`,
      }}
    >
      {children}
    </div>
  );
};

export default ContextMenu;
