import React from 'react'
import SvgIcon from '@material-ui/core/SvgIcon'

function Import (props) {
  return (
    <SvgIcon {...props}>
      <path d="M11 12.586V5a1 1 0 1 1 2 0v7.586l2.293-2.293a1 1 0 0 1 1.414 1.414l-4 4a1 1 0 0 1-1.414 0l-4-4a1 1 0 0 1 1.414-1.414L11 12.586zm8 4.814l.047-2.4H21v3c0 1.1-1.012 2-2.137 2H5.25C4.013 20 3 19 3 18v-3h1.982l.002 2.406c0 .4.266.594.603.594h12.826c.337 0 .587-.3.587-.6z" />
    </SvgIcon>
  )
}

export { Import }
