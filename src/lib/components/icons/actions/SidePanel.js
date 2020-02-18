import React from 'react'
import SvgIcon from '@material-ui/core/SvgIcon'

function SidePanel (props) {
  return (
    <SvgIcon {...props}>
      <path d="M0,.05H24v24H0Z" fill="none"/><path d="M18.92,7H14V17.06h4.92Zm4,12.06V5a2,2,0,0,0-2-2h-18a2,2,0,0,0-2,2v14a2,2,0,0,0,2,2h18A2,2,0,0,0,22.92,19.06Zm-2,0h-18V5h18Z"/><path d="M-.08.06h24v24h-24Z" fill="none"/>
    </SvgIcon>
  )
}

export { SidePanel }
