import React from 'react'
import SvgIcon from '@material-ui/core/SvgIcon'

function Pie (props) {
  return (
    <SvgIcon {...props}>
      <path d="M11.992 2C6.482 2 2 6.482 2 11.992c0 5.51 4.482 9.992 9.992 9.992 5.51 0 9.992-4.482 9.992-9.992 0-5.51-4.482-9.992-9.992-9.992zm7.924 9H13.01l.067-6.918A7.998 7.998 0 0 1 19.917 11zm-7.924 8.984C7.585 19.984 4 16.4 4 11.992c0-4.097 3.1-7.48 7.077-7.936L10.99 13h8.924c-.498 3.932-3.857 6.984-7.922 6.984z" />
    </SvgIcon>
  )
}

export { Pie }
