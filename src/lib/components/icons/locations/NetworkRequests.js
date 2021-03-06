import React from 'react'
import SvgIcon from '@material-ui/core/SvgIcon'

function NetworkRequests (props) {
  return (
    <SvgIcon {...props}>
      <path d="M11.063 2.5c.8 0 1.4.7 1.4 1.6v15.8c0 .9-.6 1.6-1.4 1.6h-8.1c-.8 0-1.4-.7-1.4-1.6V4.1c0-.9.6-1.6 1.4-1.6h8.1zm-7.7 1.9v15.2h7.3V4.4h-7.3zm5.1 2.2h-3v-1h3v1zm11.136 2.335h-4.09a.886.886 0 0 1-.891-.88c0-.486.4-.88.892-.88h4.09l-1.154-1.138a.872.872 0 0 1 0-1.244.9.9 0 0 1 1.261 0l2.676 2.64c.348.343.348.9 0 1.244l-2.676 2.64a.9.9 0 0 1-1.26 0 .872.872 0 0 1 0-1.244l1.152-1.138zm-1.936 6.425h4.09c.492 0 .891.394.891.88s-.4.88-.892.88h-4.09l1.154 1.138c.348.343.348.9 0 1.244a.9.9 0 0 1-1.262 0l-2.675-2.64a.872.872 0 0 1 0-1.244l2.675-2.64a.9.9 0 0 1 1.262 0c.348.344.348.9 0 1.244l-1.153 1.138z"  fillRule="evenodd"/>
    </SvgIcon>
  )
}

export { NetworkRequests }
