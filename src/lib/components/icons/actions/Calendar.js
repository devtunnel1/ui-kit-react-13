import React from 'react'
import SvgIcon from '@material-ui/core/SvgIcon'

function Calendar (props) {
  return (
    <SvgIcon {...props}>
      <path d="M20 3h-1V2a1 1 0 1 0-2 0v1H7V2a1 1 0 1 0-2 0v1H4c-1.1 0-2 .9-2 2v16c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 18H4V10h16v11zm0-13H4V5h16v3z" />
    </SvgIcon>
  )
}

export { Calendar }
