import React from 'react'
import SvgIcon from '@material-ui/core/SvgIcon'

function PieWidget (props) {
  return (
    <SvgIcon {...props}>
      <path d="M20.084 2C21.14 2 22 2.858 22 3.916v16.168A1.917 1.917 0 0 1 20.084 22H3.916A1.916 1.916 0 0 1 2 20.084V3.916C2 2.858 2.858 2 3.916 2h16.168zm-.306 17.778V4.222H4.222v15.556h15.556zM11.545 7.435v5.02h5.02a5.006 5.006 0 0 1-5.02 5.023 5.007 5.007 0 0 1-5.023-5.022 5.007 5.007 0 0 1 5.023-5.02zm.911-.913a5.007 5.007 0 0 1 5.023 5.023h-5.023V6.522z"/>
    </SvgIcon>
  )
}

export { PieWidget }
