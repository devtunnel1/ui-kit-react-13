import React from 'react'
import SvgIcon from '@material-ui/core/SvgIcon'

function Donut (props) {
  return (
    <SvgIcon {...props}>
      <path className="st0" d="M17.786 11h4.04C21.36 6.346 17.652 2.632 13 2.159v4.042A5.89 5.89 0 0 1 17.786 11z" /><path className="st0" d="M11.992 17.876a5.89 5.89 0 0 1-5.884-5.884c0-2.906 2.12-5.32 4.892-5.794v-4.04c-4.986.5-8.892 4.719-8.892 9.834 0 5.45 4.434 9.884 9.884 9.884 5.11 0 9.326-3.897 9.833-8.876h-4.042c-.48 2.765-2.89 4.876-5.79 4.876z"/>
    </SvgIcon>
  )
}

export { Donut }
