import React from 'react'
import SvgIcon from '@material-ui/core/SvgIcon'

function Minimize (props) {
  return (
    <SvgIcon {...props}>
      <path d="M19 17H5a1 1 0 1 0 0 2h14a1 1 0 1 0 0-2z" />
    </SvgIcon>
  )
}

export { Minimize }
