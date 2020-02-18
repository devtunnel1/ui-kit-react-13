import React from 'react'
import SvgIcon from '@material-ui/core/SvgIcon'

function Paste (props) {
  return (
    <SvgIcon {...props}>
      <path d="M19 3h-4.2c-.4-1.2-1.5-2-2.8-2-1.3 0-2.4.8-2.8 2H5c-1.1 0-2 .9-2 2v16c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-7 0c.6 0 1 .5 1 1s-.4 1-1 1-1-.5-1-1 .4-1 1-1zm7 18H5V5h2v3h10V5h2v16z" />
    </SvgIcon>
  )
}

export { Paste }
