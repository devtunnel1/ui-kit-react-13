import React from 'react'
import SvgIcon from '@material-ui/core/SvgIcon'

function Timer (props) {
  return (
    <SvgIcon {...props}>
      <path d="M19.03 7.89A8.994 8.994 0 0 1 12 22.5a8.994 8.994 0 0 1-8.997-9.236C3.126 8.46 7.197 4.499 12.001 4.5c2.12 0 4.069.74 5.619 1.98l.75-.751a.995.995 0 0 1 1.415.013.991.991 0 0 1-.005 1.398l-.75.75zm-8.399-1.261c-2.758.52-4.982 2.744-5.502 5.502a7.01 7.01 0 0 0 8.24 8.239c2.758-.52 4.981-2.743 5.501-5.501a7.01 7.01 0 0 0-8.239-8.24zM13 8.5v6h-2v-6h2zm-3-5a1 1 0 0 1 0-2h4a1 1 0 1 1 0 2h-4z"  fillRule="evenodd"/>
    </SvgIcon>
  )
}

export { Timer }
