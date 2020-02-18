import React from 'react'
import SvgIcon from '@material-ui/core/SvgIcon'

function Servers (props) {
  return (
    <SvgIcon {...props}>
      <path d="M19.5 11c.825 0 1.5.675 1.5 1.5v3c0 .825-.675 1.5-1.5 1.5H13v1.999h7a1 1 0 1 1 0 2H4a1 1 0 1 1 0-2h7V17H4.5c-.825 0-1.5-.675-1.5-1.5v-3c0-.825.675-1.5 1.5-1.5h15zm-.5 4v-2H5v2h14zm.5-12c.825 0 1.5.675 1.5 1.5v3c0 .825-.675 1.5-1.5 1.5h-15C3.675 9 3 8.325 3 7.5v-3C3 3.675 3.675 3 4.5 3h15zM19 7V5H5v2h14z" />
    </SvgIcon>
  )
}

export { Servers }
