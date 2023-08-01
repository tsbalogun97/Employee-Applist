import React, { useContext } from 'react'
import { AppContext } from '../contexts/app_context'


function EmployeeListItem(props) {
  let {setClickItem} = useContext(AppContext)
  return (
    <div className="employeeListItem" onClick={()=>setClickItem(props.info)}>
      <img src={props.info.image} alt="" className="" />
      <p>
      <span className='bold'>
        {props.info.name}
      </span>

      <br />
      {props.info.position}
      </p>
    </div>
      
      

  )
}

export default EmployeeListItem