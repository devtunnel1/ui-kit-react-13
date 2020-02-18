import React from 'react'
import SvgIcon from '@material-ui/core/SvgIcon'

function Error (props) {
  return (
    <SvgIcon {...props}>
      <path d="M11 15h2v2h-2v-2zm0-8h2v6h-2V7zm1-5C6.477 2 2 6.477 2 12s4.477 10 10 10 10-4.477 10-10A10 10 0 0 0 12 2zm0 18a8 8 0 1 1 0-16 8 8 0 0 1 0 16z" fill="#F0213A"/>
    </SvgIcon>
  )
}

export { Error }
