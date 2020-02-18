import React from 'react'
import SvgIcon from '@material-ui/core/SvgIcon'

function GridView (props) {
  return (
    <SvgIcon {...props}>
      <path d="M8 6.875V5h13v1.875H8zm-5 0V5h3v1.875H3zm0 4V9.001h3v1.874H3zm5 0V9.001h13v1.874H8zm0 4V13h13v1.875H8zm-5 0V13h3v1.875H3zm5 4v-1.874h13v1.874H8zm-5 0v-1.874h3v1.874H3z" />
    </SvgIcon>
  )
}

export { GridView }
