import React from 'react'
import { render } from 'react-dom'
import { ButtonComponentV1 } from './lib'

const App = () => (
  <div style={{ width: 640, margin: '15px auto' }}>
    <ButtonComponentV1
      label='This is a primary button.'
      buttonRole='primary'
      iconName='databaseCritical'
      onClick={() => console.log('Primary Button clicked!')}
    />
    <br /><br />
    <ButtonComponentV1
      label='This is a secondary button.'
      buttonRole='secondary'
      iconName='chrome'
      onClick={() => console.log('Secondary Button clicked!')}
    />
    <br /><br />
    <ButtonComponentV1
      label='This is a button with really long text that references an icon that does not exist.'
      buttonRole='primary'
      iconName='chromememe'
      onClick={() => console.log('Button clicked!')}
    />
    <br /><br />
    <ButtonComponentV1
      label='This is a secondary button with no iconName set.'
      buttonRole='secondary'
      onClick={() => console.log('Button clicked!')}
    />
    <br /><br />
    <ButtonComponentV1
      label='Primary button with an icon'
      buttonRole='primary'
      iconName='viewSnapshot'
      onClick={() => console.log('Button clicked!')}
    />
    <br /><br />
    <ButtonComponentV1
      label='Button with icon'
      buttonRole='secondary'
      iconName='chrome'
      onClick={() => console.log('Button clicked!')}
    />
    <br /><br />
    <ButtonComponentV1
      label='Icon small'
      buttonRole='iconSmall'
      iconName='chrome'
      onClick={() => console.log('Button clicked!')}
    />
    <br /><br />
    <ButtonComponentV1
      label='Icon medium'
      buttonRole='iconMedium'
      iconName='chrome'
      onClick={() => console.log('Button clicked!')}
    />
  </div>
)

render(<App />, document.getElementById('root'))
