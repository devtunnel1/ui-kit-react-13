import React from 'react'
import SvgIcon from '@material-ui/core/SvgIcon'

function Up (props) {
  return (
    <SvgIcon {...props}>
      <path d="M12 22C6.5 22 2 17.5 2 12S6.5 2 12 2s10 4.5 10 10-4.5 10-10 10zm0-2c4.4 0 8-3.6 8-8s-3.6-8-8-8-8 3.6-8 8 3.6 8 8 8zm3.5-9.5c.3.3.5.7.2 1-.3.3-.8.3-1.1 0l-1.7-1.7V16c0 .5-.3.8-.8.8s-.8-.4-.8-.8V9.9l-1.7 1.7c-.3.3-.8.3-1.1 0-.3-.3-.3-.8 0-1.1l3-3c0-.1.1-.2.2-.2.2-.1.4-.1.6 0 0 .1.1.1.2.2l3 3z" />
    </SvgIcon>
  )
}

export { Up }
