import React from 'react'
import SvgIcon from '@material-ui/core/SvgIcon'

function Clock (props) {
  return (
    <SvgIcon {...props}>
      <path d="M11.925947,0.836 C18.0008734,0.840426064 22.9260245,5.76108013 22.936,11.836 C22.9260245,17.9109199 18.0008734,22.8315739 11.925947,22.836 C5.85690435,22.827132 0.94042834,17.9070581 0.936,11.8380106 C0.9382115,5.76739301 5.85533549,0.844871527 11.925947,0.836 Z M11.9615861,20.3636704 C16.6540283,20.3588974 20.4568137,16.5556277 20.4615861,11.862588 C20.4556211,7.17039371 16.6531843,3.36844115 11.9615861,3.36367038 C7.26998786,3.36844115 3.4675511,7.17039371 3.46158609,11.862588 C3.46635847,16.5556277 7.26914392,20.3588974 11.9615861,20.3636704 Z M17.5636732,14.3774001 L16.329164,16.3980545 L10.6994802,13.0202442 L10.6994802,6.56621385 L13.1202442,6.56621385 L13.1202442,11.7415017 L17.5636732,14.3774001 Z"  fillRule="nonzero"></path>
    </SvgIcon>
  )
}

export { Clock }
