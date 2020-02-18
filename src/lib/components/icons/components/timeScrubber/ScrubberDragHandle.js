import React from 'react'
import SvgIcon from '@material-ui/core/SvgIcon'

function ScrubberDragHandle (props) {
  return (
    <SvgIcon {...props}>
      <title>ScrubberDraghandle</title>
      <defs>
        <rect id='path-1' x='0' y='0' width='18' height='18' rx='3' />
        <filter x='-52.8%' y='-47.2%' width='205.6%' height='205.6%' filterUnits='objectBoundingBox' id='filter-2'>
          <feMorphology radius='0.5' operator='dilate' in='SourceAlpha' result='shadowSpreadOuter1' />
          <feOffset dx='0' dy='1' in='shadowSpreadOuter1' result='shadowOffsetOuter1' />
          <feGaussianBlur stdDeviation='2.5' in='shadowOffsetOuter1' result='shadowBlurOuter1' />
          <feColorMatrix values='0 0 0 0 0   0 0 0 0 0   0 0 0 0 0  0 0 0 0.28868007 0' type='matrix' in='shadowBlurOuter1' />
        </filter>
      </defs>
      <g id='ScrubberDraghandle' stroke='none' strokeWidth='1' fill='none' fillRule='evenodd'>
        <g id='Group-2' transform='translate(5.000000, 4.000000)' fillRule='nonzero'>
          <g id='Rectangle-3-Copy-2'>
            <use fill='black' fillOpacity='1' filter='url(#filter-2)' xlinkHref='#path-1' />
            <use fill='#FFFFFF' xlinkHref='#path-1' />
          </g>
        </g>
        <rect id='Rectangle' fill='#585E67' x='11' y='7' width='1' height='12' />
        <rect id='Rectangle-Copy-2' fill='#585E67' x='15' y='7' width='1' height='12' />
        <rect id='Rectangle-Copy' fill='#585E67' x='12' y='7' width='1' height='12' />
        <rect id='Rectangle-Copy-3' fill='#585E67' x='16' y='7' width='1' height='12' />
      </g>
    </SvgIcon>
  )
}

export { ScrubberDragHandle }
