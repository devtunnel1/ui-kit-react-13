import { create } from '@storybook/theming/create'
import { addons } from '@storybook/addons'

import appdTheme from './appdTheme'

addons.setConfig({
  theme: appdTheme
})
