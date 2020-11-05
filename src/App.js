import React from 'react'
import './App.css';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'

class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      title: 'Conor Shields',
      headerLinks: [
        { title: 'Home', path: '/' },
        { title: 'About', path: '/about' },
        { title: 'Contact', path: '/contact' }

      ],
      home: {
        title: 'Conor Shields',
        subTitle: 'Projects of Mine',
        text: 'Have a look at my projects'
      },
      about: {
        title: 'About Me',

      },
      contact: {
        title: 'Contact Me',

      },
    }
  }
  render() {
    return (
      <Router>

      </Router>
    )
  }
}

export default App;
