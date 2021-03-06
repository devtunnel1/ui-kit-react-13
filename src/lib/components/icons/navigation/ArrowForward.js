import React from 'react'
import SvgIcon from '@material-ui/core/SvgIcon'

function ArrowForward (props) {
  return (
    <SvgIcon {...props}>
      <path d="M5 13h11.17l-4.882 4.882a.997.997 0 0 0 .002 1.413l.003.003a1 1 0 0 0 1.412-.003l6.588-6.588a1 1 0 0 0 0-1.414l-6.588-6.588a.998.998 0 0 0-1.41 1.41L16.17 11H5a1 1 0 0 0 0 2z"  fillRule="nonzero"/>
    </SvgIcon>
  )
}

export { ArrowForward }
