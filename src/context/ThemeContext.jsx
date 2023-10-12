import { createContext, useReducer } from "react";

export const ThemeProvider = createContext();

const updateState = (state, action) => {
  switch (action.type) {
    case "CHANGE_COLOR":
      return { ...state, color: action.payload };
    case "CHANGE_THEME":
      document.documentElement.setAttribute("data-theme", action.payload);
      return { ...state, theme: action.payload };
    default:
      return state;
  }
};
export function ThemeContextProvider({ children }) {
  const [state, dispatch] = useReducer(updateState, {
    color: " rgb(100 116 139)",
    theme: "light",
  });
  const changeColor = (color) => {
    dispatch({ type: "CHANGE_COLOR", payload: color });
  };
  const changeTheme = (theme) => {
    dispatch({ type: "CHANGE_THEME", payload: theme });
  };
  return (
    <ThemeProvider.Provider value={{ state, changeColor, changeTheme }}>
      {children}
    </ThemeProvider.Provider>
  );
}
