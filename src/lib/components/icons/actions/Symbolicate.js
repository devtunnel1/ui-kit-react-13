import React from 'react'
import SvgIcon from '@material-ui/core/SvgIcon'

function Symbolicate (props) {
  return (
    <SvgIcon {...props}>
      <path d="M20 9a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2h-9a2 2 0 0 1-2-2v-1H7l-2-2v-2H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v5h5zM9 17v-2H7v2h2zm.876-7.63c.32-.226.7-.37 1.124-.37h2V4H4v9h5v-1H5v-1h4.005c.02-.269.097-.767.401-1.188.084-.112.18-.212.284-.305l.186-.137zm7.572 10.038h1.714l-2.928-7.82h-1.493l-2.91 7.82h1.713l.537-1.611h2.825l.542 1.611zm-2.932-2.916l.972-2.928.983 2.928h-1.955zM8 10H5V9h3v1zm2-2H5V7h5v1zm1-2H5V5h6v1z" />
    </SvgIcon>
  )
}

export { Symbolicate }
