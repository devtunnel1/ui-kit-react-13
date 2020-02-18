import React from 'react'
import SvgIcon from '@material-ui/core/SvgIcon'

function Funnel (props) {
  return (
    <SvgIcon {...props}>
      <path d="M10 16h4v2h-4v-2zM3 6h18v2H3V6zm3 5h12v2H6v-2z" />
    </SvgIcon>
  )
}

export { Funnel }
