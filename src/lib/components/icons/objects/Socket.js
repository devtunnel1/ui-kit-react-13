import React from 'react'
import SvgIcon from '@material-ui/core/SvgIcon'

function Socket (props) {
  return (
    <SvgIcon {...props}>
      <path d="M17.915 20.915H6.085c-1.654 0-3-1.346-3-3V6.085c0-1.654 1.346-3 3-3h11.83c1.654 0 3 1.346 3 3v11.83c0 1.654-1.346 3-3 3zM6.085 5.085c-.551 0-1 .449-1 1v11.83c0 .552.449 1 1 1h11.83a1 1 0 0 0 1-1V6.085c0-.551-.448-1-1-1H6.085zM13.5 7.637h1.997L15.5 12h-1.998L13.5 7.637zm-5 0h1.997L10.5 12H8.502L8.5 7.637zm1.639 7.907a1.86 1.86 0 1 1 3.722-.002v1.425l-3.722.002v-1.425z" />
    </SvgIcon>
  )
}

export { Socket }
