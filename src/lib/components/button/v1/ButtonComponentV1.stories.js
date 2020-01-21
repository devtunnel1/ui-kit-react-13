import React from 'react';
import { action } from '@storybook/addon-actions';
import { ButtonComponentV1 } from "../../../../lib";

export default {
  title: 'Button',
  component: ButtonComponentV1,
};

export const Basic = () => (
  <ButtonComponentV1
    variant='contained'
    color='primary'
    label='Hello Button'
    onClick={action('clicked')}
  >
    Hello Button
  </ButtonComponentV1>
)
