import React from 'react'
import { createContext ,useContext,useState} from 'react'
import { ProjectData } from '../components/utility/ProjectData'

const Data = createContext(ProjectData)

const UseContextHook = ({children}) => {
    const [data,setData] = useState(ProjectData)
  return (
    <Data.Provider value={{data,setData}}>{children}</Data.Provider>
  )
}

export const ContextHookUse =()=> {
    return  useContext(Data)
};

export default UseContextHook