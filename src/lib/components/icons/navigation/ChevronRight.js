import React from 'react'
import SvgIcon from '@material-ui/core/SvgIcon'

function ChevronRight (props) {
  return (
    <SvgIcon {...props}>
      <path d="M9.705 17.295c.39.39 1.02.39 1.41 0l4.588-4.588a1 1 0 0 0 0-1.414l-4.588-4.588a.998.998 0 0 0-1.41 1.41L13.58 12l-3.876 3.884a.998.998 0 0 0 .001 1.411z"  fillRule="nonzero"/>
    </SvgIcon>
  )
}

export { ChevronRight }
