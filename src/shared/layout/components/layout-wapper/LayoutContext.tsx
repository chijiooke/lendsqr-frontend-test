import React, { Dispatch, FC, ReactElement } from "react";

interface LayoutContextType {
  isSideNavOpen: boolean;
  setIsSideNavOpen: Dispatch<boolean>;
}

const LayoutContext = React.createContext<LayoutContextType>(null!);

export const LayoutProvider: FC<{ children: ReactElement }> = ({
  children,
}) => {
  let [isSideNavOpen, setIsSideNavOpen] = React.useState<any>(true);

  let value = { isSideNavOpen, setIsSideNavOpen };

  return (
    <LayoutContext.Provider value={value}>{children}</LayoutContext.Provider>
  );
};

export function useLayout() {
  return React.useContext(LayoutContext);
}
