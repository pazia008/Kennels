import React from "react"
import "./Kennel.css"
import { AnimalCard } from "./animal/AnimalCard"
import "./animal/Animal.css"
import{EmployeeCard} from "./Employee"
import {LocationCard} from "./Location"
import {CustomerCard} from "./customer/Customer"
import { NavBar } from "./nav/NavBar"
import { ApplicationViews } from "./ApplicationViews"

export const Kennel = () => (
    <>
        <NavBar />
        <ApplicationViews />
    </>   
)

