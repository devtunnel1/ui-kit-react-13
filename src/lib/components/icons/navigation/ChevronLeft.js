import React from 'react'
import SvgIcon from '@material-ui/core/SvgIcon'

function ChevronLeft (props) {
  return (
    <SvgIcon {...props}>
      <path d="M14.705 6.705a.997.997 0 0 0-1.41 0l-4.588 4.588a1 1 0 0 0 0 1.414l4.588 4.588a.998.998 0 0 0 1.41-1.41L10.83 12l3.876-3.884a.998.998 0 0 0-.001-1.411z"  fillRule="nonzero"/>
    </SvgIcon>
  )
}

export { ChevronLeft }
