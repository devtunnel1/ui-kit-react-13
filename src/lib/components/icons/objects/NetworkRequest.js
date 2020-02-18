import React from 'react'
import SvgIcon from '@material-ui/core/SvgIcon'

function NetworkRequest (props) {
  return (
    <SvgIcon {...props}>
      <path d="M7 11l-4 4 4 4v-3h7v-2H7v-3zm14-2l-4-4v3h-7v2h7v3l4-4z" />
    </SvgIcon>
  )
}

export { NetworkRequest }
