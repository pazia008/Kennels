import React, { useContext, useEffect } from "react"
import { EmployeeContext } from "./EmployeeProvider"
import { EmployeeCard } from "./Employee"
import "./Employee.css"
import { useHistory } from "react-router-dom"
import { LocationContext } from "../locations/LocationProvider"

export const EmployeeList = () => {
  const { employees, getEmployees } = useContext(EmployeeContext)
  const { locations, getLocations } = useContext(LocationContext)
  const history = useHistory()
  //useEffect - reach out to the world for something
  useEffect(() => {
    console.log("EmployeeList: useEffect - getEmployees")
    getEmployees()
    .then(getLocations)

  }, [])

  return (
    <div className="employees">
         <button onClick={() => {history.push("/employees/create")}}>
            Add Employee
          </button>
      {
        employees.map(employee=> {
            const location = locations.find(l => l.id === employee.locationId)
        
            return <EmployeeCard key={employee.id}
                        location={location}
                        employee={employee} />
        })
      }
    </div>
  )
}


//   return (
//     <div className="employees">
//       {console.log("EmployeeList: Render", employees)}
//       {
//         employees.map(employee => {
//           return <EmployeeCard key={employee.id} employee={employee} />
//         })
//       }
//     </div>
//   )
// }