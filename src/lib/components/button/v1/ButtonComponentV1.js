/**
 * Copyright (c) AppDynamics, Inc., and its affiliates
 * 2020
 * All Rights Reserved
 * THIS IS UNPUBLISHED PROPRIETARY CODE OF APPDYNAMICS, INC.
 * The copyright notice above does not evidence any actual or intended publication of such source code
 */

import React, { useState, useEffect } from 'react'
import SVG from 'react-inlinesvg'
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles'
import Button from '@material-ui/core/Button'

const reqSvgs = require.context('@appd/ui-assets/inline-images', true, /\.svg$/)
const svgs = reqSvgs.keys().map(path => ({ path, file: reqSvgs(path) }))

function getIconFile (iconName, svgs) {
  for (const svg of svgs) {
    const regex = RegExp(`${iconName}.svg`)
    if (regex.test(svg.path)) return svg.file
  }
  return null
}

const iconStyles = {
  height: '24px',
  width: '24px'
}

const labelStyles = {
  overflow: 'hidden',
  textOverflow: 'ellipsis',
  whiteSpace: 'nowrap'
}

const theme = createMuiTheme({
  typography: {
    button: {
      textTransform: 'none'
    }
  },
  palette: {
    primary: {
      main: '#5845DB'
    },
    secondary: {
      main: '#F1F3F5'
    }
  },
  overrides: {
    MuiButton: {
      root: {
        borderRadius: '3px',
        fontSize: '14px',
        fontWeight: 'normal',
        maxWidth: '400px',
        minWidth: '64px',
        padding: '3px 16px'
      },
      contained: {
        '&$disabled': {
          backgroundColor: '#F1F3F5',
          color: '#A2A6AB'
        }
      },
      containedPrimary: {
        '&:hover': {
          backgroundColor: '#9D8EFF'
        },
        fill: '#FFFFFF'
      },
      containedSecondary: {
        '&:hover': {
          backgroundColor: '#DBDFE2'
        },
        fill: '#585E67'
      }
    }
  }
})

export function ButtonComponentV1 (props) {
  const [icon, setIcon] = useState(null)

  useEffect(() => {
    const iconFile = getIconFile(props.iconName, svgs)
    setIcon(iconFile)
  }, [props.iconName])

  return (
    <React.Fragment>
      <ThemeProvider theme={theme}>
        <Button
          variant={props.variant}
          color={props.color}
          onClick={props.onClick}
          disabled={props.disabled}
          size={props.size}
          startIcon={icon ? <SVG src={icon} style={iconStyles} /> : null}
          disableElevation
        >
          <span style={labelStyles}>{props.label}</span>
        </Button>
      </ThemeProvider>
    </React.Fragment>
  )
}
