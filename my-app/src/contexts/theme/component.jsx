import { useCallback, useState } from 'react'
import { DARK_THEME, DEFAULT_THEME } from './constants';
import { ThemeContext } from './context';

export const ThemeProvider = ({children, defaultTheme = DEFAULT_THEME}) => {
      const [theme, setTheme] = useState(defaultTheme);


      const toggleTheme =useCallback(()=>{
        setTheme(currentTheme => currentTheme === DEFAULT_THEME ? DARK_THEME : DEFAULT_THEME )
      }, []);

      return (
        <ThemeContext.Provider value={{theme, toggleTheme}}>
            {children}
        </ThemeContext.Provider>
      );
}