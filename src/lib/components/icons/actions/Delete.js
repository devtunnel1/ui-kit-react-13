import React from 'react'
import SvgIcon from '@material-ui/core/SvgIcon'

function Delete (props) {
  return (
    <SvgIcon {...props}>
      <path d="M18.944 4.026a.99.99 0 0 1 1 .977.99.99 0 0 1-1 .976H5.055a.99.99 0 0 1-1-.976.99.99 0 0 1 1-.977h4.109l.002-.02c.01-1.001.839-1.81 1.885-1.822h1.973c.912 0 1.673.631 1.849 1.471a1.8 1.8 0 0 1 .038.371h4.033zM6.521 20.002L5.08 8.062h13.986l-1.275 11.94c-.118 1.102-.906 1.996-1.76 1.996H8.309c-.854 0-1.654-.894-1.787-1.996z" />
    </SvgIcon>
  )
}

export { Delete }
