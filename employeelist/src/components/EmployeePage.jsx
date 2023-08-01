import React from 'react'
import Header from './Header'
import { AppContext } from '../contexts/app_context'
import { useContext } from 'react'
import EmployeeListItem from './EmployeeListItem'

function EmployeePage() {
  let {clickItem} = useContext(AppContext)
  return (
    <div className='employeePage'>
      <h1>Employee</h1>
        <EmployeeListItem info={clickItem}
        />
      <div className='employeeContainer'>
        <p> mobile:{clickItem.mobile}</p>
        <p> email:{clickItem.email}</p>
        {/* <p> mobile:{clickItem.mobile}</p> */}

      </div>

      
    </div>
  )
}

export default EmployeePage