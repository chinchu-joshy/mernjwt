import React,{useContext,useState} from 'react'
const Themevalue=React.createContext()
const ThemeUpdate=React.createContext()
export function useTheme(){
    return useContext(Themevalue)
}
export function useThemeUpdate(){
    return useContext(ThemeUpdate)
}
export function ThemeContext({children}) {
  const [color, setcolor] = useState(true)
  const change=()=>{
   setcolor(prevCOlor=>!prevCOlor)
    }
    return (
       <Themevalue.Provider value={color}>
           <ThemeUpdate.Provider value={change}>
           {children}
           </ThemeUpdate.Provider>
       </Themevalue.Provider>
    )
}


