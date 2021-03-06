import React from 'react'
import SvgIcon from '@material-ui/core/SvgIcon'

function HealthRuleViolation (props) {
  return (
    <SvgIcon {...props}>
      <path d="M12 1.7c5.7 0 10.3 4.6 10.3 10.3 0 5.7-4.6 10.3-10.3 10.3-5.7 0-10.3-4.6-10.3-10.3C1.7 6.3 6.3 1.7 12 1.7zm0 18.8c1.9 0 3.7-.6 5.2-1.7L14 15.6V18h-4v-4H6v-4h2.4L5.3 6.8C4.2 8.3 3.5 10.1 3.5 12c0 4.7 3.8 8.5 8.5 8.5zm6.5-3c1.2-1.5 2-3.4 2-5.5 0-4.7-3.8-8.5-8.5-8.5-2.1 0-4 .8-5.5 2l12 12zM18 14h-1.1L10 7.1V6h4v4h4v4z" />
    </SvgIcon>
  )
}

export { HealthRuleViolation }
