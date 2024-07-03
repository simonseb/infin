'use client';

import { TypeActiveSection, TypeCursorVisibility } from '@/lib/types';
import { ReactNode, createContext, useState } from 'react';

export interface IAppContext {
  cursorVisibility: TypeCursorVisibility;
  setCursorVisibility: (cursorDisplay: TypeCursorVisibility) => void;
  activeSection?: TypeActiveSection[];
  setActiveSection: (value: TypeActiveSection) => void;
  removeActiveSection: (value: TypeActiveSection) => void;
  showAllDom: boolean;
  setShowAllDom: (value: boolean) => void;
  showFooter: boolean;
  setShowFooter: (value: boolean) => void;
}

export const AppContext = createContext<IAppContext>({
  cursorVisibility: 'none',
  setCursorVisibility: () => {},
  activeSection: [],
  setActiveSection: () => {},
  removeActiveSection: () => {},
  showAllDom: true,
  setShowAllDom: () => {},
  showFooter: true,
  setShowFooter: () => {},
});

export const AppContextProvider = ({
  children,
}: {
  children: ReactNode;
}): JSX.Element => {
  const [showAll, setShowAll] = useState<boolean>(false);
  const setShowAllDom = (value: boolean) => {
    setShowAll(value);
  };

  const [isShowFooter, setIsShowFooter] = useState<boolean>(true);
  const setShowFooter = (value: boolean) => {
    setIsShowFooter(value);
  };

  const [cursorDisplay, setCursorDisplay] =
    useState<TypeCursorVisibility>('none');
  const setCursorVisibility = (cursorDisplay: TypeCursorVisibility) => {
    setCursorDisplay(cursorDisplay);
  };

  const [sections, setSections] = useState<TypeActiveSection[]>([]);
  const setActiveSection = (value: TypeActiveSection) => {
    value === 'business'
      ? setSections([])
      : value === 'getstarted'
        ? setSections(['getstarted'])
        : setSections([...sections, value]);
  };

  const removeActiveSection = (value: TypeActiveSection) => {
    setSections(sections.filter((s) => s !== value));
  };

  return (
    <AppContext.Provider
      value={{
        cursorVisibility: cursorDisplay,
        setCursorVisibility,
        activeSection: sections,
        setActiveSection,
        removeActiveSection,
        showAllDom: showAll,
        setShowAllDom,
        showFooter: isShowFooter,
        setShowFooter,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};
