import React from 'react'
import SvgIcon from '@material-ui/core/SvgIcon'

function InfoPoint (props) {
  return (
    <SvgIcon {...props}>
      <path d="M5.129 12.131a7.01 7.01 0 0 0 8.24 8.239c2.758-.52 4.981-2.743 5.501-5.501a7.01 7.01 0 0 0-8.239-8.24c-2.758.52-4.982 2.744-5.502 5.502zM19.78 7.14l-.75.75A8.994 8.994 0 0 1 12 22.5a8.994 8.994 0 0 1-8.997-9.236C3.126 8.46 7.197 4.499 12.001 4.5c2.12 0 4.069.74 5.619 1.98l.75-.751a.995.995 0 0 1 1.415.013.991.991 0 0 1-.005 1.398zM10 1.5h4a1 1 0 1 1 0 2h-4a1 1 0 0 1 0-2zm2 15a3 3 0 1 1 0-6 3 3 0 0 1 0 6z" />
    </SvgIcon>
  )
}

export { InfoPoint }