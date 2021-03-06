import React from 'react'
import SvgIcon from '@material-ui/core/SvgIcon'

function HealthList (props) {
  return (
    <SvgIcon {...props}>
      <path d="M20.084 2C21.14 2 22 2.858 22 3.916v16.168A1.917 1.917 0 0 1 20.084 22H3.916A1.916 1.916 0 0 1 2 20.084V3.916C2 2.858 2.858 2 3.916 2h16.168zm-.306 17.778V4.222H4.222v15.556h15.556zm-9.596-8.687h7.273v1.818h-7.273v-1.818zm0-4.546h7.273v1.819h-7.273V6.545zm0 9.091h7.273v1.819h-7.273v-1.819zm-4.546 2.425v-3.334H8.97v3.334H5.636zM7.303 8.97a1.667 1.667 0 1 1 0-3.334 1.667 1.667 0 0 1 0 3.334zm0 1.212l1.667 2.887H5.636l.833-1.444.834-1.443z"/>
    </SvgIcon>
  )
}

export { HealthList }
