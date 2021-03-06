import React from 'react'
import SvgIcon from '@material-ui/core/SvgIcon'

function ImageWidget (props) {
  return (
    <SvgIcon {...props}>
      <path d="M20.333 2C21.25 2 22 2.75 22 3.667v16.666C22 21.25 21.25 22 20.333 22H3.667C2.75 22 2 21.25 2 20.333V3.667C2 2.75 2.75 2 3.667 2h16.666zm-.555 17.778V4.222H4.222v15.556h15.556zm-9.761-7.806l2.777 4.176 1.984-2.787 2.778 4.167H6.444l3.573-5.556zm4.76-5a1.667 1.667 0 1 1 0 3.334 1.667 1.667 0 0 1 0-3.334z"/>
    </SvgIcon>
  )
}

export { ImageWidget }
