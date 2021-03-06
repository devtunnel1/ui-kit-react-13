import React from 'react'
import SvgIcon from '@material-ui/core/SvgIcon'

function CustomTimer (props) {
  return (
    <SvgIcon {...props}>
      <path d="M19.754 6.64a1 1 0 0 0 0-1.4 1 1 0 0 0-1.4 0l-.73.76a9 9 0 0 0-5.62-2 9.11 9.11 0 0 0-9 8.76 9 9 0 1 0 16-5.37l.75-.75zM14.004 1h-4a1 1 0 1 0 0 2h4a1 1 0 0 0 0-2zm-3 13h2V8h-2v6zm-5.169 2.304a7 7 0 1 1 12.347-6.6 7 7 0 0 1-12.347 6.6z" />
    </SvgIcon>
  )
}

export { CustomTimer }
