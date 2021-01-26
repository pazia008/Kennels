import React, { useContext, useEffect, useState } from "react"
import "./Employee.css"
import { useParams, useHistory } from "react-router-dom"
import { EmployeeContext } from "./EmployeeProvider"




export const EmployeeDetail = () => {
  const { getEmployeeById, releaseEmployee  } = useContext(EmployeeContext)
  
	const [employee, setEmployee] = useState({})

	const {employeeId} = useParams();
	

  useEffect(() => {
    console.log("useEffect", employeeId)
    getEmployeeById(employeeId)
    .then((response) => {
      setEmployee(response)
    })
    }, [])

    const history = useHistory()

const handleRelease = () => {
    releaseEmployee(employee.id)
      .then(() => {
        history.push("/employees")
      })
  }
debugger
  return (
    <section className="employee">
      <h3 className="employee__name">{employee.name}</h3>
      <div className="employee__location">Location: {employee.location?.name}</div>
      <button onClick={handleRelease}>Fire Employee</button>
    </section>
  )
}