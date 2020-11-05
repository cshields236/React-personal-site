import React from 'react'
import './App.css';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
import { Container, Navbar } from 'react-bootstrap';
import Nav from 'react-bootstrap/Nav'

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
        <Container className="p-0" fluid={true}>
          <Navbar className="border-bottom" bg='transparent' expand='lg'>
            <Navbar.Brand>Conor Shields</Navbar.Brand>
            <Navbar.Toggle aria-controls="navbar-toggle" />
            <Navbar.Collapse id='nav-toggle'>
              <Nav className='ml-auto'>
                <Link className='nav-link' to=''>Home</Link>
                <Link className='nav-link' to=''>About</Link>
                <Link className='nav-link' to=''>Contact</Link>
              </Nav>
            </Navbar.Collapse>
          </Navbar>
        </Container>
      </Router>
    )
  }
}

export default App;
