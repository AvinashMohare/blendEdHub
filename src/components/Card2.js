import React from 'react'
import { MODES } from './const'

export const Card2 = () => {
 return (
    <div>
      {MODES.map((card, index) => (
        <div className="content" key={index}>
          <h2>{card.title}</h2>
          <h3>{card.num}</h3>
        </div>
      ))}
    </div>
 )
}
