import React from 'react'
import SvgIcon from '@material-ui/core/SvgIcon'

function Down (props) {
  return (
    <SvgIcon {...props}>
      <path d="M12 2c5.5 0 10 4.5 10 10s-4.5 10-10 10S2 17.5 2 12 6.5 2 12 2zm0 2c-4.4 0-8 3.6-8 8s3.6 8 8 8 8-3.6 8-8-3.6-8-8-8zm3.5 8.5c.3.3.3.7-.1 1.1l-3 3c0 .1-.1.2-.2.2-.2.1-.4.1-.6 0 0-.1-.1-.1-.2-.2l-3-3c-.3-.3-.3-.8 0-1.1.3-.3.8-.3 1.1 0l1.7 1.7V8c0-.4.2-.8.7-.8.5 0 .8.4.8.8v6.2l1.7-1.7c.3-.3.8-.3 1.1 0z" />
    </SvgIcon>
  )
}

export { Down }
