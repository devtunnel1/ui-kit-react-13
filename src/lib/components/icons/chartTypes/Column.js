import React from 'react'
import SvgIcon from '@material-ui/core/SvgIcon'

function Column (props) {
  return (
    <SvgIcon {...props}>
      <path d="M4 9h4v11H4V9zm6-4h4v15h-4V5zm6 7h4v8h-4v-8z" />
    </SvgIcon>
  )
}

export { Column }
