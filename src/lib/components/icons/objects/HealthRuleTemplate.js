import React from 'react'
import SvgIcon from '@material-ui/core/SvgIcon'

function HealthRuleTemplate (props) {
  return (
    <SvgIcon {...props}>
      <path d="M19.39 2.5H4.6a2.1 2.1 0 00-2.1 2.11v14.78a2.1 2.1 0 002.1 2.11h14.79a2.12 2.12 0 002.11-2.11V4.61a2.12 2.12 0 00-2.11-2.11zm0 14.61h-5.27a2.11 2.11 0 01-4.22 0H4.61V4.61h14.78z"/><path d="M6.5 7.5h11v2h-11zM6.5 11.5h11v2h-11z"/>
    </SvgIcon>
  )
}

export { HealthRuleTemplate }
