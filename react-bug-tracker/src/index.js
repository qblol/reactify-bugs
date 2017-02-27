import React from 'react'
import {render} from 'react-dom'
import {Title} from './components/title'
import {Footer} from './components/footer'
import {Form} from './components/form'
import {List} from './components/list'

class App extends React.Component {
  render() {
    return (
      <div>
        <Title />
        <Form />      
        <hr />
        <List />
        <Footer />
      </div>
    )
  }
}

render(<App />, document.querySelector('#app > div.container'))
