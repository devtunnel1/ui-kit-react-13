import React from 'react'
import SvgIcon from '@material-ui/core/SvgIcon'

function Align (props) {
  return (
    <SvgIcon {...props}>
      <path d="M13 17.4V22c0 .6-.4 1-1 1s-1-.4-1-1v-4.6l-1.3 1.3c-.4.4-1 .4-1.4 0-.4-.4-.4-1 0-1.4l3-3c.4-.4 1-.4 1.4 0l3 3c.4.4.4 1 0 1.4-.4.4-1 .4-1.4 0L13 17.4zM11 6.6V2c0-.6.4-1 1-1s1 .4 1 1v4.6l1.3-1.3c.4-.4 1-.4 1.4 0 .4.4.4 1 0 1.4l-3 3c-.4.4-1 .4-1.4 0l-3-3c-.4-.4-.4-1 0-1.4.4-.4 1-.4 1.4 0L11 6.6zM3 13v-2h18v2H3z" />
    </SvgIcon>
  )
}

export { Align }
