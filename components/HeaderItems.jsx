import React from 'react'

function HeaderItems({ title, Icon}) {
  return (
    <div className="">
        <Icon className="" />
        <p className="">
            {title}
        </p>
    </div>
  )
}

export default HeaderItems