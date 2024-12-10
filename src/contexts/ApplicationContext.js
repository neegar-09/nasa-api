import { createContext, useState } from "react";


export const ApplicationContext = createContext();
 export const ApplicationProvider = ({children}) => {
    const [lon , setLon] = useState("")
    const [lat , setLat] = useState("")
    const [date , setDate] = useState("")
    const [dim , setDim] = useState("")

  return (
    <ApplicationContext.Provider value = {{lon , setLon , lat, setLat , date , setDate , dim , setDim }}>
      {children}
    </ApplicationContext.Provider>
  )
}

