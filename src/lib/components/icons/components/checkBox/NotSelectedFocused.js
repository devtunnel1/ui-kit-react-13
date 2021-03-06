import React from 'react'
import SvgIcon from '@material-ui/core/SvgIcon'

function NotSelectedFocused (props) {
  return (
    <SvgIcon {...props}>
      <path d="M5,4 L21,4 C21.5522847,4 22,4.44771525 22,5 L22,21 C22,21.5522847 21.5522847,22 21,22 L5,22 C4.44771525,22 4,21.5522847 4,21 L4,5 C4,4.44771525 4.44771525,4 5,4 Z M6,6 L6,20 L20,20 L20,6 L6,6 Z" fill="#585E67"></path>
      <rect fill="#FFFFFF" x="6" y="6" width="14" height="14"></rect>
    </SvgIcon>
  )
}

export { NotSelectedFocused }
