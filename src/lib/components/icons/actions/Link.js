import React from 'react'
import SvgIcon from '@material-ui/core/SvgIcon'

function Link (props) {
  return (
    <SvgIcon {...props}>
      <path d="M17 7.07c2.76 0 5 2.24 5 5s-2.24 5-5 5h-3.05a.95.95 0 1 1 0-1.9H17c1.71 0 3.1-1.39 3.1-3.1 0-1.71-1.39-3.1-3.1-3.1h-3.05a.949.949 0 1 1 0-1.9H17zm-6.95 8.1a.95.95 0 0 1 0 1.9H7c-2.76 0-5-2.24-5-5s2.24-5 5-5h3.05a.95.95 0 1 1 0 1.9H7a3.104 3.104 0 0 0-3.04 3.717c.285 1.472 1.662 2.483 3.16 2.483h2.93zM8 12.07a1 1 0 0 1 1-1h6a1 1 0 0 1 0 2H9a1 1 0 0 1-1-1z" />
    </SvgIcon>
  )
}

export { Link }
