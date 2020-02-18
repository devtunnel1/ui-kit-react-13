import React from 'react'
import SvgIcon from '@material-ui/core/SvgIcon'

function JobsManager (props) {
  return (
    <SvgIcon {...props}>
      <path d="M2 10.5c-.83 0-1.5.67-1.5 1.5s.67 1.5 1.5 1.5 1.5-.67 1.5-1.5-.67-1.5-1.5-1.5zm0-6C1.17 4.5.5 5.17.5 6S1.17 7.5 2 7.5 3.5 6.83 3.5 6 2.83 4.5 2 4.5zm0 12c-.83 0-1.5.68-1.5 1.5s.68 1.5 1.5 1.5 1.5-.68 1.5-1.5-.67-1.5-1.5-1.5zM5 19h5.046v-2H5v2zm0-6h14v-2H5v2zm0-8v2h14V5H5z" fillRule="nonzero"/><path  d="M22.5 15.5L24 17l-6.99 7-4.51-4.5L14 18l3.01 3z"/>
    </SvgIcon>
  )
}

export { JobsManager }
