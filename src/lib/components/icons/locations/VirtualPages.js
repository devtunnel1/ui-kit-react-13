import React from 'react'
import SvgIcon from '@material-ui/core/SvgIcon'

function VirtualPages (props) {
  return (
    <SvgIcon {...props}>
      <path d="M23 18h-3c1.1 0 1.99-.9 1.99-2L22 6c0-1.1-.9-2-2-2H4c-1.1 0-2 .9-2 2v10c0 1.1.9 2 2 2H1a1 1 0 1 0 0 2h22a1 1 0 1 0 0-2zM4 6h16v10H4V6z"/><path d="M11.992 12.39l-1.193-4.376H9.193l2.006 6.011h1.585l2.023-6.011H13.19z"/>
    </SvgIcon>
  )
}

export { VirtualPages }
