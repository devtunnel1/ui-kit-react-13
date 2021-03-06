import React from 'react'
import SvgIcon from '@material-ui/core/SvgIcon'

function FunnelWidget (props) {
  return (
    <SvgIcon {...props}>
      <path d="M20.084 2H3.916A1.916 1.916 0 0 0 2 3.916v16.168C2 21.142 2.858 22 3.916 22h16.168A1.917 1.917 0 0 0 22 20.084V3.916A1.917 1.917 0 0 0 20.084 2zm-.306 17.778H4.222V4.222h15.556v15.556zM5.89 7.815h12.222v1.859H5.889V7.815zm1.951 3.256h8.327v1.858H7.84v-1.858zm2.585 3.24h3.143v1.859h-3.143v-1.858z"/>
    </SvgIcon>
  )
}

export { FunnelWidget }
