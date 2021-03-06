import React from 'react'
import SvgIcon from '@material-ui/core/SvgIcon'

function ApplicationServers (props) {
  return (
    <SvgIcon {...props}>
      <path d="M15.5 2c.825 0 1.5.675 1.5 1.5v17c0 .825-.675 1.5-1.5 1.5h-7c-.825 0-1.5-.675-1.5-1.5v-17C7 2.675 7.675 2 8.5 2h7zM15 20V4H9v16h6zm5-16a1 1 0 0 1 1 1v14a1 1 0 1 1-2 0V5a1 1 0 0 1 1-1zM4 4a1 1 0 0 1 1 1v14a1 1 0 1 1-2 0V5a1 1 0 0 1 1-1zm6.5 3.75a.75.75 0 0 1 0-1.5h3a.75.75 0 0 1 0 1.5h-3zm0 3a.75.75 0 0 1 0-1.5h3a.75.75 0 0 1 0 1.5h-3zM12 18a1 1 0 1 1 0-2 1 1 0 0 1 0 2z"  fillRule="nonzero"/>
    </SvgIcon>
  )
}

export { ApplicationServers }
