import React from 'react'
import SvgIcon from '@material-ui/core/SvgIcon'

function AddToDash (props) {
  return (
    <SvgIcon {...props}>
      <path d='M20 15.7v1.6h-2.7V20h-1.6v-2.7H13v-1.6h2.7V13h1.6v2.7H20zM4 13h6.9v7H4v-7zm0-9h16v7H4V4z' />
    </SvgIcon>
  )
}

export { AddToDash }
