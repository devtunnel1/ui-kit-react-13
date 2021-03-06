import React from 'react'
import SvgIcon from '@material-ui/core/SvgIcon'

function TierAndNode (props) {
  return (
    <SvgIcon {...props}>
      <path d="M12.5 0h-7C4.675 0 4 .675 4 1.5v17c0 .825.675 1.5 1.5 1.5h7c.825 0 1.5-.675 1.5-1.5v-17c0-.825-.675-1.5-1.5-1.5zM12 18H6V2h6v16zm5-16a1 1 0 0 0-1 1v14a1 1 0 0 0 2 0V3a1 1 0 0 0-1-1zM1 2a1 1 0 0 0-1 1v14a1 1 0 0 0 2 0V3a1 1 0 0 0-1-1zm6.5 3.75h3a.75.75 0 1 0 0-1.5h-3a.75.75 0 0 0 0 1.5zm0 3a.75.75 0 0 1 0-1.5h3a.75.75 0 1 1 0 1.5h-3zM9 16a1 1 0 1 1 0-2 1 1 0 0 1 0 2z" fillRule="nonzero"/>
    </SvgIcon>
  )
}

export { TierAndNode }
