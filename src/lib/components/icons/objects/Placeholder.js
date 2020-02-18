import React from 'react'
import SvgIcon from '@material-ui/core/SvgIcon'

function Placeholder (props) {
  return (
    <SvgIcon {...props}>
      <path d="M11.957 11.25l4.95-4.95.707.707-4.95 4.95 4.95 4.95-.707.707-4.95-4.95-4.95 4.95-.707-.707 4.95-4.95-4.95-4.95.707-.707 4.95 4.95zM0 0h24v24H0V0zm1 1v22h22V1H1z"/>
    </SvgIcon>
  )
}

export { Placeholder }
