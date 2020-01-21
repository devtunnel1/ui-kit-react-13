import React from 'react';
import { action } from '@storybook/addon-actions';
import { withKnobs, text, boolean } from '@storybook/addon-knobs'
import { ButtonComponentV1 } from "../../../../lib";

export default {
  title: 'Button',
  component: ButtonComponentV1,
  decorators: [withKnobs]
};

export const Basic = () => (
  <ButtonComponentV1
    variant='contained'
    color='primary'
    label={text('Label', 'Click me')}
    onClick={action('clicked')}
    disabled={boolean('Disabled')}
  />
)
