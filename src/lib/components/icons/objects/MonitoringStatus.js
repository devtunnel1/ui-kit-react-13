import React from 'react'
import SvgIcon from '@material-ui/core/SvgIcon'

function MonitoringStatus (props) {
  return (
    <SvgIcon {...props}>
      <path d="M7.672 4C6.752 4 6 4.752 6 5.672v5.849h3.227l1.416-4.736a.75.75 0 0 1 .695-.535.735.735 0 0 1 .727.49l3.023 8.164.53-1.382.908-2.087a.749.749 0 0 1 .688-.45H20a.75.75 0 0 1 0 1.5h-2.295l-.7 1.606-1.229 3.209a.75.75 0 0 1-1.403-.008l-2.935-7.928-.934 3.122a.75.75 0 0 1-.718.535H2V15h4v3.273c0 .92.753 1.672 1.672 1.672h12.656c.92 0 1.672-.753 1.672-1.672v-12.6C22 4.752 21.247 4 20.328 4H7.672z" />
    </SvgIcon>
  )
}

export { MonitoringStatus }
