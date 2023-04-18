import React, { Dispatch, FC, ReactElement } from "react";
import { screenSize } from "../../../../pages/users/types/ScreenSize.enum";
import { UseMediaQuery } from "../../../hooks/useMediaQuery";

interface LayoutContextType {
  isSideNavOpen: boolean;
  setIsSideNavOpen: Dispatch<boolean>;
}

const LayoutContext = React.createContext<LayoutContextType>(null!);

export const LayoutProvider: FC<{ children: ReactElement }> = ({
  children,
}) => {
  const currentScreenSize = UseMediaQuery();

  let [isSideNavOpen, setIsSideNavOpen] = React.useState<any>(
    currentScreenSize === screenSize.DESKTOP ? true : false
  );

  let value = { isSideNavOpen, setIsSideNavOpen };

  return (
    <LayoutContext.Provider value={value}>{children}</LayoutContext.Provider>
  );
};

export function useLayout() {
  return React.useContext(LayoutContext);
}
