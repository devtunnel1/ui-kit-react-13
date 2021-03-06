import React from 'react'
import SvgIcon from '@material-ui/core/SvgIcon'

function ListWidget (props) {
  return (
    <SvgIcon {...props}>
      <path d="M20.084 2H3.916A1.916 1.916 0 0 0 2 3.916v16.168C2 21.142 2.858 22 3.916 22h16.168A1.917 1.917 0 0 0 22 20.084V3.916A1.917 1.917 0 0 0 20.084 2zm-.306 17.778H4.222V4.222h15.556v15.556zM6.445 13.111h2.221v-2.222h-2.22v2.222h-.001zm0 4.445h2.221v-2.222h-2.22v2.221l-.001.001zm0-8.89h2.221v-2.22h-2.22v2.221h-.001zm4.444 4.446h6.641v-2.223h-6.64v2.222zm0 4.443h6.641v-2.221h-6.64v2.221zm0-11.11v2.221h6.641v-2.22h-6.64v-.001z"/>
    </SvgIcon>
  )
}

export { ListWidget }
