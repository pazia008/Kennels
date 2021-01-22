import React from "react"
import "./Kennel.css"
import { AnimalCard } from "./animal/AnimalCard"
import "./animal/Animal.css"
import{EmployeeCard} from "./employee/Employee"
import {LocationCard} from "./locations/Location"
import {CustomerCard} from "./customer/Customer"
import { NavBar } from "./nav/NavBar"
import { ApplicationViews } from "./ApplicationViews"

export const Kennel = () => (
    <>
        <NavBar />
        <ApplicationViews />
    </>   
)

