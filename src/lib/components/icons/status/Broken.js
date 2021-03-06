import React from 'react'
import SvgIcon from '@material-ui/core/SvgIcon'

function Broken (props) {
  return (
    <SvgIcon {...props}>
      <path d="M12.604 15.233l-3.5 3.44L11.473 21H5c-1.102 0-2-.9-2-2V5c0-1.1.899-2 2-2h6.05L9.105 4.914l3.5 3.44-3.5 3.44 3.5 3.44zM19 3c1.1 0 2 .9 2 2v14c0 1.1-.9 2-2 2h-4.675l-2.367-2.327 3.5-3.44-3.5-3.44 3.5-3.439-3.5-3.44L13.905 3H19z" />
    </SvgIcon>
  )
}

export { Broken }
