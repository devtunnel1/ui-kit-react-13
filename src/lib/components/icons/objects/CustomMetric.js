import React from 'react'
import SvgIcon from '@material-ui/core/SvgIcon'

function CustomMetric (props) {
  return (
    <SvgIcon {...props}>
      <path d="M10 3h4v15h-4V3zm6 7h4v8h-4v-8zM3 19.5h18v2H3v-2zM4 7h4v11H4V7z" />
    </SvgIcon>
  )
}

export { CustomMetric }
