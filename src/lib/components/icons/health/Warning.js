import React from 'react'
import SvgIcon from '@material-ui/core/SvgIcon'

function Warning (props) {
  return (
    <SvgIcon {...props}>
      <path d="M2.734 21h18.532a1 1 0 0 0 .865-1.501L12.865 3.495a1 1 0 0 0-1.73 0L1.869 19.499A1 1 0 0 0 2.734 21zM13 18h-2v-2h2v2zm0-4h-2v-4h2v4z" fill="#FC0"/>
    </SvgIcon>
  )
}

export { Warning }
