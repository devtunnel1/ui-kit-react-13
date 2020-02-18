import React from 'react'
import SvgIcon from '@material-ui/core/SvgIcon'

function DragHandle (props) {
  return (
    <SvgIcon {...props}>
      <defs><clipPath id="a"><path fill="none" d="M0 .04h24v24H0z"/></clipPath></defs><g clipPath="url(#a)"><path d="M20 9H4v2h16zM4 15h16v-2H4z"/></g>
    </SvgIcon>
  )
}

export { DragHandle }
