import React from 'react'
import { Options } from '../components/Options'



export const Menu = () => {
  return (
    <div style={{margin: 'auto'}}>
      <h1 style={{color: '#789efa'}}>Verbum Options</h1>
      <p  style={{color: '#789efa'}}>We have these following functionalities in the verbum app</p>
      <Options />
    </div>
  )
}
