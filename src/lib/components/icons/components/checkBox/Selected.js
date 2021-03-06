import React from 'react'
import SvgIcon from '@material-ui/core/SvgIcon'

function Selected (props) {
  return (
    <SvgIcon {...props}>
      <path d="M5,4 L21,4 C21.5522847,4 22,4.44771525 22,5 L22,21 C22,21.5522847 21.5522847,22 21,22 L5,22 C4.44771525,22 4,21.5522847 4,21 L4,5 C4,4.44771525 4.44771525,4 5,4 Z M6,6 L6,20 L20,20 L20,6 L6,6 Z" fill="#A2A6AB"></path>
      <rect fill="#FFFFFF" x="6" y="6" width="14" height="14"></rect>
      <polygon points="7.75475714 12.1012424 6.5 13.5087798 10.9495988 18.5 19.5 8.91752268 18.2452429 7.5 10.9495988 15.67499" fill="#006FF0"></polygon>
    </SvgIcon>
  )
}

export { Selected }
