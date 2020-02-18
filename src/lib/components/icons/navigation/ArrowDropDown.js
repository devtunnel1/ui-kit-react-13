import React from 'react'
import SvgIcon from '@material-ui/core/SvgIcon'

function ArrowDropDown (props) {
  return (
    <SvgIcon {...props}>
      <path fillRule="nonzero" d="M7 10l5 5 5-5z"/>
    </SvgIcon>
  )
}

export { ArrowDropDown }
