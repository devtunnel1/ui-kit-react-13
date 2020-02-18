import React from 'react'
import SvgIcon from '@material-ui/core/SvgIcon'

function StatusLight (props) {
  return (
    <SvgIcon {...props}>
      <path d="M20.084 2C21.14 2 22 2.858 22 3.916v16.168A1.917 1.917 0 0 1 20.084 22H3.916A1.916 1.916 0 0 1 2 20.084V3.916C2 2.858 2.858 2 3.916 2h16.168zm-.306 17.778V4.222H4.222v15.556h15.556zM12 8.655a3.345 3.345 0 1 1 0 6.689 3.345 3.345 0 0 1 0-6.69z"/>
    </SvgIcon>
  )
}

export { StatusLight }
