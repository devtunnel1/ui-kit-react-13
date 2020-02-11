/**
 * Copyright (c) AppDynamics, Inc., and its affiliates
 * 2020
 * All Rights Reserved
 * THIS IS UNPUBLISHED PROPRIETARY CODE OF APPDYNAMICS, INC.
 * The copyright notice above does not evidence any actual or intended publication of such source code
 */

import React, { Component } from 'react'
import { createMuiTheme, ThemeProvider, withStyles } from '@material-ui/core/styles'
import Button from '@material-ui/core/Button'
import Tooltip from '@material-ui/core/Tooltip'

const labelStyles = {
  overflow: 'hidden',
  textOverflow: 'ellipsis',
  whiteSpace: 'nowrap'
}

const StyledTooltip = withStyles(() => ({
  tooltip: {
    backgroundColor: '#19212B',
    fontSize: '13px',
    fontWeight: 'normal',
    lineHeight: '14px',
    marginTop: '4px'
  }
}))(Tooltip)

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
          color: '#A2A6AB',
          fill: '#A2A6AB'
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

class ButtonComponentV1 extends Component {
  constructor (props) {
    super(props)

    this.state = {
      openTooltip: false
    }

    this.handleTooltipOpen = this.handleTooltipOpen.bind(this)
    this.handleTooltipClose = this.handleTooltipClose.bind(this)
  }

  handleTooltipOpen () {
    const { offsetWidth, scrollWidth } = this.labelEl
    if (offsetWidth < scrollWidth) {
      this.setState({ openTooltip: true })
    }
  }

  handleTooltipClose () {
    this.setState({ openTooltip: false })
  }

  render () {
    const { openTooltip } = this.state

    const {
      label,
      variant,
      color,
      onClick,
      disabled,
      size
    } = this.props

    return (
      <ThemeProvider theme={theme}>
        <span style={{
          display: 'inline-block',
          cursor: disabled ? 'not-allowed' : 'pointer'
        }}>
          <StyledTooltip
            title={label}
            open={openTooltip}
            onClose={this.handleTooltipClose}
            onOpen={this.handleTooltipOpen}
          >
            <Button
              variant={variant}
              color={color}
              onClick={onClick}
              disabled={disabled}
              size={size}
              disableElevation
            >
              <span style={labelStyles} ref={(el) => { this.labelEl = el }}>{label}</span>
            </Button>
          </StyledTooltip>
        </span>
      </ThemeProvider>
    )
  }
}

export { ButtonComponentV1 }
