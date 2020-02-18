import React from 'react'
import SvgIcon from '@material-ui/core/SvgIcon'

function MobileCustomMetric (props) {
  return (
    <SvgIcon {...props}>
      <path d="M18 5h3v16h-3V5zM3 8h3v13H3V8zm5 4h3v9H8v-9zm5-3h3v12h-3V9z" />
    </SvgIcon>
  )
}

export { MobileCustomMetric }
