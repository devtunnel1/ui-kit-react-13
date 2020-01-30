import React from 'react'
import { render } from 'react-dom'
import { ButtonComponentV1 } from './lib'

const App = () => (
  <div style={{ width: 640, margin: '15px auto' }}>
    <ButtonComponentV1
      label='This is a particle button.'
      variant='contained'
      color='primary'
      iconName='databaseCritical'
      onClick={() => console.log('Button clicked!')}
    />
  </div>
)

render(<App />, document.getElementById('root'))
