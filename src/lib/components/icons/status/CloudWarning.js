import React from 'react'
import SvgIcon from '@material-ui/core/SvgIcon'

function CloudWarning (props) {
  return (
    <SvgIcon {...props}>
      <path d="M19.2 8.8c-.9-3.2-3.9-5.5-7.2-5.5-2.7 0-5.1 1.4-6.4 3.7-2.9.5-5.1 3.1-5.1 6.1 0 3.4 2.8 6.2 6.2 6.2h4.9l1.2-2h-6c-2.4 0-4.3-1.9-4.3-4.3 0-2.2 1.7-4 3.8-4.3h.5l.2-.4c1-1.9 2.9-3 5-3 2.7 0 5 1.9 5.5 4.5l.1.6h.7c1.8.1 3.2 1.6 3.2 3.4 0 .6-.2 1.1-.4 1.6l1.1 1.9c.8-.9 1.3-2.1 1.3-3.5 0-2.3-1.8-4.5-4.3-5z" /><path d="M20.6 18.7l-1-1.8-1.3-2.3c-.3-.5-.9-.6-1.4-.4-.2.1-.3.2-.4.4L15 17.3l-1.2 2-.8 1.6c-.3.5-.1 1.1.4 1.4.2.1.3.1.5.1H21c.6 0 1-.4 1-1 0-.2 0-.3-.1-.5l-1.3-2.2z" fill="#FC0"/>
    </SvgIcon>
  )
}

export { CloudWarning }
