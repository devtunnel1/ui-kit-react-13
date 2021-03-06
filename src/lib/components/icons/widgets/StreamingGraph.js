import React from 'react'
import SvgIcon from '@material-ui/core/SvgIcon'

function StreamingGraph (props) {
  return (
    <SvgIcon {...props}>
      <path d="M20.084 2H3.916A1.916 1.916 0 0 0 2 3.916v16.168C2 21.142 2.858 22 3.916 22h16.168A1.917 1.917 0 0 0 22 20.084V3.916A1.917 1.917 0 0 0 20.084 2zm-.306 17.778H4.222V17.1l4.167-4.166 1.633 1.632a.834.834 0 0 0 1.178 0l4.134-4.132v1.321a.834.834 0 1 0 1.666 0V8.48a.842.842 0 0 0-.102-.458.818.818 0 0 0-.732-.433h-3.332a.834.834 0 1 0 0 1.666h1.321L10.611 12.8l-1.633-1.634a.834.834 0 0 0-1.178 0l-3.578 3.58V4.222h15.556v15.556z"/>
    </SvgIcon>
  )
}

export { StreamingGraph }
