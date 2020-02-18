import React from 'react'
import SvgIcon from '@material-ui/core/SvgIcon'

function Close (props) {
  return (
    <SvgIcon {...props}>
      <path d="m18.295 5.705a.997.997 0 0 0 -1.41 0l-4.885 4.885-4.885-4.885a.997.997 0 1 0 -1.41 1.41l4.885 4.885-4.885 4.885a.997.997 0 1 0 1.41 1.41l4.885-4.885 4.885 4.885a.997.997 0 0 0 1.41-1.41l-4.885-4.885 4.885-4.885a.997.997 0 0 0 0-1.41z" />
    </SvgIcon>
  )
}

export { Close }
