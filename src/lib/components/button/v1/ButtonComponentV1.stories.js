import React from 'react'
import { action } from '@storybook/addon-actions'
import { withKnobs, text, boolean, select } from '@storybook/addon-knobs'
import { getAlphabetizedKeyToValueMappingForEnum } from '@appd/common'
import { ButtonRole } from '@appd/components'
import { ParticleIcon } from '@appd/ui-assets'
import { ButtonComponentV1 } from 'lib'

const buttonRoleString = 'Button Role'
const buttonClickedString = 'Button clicked'
const iconNames = getAlphabetizedKeyToValueMappingForEnum(ParticleIcon)

export default {
  title: 'Button',
  component: ButtonComponentV1,
  decorators: [withKnobs]
}

export const Basic = () => (
  <ButtonComponentV1
    label={text('Label', 'Click me')}
    buttonRole={select(
      buttonRoleString,
      {
        primary: ButtonRole.Primary,
        secondary: ButtonRole.Secondary,
        toolbar: ButtonRole.Toolbar,
        iconSmall: ButtonRole.IconSmall,
        iconMedium: ButtonRole.IconMedium,
        submit: ButtonRole.Submit
      },
      ButtonRole.Primary
    )}
    iconName={select('iconName', iconNames, ParticleIcon.Delete)}
    onClick={action(buttonClickedString)}
    disabled={boolean('Disabled')}
  />
)
