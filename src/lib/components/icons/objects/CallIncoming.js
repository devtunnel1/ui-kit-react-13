import React from 'react'
import SvgIcon from '@material-ui/core/SvgIcon'

function CallIncoming (props) {
  return (
    <SvgIcon {...props}>
      <path d="M13.59,4A7.94,7.94,0,0,0,7.94,6.39L9.35,7.81a6,6,0,1,1,0,8.38L7.94,17.61A8,8,0,1,0,13.59,4Z"/><path d="M13.2,13h.32l-.38.37-.54.55a1,1,0,0,0,0,1.34l0,0a.94.94,0,0,0,1.35,0l2.55-2.58a1,1,0,0,0,0-1.36L14,8.74a1,1,0,0,0-1.35,0l0,0a1,1,0,0,0,0,1.33l.54.55.38.38H4.18a1,1,0,0,0,0,1.94h9Z"/><path fill="none" d="M0 0H24V24H0z"/>
    </SvgIcon>
  )
}

export { CallIncoming }
