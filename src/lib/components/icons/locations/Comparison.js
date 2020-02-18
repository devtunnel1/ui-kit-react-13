import React from 'react'
import SvgIcon from '@material-ui/core/SvgIcon'

function Comparison (props) {
  return (
    <SvgIcon {...props}>
      <path d="M11.988 2v20H9.985v-1.991H4.003a2.01 2.01 0 0 1-1.997-1.853L2 18.007V6.026c0-1.05.821-1.92 1.854-1.996l.15-.005h5.98V2h2.004zm8.009 2.025c1.051 0 1.92.82 1.997 1.852l.006.149v11.981c0 1.05-.821 1.92-1.854 1.996l-.15.006H13.99v-2.002h6.007v-6.452l-3.579 3.609-2.428-.856v-2.121l1.898.668 4.109-4.143V6.026H13.99V4.025h6.007zM4.003 16.25l3.933-4.072 2.049.72v-2.122l-2.596-.914-3.386 3.505v2.883z" />
    </SvgIcon>
  )
}

export { Comparison }
