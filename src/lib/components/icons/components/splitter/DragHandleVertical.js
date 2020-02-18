import React from 'react'
import SvgIcon from '@material-ui/core/SvgIcon'

function DragHandleVertical (props) {
  return (
    <SvgIcon {...props}>
      <path d="M9.01,4.01h-2v15.98h2V4.01z M3.01,19.99h2V4.01h-2V19.99z"/>
    </SvgIcon>
  )
}

export { DragHandleVertical }
