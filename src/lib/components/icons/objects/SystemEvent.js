import React from 'react'
import SvgIcon from '@material-ui/core/SvgIcon'

function SystemEvent (props) {
  return (
    <SvgIcon {...props}>
      <path d="M20.5 2.5a1 1 0 0 1 1 1v15a1 1 0 0 1-1 1h-6.61l-.68 1-.75 1.14a.66.66 0 0 1-1.09 0l-.75-1.14-.68-1H3.5a1 1 0 0 1-1-1v-15a1 1 0 0 1 1-1h17zm-16 15h15v-13h-15v13zM7 10.23h9.5v1.5H7v-1.5zm0-3.5h5.7v1.5H7v-1.5zm0 7.04h7.71v1.5H7v-1.5z" />
    </SvgIcon>
  )
}

export { SystemEvent }
