import React from 'react'
import SvgIcon from '@material-ui/core/SvgIcon'

function SessionFrame (props) {
  return (
    <SvgIcon {...props}>
      <path d="M4 4v7H2V4a2 2 0 0 1 2-2h7v2H4zm16-2a2 2 0 0 1 2 2v7h-2V4h-7V2h7zm0 18v-7h2v7a2 2 0 0 1-2 2h-7v-2h7zM4 13v7h7v2H4a2 2 0 0 1-2-2v-7h2zm2.5-5.89h11v9.78h-11V7.11z" />
    </SvgIcon>
  )
}

export { SessionFrame }
