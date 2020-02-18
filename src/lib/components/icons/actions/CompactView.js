import React from 'react'
import SvgIcon from '@material-ui/core/SvgIcon'

function CompactView (props) {
  return (
    <SvgIcon {...props}>
      <path d="M4.5 18.5a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zM8 6h13v2H8V6zM4.5 8.5a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zM3 11h13v2H3v-2zm16.5 2.5a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zM8 16h13v2H8v-2z" />
    </SvgIcon>
  )
}

export { CompactView }
