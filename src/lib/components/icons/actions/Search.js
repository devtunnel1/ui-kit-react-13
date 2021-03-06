import React from 'react'
import SvgIcon from '@material-ui/core/SvgIcon'

function Search (props) {
  return (
    <SvgIcon {...props}>
      <path d="M5 9.5C5 7.01 7.01 5 9.5 5S14 7.01 14 9.5 11.99 14 9.5 14 5 11.99 5 9.5zm15.077 9.08l-2.63-2.63L15.5 14l-.737-.733c1.11-1.545 1.597-3.561.94-5.712-.681-2.224-2.57-3.958-4.85-4.418a6.512 6.512 0 0 0-7.716 7.717c.46 2.28 2.194 4.168 4.418 4.849 2.15.657 4.166.17 5.712-.94l.732.732 1.77 1.77 2.81 2.812a1.06 1.06 0 0 0 1.498-1.496z" />
    </SvgIcon>
  )
}

export { Search }
