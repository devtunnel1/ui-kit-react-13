import React from 'react'
import SvgIcon from '@material-ui/core/SvgIcon'

function Graph (props) {
  return (
    <SvgIcon {...props}>
      <path d="M20.084 2H3.916A1.916 1.916 0 0 0 2 3.916v16.168C2 21.142 2.858 22 3.916 22h16.168A1.917 1.917 0 0 0 22 20.084V3.916A1.917 1.917 0 0 0 20.084 2zm-.306 17.778H4.222V4.222h15.556v15.556zM7.555 13.111h2.222v4.445H7.555v-4.445zm3.333-6.666h2.222v11.11h-2.222V6.445zm3.333 4.444h2.223v6.666H14.22V10.89z"/>
    </SvgIcon>
  )
}

export { Graph }
