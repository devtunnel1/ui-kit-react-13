import React from 'react'
import SvgIcon from '@material-ui/core/SvgIcon'

function ClearConsole (props) {
  return (
    <SvgIcon {...props}>
      <path d="M7.1 5.7C8.5 4.6 10.1 4 12 4c4.4 0 8 3.6 8 8 0 1.8-.6 3.5-1.7 4.9L7.1 5.7zM4 12c0-1.8.6-3.5 1.7-4.9l11.2 11.2C15.5 19.4 13.8 20 12 20c-4.4 0-8-3.6-8-8zm-2 0c0 5.5 4.5 10 10 10s10-4.5 10-10S17.5 2 12 2 2 6.5 2 12z" />
    </SvgIcon>
  )
}

export { ClearConsole }
