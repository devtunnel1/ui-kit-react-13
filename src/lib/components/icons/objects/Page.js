import React from 'react'
import SvgIcon from '@material-ui/core/SvgIcon'

function Page (props) {
  return (
    <SvgIcon {...props}>
      <path d="M19.49 8.5V4.59a.28.28 0 0 0 0-.09h-15a.28.28 0 0 0 0 .09V8.5h15zm0 2h-15v8.89a.37.37 0 0 0 0 .11h15a.37.37 0 0 0 0-.11V10.5zm2.01-5.91v14.8a2 2 0 0 1-1.73 2.11H4.23a2 2 0 0 1-1.73-2.11V4.59A1.94 1.94 0 0 1 4.23 2.5h15.54a1.94 1.94 0 0 1 1.73 2.09zM9 6h8v1H9V6zM6 6h1.5v1H6V6z" />
    </SvgIcon>
  )
}

export { Page }
