import React from 'react'
import SvgIcon from '@material-ui/core/SvgIcon'

function Node (props) {
  return (
    <SvgIcon {...props}>
      <path d="M15.5 2.5c.825 0 1.5.675 1.5 1.5v16c0 .825-.675 1.5-1.5 1.5h-7c-.825 0-1.5-.675-1.5-1.5V4c0-.825.675-1.5 1.5-1.5h7zm-.5 17v-15H9v15h6zM10.5 8a.75.75 0 0 1 0-1.5h3a.75.75 0 0 1 0 1.5h-3zm0 2.85a.75.75 0 0 1 0-1.5h3a.75.75 0 0 1 0 1.5h-3zM12 17.7c-.552 0-1-.425-1-.95 0-.525.448-.95 1-.95s1 .425 1 .95c0 .525-.448.95-1 .95z" />
    </SvgIcon>
  )
}

export { Node }
