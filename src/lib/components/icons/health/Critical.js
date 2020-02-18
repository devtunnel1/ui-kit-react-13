import React from 'react'
import SvgIcon from '@material-ui/core/SvgIcon'

function Critical (props) {
  return (
    <SvgIcon {...props}>
      <path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-6 14h-2v-2h2v2zm0-4h-2V7h2v6z" fill="#FF3B30"/>
    </SvgIcon>
  )
}

export { Critical }
