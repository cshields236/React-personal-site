import React from 'react'
import './App.css';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
import { Container, Navbar } from 'react-bootstrap';
import Nav from 'react-bootstrap/Nav'

import Footer from '../src/components/Footer'
import HomePage from './pages/HomePage'
import AboutPage from './pages/AboutPage'
import ContactPage from './pages/ContactPage'

import logo from './logo.png'


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
        subtitle: 'My Projects',
        text: 'Check them out below'
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
          <Navbar expand='lg' varient='dark' style={{ backgroundColor: 'bisque', borderBottom: '2px solid #000000', fontSize: '30px', letterSpacing: '1.5px' }}>
            <Link to ='/' >
               <img src={logo} className="photo" />
            </Link>
          <Navbar.Toggle className='border-0' aria-controls="navbar-toggle" />
          <Navbar.Collapse id='nav-toggle'>
            <Nav className='ml-auto' style={{ marginRight: '75px', fontWeight: 'bold' }} >
              <Link className='nav-link' to='/'>Home</Link>
              <Link className='nav-link' to='/about'>About</Link>
              <Link className='nav-link' to='/contact'>Contact</Link>
            </Nav>
          </Navbar.Collapse>
          </Navbar>

        <Route path='/' exact render={() =>
          <HomePage
            title={this.state.home.title}
            subtitle={this.state.home.subtitle}
            text={this.state.home.text} />} />

        <Route path='/about' exact render={() =>
          <AboutPage
            title={this.state.about.title}
          />} />


        <Route path='/contact' render={() =>
          <ContactPage
            title={this.state.contact.title}
          />} />


        <Footer />

        </Container>
      </Router >
    )
  }
}

export default App;
