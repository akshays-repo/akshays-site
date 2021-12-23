import { createContext, ReactNode, useContext, useState } from "react";

type AppContextType = {
  showMenu: boolean;
  openMenu: () => void;
  closeMenu: () => void;
};

const appContextDefaultValues: AppContextType = {
  showMenu: false,
  openMenu: () => {},
  closeMenu: () => {},
};

const AppContext = createContext<AppContextType>(appContextDefaultValues);

export function useApp() {
  return useContext(AppContext);
}

type Props = {
  children: ReactNode;
};

export function AppProvider({ children }: Props) {
  const [showMenu, setShowMenu] = useState<boolean>(false);

  const value: AppContextType = {
    showMenu:showMenu,
    openMenu: () => setShowMenu(true),
    closeMenu: () => setShowMenu(false),
  };
  return (
    <>
      <AppContext.Provider value={value}>{children}</AppContext.Provider>
    </>
  );
}
