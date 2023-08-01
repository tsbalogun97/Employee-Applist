// all of our Global State management
import {createContext, useEffect, useState} from 'react' 
import employees from '../models/employeelist'

// creating our context
export const AppContext = createContext()
console.log(employees);
// creating function that provides context
const AppContextProvider = (props)=> {
// this is where our Global State goes
  const [clickItem, setClickItem] = useState(employees[0])
  useEffect(()=> {
    console.log(clickItem);
  },[clickItem])
  
  return(
  // syntax for calling a react element 
    <AppContext.Provider value={{
      employees, clickItem, setClickItem

      
    }}>
      {props.children}
    </AppContext.Provider>


  )



}
export default AppContextProvider; 