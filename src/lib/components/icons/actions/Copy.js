import React from 'react'
import SvgIcon from '@material-ui/core/SvgIcon'

function Copy (props) {
  return (
    <SvgIcon {...props}>
      <path d="M16 1H5c-1.1 0-2 .9-2 2v13h2V3h11V1zm4 4H9c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h11c1.1 0 2-.9 2-2V7c0-1.1-.9-2-2-2zm0 16H9V7h11v14z"  />
    </SvgIcon>
  )
}

export { Copy }
