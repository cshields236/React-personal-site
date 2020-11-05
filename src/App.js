import React from 'react'
import './App.css';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
import { Container, Navbar } from 'react-bootstrap';
import Nav from 'react-bootstrap/Nav'

import Footer from '../src/components/Footer'
import HomePage from './pages/HomePage'
import AboutPage from './pages/AboutPage'
import ContactPage from './pages/ContactPage'



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
            <Navbar.Toggle className='border-0' aria-controls="navbar-toggle" />
            <Navbar.Collapse id='nav-toggle'>
              <Nav className='ml-auto'>
                <Link className='nav-link' to=''>Home</Link>
                <Link className='nav-link' to=''>About</Link>
                <Link className='nav-link' to=''>Contact</Link>
              </Nav>
            </Navbar.Collapse>
          </Navbar>

          <Route path='/' exact render={() =>
            <HomePage
              title={this.state.home.title}
              subTitle={this.state.home.subtitle}
              text={this.state.home.text} />} />

          <Route path='/' exact render={() =>
            <AboutPage
              title={this.state.about.title}
              />} />


          <Route path='/' exact render={() =>
            <ContactPage
              title={this.state.contact.title}
             />} />


          <Footer />

        </Container>
      </Router>
    )
  }
}

export default App;
