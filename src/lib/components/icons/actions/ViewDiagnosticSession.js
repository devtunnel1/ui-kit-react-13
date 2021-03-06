import React from 'react'
import SvgIcon from '@material-ui/core/SvgIcon'

function ViewDiagnosticSession (props) {
  return (
    <SvgIcon {...props}>
      <path d="M5.293 3h13.405c1.237 0 2.24 1.019 2.24 2.275v13.45c0 1.256-1.003 2.275-2.24 2.275H5.293c-1.237 0-2.24-1.019-2.24-2.275V5.275C3.054 4.02 4.057 3 5.294 3zm13.645 2.275c0-.152-.108-.275-.24-.275H5.293c-.132 0-.24.123-.24.275v13.45c0 .152.108.275.24.275h13.405c.132 0 .24-.123.24-.275V5.275zM6.91 8.982l1.224-2.121L9.36 8.982H6.91zm0 1.875h2.45v2.188H6.91v-2.188zm1.193 6.153a1.193 1.193 0 1 1 0-2.387 1.193 1.193 0 0 1 0 2.387zm2.86-5.666h6v1h-6v-1zm0 3.894h6v1h-6v-1zm0-7.894h6v1h-6v-1z" />
    </SvgIcon>
  )
}

export { ViewDiagnosticSession }
