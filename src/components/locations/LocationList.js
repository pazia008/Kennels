import React, { useContext, useEffect } from "react"
import { useHistory } from "react-router-dom"
import { LocationContext } from "./LocationProvider"
import { LocationCard } from "./Location"
import "./Location.css"



export const LocationList = () => {
  const { locations, getLocations } = useContext(LocationContext)

  const history = useHistory()
  //useEffect - reach out to the world for something
  useEffect(() => {
    console.log("LocationList: useEffect - getLocations")
    getLocations()

  }, [])


  return (
    <div className="locations">
      
      <div>
		      <button onClick={() => {history.push("/locations/create")}}>
            Add Location
          </button>
          </div>
      {console.log("LocationList: Render", locations)}
      {
        locations.map(location => {
          return <LocationCard 
          key={location.id} 
          location={location} />
        })
      }
    </div>
  )
}