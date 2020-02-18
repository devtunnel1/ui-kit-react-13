import React from 'react'
import SvgIcon from '@material-ui/core/SvgIcon'

function BottomPanel (props) {
  return (
    <SvgIcon {...props}>
      <path d="M0,.05H24v24H0Z" fill="none"/><path d="M0,.06H24v24H0Z" fill="none"/><path d="M5,12v5H19V12Zm18,7.08V5a2,2,0,0,0-2-2H3A2,2,0,0,0,1,5v14a2,2,0,0,0,2,2H21A2,2,0,0,0,23,19.06Zm-2,0H3V5H21Z"/>
    </SvgIcon>
  )
}

export { BottomPanel }
