import React from 'react'
import { useLocation } from 'react-router-dom'

const Home = ({route}) => {
    const location = useLocation()
    console.log(location)
  return (
    <div>Welcome {location?.state?.username}</div>
  )
}

export default Home;