import React from 'react'
import requests from '..utils/requests'

const Nav = () => {
  return (
    <nav>
      <div>
        {Object.entries(requests).map(([key, { title, url }]) => (
          <h2
            key={key}
            className=""
          >
            {title}
          </h2>
        ))}
      </div>
    </nav>
  )
}

export default Nav