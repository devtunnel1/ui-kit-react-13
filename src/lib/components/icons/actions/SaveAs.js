import React from 'react'
import SvgIcon from '@material-ui/core/SvgIcon'

function SaveAs (props) {
  return (
    <SvgIcon {...props}>
      <path d="M5 19h2.1v2H4c-1.1 0-2-.9-2-2V5c0-1.1.9-2 2-2h12l3.4 3.3c-.3.1-.6.3-.9.6L17.4 8l-1.3 1.2-3.8 3.8H6.1c-.6 0-1.1.4-1.1.9V19zm13 2h-3l5-5v3c0 1.1-.9 2-2 2zm3.1-8.6l-2.9-2.9 1.4-1.4c.1-.1.3-.2.4-.2h.2c.2 0 .3 0 .5.2l1.8 1.8c.3.3.3.8 0 1.1l-1.4 1.4zm-.8.9l-8.6 8.6H8.8V19l8.6-8.6 2.9 2.9zM14 5H5v5h9V5zm-1 4h-3V6h3v3z" />
    </SvgIcon>
  )
}

export { SaveAs }
