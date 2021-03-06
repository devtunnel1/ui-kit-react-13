import React from 'react'
import SvgIcon from '@material-ui/core/SvgIcon'

function Custom (props) {
  return (
    <SvgIcon {...props}>
      <g><path d="M16.418 4.482l2.679 2.679-9.178 9.207-3.496.897.802-3.591 9.193-9.192zm3.535-2.122l1.28 1.28a1 1 0 0 1 0 1.414l-1.414 1.414-2.694-2.694 1.414-1.414a1 1 0 0 1 1.414 0z"/><path d="M18.931 10.269l2.117-2.253V19.78c0 1.22-.953 2.22-2.117 2.22H4.116C2.952 22 2 21 2 19.78V4.239c0-1.221.952-2.22 2.116-2.22L15.55 2l-2.116 2.22-9.317.019v15.54h14.815v-9.51z"/></g>
    </SvgIcon>
  )
}

export { Custom }
