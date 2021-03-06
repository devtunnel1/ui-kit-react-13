import React from 'react'
import SvgIcon from '@material-ui/core/SvgIcon'

function ServiceAvailability (props) {
  return (
    <SvgIcon {...props}>
      <path d="M20.053 20.008L17.003 20v-1.95h2.37c.34 0 .628-.288.628-.629V6.588a.637.637 0 0 0-.629-.628h-2.37V4h3.05c1.2 0 1.95.915 1.95 1.964v12.079c0 1.07-.9 1.965-1.95 1.965zM7.043 20l-3.012.008c-1.049 0-1.964-.938-1.964-1.965V5.964C2.067 4.894 2.92 4 4.031 4h3.012v1.96H4.68a.637.637 0 0 0-.629.628v10.833c0 .341.288.629.629.629h2.363V20zm3.075-6.265l6.166-6.19 1.325 1.325-7.503 7.504-3.977-3.977 1.326-1.326 2.663 2.664z"  fillRule="nonzero"/>
    </SvgIcon>
  )
}

export { ServiceAvailability }
