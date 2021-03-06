import React from 'react'
import SvgIcon from '@material-ui/core/SvgIcon'

function Export (props) {
  return (
    <SvgIcon {...props}>
      <path d="M13 11.414V19a1 1 0 1 1-2 0v-7.586l-2.293 2.293a1 1 0 0 1-1.414-1.414l4-4a1 1 0 0 1 1.414 0l4 4a1 1 0 0 1-1.414 1.414L13 11.414zM5 6.6L4.953 9H3V6c0-1.1 1.013-2 2.138-2H18.75C19.988 4 21 5 21 6v3h-1.982l-.002-2.406c0-.4-.266-.594-.603-.594H5.588C5.25 6 5 6.3 5 6.6z" />
    </SvgIcon>
  )
}

export { Export }
