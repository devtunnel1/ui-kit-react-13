import React from 'react'
import SvgIcon from '@material-ui/core/SvgIcon'

function Undo (props) {
  return (
    <SvgIcon {...props}>
      <path d="M3.731 13.81l1.26 1.27V15a9 9 0 0 1 8.92-9h.08a9 9 0 0 1 9 8.81h-2a7 7 0 0 0-7-6.84 7 7 0 0 0-6.93 7v.09l1.24-1.25a1 1 0 1 1 1.41 1.41l-.27.27-2 2-.74.75a1 1 0 0 1-.7.3.828.828 0 0 1-.32-.07l-.16-.07a1.82 1.82 0 0 1-.23-.15l-3-3a1 1 0 0 1 .003-1.414c.417-.414 1.047-.414 1.437-.026z" />
    </SvgIcon>
  )
}

export { Undo }
