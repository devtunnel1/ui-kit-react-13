import React from 'react'
import SvgIcon from '@material-ui/core/SvgIcon'

function Gauge (props) {
  return (
    <SvgIcon {...props}>
      <path d="M19.778 2C21 2 22 3 22 4.222v15.556C22 21 21 22 19.778 22H4.222A2.23 2.23 0 0 1 2 19.778V4.222C2 3 3 2 4.222 2h15.556zm0 17.778V4.222H4.222v15.556h15.556zm-11.61-12.3a6.455 6.455 0 0 1 3.9-1.316 6.248 6.248 0 0 1 3.867 1.333 6.34 6.34 0 0 1 2.405 4.256 6.338 6.338 0 0 1-1.31 4.71.83.83 0 0 1-.656.323.83.83 0 0 1-.655-1.348 4.7 4.7 0 0 0 .967-3.484 4.698 4.698 0 0 0-4.654-4.136 4.775 4.775 0 0 0-2.844.943c-.254.191-.489.406-.7.645-.04.045-.086.084-.123.128a4.73 4.73 0 0 0-.275 5.909.83.83 0 0 1-.182 1.164.83.83 0 0 1-1.163-.18c-1.749-2.394-1.58-5.603.207-7.8.007-.01.008-.02.016-.031.021-.028.047-.046.068-.073.322-.385.69-.73 1.095-1.026.01-.009.024-.009.036-.016h.001zm6.377 2.023a.555.555 0 0 1 .433.9l-2.634 3.303a.555.555 0 0 1-.404.209h-.03a.555.555 0 0 1-.394-.162l-.666-.666a.555.555 0 0 1 .046-.828l3.3-2.635a.554.554 0 0 1 .349-.121z"/>
    </SvgIcon>
  )
}

export { Gauge }