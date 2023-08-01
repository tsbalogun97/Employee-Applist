import React, { useContext } from 'react'
import { AppContext } from '../contexts/app_context'
import EmployeeListItem from './EmployeeListItem'



function EmployeeList() {
// destructing our AppContext
  let {employees}= useContext(AppContext)
  return (
    <div>
{/* rendering our component for each employee */}
    {employees.map((employee)=>{
      return (
        <EmployeeListItem info={employee}/>
        )

    })}
    </div>
  )
}

export default EmployeeList