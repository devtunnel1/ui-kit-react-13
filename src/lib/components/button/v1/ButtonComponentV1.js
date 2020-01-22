/**
 * Copyright (c) AppDynamics, Inc., and its affiliates
 * 2020
 * All Rights Reserved
 * THIS IS UNPUBLISHED PROPRIETARY CODE OF APPDYNAMICS, INC.
 * The copyright notice above does not evidence any actual or intended publication of such source code
 */

import React from 'react'
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles'
import Button from '@material-ui/core/Button'

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
        }
      },
      containedSecondary: {
        '&:hover': {
          backgroundColor: '#DBDFE2'
        }
      }
    }
  }
})

export function ButtonComponentV1 (props) {
  return (
    <ThemeProvider theme={theme}>
      <Button
        variant={props.variant}
        color={props.color}
        onClick={props.onClick}
        disabled={props.disabled}
        size={props.size}
        startIcon={props.startIcon}
        endIcon={props.endIcon}
        disableElevation
      >
        {props.label}
      </Button>
    </ThemeProvider>
  )
}
