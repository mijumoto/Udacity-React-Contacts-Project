import React from 'react'
import ReactDom from 'react-dom'

const element = React.createElement('div', null, 'hello world')

ReactDom.render(
  element,
  document.getElementById('root')
)
