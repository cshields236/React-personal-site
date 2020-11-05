import React from 'react'
import Hero from '../components/Hero';
import Content from '../components/Content'

class ContactPage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            email: '',
            message: '',
            disables: false,
            emailSent: null
        }
    }

    render() {
        return (
            <div>
                <Hero title={this.props.title}/>

                <Content>
                    Hey Yo
                </Content>
            </div>
        )
    }

}

export default ContactPage;
