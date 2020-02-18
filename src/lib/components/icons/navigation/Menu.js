import React from 'react'
import SvgIcon from '@material-ui/core/SvgIcon'

function Menu (props) {
  return (
    <SvgIcon {...props}>
      <path d="M4 18h16a1 1 0 0 0 0-2H4a1 1 0 0 0 0 2zm0-5h16a1 1 0 0 0 0-2H4a1 1 0 0 0 0 2zM3 7a1 1 0 0 0 1 1h16a1 1 0 0 0 0-2H4a1 1 0 0 0-1 1z" />
    </SvgIcon>
  )
}

export { Menu }
