import React from 'react'

const options = [
  {
    id: '1',
    name: 'Speech to Text',
    description: 'Converts speech to text'
  },
  {
    id: '2',
    name: 'Speech to Speech',
    description: 'Converts speech to speech'
  },
  {
    id: '3',
    name: 'Text to Speech',
    description: 'Converts text to speech'
  },
  {
    id: '4',
    name: 'Text to Text',
    description: 'Converts text to text'
  },
  {
    id: '5',
    name: 'Text to Speech',
    description: 'Converts text to speech'
  }
]

export const Options = () => {
  return (
    <div className='option__card__container'>
    {
      options.map((option) => 
      <div className='option__card' key={option.id}>
          <h2>{option.name}</h2>
          <p>{option.description}</p>
        </div>
      )
    }
  </div>
  )
}
