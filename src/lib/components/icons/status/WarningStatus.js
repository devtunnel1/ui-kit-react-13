import React from 'react'
import SvgIcon from '@material-ui/core/SvgIcon'

function WarningStatus (props) {
  return (
    <SvgIcon {...props}>
      <path fill="#f57f17" d="M11 15.44h2v2h-2v-2zm0-5.677h2v3.677h-2V9.763z"/><path fill="#f57f17" d="M12 4.91l8.17 14.114H3.83L12 4.91m0-2.938c-.356 0-.712.176-.916.528L1.28 19.435c-.409.706.1 1.589.916 1.589h19.608c.816 0 1.325-.883.916-1.589L12.916 2.5A1.048 1.048 0 0 0 12 1.972z"/><path fill="none" d="M0 0h24v24H0z"/>
    </SvgIcon>
  )
}

export { WarningStatus }
