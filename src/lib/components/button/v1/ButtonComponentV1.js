/**
 * Copyright (c) AppDynamics, Inc., and its affiliates
 * 2020
 * All Rights Reserved
 * THIS IS UNPUBLISHED PROPRIETARY CODE OF APPDYNAMICS, INC.
 * The copyright notice above does not evidence any actual or intended publication of such source code
 */

import React, { Component } from 'react'
import { ThemeProvider, withStyles } from '@material-ui/core/styles'
import Button from '@material-ui/core/Button'
import Tooltip from '@material-ui/core/Tooltip'
import _ from 'lodash'
import { getAlphabetizedKeyToValueMappingForEnum } from '@appd/common'
import { ParticleIcon } from "@appd/ui-assets"
import { theme } from '../../theme'
import { AllIcons } from '../../icons/AllIcons'

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

class ButtonComponentV1 extends Component {
  constructor (props) {
    super(props)

    this.state = {
      openTooltip: false
    }

    this.handleTooltipOpen = this.handleTooltipOpen.bind(this)
    this.handleTooltipClose = this.handleTooltipClose.bind(this)
    this.getButtonColor = this.getButtonColor.bind(this)
    this.getButtonVariant = this.getButtonVariant.bind(this)
    this.getButtonType = this.getButtonType.bind(this)
    this.getButtonIcon = this.getButtonIcon.bind(this)
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

  getButtonColor (buttonRole) {
    switch (buttonRole) {
      case 'primary':
      case 'submit':
        return 'primary'
      case 'secondary':
        return 'secondary'
      default:
        return 'default'
    }
  }

  getButtonVariant (buttonRole) {
    switch (buttonRole) {
      case 'toolbar':
        return 'text'
      default:
        return 'contained'
    }
  }

  getButtonType (buttonRole) {
    switch (buttonRole) {
      case 'submit':
        return 'submit'
      default:
        return 'button'
    }
  }

  getButtonIcon (iconName) {
    const iconNames = getAlphabetizedKeyToValueMappingForEnum(ParticleIcon)
    const iconComponentName = _.findKey(iconNames, (value) => value === iconName)

    if (
      typeof iconComponentName === 'undefined' ||
      typeof AllIcons[iconComponentName] === 'undefined'
    ) {
      return ''
    }

    const Icon = AllIcons[iconComponentName]
    return <Icon />
  }

  render () {
    const { openTooltip } = this.state

    const {
      label,
      iconName,
      buttonRole,
      onClick,
      disabled
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
              variant={this.getButtonVariant(buttonRole)}
              color={this.getButtonColor(buttonRole)}
              type={this.getButtonType(buttonRole)}
              startIcon={this.getButtonIcon(iconName)}
              onClick={onClick}
              disabled={disabled}
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
