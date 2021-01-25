import React from "react"
import { Route } from "react-router-dom"
import { Home } from "./Home"
import { AnimalProvider } from "./animal/AnimalProvider"
import { AnimalList } from "./animal/AnimalList"
import { CustomerProvider } from "./customer/CustomerProvider"
import { CustomerList } from "./customer/CustomerList"
import { EmployeeProvider } from "./employee/EmployeeProvider"
import { EmployeeList } from "./employee/EmployeeList"
import { LocationProvider } from "./locations/LocationProvider"
import { LocationList } from "./locations/LocationList"
import { AnimalForm } from "./animal/AnimalForm"
import { EmployeeForm } from "./employee/EmployeeForm"

export const ApplicationViews = () => {
    return (
        <>
            {/* Render the location list when http://localhost:3000/ */}
            <Route exact path="/">
                <Home />
            </Route>

            {/* Render the animal list when http://localhost:3000/animals */}

            <AnimalProvider>
            <EmployeeProvider>
    <LocationProvider>
        <CustomerProvider>
            <Route exact path="/animals">
                <AnimalList />
            </Route>

            <Route path="/animals/create">
        <AnimalForm />
      </Route>

      <Route exact path="/employees">
                <EmployeeList />
            </Route>

      <Route exact path="/employees/create">
        <EmployeeForm />
      </Route>
        </CustomerProvider>
    </LocationProvider>
    </EmployeeProvider>
</AnimalProvider>


        <CustomerProvider>
            <Route exact path="/customers">
                <CustomerList />
            </Route>
         </CustomerProvider>

        <LocationProvider>
            <Route exact path="/locations">
                <LocationList />
            </Route>
         </LocationProvider>

        </>
    )
}