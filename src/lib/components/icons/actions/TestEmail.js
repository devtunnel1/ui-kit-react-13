import React from 'react'
import SvgIcon from '@material-ui/core/SvgIcon'

function TestEmail (props) {
  return (
    <SvgIcon {...props}>
      <path d="M14.339 4.07c.746 0 1.357.592 1.357 1.315v6.187c0 .723-.61 1.314-1.357 1.314H3.479c-.747 0-1.358-.591-1.358-1.314l.007-6.187c0-.723.604-1.315 1.35-1.315h10.86zm0 2.63V5.385l-5.43 3.287-5.43-3.287V6.7l5.43 3.287 5.43-3.287zm6.568 5.129l1.219 1.227-7.777 7.777-4.32-4.32 1.218-1.22 3.102 3.094 6.558-6.558z" />
    </SvgIcon>
  )
}

export { TestEmail }
