import React from 'react'
import SvgIcon from '@material-ui/core/SvgIcon'

function CallOutgoing (props) {
  return (
    <SvgIcon {...props}>
      <path d="M10.08,18A6,6,0,1,1,14.32,7.81l1.41-1.42a8,8,0,1,0,0,11.22l-1.41-1.42A6,6,0,0,1,10.08,18Z"/><path d="M21.27,11.32,18.73,8.74a.94.94,0,0,0-.68-.28.92.92,0,0,0-.67.28l0,0a1,1,0,0,0,0,1.33l.54.55L18,11H10A1,1,0,0,0,10,13h8l-.06.37-.54.55a1,1,0,0,0,0,1.34l0,0a.94.94,0,0,0,1.35,0l2.54-2.58A1,1,0,0,0,21.27,11.32Z"/><path fill="none" d="M0 0H24V24H0z"/>
    </SvgIcon>
  )
}

export { CallOutgoing }
