import React from 'react'
import SvgIcon from '@material-ui/core/SvgIcon'

function Image (props) {
  return (
    <SvgIcon {...props}>
      <path d="M19.5 3c.825 0 1.5.675 1.5 1.5v15c0 .825-.675 1.5-1.5 1.5h-15c-.825 0-1.5-.675-1.5-1.5v-15C3 3.675 3.675 3 4.5 3h15zM19 19V5H5v14h14zm-8.785-7.025l2.5 3.758 1.785-2.508 2.5 3.75H7l3.215-5zm4.285-4.5a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3z" />
    </SvgIcon>
  )
}

export { Image }
