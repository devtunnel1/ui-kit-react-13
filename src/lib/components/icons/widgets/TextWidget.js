import React from 'react'
import SvgIcon from '@material-ui/core/SvgIcon'

function TextWidget (props) {
  return (
    <SvgIcon {...props}>
      <path d="M20.334 2C21.25 2 22 2.75 22 3.666v16.668A1.672 1.672 0 0 1 20.334 22H3.666A1.672 1.672 0 0 1 2 20.334V3.666C2 2.75 2.75 2 3.666 2h16.668zm-.556 17.778V4.222H4.222v15.556h15.556zM9.26 15.44h1.646V8.505H9.52v1.749H7.93V6.917h7.916v3.337h-1.588V8.505h-1.373v6.934h1.633v1.59H9.26v-1.59z"/>
    </SvgIcon>
  )
}

export { TextWidget }
