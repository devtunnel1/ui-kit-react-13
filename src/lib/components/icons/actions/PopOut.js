import React from 'react'
import SvgIcon from '@material-ui/core/SvgIcon'

function PopOut (props) {
  return (
    <SvgIcon {...props}>
      <path d="M15.835 4.985h2.58l-7.1 7.1a.994.994 0 1 0 1.406 1.406l7.1-7.1v2.58a.996.996 0 1 0 1.993 0V4.544c0-.857-.695-1.552-1.553-1.552h-4.426a.996.996 0 1 0 0 1.993zm2.99 14.947H4.873V5.982h7.971V3.987h-7.97A1.992 1.992 0 0 0 2.88 5.981v13.95c0 1.098.887 1.994 1.993 1.994h13.95a1.998 1.998 0 0 0 1.993-1.993V11.96h-1.993v7.972z" />
    </SvgIcon>
  )
}

export { PopOut }
