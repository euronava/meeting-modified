import React from 'react'

export const About = () => {
  return (
    <div className={'container'} style={{width: '90%'}}>
      <h1 style={{color: '#789efa'}}>About us</h1>
      <p style={{color: '#789efa', 'fontWeight': '600', padding: '10px', margin: 0}}>Verbum is a tool with the purpose of destroying the lenguage barrier using AI.
      <br/>Usable for online meetings, discussions, chats or events with verbum,
      every attendee can comunicate in his native language without any problem
      </p>

      <h4 style={{color: '#789efa', 'fontWeight': '600', padding: '10px', margin: 0}}>Fill the form if you want to contact with us</h4>
      <div>
        <div style={{display: 'flex', flexDirection: 'column', marginBottom: '10px'}}>
          <span style={{marginBottom: '2px'}}>Full Name:</span>
          <input placeholder='Username' style={{
            padding: '12px',
            border: '1px solid #646464',
            borderRadius: '6px',
            color: '#646464'
          }} />
        </div>
        <div  style={{display: 'flex', flexDirection: 'column', marginBottom: '10px'}}>
          <span style={{marginBottom: '2px'}}>Email:</span>
          <input placeholder='Email' style={{
            padding: '12px',
            border: '1px solid #646464',
            borderRadius: '6px',
            color: '#646464'
          }} />
        </div>
        <div  style={{display: 'flex', flexDirection: 'column', marginBottom: '10px'}}>
          <span style={{marginBottom: '2px'}}>Phone number:</span>
          <input placeholder='Phone number' style={{
            padding: '12px',
            border: '1px solid #646464',
            borderRadius: '6px',
            color: '#646464'
          }} />
        </div>
        <div  style={{display: 'flex', flexDirection: 'column', marginBottom: '10px'}}>
          <span>Birth date:</span>
          <input placeholder='Birth date' style={{
            padding: '12px',
            border: '1px solid #646464',
            borderRadius: '6px',
            color: '#646464'
          }} />
        </div>
        <button style={{width: '169px', backgroundColor:"#789efa", color: 'white', padding: '12px', borderRadius: '5px', border: 'none'}}>Send</button>
      </div>
    </div>
  )
}
