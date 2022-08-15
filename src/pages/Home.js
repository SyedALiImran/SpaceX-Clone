import React from 'react'

import Sections from '../components/Sections'

import object from './objects/text'

const Home = () => {
  return (
    <>
    {
      object.map((val)=>{
        return(

      <Sections launch={val.launch} name={val.name} imgSr={val.imgSr} key={val.key}/>
        )
      })
    }
    </>
  )
}

export default Home